import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section, type SectionSurface } from "@/components/ui/Section";

interface CaseStudyIntroProps {
  title: string;
  description: string[];
  role: string[];
  client: string;
  surface?: SectionSurface;
  className?: string;
}

/**
 * Legacy layout: title and body stacked in the left column, meta blocks
 * stacked in a narrow right column, close control aligned top right.
 */
export function CaseStudyIntro({
  title,
  description,
  role,
  client,
  surface = "none",
  className = "",
}: CaseStudyIntroProps) {
  return (
    <Section spacing="md" bg={surface} className={className}>
      <Container>
        <div className="mb-10 flex justify-end">
          <Link
            href="/"
            aria-label="Back to home"
            className="inline-flex transition-opacity hover:opacity-70"
          >
            <Image
              src="https://cdn.prod.website-files.com/67250045a34b9360992cb365/6728eaa5100b5c010a5b417e_Cross%20page.svg"
              alt="Close"
              width={44}
              height={44}
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
          <div>
            <h1 className="type-h1 mb-8 max-w-[45rem]">{title}</h1>
            <div className="flex max-w-[45rem] flex-col gap-6">
              {description.map((para, i) => (
                <p key={i} className="type-body">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="type-meta opacity-100">My Role</span>
              {role.map((r) => (
                <span key={r} className="type-body">
                  {r}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="type-meta opacity-100">Client</span>
              <span className="type-body">{client}</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

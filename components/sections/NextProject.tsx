import Link from "next/link";
import { getNextProject } from "@/lib/projects";
import { Section } from "@/components/ui/Section";

interface NextProjectProps {
  currentSlug: string;
}

export function NextProject({ currentSlug }: NextProjectProps) {
  const next = getNextProject(currentSlug);

  return (
    <Section spacing="lg" bg="none" className="flex justify-center">
      <Link
        href={`/projects/${next.slug}`}
        className="group inline-flex flex-col items-center gap-6 text-center"
      >
        <div className="flex items-center gap-4">
          <span className="type-meta opacity-100">Next Project</span>
          <span className="block h-px w-8 bg-current transition-all duration-300 group-hover:w-16" />
        </div>
        <span className="type-h1 transition-opacity duration-300 group-hover:opacity-60">
          {next.title}
        </span>
      </Link>
    </Section>
  );
}

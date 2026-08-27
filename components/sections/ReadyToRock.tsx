import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, type SectionSurface } from "@/components/ui/Section";

interface ReadyToRockProps {
  variant?: "light" | "dark";
  surface?: SectionSurface;
}

export function ReadyToRock({ variant = "dark", surface }: ReadyToRockProps) {
  const isDark = variant === "dark";
  const bg: SectionSurface = surface ?? (isDark ? "inkSoft" : "cream");

  return (
    <Section spacing="xl" bg={bg}>
      <Container size="sm" className="text-center">
        <h2 className="type-h1 mb-4">Ready to rock?</h2>
        <p className="type-lead mb-10">
          I&apos;m here to help. Let&apos;s explore how we can work together
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href="https://calendly.com/nicobalbontin"
            label="Schedule a call"
            variant={isDark ? "secondary" : "primary"}
            target="_blank"
            rel="noopener noreferrer"
          />
          {variant === "light" && (
            <Button
              href="mailto:nbalbontin@gmail.com"
              label="Send email"
              variant="secondary"
            />
          )}
        </div>
      </Container>
    </Section>
  );
}

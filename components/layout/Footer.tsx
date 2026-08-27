import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface FooterProps {
  variant?: "light" | "dark";
}

export function Footer({ variant = "light" }: FooterProps) {
  const isDark = variant === "dark";

  return (
    <footer
      className={cn(
        "w-full",
        isDark
          ? "bg-surface-ink-soft text-white [--ds-type-muted:var(--ds-color-text-on-dark)]"
          : "bg-surface-cream text-foreground"
      )}
    >
      <Container className="py-[var(--ds-spacing-section-lg)] max-[767px]:py-16">
        <div className="flex flex-col gap-8 pb-12 md:flex-row md:items-start md:justify-between">
          <Link href="/" aria-label="Home">
            <Image
              src={
                isDark
                  ? "/assets/images/672b9a35a366c720aa8b91fb_Frame 1597880529.svg"
                  : "/assets/images/672b5ab4d0c62e34c0ad09a0_Logo.svg"
              }
              alt="Nico Balbontin"
              width={206}
              height={30}
              className="h-[var(--ds-logo-max-height)] w-auto"
            />
          </Link>

          <nav
            className="flex gap-8 text-sm font-medium"
            aria-label="Footer navigation"
          >
            <Link href="/#work" className="transition-opacity hover:opacity-60">
              Work
            </Link>
            <Link href="/about" className="transition-opacity hover:opacity-60">
              About
            </Link>
            <a
              href="mailto:nbalbontin@gmail.com"
              className="transition-opacity hover:opacity-60"
            >
              Contact
            </a>
          </nav>
        </div>

        <div
          className={cn(
            "h-px w-full",
            isDark ? "bg-white/20" : "bg-foreground/20"
          )}
        />

        <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="type-small">
            Made with ❤ from amsterdam
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/nbalbontin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-opacity hover:opacity-60"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/nbalbontin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Image
                src={
                  isDark
                    ? "/assets/images/672b9c480443e8ba94a430f4_linkedin-box-fill.svg"
                    : "/assets/images/672cad516c8650a6d8806189_linkedin-box-fill.svg"
                }
                alt=""
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

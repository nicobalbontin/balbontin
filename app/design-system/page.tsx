import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Design System - Nico Balbontin",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "background", var: "--ds-color-background", swatch: "bg-background border border-border" },
  { name: "foreground", var: "--ds-color-foreground", swatch: "bg-foreground" },
  { name: "background-alt", var: "--ds-color-background-alt", swatch: "bg-background-alt" },
  { name: "text-secondary", var: "--ds-color-text-secondary", swatch: "bg-muted" },
  { name: "text-muted", var: "--ds-color-text-muted", swatch: "bg-text-muted" },
  { name: "text-on-dark", var: "--ds-color-text-on-dark", swatch: "bg-text-on-dark border border-border" },
  { name: "neutral-dark", var: "--ds-color-neutral-dark", swatch: "bg-neutral-dark" },
  { name: "brand-purple", var: "--ds-color-brand-purple", swatch: "bg-brand-purple" },
  { name: "brand-coral", var: "--ds-color-brand-coral", swatch: "bg-brand-coral" },
  { name: "brand-orange", var: "--ds-color-brand-orange", swatch: "bg-brand-orange" },
  { name: "brand-yellow", var: "--ds-color-brand-yellow", swatch: "bg-brand-yellow" },
];

const surfaces = [
  { name: "white", value: "#ffffff", use: "Home hero, navbar" },
  { name: "offwhite", value: "#fafafa", use: "Neoke intro/research" },
  { name: "cream", value: "#f8f5f0", use: "About hero, CTA, light footer" },
  { name: "creamWarm", value: "#f1edeb", use: "Case study CTA" },
  { name: "ht", value: "#f3f3f3", use: "HeatTransformers" },
  { name: "statie", value: "#fbfbfb", use: "Statie intro" },
  { name: "statieAlt", value: "#eeeeee", use: "Statie mid" },
  { name: "statieBlue", value: "#f3f5fa", use: "Statie late" },
  { name: "ink", value: "#121212", use: "Home work section" },
  { name: "inkSoft", value: "#222222", use: "Dark CTA + footer" },
  { name: "black", value: "#000000", use: "About facts, Neoke" },
  { name: "indigo", value: "#0a1550", use: "Here & Now, next project" },
  { name: "indigoDark", value: "#1c1b2e", use: "Neoke design system" },
  { name: "violet", value: "#5b40a1", use: "Here & Now accent" },
];

const typeRoles = [
  { className: "type-display", label: "type-display", sample: "I am Nico." },
  { className: "type-h1", label: "type-h1", sample: "Case study title" },
  { className: "type-h2", label: "type-h2", sample: "Section heading" },
  { className: "type-h3", label: "type-h3", sample: "The problem" },
  { className: "type-h4", label: "type-h4", sample: "Project card title" },
  { className: "type-lead", label: "type-lead", sample: "Hero supporting sentence and section leads." },
  { className: "type-body", label: "type-body", sample: "Default case-study body copy at 1.125rem / #666." },
  { className: "type-body-emphasis", label: "type-body-emphasis", sample: "Emphasis paragraph matching .paragraph-standard." },
  { className: "type-small", label: "type-small", sample: "Captions and insight copy." },
  { className: "type-meta", label: "type-meta", sample: "My Role" },
];

export default function DesignSystemPage() {
  return (
    <main className="bg-background pb-24">
      <Section spacing="md" bg="offwhite" className="border-b border-border/10">
        <Container>
          <p className="type-meta mb-2 opacity-100">Internal · noindex</p>
          <h1 className="type-h1 mb-4">Design system</h1>
          <p className="type-lead max-w-2xl">
            Edit tokens in{" "}
            <code className="text-sm text-foreground">design-system/tokens.css</code>
            ; utilities live in{" "}
            <code className="text-sm text-foreground">app/globals.css</code>.
            Not linked from the main nav —{" "}
            <Link href="/" className="underline underline-offset-4">
              back to site
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* Colors */}
      <Section spacing="lg" bg="offwhite" id="colors">
        <Container>
          <h2 className="type-h3 mb-8">Colors</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {colors.map((c) => (
              <div key={c.name} className="flex flex-col gap-2">
                <div className={`h-16 w-full rounded-[10px] ${c.swatch}`} />
                <span className="text-sm font-medium text-foreground">{c.name}</span>
                <span className="type-small font-mono">{c.var}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="type-meta mb-3 opacity-100">Brand gradient</p>
            <div
              className="h-16 w-full max-w-xl rounded-[10px]"
              style={{ backgroundImage: "var(--ds-gradient-brand)" }}
            />
          </div>
        </Container>
      </Section>

      {/* Surfaces */}
      <Section spacing="lg" bg="offwhite" id="surfaces" className="border-t border-border/10">
        <Container>
          <h2 className="type-h3 mb-4">Surfaces</h2>
          <p className="type-body mb-8 max-w-2xl">
            Section backgrounds measured from the legacy pages. Use via{" "}
            <code className="text-foreground">&lt;Section bg=&quot;...&quot;&gt;</code>.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {surfaces.map((s) => (
              <div key={s.name} className="flex flex-col gap-2">
                <div
                  className="h-16 w-full rounded-[10px] border border-border/15"
                  style={{ backgroundColor: s.value }}
                />
                <span className="text-sm font-medium text-foreground">{s.name}</span>
                <span className="type-small font-mono">{s.value}</span>
                <span className="type-small">{s.use}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section spacing="lg" bg="offwhite" id="typography" className="border-t border-border/10">
        <Container>
          <h2 className="type-h3 mb-8">Typography</h2>
          <div className="flex flex-col gap-10">
            {typeRoles.map((role) => (
              <div key={role.label} className="border-b border-border/10 pb-8 last:border-0">
                <code className="mb-3 block text-sm text-muted">{role.label}</code>
                <p className={role.className}>{role.sample}</p>
              </div>
            ))}
            <div>
              <code className="mb-3 block text-sm text-muted">gradient-text</code>
              <p className="type-h1">
                <span className="gradient-text">A bit about myself</span>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section spacing="lg" bg="offwhite" id="buttons" className="border-t border-border/10">
        <Container>
          <h2 className="type-h3 mb-4">Buttons</h2>
          <p className="type-body mb-10 max-w-xl">
            Layered Webflow-style CTAs: face slides onto the offset shadow on
            hover (200ms). Variants: primary, secondary, nav.
          </p>
          <div className="flex flex-wrap items-end gap-10">
            <div className="flex flex-col gap-3">
              <code className="text-sm text-muted">variant=&quot;primary&quot;</code>
              <Button href="#buttons" label="See my work" variant="primary" />
            </div>
            <div className="flex flex-col gap-3">
              <code className="text-sm text-muted">variant=&quot;secondary&quot;</code>
              <Button href="#buttons" label="Schedule a call" variant="secondary" />
            </div>
            <div className="flex flex-col gap-3">
              <code className="text-sm text-muted">variant=&quot;nav&quot;</code>
              <Button href="#buttons" label="Schedule a call" variant="nav" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons on dark */}
      <Section spacing="lg" bg="ink" id="buttons-dark">
        <Container>
          <h2 className="type-h3 mb-8">Buttons on dark</h2>
          <div className="flex flex-wrap gap-10">
            <Button href="#buttons-dark" label="Schedule a call" variant="secondary" />
          </div>
        </Container>
      </Section>

      {/* Logo */}
      <Section spacing="lg" bg="offwhite" id="logo" className="border-t border-border/10">
        <Container>
          <h2 className="type-h3 mb-4">Logo</h2>
          <p className="type-body mb-8">
            Nav logo max-height:{" "}
            <code className="text-foreground">var(--ds-logo-max-height)</code>{" "}
            = 30px (legacy .image-2).
          </p>
          <div className="flex items-center gap-8 rounded-[10px] border border-border/15 bg-white p-8">
            <Image
              src="/assets/images/672b5ab4d0c62e34c0ad09a0_Logo.svg"
              alt="Nico Balbontin"
              width={206}
              height={30}
              className="h-[var(--ds-logo-max-height)] w-auto"
            />
            <span className="type-small">30px tall</span>
          </div>
        </Container>
      </Section>

      {/* Spacing */}
      <Section spacing="lg" bg="offwhite" id="spacing" className="border-t border-border/10">
        <Container>
          <h2 className="type-h3 mb-8">Section spacing</h2>
          <div className="flex flex-col gap-4">
            {(
              [
                ["sm", "2rem"],
                ["md", "5rem"],
                ["lg", "5rem"],
                ["xl", "7rem"],
                ["xxl", "10rem"],
              ] as const
            ).map(([name, value]) => (
              <div key={name} className="flex items-center gap-4">
                <code className="w-16 shrink-0 text-sm text-muted">
                  spacing=&quot;{name}&quot;
                </code>
                <div
                  className="rounded-[4px] bg-brand-coral/30"
                  style={{ height: value, width: "100%", maxWidth: "20rem" }}
                />
                <span className="type-small shrink-0">{value}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Containers */}
      <Section spacing="lg" bg="offwhite" id="containers" className="border-t border-border/10">
        <Container>
          <h2 className="type-h3 mb-8">Containers</h2>
        </Container>
        <div className="flex flex-col gap-4">
          {(
            [
              ["sm", "48rem"],
              ["md", "64rem"],
              ["lg", "80rem"],
            ] as const
          ).map(([size, max]) => (
            <Container
              key={size}
              size={size}
              className="rounded-[10px] border border-dashed border-border/40 bg-neutral-lightest/50 py-4 text-center"
            >
              <code className="text-sm">
                size=&quot;{size}&quot; · max-width {max} · pad 5%
              </code>
            </Container>
          ))}
        </div>
      </Section>
    </main>
  );
}

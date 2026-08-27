import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Surface names map to the legacy page palettes. Dark surfaces also flip
 * the default text colour so nested copy stays readable.
 */
const sectionVariants = cva("", {
  variants: {
    spacing: {
      none: "",
      sm: "py-[var(--ds-spacing-section-sm)]",
      md: "py-[var(--ds-spacing-section-md)] max-[991px]:py-16 max-[767px]:py-12",
      lg: "py-[var(--ds-spacing-section-lg)] max-[991px]:py-24 max-[767px]:py-16",
      xl: "py-[var(--ds-spacing-section-xl)] max-[991px]:py-16",
      xxl: "py-[var(--ds-spacing-section-xxl)] max-[767px]:py-16",
    },
    bg: {
      none: "",
      white: "bg-surface-white text-foreground",
      offwhite: "bg-surface-offwhite text-foreground",
      cream: "bg-surface-cream text-foreground",
      creamWarm: "bg-surface-cream-warm text-foreground",
      ht: "bg-surface-ht text-foreground",
      statie: "bg-surface-statie text-foreground",
      statieAlt: "bg-surface-statie-alt text-foreground",
      statieBlue: "bg-surface-statie-blue text-foreground",
      ink: "bg-surface-ink text-white [--ds-type-muted:var(--ds-color-text-on-dark)]",
      inkSoft:
        "bg-surface-ink-soft text-white [--ds-type-muted:var(--ds-color-text-on-dark)]",
      black:
        "bg-surface-black text-white [--ds-type-muted:var(--ds-color-text-on-dark)]",
      indigo:
        "bg-surface-indigo text-white [--ds-type-muted:var(--ds-color-text-on-dark)]",
      indigoDark:
        "bg-surface-indigo-dark text-white [--ds-type-muted:var(--ds-color-text-on-dark)]",
      violet:
        "bg-surface-violet text-white [--ds-type-muted:var(--ds-color-text-on-dark)]",
    },
  },
  defaultVariants: {
    spacing: "lg",
    bg: "none",
  },
});

export type SectionSurface = NonNullable<
  VariantProps<typeof sectionVariants>["bg"]
>;

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "article" | "div" | "header" | "footer";
  children: React.ReactNode;
}

export function Section({
  as: Tag = "section",
  spacing = "lg",
  bg = "none",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(sectionVariants({ spacing, bg }), className)} {...props}>
      {children}
    </Tag>
  );
}

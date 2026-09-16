import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Layered CTA matching legacy Webflow button-2 / button-2_small.
 * Face sits above a gradient (or grey) shadow offset; on hover the face
 * translates onto the shadow (200ms) — not a vertical text swap.
 */
const buttonVariants = cva(
  "group relative inline-block cursor-pointer overflow-visible no-underline",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        nav: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const faceVariants = cva(
  "relative z-[1] inline-flex items-center justify-center transition-transform duration-200 ease-out",
  {
    variants: {
      variant: {
        primary:
          "rounded-[var(--ds-button-radius)] bg-foreground px-[var(--ds-button-pad-x)] py-[var(--ds-button-pad-y)] text-background group-hover:translate-x-[var(--ds-button-shadow-offset)] group-hover:translate-y-[var(--ds-button-shadow-offset)]",
        secondary:
          "rounded-[var(--ds-button-radius)] border-[3px] border-foreground bg-background px-[var(--ds-button-pad-x)] py-[var(--ds-button-pad-y)] text-foreground group-hover:translate-x-[var(--ds-button-shadow-offset)] group-hover:translate-y-[var(--ds-button-shadow-offset)]",
        nav: "rounded-[var(--ds-button-radius)] border-[3px] border-neutral-dark bg-background px-[var(--ds-button-nav-pad-x)] py-[var(--ds-button-nav-pad-y)] text-foreground group-hover:translate-x-[var(--ds-button-nav-shadow-offset)] group-hover:translate-y-[var(--ds-button-nav-shadow-offset)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const shadowVariants = cva(
  "pointer-events-none absolute inset-0 z-0 rounded-[var(--ds-button-radius)]",
  {
    variants: {
      variant: {
        primary:
          "translate-x-[var(--ds-button-shadow-offset)] translate-y-[var(--ds-button-shadow-offset)] [background-image:var(--ds-gradient-brand)]",
        secondary:
          "translate-x-[var(--ds-button-shadow-offset)] translate-y-[var(--ds-button-shadow-offset)] bg-[#a3a3a3]",
        nav: "translate-x-[var(--ds-button-shadow-offset)] translate-y-[var(--ds-button-shadow-offset)] bg-[#999]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const labelVariants = cva("whitespace-nowrap", {
  variants: {
    variant: {
      primary:
        "text-[length:var(--ds-button-font-size)]/none font-[number:var(--ds-button-font-weight)] text-background",
      secondary:
        "text-[length:var(--ds-button-font-size)]/none font-[number:var(--ds-button-font-weight)] text-foreground",
      nav: "text-base/none font-medium text-foreground",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  label: string;
  href?: string;
}

export function Button({
  className,
  variant = "primary",
  asChild = false,
  label,
  href,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : href ? "a" : "button";

  return (
    <Comp
      href={href}
      className={cn(buttonVariants({ variant }), className)}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    >
      <span className={cn(faceVariants({ variant }))}>
        <span className={cn(labelVariants({ variant }))}>{label}</span>
      </span>
      <span className={cn(shadowVariants({ variant }))} aria-hidden />
    </Comp>
  );
}

/** @deprecated Use Button instead — kept as alias during migration */
export function AnimatedButton({
  href,
  label,
  variant = "dark",
  className,
  ...rest
}: {
  href: string;
  label: string;
  hoverLabel?: string;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Button
      href={href}
      label={label}
      variant={variant === "light" ? "secondary" : "primary"}
      className={className}
      {...rest}
    />
  );
}

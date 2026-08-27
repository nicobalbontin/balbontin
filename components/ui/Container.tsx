import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "full";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  children: React.ReactNode;
}

const innerMaxWidth: Record<ContainerSize, string> = {
  sm: "mx-auto max-w-[var(--ds-container-sm)]",
  md: "mx-auto max-w-[var(--ds-container-md)]",
  lg: "",
  full: "",
};

/**
 * Legacy geometry: .main-wrapper caps at 1440px, then a 9% inset.
 * `sm` / `md` narrow the content further inside that inset.
 */
export function Container({
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  const inner = innerMaxWidth[size];

  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--ds-padding-global)]",
        size === "full" ? "max-w-none" : "max-w-[var(--ds-container-page)]",
        className
      )}
      {...props}
    >
      {inner ? <div className={inner}>{children}</div> : children}
    </div>
  );
}

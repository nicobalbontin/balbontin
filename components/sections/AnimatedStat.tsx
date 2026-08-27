"use client";

import { useCountUp } from "@/lib/useCountUp";

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
}

export function AnimatedStat({ end, suffix = "%", label }: StatProps) {
  const { value, ref } = useCountUp({ end, suffix, start: 0, duration: 2.5 });

  return (
    <div className="flex flex-col gap-2">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="text-4xl font-bold leading-none md:text-5xl"
        aria-live="polite"
        aria-label={`${value} ${label}`}
      >
        {value}
      </span>
      {label && (
        <span className="type-small text-current opacity-70">{label}</span>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="relative z-[999] min-h-[4.5rem] w-full bg-white"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex w-full max-w-[var(--ds-container-page)] items-center justify-between px-[var(--ds-padding-global)] py-6 pb-8">
        {/* Logo — legacy .image-2 max-height: 30px */}
        <Link href="/" aria-label="Home" onClick={closeMenu}>
          <Image
            src="/assets/images/672b5ab4d0c62e34c0ad09a0_Logo.svg"
            alt="Nico Balbontin"
            width={206}
            height={30}
            className="h-[var(--ds-logo-max-height)] w-auto"
            priority
          />
        </Link>

        {/* Hamburger — visible @991px */}
        <button
          className={cn(
            "hamburger relative z-[1001] flex h-[30px] w-[30px] flex-col items-center justify-center gap-[6px] bg-transparent border-0 cursor-pointer p-0",
            "lg:hidden"
          )}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={cn(
              "block h-[2px] w-6 bg-foreground transition-all duration-300",
              menuOpen && "translate-y-2 -rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-6 bg-foreground transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-6 bg-foreground transition-all duration-300",
              menuOpen && "-translate-y-2 rotate-45"
            )}
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLinks onLinkClick={closeMenu} />
          <Button
            href="https://calendly.com/nicobalbontin"
            label="Schedule a call"
            variant="nav"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        {/* Mobile slide-in menu */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-[1000] flex w-full flex-col items-start gap-8 bg-white px-[var(--ds-padding-global)] pt-20 pb-8",
            "transition-transform duration-300 ease-in-out lg:hidden",
            menuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
          )}
          aria-hidden={!menuOpen}
        >
          <NavLinks mobile onLinkClick={closeMenu} />
          <Button
            href="https://calendly.com/nicobalbontin"
            label="Schedule a call"
            variant="nav"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </nav>
  );
}

function NavLinks({
  mobile = false,
  onLinkClick,
}: {
  mobile?: boolean;
  onLinkClick?: () => void;
}) {
  return (
    <div
      className={cn(
        "flex gap-2 text-base font-medium text-foreground",
        mobile && "flex-col w-full gap-0"
      )}
    >
      <Link
        href="/#work"
        onClick={onLinkClick}
        className={cn(
          "px-4 py-2 transition-[font-weight] hover:font-bold",
          mobile && "w-full border-b border-neutral-lightest px-0 py-4 text-lg"
        )}
      >
        Work
      </Link>
      <Link
        href="/about"
        onClick={onLinkClick}
        className={cn(
          "px-4 py-2 transition-[font-weight] hover:font-bold",
          mobile && "w-full border-b border-neutral-lightest px-0 py-4 text-lg"
        )}
      >
        About
      </Link>
    </div>
  );
}

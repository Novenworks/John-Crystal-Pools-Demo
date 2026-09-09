"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <a href="#top" className="flex items-center gap-3 text-cream">
          <img
            src="https://web.archive.org/web/20240715030927im_/https://johncrystalpools.com/images/john-crystal-pools-logo.png"
            alt="John Crystal Pools"
            className="h-12 w-12 rounded-sm bg-cream/95 object-contain p-1 md:h-14 md:w-14"
          />
          <span className="font-serif text-lg tracking-wide md:text-xl">John Crystal Pools</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-cream/90 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sand">{l.label}</a>
          ))}
          <a href="tel:8188850004" className="rounded-sm border border-cream/40 px-4 py-2 text-cream hover:bg-cream hover:text-ink">(818) 885-0004</a>
        </nav>
        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-cream/40 text-cream lg:hidden" aria-expanded={open} aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="mx-5 rounded-sm bg-ink/95 p-5 text-cream shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4 text-base">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="tel:8188850004" className="pt-2 font-medium">Call (818) 885-0004</a>
          </nav>
        </div>
      )}
    </header>
  );
}

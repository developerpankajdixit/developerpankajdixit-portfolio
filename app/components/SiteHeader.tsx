"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Work", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Case Study", href: "/case-study" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="surface sticky top-4 z-30 rounded-lg px-3 py-3 sm:px-4">
      <nav className="flex items-center justify-between gap-3" aria-label="Global">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-sm font-bold text-zinc-950">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-zinc-950 text-xs text-white">
            PD
          </span>
          <span className="truncate">Pankaj Dixit</span>
        </Link>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-zinc-300 bg-white text-zinc-900 transition-colors hover:border-zinc-950 hover:bg-zinc-50 md:hidden"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>

        <div className="hidden items-center gap-1 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 font-medium text-zinc-600 transition-colors hover:bg-white hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden transition-[max-height,opacity,margin] duration-300 ${
          isOpen
            ? "mt-3 max-h-80 opacity-100"
            : "pointer-events-none mt-0 max-h-0 opacity-0"
        }`}
      >
        <div className="grid gap-1 rounded-md border border-zinc-200 bg-white/90 p-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pankaj Dixit | Frontend Lead & Next.js Developer",
  description:
    "Client-ready portfolio for Pankaj Dixit, focused on React, Next.js, TypeScript, frontend architecture, and measurable product delivery.",
  openGraph: {
    title: "Pankaj Dixit | Frontend Lead & Next.js Developer",
    description:
      "React, Next.js, and TypeScript portfolio with selected work, case studies, and delivery impact.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Modern workspace for frontend product delivery",
      },
    ],
  },
};

const navItems = [
  { label: "Work", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Case Study", href: "/case-study" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="app-bg min-h-full text-zinc-950"
        suppressHydrationWarning={true}
      >
        <div className="section-shell pt-4">
          <header className="surface sticky top-4 z-20 rounded-lg px-3 py-3 sm:px-4">
            <nav
              className="flex flex-wrap items-center justify-between gap-3"
              aria-label="Global"
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-bold text-zinc-950"
              >
                <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-xs text-white">
                  PD
                </span>
                <span>Pankaj Dixit</span>
              </Link>
              <div className="flex max-w-full items-center gap-1 overflow-x-auto text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2.5 py-1.5 font-medium text-zinc-600 transition-colors hover:bg-white hover:text-zinc-950 sm:px-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}

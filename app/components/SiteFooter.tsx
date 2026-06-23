import Link from "next/link";

const footerLinks = [
  { label: "Email", href: "mailto:developerpankajdixit@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/developerpankajdixit/",
  },
  { label: "GitHub", href: "https://github.com/developerpankajdixit" },
  { label: "Privacy", href: "/privacy" },
  { label: "Copyright", href: "/copyright" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pb-10 pt-6">
      <div className="surface flex flex-col gap-4 rounded-lg p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-sm font-bold text-zinc-950">Pankaj Dixit</p>
          <p className="mt-1 text-sm text-zinc-600">
            AI Engineer &amp; Full-Stack Developer · Open to opportunities
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-950 hover:text-zinc-950"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-zinc-500">
        © {year} Pankaj Dixit. Built with Next.js.{" "}
        <Link
          href="/about"
          className="font-semibold text-zinc-700 hover:text-zinc-950"
        >
          About
        </Link>
      </p>
    </footer>
  );
}

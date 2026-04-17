import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study | Enterprise Frontend Platform",
  description:
    "Senior frontend case study on enterprise architecture, performance optimization, and maintainability.",
};

const approach = [
  "Audited UI patterns, page performance, and repeated delivery bottlenecks.",
  "Defined reusable frontend foundations that product teams could adopt without slowing roadmap work.",
  "Moved performance and quality checks into the delivery flow instead of treating them as late fixes.",
  "Created clearer reporting so engineering leaders could see release health and UI quality trends.",
];

const impact = [
  { label: "Release speed", value: "+30%" },
  { label: "Page performance", value: "+40%" },
  { label: "Quality stability", value: "90%+" },
];

export default function CaseStudy() {
  return (
    <main className="min-h-screen pb-16 text-zinc-950">
      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <header>
            <p className="eyebrow">Case Study</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
              Enterprise frontend platform modernization.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              A focused example of how architecture, performance work, and team
              standards can turn fragmented UI delivery into a more reliable
              product engine.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/#projects" className="btn-primary">
                Back to Work
              </Link>
              <Link href="/about" className="btn-secondary">
                About Pankaj
              </Link>
            </div>
          </header>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
              alt="Analytics dashboard for product performance and delivery health"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="surface rounded-lg p-5 lg:col-span-1">
            <p className="eyebrow">Problem</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-zinc-950">
              Fragmented UI slowed product teams.
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Multiple squads were solving similar frontend problems in
              different ways. Release planning became heavier, UI quality varied
              between surfaces, and performance fixes arrived too late.
            </p>
          </article>

          <article className="surface rounded-lg p-5 lg:col-span-2">
            <p className="eyebrow">Approach</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-zinc-950">
              Build standards that help teams ship faster.
            </h2>
            <div className="metric-divider mt-5">
              {approach.map((item, index) => (
                <div key={item} className="flex gap-4 py-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="rounded-lg bg-zinc-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-lime-200">Impact</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Measurable improvements without sacrificing maintainability.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {impact.map((item) => (
                <div key={item.label} className="border-t border-white/20 pt-4">
                  <p className="text-3xl font-bold text-lime-200">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-200">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">What This Shows</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              I can improve the system, not only the screen.
            </h2>
          </div>
          <p className="text-base leading-8 text-zinc-600 sm:text-lg">
            The strongest frontend work combines interface craft, performance
            discipline, maintainable code, and enough leadership to make the
            improvement stick across a team. That is the value I bring to client
            products and enterprise teams.
          </p>
        </div>
      </section>
    </main>
  );
}

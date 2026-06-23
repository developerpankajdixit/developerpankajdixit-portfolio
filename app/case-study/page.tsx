import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "./caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | AI Engineering & Full-Stack Deep Dives",
  description:
    "In-depth case studies on AI-powered developer tooling, agentic incident response, AI-augmented release gates, and large-scale frontend modernization.",
};

export default function CaseStudiesIndex() {
  return (
    <main className="min-h-screen pb-16 text-zinc-950">
      <section className="section-shell py-10 sm:py-14">
        <div className="max-w-3xl">
          <p className="eyebrow">Case Studies</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
            Deep dives into the work, not just the outcomes.
          </h1>
          <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
            Each study walks through the real problem, the design decisions, the
            engineering challenges, and the measurable result. The AI work shows
            what I build today; the modernization shows the full-stack depth
            behind it.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-study/${study.slug}`}
              className="surface group flex flex-col overflow-hidden rounded-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative min-h-[200px] bg-zinc-900">
                <Image
                  src={study.heroImage}
                  alt={study.heroAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  {study.eyebrow}
                </p>
                <h2 className="mt-2 text-xl font-bold leading-tight text-zinc-950">
                  {study.navTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {study.cardSummary}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-zinc-200 pt-4">
                  {study.impact.slice(0, 2).map((metric) => (
                    <div key={metric.label}>
                      <p className="text-lg font-bold text-zinc-950">
                        {metric.value}
                      </p>
                      <p className="text-xs font-medium text-zinc-500">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 group-hover:text-emerald-700">
                  Read case study
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/#projects" className="btn-primary">
            Back to Projects
          </Link>
          <Link href="/about" className="btn-secondary">
            About Pankaj
          </Link>
        </div>
      </section>
    </main>
  );
}

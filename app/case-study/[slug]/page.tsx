import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "../caseStudies";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study | Pankaj Dixit" };
  return {
    title: `${study.navTitle} | Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen pb-16 text-zinc-950">
      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <header>
            <p className="eyebrow">{study.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              {study.summary}
            </p>
            {study.note ? (
              <p className="mt-4 max-w-2xl text-sm italic leading-7 text-zinc-500">
                {study.note}
              </p>
            ) : null}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/case-study" className="btn-primary">
                All Case Studies
              </Link>
              <Link href="/#projects" className="btn-secondary">
                Back to Projects
              </Link>
            </div>
          </header>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-zinc-900">
            <Image
              src={study.heroImage}
              alt={study.heroAlt}
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
              {study.problemHeading}
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              {study.problemText}
            </p>
          </article>

          <article className="surface rounded-lg p-5 lg:col-span-2">
            <p className="eyebrow">{study.approachEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-zinc-950">
              {study.approachHeading}
            </h2>
            <div className="metric-divider mt-5">
              {study.approach.map((item, index) => (
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

      {study.howItWorks?.length ? (
        <section className="section-shell py-10 sm:py-14">
          <div className="max-w-2xl">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              {study.howItWorksHeading}
            </h2>
            {study.howItWorksIntro ? (
              <p className="mt-4 text-base leading-8 text-zinc-600">
                {study.howItWorksIntro}
              </p>
            ) : null}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {study.howItWorks.map((step, index) => (
              <article key={step.title} className="surface rounded-lg p-5">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-zinc-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {study.challenges?.length ? (
        <section className="section-shell py-10 sm:py-14">
          <div className="max-w-2xl">
            <p className="eyebrow">Engineering Challenges</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              {study.challengesHeading}
            </h2>
            {study.challengesIntro ? (
              <p className="mt-4 text-base leading-8 text-zinc-600">
                {study.challengesIntro}
              </p>
            ) : null}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {study.challenges.map((item) => (
              <article key={item.title} className="surface rounded-lg p-5">
                <h3 className="text-base font-bold text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {study.techStack?.length ? (
        <section className="section-shell py-10 sm:py-14">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Built With</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
                {study.techStackHeading}
              </h2>
              {study.techStackIntro ? (
                <p className="mt-4 text-base leading-8 text-zinc-600">
                  {study.techStackIntro}
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2 lg:pt-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell py-10 sm:py-14">
        <div className="rounded-lg bg-zinc-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-emerald-200">Impact</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                {study.impactHeading}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {study.impact.map((item) => (
                <div key={item.label} className="border-t border-white/20 pt-4">
                  <p className="text-2xl font-bold text-emerald-200">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-200">
                    {item.label}
                  </p>
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
              {study.closingHeading}
            </h2>
          </div>
          <p className="text-base leading-8 text-zinc-600 sm:text-lg">
            {study.closingText}
          </p>
        </div>
      </section>
    </main>
  );
}

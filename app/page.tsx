import Image from "next/image";
import Link from "next/link";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

const proofPoints = [
  {
    value: "2 wks → 30 min",
    label: "developer onboarding time, automated with an AI-powered MCP server",
  },
  {
    value: "80+ hrs",
    label: "engineering time saved per new developer",
  },
  {
    value: "17+",
    label: "engineers enabled to AI White Belt certification as AI Champion",
  },
  {
    value: "Top 6 / 70+",
    label: "CodeRush 2026 Finalist for IncidentIQ, an AI incident-intelligence platform",
  },
];

const services = [
  {
    title: "GenAI Application & Tooling",
    text: "LLM-powered apps, MCP (Model Context Protocol) servers, and Copilot-driven automation that remove manual steps from real engineering workflows.",
  },
  {
    title: "AI Tools Support & Enablement",
    text: "Copilot rollout, configuration, and troubleshooting, plus prompt-engineering coaching and AI Champion programs that raise an organization's AI readiness and certification rates.",
  },
  {
    title: "Full-Stack Product Delivery",
    text: "Production React/Next.js and TypeScript front ends, API integration, and cloud deployment on Azure, the engineering base that ships AI features for real.",
  },
];

const process = [
  "Find the manual, repetitive workflow that is quietly costing the team hours.",
  "Design an AI-assisted solution (MCP server, Copilot flow, or LLM automation) around the real task.",
  "Build it as production software with guardrails, not a one-off script.",
  "Measure the saved time and adoption, then enable the wider team to use it.",
];

const positioningHighlights = [
  {
    title: "Hiring managers",
    text: "See measurable AI impact (hours saved, engineers enabled, awards won) backed by 10+ years of shipping production software.",
  },
  {
    title: "AI & platform teams",
    text: "Understand how I turn GenAI and developer-experience ideas into deployed tooling that the whole team actually adopts.",
  },
  {
    title: "Recruiters & LinkedIn visitors",
    text: "Get a fast snapshot of AI work and recognition, then move into projects, the MCP case study, and direct contact.",
  },
];

const contactMethods = [
  {
    label: "Email",
    value: "developerpankajdixit@gmail.com",
    href: "mailto:developerpankajdixit@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/developerpankajdixit",
    href: "https://www.linkedin.com/in/developerpankajdixit/",
  },
  {
    label: "GitHub",
    value: "github.com/developerpankajdixit",
    href: "https://github.com/developerpankajdixit",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pb-16 text-zinc-950 antialiased">
      <section className="section-shell py-6 sm:py-8">
        <div className="relative min-h-[560px] overflow-hidden rounded-lg bg-zinc-950 text-white">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80"
            alt="Source code on screen representing AI software engineering"
            fill
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
          <div className="hero-image-mask absolute inset-0" />
          <div className="relative flex min-h-[560px] flex-col justify-between p-5 sm:p-8 lg:p-10">
            <div className="max-w-3xl pt-10 sm:pt-14 lg:pt-16">
              <p className="eyebrow text-emerald-200">AI Engineer · GenAI, MCP &amp; Copilot · Full-Stack</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                I help engineering teams adopt AI tools, and build the ones that
                save them real hours.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-100 sm:text-lg">
                I am Pankaj Dixit, an AI engineer with a full-stack foundation.
                I roll out, troubleshoot, and teach GenAI tooling (Copilot, MCP
                servers, LLM automation) and build it as production software,
                currently on the Microsoft Xbox account at Tech Mahindra, on an
                10+ year engineering base. Remote-first, open to hybrid or
                on-site.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#projects" className="btn-primary min-w-[11rem] border-white bg-white text-zinc-950 hover:border-emerald-300 hover:bg-emerald-300">
                  View AI Work
                </Link>
                <Link href="#contact" className="btn-secondary min-w-[11rem] border-white/45 bg-white/10 text-white hover:border-white hover:bg-white/20">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-3 border-t border-white/25 pt-5 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((point) => (
                <div key={point.label}>
                  <p className="text-xl font-bold text-emerald-200">{point.value}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-100">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="surface relative overflow-hidden rounded-lg p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-2xl">
              <p className="eyebrow">Positioning</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
                AI impact, backed by real engineering.
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-600 sm:text-lg">
                This page moves from proof to projects, then into focus areas and
                direct contact. It answers one question for a hiring team fast:
                can Pankaj ship GenAI tooling that delivers measurable results,
                not just demos?
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                  GenAI &amp; MCP
                </span>
                <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                  Measurable impact
                </span>
                <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                  Production-ready
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              {positioningHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-md border border-zinc-200/90 bg-white/85 p-4"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section id="services" className="section-shell py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-xl">
            <p className="eyebrow">Focus Areas</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              Where I create the most value.
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              For AI, platform, and product teams that need an engineer who can
              build GenAI tooling and ship it as dependable production software,
              then get the rest of the team using it.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="surface rounded-lg p-5 transition-transform duration-200 hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-zinc-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
              alt="Planning an engineering workflow before building"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">How I Work</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              Start from the real workflow, not the demo.
            </h2>
            <div className="metric-divider mt-6">
              {process.map((item, index) => (
                <div key={item} className="flex gap-4 py-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-base leading-7 text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-12 sm:py-16">
        <div className="rounded-lg bg-zinc-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow text-emerald-200">Open to Opportunities</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Open to AI tools support, AI engineer, and GenAI-focused
                full-stack roles.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-200">
                Reach out directly through email, LinkedIn, or GitHub. Recruiters
                and hiring teams can also send role details through the quick
                message form.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1.5 text-sm font-semibold text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Remote-first · Available at short notice · Open to hybrid/on-site
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-md border border-white/25 bg-white/5 px-4 py-3 transition-colors hover:border-emerald-300 hover:bg-white/10"
                  >
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">
                      {method.label}
                    </p>
                    <p className="mt-1 break-all text-sm text-zinc-100">{method.value}</p>
                  </a>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/case-study" className="btn-primary border-emerald-300 bg-emerald-300 text-zinc-950 hover:border-white hover:bg-white">
                  Read Case Study
                </Link>
                <Link href="/about" className="btn-secondary border-white/45 bg-white/10 text-white hover:border-white hover:bg-white/20">
                  More About Pankaj
                </Link>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

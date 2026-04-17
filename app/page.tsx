import Image from "next/image";
import Link from "next/link";
import Projects from "./components/Projects";

const proofPoints = [
  {
    value: "10+",
    label: "years building production frontend systems",
  },
  {
    value: "40%",
    label: "performance gains across key product surfaces",
  },
  {
    value: "30%",
    label: "faster release cycles through reusable UI standards",
  },
  {
    value: "90%+",
    label: "quality score target for tested, maintainable delivery",
  },
];

const services = [
  {
    title: "Frontend Architecture",
    text: "Component systems, page architecture, design-system adoption, and migration plans for React and Next.js products.",
  },
  {
    title: "Performance & Quality",
    text: "Core Web Vitals, bundle control, accessibility, automated checks, and release guardrails that keep teams confident.",
  },
  {
    title: "Client Product Delivery",
    text: "Modern websites, dashboards, admin panels, and responsive web apps built with clear flows and business outcomes.",
  },
];

const process = [
  "Clarify business goal, audience, and conversion path.",
  "Map the product flow before touching the component layer.",
  "Build a scalable interface with reusable patterns.",
  "Measure performance, accessibility, and release readiness.",
];

export default function Home() {
  return (
    <main className="min-h-screen pb-16 text-zinc-950 antialiased">
      <section className="section-shell py-6 sm:py-8">
        <div className="relative min-h-[560px] overflow-hidden rounded-lg bg-zinc-950 text-white">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80"
            alt="Modern workspace prepared for frontend architecture and product delivery"
            fill
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
          <div className="hero-image-mask absolute inset-0" />
          <div className="relative flex min-h-[560px] flex-col justify-between p-5 sm:p-8 lg:p-10">
            <div className="max-w-3xl pt-10 sm:pt-14 lg:pt-16">
              <p className="eyebrow text-lime-200">Frontend Lead | React | Next.js | TypeScript</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                I build modern web products that clients trust and teams can scale.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-100 sm:text-lg">
                I am Pankaj Dixit, a senior frontend developer focused on
                enterprise UI architecture, polished product flows, and
                measurable delivery outcomes for client-facing work.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#projects" className="btn-primary min-w-[11rem] border-white bg-white text-zinc-950 hover:border-lime-300 hover:bg-lime-300">
                  View My Work
                </Link>
                <Link href="#contact" className="btn-secondary min-w-[11rem] border-white/45 bg-white/10 text-white hover:border-white hover:bg-white/20">
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-3 border-t border-white/25 pt-5 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((point) => (
                <div key={point.label}>
                  <p className="text-2xl font-bold text-lime-200">{point.value}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-100">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Positioning</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              A portfolio built for hiring managers, clients, and LinkedIn visitors.
            </h2>
          </div>
          <p className="text-base leading-8 text-zinc-600 sm:text-lg">
            The site now leads with credibility, then moves into selected work,
            business impact, services, process, and a clear contact path. Every
            section answers the same question: can Pankaj deliver a high-quality
            frontend product?
          </p>
        </div>
      </section>

      <Projects />

      <section id="services" className="section-shell py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              Work I can lead from plan to production.
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              Useful for agencies, founders, product teams, and enterprise
              groups that need a frontend specialist who can think beyond UI
              screens.
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
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
              alt="Product team reviewing frontend delivery work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Process</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              Clear flow before beautiful pixels.
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
              <p className="eyebrow text-lime-200">Availability</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Ready for client work, team leadership, and frontend product ownership.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-200">
                Share this portfolio with hiring managers or clients, then add
                your final LinkedIn and email links when you are ready to go
                live.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link href="/case-study" className="btn-primary border-lime-300 bg-lime-300 text-zinc-950 hover:border-white hover:bg-white">
                Read Case Study
              </Link>
              <Link href="/about" className="btn-secondary border-white/45 bg-white/10 text-white hover:border-white hover:bg-white/20">
                More About Pankaj
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

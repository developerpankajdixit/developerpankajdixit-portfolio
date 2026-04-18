"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Tab = "Featured" | "Enterprise" | "Client Work";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  client: string;
  problem: string;
  contributions: string[];
  metrics: { label: string; value: string }[];
  categories: Tab[];
  image: string;
  alt: string;
  visibility?: "Public" | "Confidential";
  links?: ProjectLink[];
};

const tabs: Tab[] = ["Featured", "Enterprise", "Client Work"];

const projects: Project[] = [
  {
    title: "Microsoft Partner Center Feature Delivery",
    client: "Microsoft / Xbox",
    problem:
      "Partner-facing workflows needed reliable frontend updates and feature delivery within a login-gated enterprise platform.",
    contributions: [
      "Worked on new feature development and scoped production updates for Partner Center experiences",
      "Improved UI consistency and delivery quality across enterprise partner workflows",
      "Shipped changes with release guardrails suited for authenticated product surfaces",
    ],
    metrics: [
      { label: "Product area", value: "Partner Center" },
      { label: "Access level", value: "Confidential" },
    ],
    categories: ["Featured", "Enterprise"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    alt: "Enterprise team planning frontend platform improvements",
    visibility: "Confidential",
  },
  {
    title: "VS Legal Partners Website",
    client: "VS Legal Partners",
    problem:
      "The firm needed a complete digital presence to build trust, clarify services, and convert visitors into consultation leads.",
    contributions: [
      "Led end-to-end client consultation to capture requirements, priorities, and business goals",
      "Owned complete execution from scratch to live launch, including UI design direction and content structure",
      "Delivered branding and go-live essentials across logo, content, domain setup, and production release",
    ],
    metrics: [
      { label: "Ownership", value: "End-to-end" },
      { label: "Delivery", value: "Scratch to live" },
    ],
    categories: ["Featured", "Client Work"],
    image: "/vs-legal-partners-hero.png",
    alt: "Professional workspace for legal services website strategy",
    links: [{ label: "VS Legal Partners", href: "https://www.vslegalpartners.com/" }],
  },
  {
    title: "Online Doctor Consultation Revamp",
    client: "Tata 1mg",
    problem:
      "The online consultation journey required stronger UI consistency and a clearer user flow to support trust and conversions.",
    contributions: [
      "Contributed to the revamp of the online doctor consultation experience",
      "Improved frontend consistency and interaction quality across key consultation surfaces",
      "Collaborated with product and engineering teams to deliver production-safe updates",
    ],
    metrics: [
      { label: "Contribution", value: "Consultation revamp" },
      { label: "Domain", value: "Digital health" },
    ],
    categories: ["Featured", "Client Work"],
    image: "/tata-1mg-consultation-hero.png",
    alt: "Online healthcare consultation product interface",
    links: [
      {
        label: "Live consultation flow",
        href: "https://www.1mg.com/online-doctor-consultation",
      },
    ],
  },
  {
    title: "AT&T Feature Enhancements",
    client: "AT&T",
    problem:
      "Large-scale telecom journeys required targeted feature updates while preserving stability in a mature enterprise platform.",
    contributions: [
      "Worked on new feature development and update requests for selected AT&T surfaces",
      "Delivered scoped frontend changes within established enterprise release processes",
      "Focused on incremental UX and quality improvements without disrupting existing flows",
    ],
    metrics: [
      { label: "Delivery model", value: "Feature updates" },
      { label: "Access level", value: "Confidential" },
    ],
    categories: ["Enterprise"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    alt: "Enterprise telecom product planning and release workflows",
    visibility: "Confidential",
  },
  {
    title: "Agency Multi-Client Website Delivery",
    client: "PulpStrategy",
    problem:
      "Multiple brands needed modern, maintainable websites with responsive UX and dependable delivery quality.",
    contributions: [
      "Delivered frontend implementations and updates across multiple client websites",
      "Balanced performance, responsiveness, and content clarity for varied brand contexts",
      "Supported ongoing improvements with production-ready UI and quality checks",
    ],
    metrics: [
      { label: "Client websites", value: "5+" },
      { label: "Delivery model", value: "Agency" },
    ],
    categories: ["Client Work"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    alt: "Agency team delivering multiple client website projects",
    links: [
      { label: "Renaissance Spaces", href: "https://www.renaissance-spaces.in/" },
      { label: "Change Alliance", href: "https://www.changealliance.in/" },
      { label: "Pulse Advertising", href: "https://www.pulse-advertising.com/" },
      { label: "VCM", href: "https://vcm.org.in/" },
      { label: "End AIDS India", href: "https://endaidsindia.org/" },
    ],
  },
  {
    title: "LimeTray Product Platform",
    client: "LimeTray",
    problem:
      "The hospitality product required continuous frontend development across evolving features and shared team ownership.",
    contributions: [
      "Contributed to product feature development as part of the LimeTray engineering team",
      "Implemented scalable frontend modules with maintainability and usability in mind",
      "Supported iterative platform updates through collaborative release execution",
    ],
    metrics: [
      { label: "Product type", value: "B2B platform" },
      { label: "Role", value: "Team contribution" },
    ],
    categories: ["Enterprise", "Client Work"],
    image: "/limetray-hero.png",
    alt: "SaaS product team working on hospitality platform features",
    links: [{ label: "LimeTray", href: "https://limetray.com/" }],
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("Featured");

  const visibleProjects = useMemo(
    () => projects.filter((project) => project.categories.includes(activeTab)),
    [activeTab],
  );

  return (
    <section id="projects" className="section-shell py-12 sm:py-16">
      <div className="max-w-4xl">
        <p className="eyebrow">Selected Work</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
          Practical frontend work with business impact.
        </h2>
        <p className="mt-4 text-base leading-8 text-zinc-600 sm:text-lg">
          Every project below is framed by problem, contribution, and
          measurable result so decision makers can evaluate outcomes fast.
          Public projects include live links, while confidential enterprise
          work is intentionally presented without direct product access.
        </p>
        <p className="mt-3 text-sm font-medium text-zinc-500">
          {visibleProjects.length} project stories in{" "}
          {activeTab.toLowerCase()} view.
        </p>
      </div>

      <div
        className="mt-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Project categories"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? "border-zinc-950 bg-zinc-950 text-white"
                  : "border-zinc-300 bg-white/80 text-zinc-700 hover:border-zinc-950 hover:text-zinc-950"
              }`}
              aria-selected={isActive}
              role="tab"
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="surface overflow-hidden rounded-lg transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="relative min-h-[220px] bg-zinc-900">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-xs font-bold uppercase text-zinc-500">
                {project.client}
              </p>
              {project.visibility === "Confidential" ? (
                <p className="mt-2 inline-flex rounded-full border border-amber-300 bg-amber-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                  Confidential Scope
                </p>
              ) : null}
              <h3 className="mt-2 text-2xl font-bold leading-tight text-zinc-950">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {project.problem}
              </p>

              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase text-zinc-500">
                  Key Contributions
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                  {project.contributions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-zinc-200 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl font-bold text-zinc-950">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-zinc-500">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {project.links?.length ? (
                <div className="mt-5 border-t border-zinc-200 pt-4">
                  <h4 className="text-xs font-bold uppercase text-zinc-500">
                    Project Links
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.links.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-950 hover:text-zinc-950"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link href="/case-study" className="btn-primary">
          Read Detailed Case Study
        </Link>
        <Link href="/about" className="btn-secondary">
          Review My Background
        </Link>
      </div>
    </section>
  );
}

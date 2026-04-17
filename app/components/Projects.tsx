"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Tab = "Featured" | "Enterprise" | "Client Work";

type Project = {
  title: string;
  client: string;
  problem: string;
  contributions: string[];
  metrics: { label: string; value: string }[];
  categories: Tab[];
  image: string;
  alt: string;
};

const tabs: Tab[] = ["Featured", "Enterprise", "Client Work"];

const projects: Project[] = [
  {
    title: "Enterprise Developer Platform Optimization",
    client: "Microsoft / Xbox",
    problem:
      "Platform teams were slowed by inconsistent frontend patterns and heavy release cycles.",
    contributions: [
      "Unified reusable UI standards across multiple product teams",
      "Reduced rendering bottlenecks in high-traffic product areas",
      "Introduced delivery guardrails that improved release predictability",
    ],
    metrics: [
      { label: "Release cycle speed", value: "+30%" },
      { label: "Page performance", value: "+40%" },
    ],
    categories: ["Featured", "Enterprise"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    alt: "Enterprise team planning frontend platform improvements",
  },
  {
    title: "VS Legal Partners Website",
    client: "VS Legal Partners",
    problem:
      "The brand needed a modern website that could convert visitors into qualified leads.",
    contributions: [
      "Restructured pages to clarify services and user intent",
      "Improved mobile and accessibility quality across key journeys",
      "Implemented a lean content model for faster updates",
    ],
    metrics: [
      { label: "Engagement", value: "+35%" },
      { label: "Lead conversions", value: "+22%" },
    ],
    categories: ["Featured", "Client Work"],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    alt: "Professional workspace for legal services website strategy",
  },
  {
    title: "Healthcare Management System",
    client: "Multi-hospital Network",
    problem:
      "Care teams needed a clearer digital workflow to reduce operational delays.",
    contributions: [
      "Redesigned patient journey flows for faster daily tasks",
      "Rolled out role-based UI states for safer operations",
      "Improved system clarity for non-technical staff usage",
    ],
    metrics: [
      { label: "Workflow time", value: "-50%" },
      { label: "Operational uptime", value: "99.9%" },
    ],
    categories: ["Enterprise"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    alt: "Healthcare workflow tools for hospital operations",
  },
  {
    title: "Frontend Architecture Dashboard",
    client: "Internal Product Team",
    problem:
      "Engineering teams lacked a clear view of UI quality and delivery health.",
    contributions: [
      "Created a shared dashboard for performance and quality signals",
      "Standardized front-end reporting across multiple squads",
      "Enabled faster planning decisions with clear trend tracking",
    ],
    metrics: [
      { label: "Decision turnaround", value: "-35%" },
      { label: "Cross-team visibility", value: "+60%" },
    ],
    categories: ["Enterprise"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    alt: "Analytics dashboard used for frontend architecture decisions",
  },
  {
    title: "Modern E-Commerce Platform",
    client: "Retail Client",
    problem:
      "Mobile shoppers dropped off due to a slow and cluttered purchase flow.",
    contributions: [
      "Simplified product discovery and checkout interaction patterns",
      "Improved responsive UI consistency across major devices",
      "Refined onboarding for campaigns and product launches",
    ],
    metrics: [
      { label: "Checkout completion", value: "+18%" },
      { label: "Mobile bounce rate", value: "-24%" },
    ],
    categories: ["Client Work"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    alt: "Responsive commerce interface on a laptop",
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
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
            Practical frontend work with business impact.
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Every project below is framed by problem, contribution, and
            measurable result so decision makers can evaluate outcomes fast.
          </p>
          <p className="mt-3 text-sm font-medium text-zinc-500">
            {visibleProjects.length} project stories in{" "}
            {activeTab.toLowerCase()} view.
          </p>
        </div>
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

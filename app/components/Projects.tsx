"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Tab = "Featured" | "AI & Automation" | "Full-Stack";

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
  note?: string;
  caseStudy?: string;
};

const tabs: Tab[] = ["Featured", "AI & Automation", "Full-Stack"];

const projects: Project[] = [
  {
    title: "AI-Powered Developer Onboarding MCP Server",
    client: "Microsoft / Xbox · Tech Mahindra",
    problem:
      "New developers spent roughly two weeks on environment setup (VPN, Docker, authentication, builds, and linting) before their first real contribution.",
    contributions: [
      "Built a production MCP (Model Context Protocol) server in TypeScript (21 tools, ~6,000 lines) that a new developer triggers from the Copilot chat in VS Code, simply by asking to complete their onboarding and project setup",
      "The server checks credentials and access/entitlement requests, detects what is missing (repo clone, software installs, configuration), and performs the setup itself",
      "Completes repository setup and wires in run tools, turning days of manual setup and doc-reading into a guided, self-serve flow reused for every new joiner",
    ],
    metrics: [
      { label: "Onboarding time", value: "2 wks → 30 min" },
      { label: "Saved per developer", value: "80+ hrs" },
    ],
    categories: ["Featured", "AI & Automation"],
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1400&q=80",
    alt: "Automated developer onboarding and AI tooling pipeline",
    visibility: "Confidential",
    caseStudy: "ai-onboarding-mcp-server",
  },
  {
    title: "IncidentIQ: Agentic AI for Incident Response",
    client: "Microsoft / Xbox · Tech Mahindra · CodeRush 2026 Finalist",
    problem:
      "Incident management was roughly 80% manual: slow hand-filed tickets, about 30% of incidents misrouted, and 20 to 40 minutes of log reading before triage even began.",
    contributions: [
      "Architected a five-stage agentic pipeline (ingest, analyze, decide, act, learn) on the Microsoft Agent Framework and Azure OpenAI that takes a raw alert to a draft, merge-ready pull request",
      "Grounded every recommendation in retrieval over past incidents and runbooks (Azure AI Search), with a confidence gate so the agent escalates instead of hallucinating a fix",
      "Made human review mandatory before any merge, with a PII and secret scrubber and a full audit log on every action",
    ],
    metrics: [
      { label: "Signal to draft PR (POC)", value: "<10 min" },
      { label: "Routing accuracy (POC)", value: "~95%" },
    ],
    categories: ["Featured", "AI & Automation"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    alt: "AI incident intelligence dashboard and analytics",
    note: "My own concept, architecture, and build. Full implementation details shared on request.",
    caseStudy: "incidentiq",
  },
  {
    title: "ShieldAI: AI-Augmented Pre-Release Safety Gate",
    client: "Microsoft / Xbox · Tech Mahindra",
    problem:
      "Between 'staging tests pass' and 'approved for production', nothing verified the deployed app actually worked. Visual regressions, silent dependency failures, and 403/401 API errors slipped through green test suites.",
    contributions: [
      "Designed a CD pipeline gate that runs in parallel to the existing Playwright tests, adding about 30 seconds and zero time to the critical path",
      "Built it on a clear contract: deterministic checks (render, API health, TLS) block the deploy, AI checks (visual diff, failure diagnosis, risk score) only advise, and humans decide",
      "Shipped a dual-provider design (GitHub Models by default, Azure OpenAI for single-tenant) behind one config flag, with a one-line YAML rollback and 51 tests on the gate itself",
    ],
    metrics: [
      { label: "Gate runtime", value: "~30 sec" },
      { label: "Tests passing", value: "51" },
    ],
    categories: ["Featured", "AI & Automation"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    alt: "Continuous delivery pipeline safety checks and deployment verification",
    note: "My own concept, architecture, and build. Full implementation details shared on request.",
    caseStudy: "shieldai",
  },
  {
    title: "AI Champion Enablement Program",
    client: "Microsoft / Xbox · Tech Mahindra",
    problem:
      "The account needed higher AI readiness and practical, hands-on adoption of Copilot tooling across engineering teams.",
    contributions: [
      "Served as an AI Champion, running weekly sessions on Copilot tooling and prompt engineering",
      "Enabled 17+ engineers to earn AI White Belt certification, raising AI readiness across the account",
      "Drove org-wide AI adoption with reusable enablement material and knowledge sharing",
    ],
    metrics: [
      { label: "Engineers enabled", value: "17+" },
      { label: "Cadence", value: "Weekly sessions" },
    ],
    categories: ["Featured", "AI & Automation"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    alt: "Team enablement and AI adoption training session",
  },
  {
    title: "Legacy UI Modernization (Angular to React)",
    client: "Microsoft / Xbox · Tech Mahindra",
    problem:
      "An end-of-life Angular 1.x configuration portal (~20 admin pages) had drifted from the team's design system, forced full-page navigation for every edit, and was the last holdout in an otherwise React monorepo.",
    contributions: [
      "Leading the migration to React 18 and TypeScript (strict mode) with Redux and redux-saga, embedded in the existing Yarn-workspaces monorepo with zero backend changes",
      "Established reusable patterns (saga-per-domain, an LCE loading/content/error state envelope, inline edit modals, themed CSS variables) that other engineers now follow page by page",
      "Improved UX alongside the rewrite: dark theme, inline modals instead of route sprawl, distinct empty and error states, and accessibility on icon-only controls",
    ],
    metrics: [
      { label: "Admin pages", value: "~20" },
      { label: "Backend changes", value: "Zero" },
    ],
    categories: ["Featured", "Full-Stack"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    alt: "Source code on screen representing a React and TypeScript migration",
    note: "Ongoing migration. Feature parity reached across migrated pages; further details available on request.",
    visibility: "Confidential",
    caseStudy: "legacy-ui-modernization",
  },
  {
    title: "Xbox Configuration Migration Tracking System",
    client: "Microsoft / Xbox · Tech Mahindra",
    problem:
      "Application-modernization config migrations lacked governance, with no clear way to track status, prioritize work, or report progress.",
    contributions: [
      "Designed a configuration migration tracking system for status, prioritization, and reporting",
      "Improved modernization governance and gave leadership clear visibility into migration health",
      "Brought structure to a complex, multi-surface modernization effort",
    ],
    metrics: [
      { label: "Capability", value: "Track + report" },
      { label: "Access level", value: "Confidential" },
    ],
    categories: ["AI & Automation", "Full-Stack"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    alt: "Migration tracking and modernization governance dashboard",
    visibility: "Confidential",
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
    categories: ["Full-Stack"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    alt: "Enterprise telecom product planning and release workflows",
    visibility: "Confidential",
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
    categories: ["Full-Stack"],
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
    categories: ["Full-Stack"],
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
    categories: ["Full-Stack"],
    image: "/limetray-hero.png",
    alt: "SaaS product team working on hospitality platform features",
    links: [{ label: "LimeTray", href: "https://limetray.com/" }],
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
    categories: ["Full-Stack"],
    image: "/vs-legal-partners-hero.png",
    alt: "Professional workspace for legal services website strategy",
    links: [{ label: "VS Legal Partners", href: "https://www.vslegalpartners.com/" }],
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
          AI tooling and full-stack delivery with measurable impact.
        </h2>
        <p className="mt-4 text-base leading-8 text-zinc-600 sm:text-lg">
          Every project below is framed by problem, contribution, and
          measurable result. The AI &amp; Automation work shows what I build
          today; the full-stack projects show the production engineering depth
          behind it. Confidential client work is shown without direct access.
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

              {project.note ? (
                <p className="mt-4 text-xs italic leading-6 text-zinc-500">
                  {project.note}
                </p>
              ) : null}

              {project.caseStudy ? (
                <div className="mt-5 border-t border-zinc-200 pt-4">
                  <Link
                    href={`/case-study/${project.caseStudy}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 transition-colors hover:text-emerald-700"
                  >
                    Read case study
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              ) : null}

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
          View Case Studies
        </Link>
        <Link href="/about" className="btn-secondary">
          Review My Background
        </Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Pankaj Dixit | AI Engineer & Full-Stack Developer",
  description:
    "AI Engineer and full-stack developer with 11+ years of production experience, focused on GenAI automation, MCP servers, Copilot enablement, and AI-powered developer tooling.",
};

const strengths = [
  {
    title: "GenAI Engineering",
    text: "LLM-powered applications, MCP (Model Context Protocol) servers, and Copilot-driven automation built as real, deployable software.",
  },
  {
    title: "Developer Experience",
    text: "Automating onboarding, environment setup, and repetitive workflows so teams spend hours on product, not plumbing.",
  },
  {
    title: "AI Adoption",
    text: "Prompt engineering, Copilot rollout, and AI Champion enablement that move a whole team from curious to certified.",
  },
  {
    title: "Full-Stack Delivery",
    text: "11+ years shipping production React/Next.js, TypeScript, and cloud-deployed apps, the foundation that makes AI features real.",
  },
];

const techCategories = {
  "AI & GenAI": [
    "GitHub Copilot",
    "Microsoft 365 Copilot",
    "MCP (Model Context Protocol)",
    "AI Agents / Agentic Workflows",
    "RAG (Retrieval-Augmented Generation)",
    "Azure OpenAI",
    "Azure AI Search",
    "Microsoft Agent Framework",
    "Prompt Engineering",
    "LLM Application Development",
    "Responsible AI",
    "AI Adoption & Enablement",
  ],
  "ML & MLOps": [
    "MLOps (Vertex AI)",
    "BigQuery ML",
    "ML on Google Cloud",
    "Vertex AI Notebooks",
  ],
  "Cloud & Infrastructure": [
    "Azure",
    "Google Cloud",
    "Azure DevOps",
    "Azure App Service",
    "Vercel",
  ],
  "Frontend Core": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "CSS Modules",
  ],
  "State Management": [
    "Redux",
    "redux-saga",
    "React Query",
    "Context API",
  ],
  "Backend & APIs": [
    "Node.js",
    "REST APIs",
    "JSON-RPC",
    "GraphQL",
    "PostgreSQL",
  ],
  "DevOps & CI/CD": [
    "Docker",
    "PowerShell Automation",
    "Azure PIM / RBAC",
    "GitHub Actions",
    "Azure Pipelines",
  ],
  "Testing & Quality": [
    "Jest",
    "React Testing Library",
    "Playwright",
    "Cypress",
    "ESLint",
    "Lighthouse",
    "Accessibility (WCAG)",
  ],
  "Tools & Monitoring": [
    "VS Code",
    "Git",
    "GitHub",
    "Figma",
    "Postman",
    "Application Insights",
    "Sentry",
  ],
};

const recognition = [
  {
    title: "AI Champion",
    text: "Microsoft Xbox account: drove org-wide AI adoption and weekly Copilot enablement.",
  },
  {
    title: "CodeRush 2026 Finalist",
    text: "IncidentIQ selected in the Top 6 of 70+ submissions.",
  },
  {
    title: "AI White Belt Certification",
    text: "Certified, and enabled 17+ engineers to earn the same.",
  },
  {
    title: "Client & Internal Recognition",
    text: "Pat on the Back awards from the Tech Mahindra IBU head, and direct appreciation from Microsoft stakeholders.",
  },
];

const certifications = {
  "AI & GenAI": [
    "GitHub Copilot Certification (2026)",
    "AI White Belt",
    "Prompt Engineering for Everyone (2025)",
    "Introduction to Generative AI",
    "Introduction to Large Language Models",
    "Introduction to AI & ML on Google Cloud",
    "AI for Beginners",
    "Claude Code 101",
  ],
  "ML & MLOps (Google Cloud)": [
    "MLOps: Getting Started",
    "MLOps for Generative AI",
    "MLOps with Vertex AI Model Evaluation",
    "Create ML Models with BigQuery ML",
    "Engineer Data for Predictive Modeling with BigQuery ML",
    "Prepare Data for ML APIs on Google Cloud",
    "Working with Notebooks in Vertex AI",
  ],
  "Cloud & Programming": [
    "Google Cloud Computing Foundations",
    "Python Programming (2025)",
    "Frontend Development with ReactJS",
    "UI Development with ReactJS",
    "Web Programming",
  ],
  "Ways of Working": [
    "Scrum Master with Jira",
    "Max Personal Effectiveness",
  ],
};

export default function About() {
  return (
    <main className="min-h-screen pb-16">
      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">About Pankaj</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
              An AI engineer who ships GenAI tooling on a real engineering
              foundation.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              I build AI-powered automation, MCP servers, and Copilot-driven
              tooling that teams actually adopt, and I deploy it as production
              software. My work sits where GenAI, developer experience, and
              measurable business outcomes meet.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/#projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/case-study" className="btn-secondary">
                Read Case Study
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[1000/1256] w-full max-w-[400px] overflow-hidden rounded-lg bg-zinc-900 lg:mx-0 lg:ml-auto">
            <Image
              src="/pankaj-headshot.jpg"
              alt="Pankaj Dixit, AI Engineer and Full-Stack Developer"
              fill
              priority
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="surface rounded-lg p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <h2 className="text-lg font-bold text-zinc-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Core Stack</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              The toolkit I use to build and ship AI-powered software.
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              My focus is on practical GenAI engineering: LLM-powered
              applications, MCP servers, and Copilot-driven automation that
              remove manual steps from real workflows. I treat AI features as
              production software: designed, tested, deployed, and adopted.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              That AI work stands on 11+ years of full-stack delivery. I build
              React/Next.js applications in TypeScript, connect them to modern
              APIs, and ship them with automated CI/CD, containerized builds, and
              cloud hosting on Azure or Google Cloud.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              I also drive AI adoption directly. As an AI Champion I ran weekly
              Copilot and prompt-engineering sessions and enabled 17+ engineers
              to earn AI White Belt certification. Building the tool is only half
              the value; getting a team to actually use it is the other half.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              I balance capability, reliability, and cost so every solution is
              strong technically and viable for the business, with guardrails,
              quality gates, and documentation that let teams own it after
              launch.
            </p>
          </div>
          <div className="space-y-6">
            {Object.entries(techCategories).map(([category, technologies]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-sm font-bold uppercase text-zinc-500 tracking-wide">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="max-w-2xl">
          <p className="eyebrow">Recognition</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
            Awards and recognition for practical AI innovation.
          </h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recognition.map((item) => (
            <article
              key={item.title}
              className="surface rounded-lg p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="text-base font-bold text-zinc-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Certifications</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
              Backed by hands-on AI, ML, and cloud training.
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              A focused learning track across Generative AI, MLOps, and Google
              Cloud, completed through Tech Mahindra and Google Cloud Skills
              Boost, alongside core engineering and ways-of-working
              certifications.
            </p>
          </div>
          <div className="space-y-6">
            {Object.entries(certifications).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-sm font-bold uppercase text-zinc-500 tracking-wide">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="rounded-lg bg-zinc-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-emerald-200">11+ yrs</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                production engineering across full-stack and AI tooling
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-200">80+ hrs</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                saved per developer through AI-powered onboarding automation
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-200">17+</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                engineers enabled to AI White Belt certification as AI Champion
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

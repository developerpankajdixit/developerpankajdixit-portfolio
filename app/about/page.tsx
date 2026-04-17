import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Pankaj Dixit | Frontend Lead & Architect",
  description:
    "Senior Frontend Lead with 10+ years of experience in architecture, performance, and enterprise-scale applications.",
};

const strengths = [
  {
    title: "Architecture",
    text: "Modular frontend systems, reusable components, and standards that help teams move with less friction.",
  },
  {
    title: "Performance",
    text: "Core Web Vitals, rendering strategy, bundle control, and pragmatic optimization work.",
  },
  {
    title: "Quality",
    text: "Testing habits, accessibility checks, and release guardrails that reduce avoidable regressions.",
  },
  {
    title: "Leadership",
    text: "Mentoring, planning, reviews, and cross-functional communication with product teams.",
  },
];

const techCategories = {
  "Frontend Core": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "CSS Modules",
    // "Styled Components",
  ],
  "State Management": [
    "Redux",
    // "Zustand",
    "React Query",
    "Context API",
  ],
  "Backend & APIs": [
    // "Node.js",
    // "Express",
    "GraphQL",
    "REST APIs",
    "tRPC",
  ],
  Databases: [
    "PostgreSQL",
    // "MongoDB",
    // "Redis",
    "Prisma",
  ],
  "Cloud & Infrastructure": [
    "Azure",
    "Azure DevOps",
    // "Azure Functions",
    "Azure App Service",
    // "Azure Storage",
    // "Azure CDN",
    "Vercel",
    // "Netlify",
  ],
  "DevOps & CI/CD": [
    "Docker",
    // "Kubernetes",
    "GitHub Actions",
    "Azure Pipelines",
    // "Jenkins",
    // "GitLab CI",
  ],
  "Mobile Development": [
    "React Native",
    "Expo",
    // "Native iOS",
    // "Native Android",
    // "Flutter",
  ],
  "Testing & Quality": [
    "Jest",
    "React Testing Library",
    "Playwright",
    "Cypress",
    // "Vitest",
    // "Testing Library",
    // "Storybook",
    "ESLint",
    "Prettier",
    // "Husky",
    "Lighthouse",
    "Web Vitals",
    "Accessibility (WCAG)",
    // "Performance Monitoring",
  ],
  "Development Tools": [
    "VS Code",
    "Git",
    "GitHub",
    "Figma",
    // "Adobe Creative Suite",
    "Postman",
    // "Insomnia",
  ],
  "Monitoring & Analytics": [
    "Application Insights",
    // "Google Analytics",
    "Sentry",
    // "DataDog",
    // "New Relic",
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
              A frontend lead who connects product clarity with dependable
              engineering.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              I design and deliver frontend systems that are easier to maintain,
              faster to ship, and clearer for users. My work sits at the point
              where architecture, UI quality, and business outcomes meet.
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
          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80"
              alt="Frontend development workspace with code and product planning"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
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
              The technology foundation I build client products on.
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              My focus is on practical, maintainable frontend systems with a
              dependable delivery path. I build React/Next.js applications in
              TypeScript, connect them to modern APIs, and ship them using
              automated CI/CD, containerized builds, and production-ready cloud
              hosting.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              That means starting with a clear frontend architecture, enforcing
              component consistency, and keeping code easy to extend. I balance
              performance, accessibility, and cost so every product is strong
              technically and viable for the business.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              I also build in operational clarity through deployment-ready
              pipelines, quality gates, and support-friendly documentation so
              teams can own the site after launch without friction.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              I can also help define the release workflow, versioning strategy,
              and rollback guards that reduce risk on production launches.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              For end-to-end delivery, I typically recommend a stack that
              includes Azure or Vercel deployment, Docker build pipelines,
              comprehensive Playwright tests, and monitoring so live sites stay
              reliable and easy to maintain. This approach keeps launches
              predictable and makes future updates faster for clients.
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
        <div className="rounded-lg bg-zinc-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-lime-200">11+</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                years delivering frontend systems, architecture, and client
                product launches
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-lime-200">React</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                product interfaces, dashboards, and client platforms
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-lime-200">Lead</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                ownership across code quality, UX flow, and team delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

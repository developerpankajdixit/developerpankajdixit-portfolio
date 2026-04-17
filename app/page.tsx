import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 antialiased">
      <section className="hero-bg mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-14 lg:px-16 lg:py-28">
        <div className="w-full space-y-12 self-center sm:space-y-14 lg:max-w-2xl">
          <header className="space-y-6 sm:space-y-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-zinc-500 sm:text-xs">
              Pankaj Dixit
            </p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.02em] text-zinc-950 sm:text-5xl sm:leading-[1.06] lg:text-[3.5rem]">
              Building scalable, high-performance web applications with modern
              frontend architecture
            </h1>
            <p className="text-sm font-medium tracking-wide text-zinc-600 sm:text-base">
              Frontend Lead | React, Next.js, TypeScript
            </p>
          </header>

          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
            Frontend Lead with 11+ years of experience specializing in React,
            Next.js, and TypeScript. Focused on clean architecture, performance,
            and scalable UI systems.
          </p>

          <nav
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
            aria-label="Primary actions"
          >
            <a
              href="#projects"
              className="inline-flex min-w-[12rem] h-12 items-center justify-center rounded-xl bg-black px-8 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-zinc-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="inline-flex min-w-[12rem] h-12 items-center justify-center rounded-xl border border-zinc-300 bg-white px-8 text-sm font-medium text-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-zinc-900 hover:bg-zinc-50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
            >
              Let’s Work Together
            </a>
          </nav>
        </div>

        <aside className="mx-auto w-full max-w-xl self-center lg:ml-auto">
          <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:p-6 xl:p-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Frontend System Snapshot
              </p>
              <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] font-medium text-zinc-600">
                Live
              </span>
            </div>

            <pre className="overflow-hidden rounded-[1.5rem] border border-zinc-300 bg-white p-4 text-xs leading-6 text-zinc-700 sm:text-sm sm:p-5">
              <code>{`const app = {
  stack: ["React", "Next.js", "TypeScript"],
  architecture: "Scalable UI systems",
  performance: "Core Web Vitals focused",
  quality: ["Accessibility", "Testing", "DX"]
};`}</code>
            </pre>

            <div className="mt-5 grid grid-cols-1 gap-3 text-xs sm:grid-cols-3 sm:text-sm">
              <div className="rounded-2xl border border-zinc-300 bg-white px-3 py-2.5">
                <p className="font-semibold text-zinc-900">LCP</p>
                <p className="mt-1 text-zinc-500">&lt; 2.0s</p>
              </div>
              <div className="rounded-2xl border border-zinc-300 bg-white px-3 py-2.5">
                <p className="font-semibold text-zinc-900">A11y</p>
                <p className="mt-1 text-zinc-500">WCAG-first</p>
              </div>
              <div className="rounded-2xl border border-zinc-300 bg-white px-3 py-2.5">
                <p className="font-semibold text-zinc-900">Scale</p>
                <p className="mt-1 text-zinc-500">Design systems</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <Projects />
    </main>
  );
}

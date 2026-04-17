export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
          Selected Work
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl lg:text-2xl">
          Real-world projects focused on performance, scalability, and user
          experience.
        </p>
      </div>

      <div className="space-y-20 lg:space-y-24">
        {/* Project 1 */}
        <article className="group rounded-3xl border border-zinc-200/60 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-zinc-900/5 hover:-translate-y-1 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8 self-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-zinc-950 sm:text-3xl lg:text-4xl">
                  Frontend Architecture Dashboard
                </h3>
                <p className="text-lg leading-relaxed text-zinc-600 lg:text-xl">
                  Dashboards often become unscalable and hard to maintain as
                  applications grow in complexity.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4 lg:text-base">
                    Key Contributions
                  </h4>
                  <ul className="space-y-3 text-sm text-zinc-600 lg:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400 flex-shrink-0"></span>
                      <span className="leading-relaxed">
                        Designed scalable folder structure with feature-based
                        organization and clear separation of concerns
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400 flex-shrink-0"></span>
                      <span className="leading-relaxed">
                        Built reusable component system with TypeScript
                        interfaces and comprehensive prop validation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400 flex-shrink-0"></span>
                      <span className="leading-relaxed">
                        Optimized performance with lazy loading, React.memo, and
                        strategic code splitting
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400 flex-shrink-0"></span>
                      <span className="leading-relaxed">
                        Implemented Zustand for lightweight, scalable state
                        management with middleware
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4 lg:text-base">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["Next.js", "TypeScript", "Tailwind CSS", "Zustand"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-300/60 bg-zinc-50/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-6 lg:text-base">
                    Results & Impact
                  </h4>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-zinc-900 lg:text-4xl">
                        60%
                      </p>
                      <p className="mt-2 text-sm font-medium text-zinc-600">
                        Faster Load Times
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-zinc-900 lg:text-4xl">
                        90+
                      </p>
                      <p className="mt-2 text-sm font-medium text-zinc-600">
                        Lighthouse Score
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-zinc-900 lg:text-4xl">
                        85%
                      </p>
                      <p className="mt-2 text-sm font-medium text-zinc-600">
                        Code Reusability
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-900 px-8 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-zinc-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
                  >
                    View Case Study
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-300 bg-white px-8 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-indigo-500/10">
                <div className="h-full p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white text-sm font-bold">FA</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          Frontend Architecture
                        </p>
                        <p className="text-xs text-zinc-500">
                          Dashboard System
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full shadow-sm"></div>
                      <p className="text-xs text-zinc-600 font-medium">
                        Optimized
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-zinc-200/60 transition-all hover:shadow-md">
                      <p className="text-xs text-zinc-500 mb-1 font-medium">
                        Bundle Size
                      </p>
                      <p className="text-lg font-bold text-zinc-900">245KB</p>
                      <p className="text-xs text-green-600 font-semibold">
                        -35%
                      </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-zinc-200/60 transition-all hover:shadow-md">
                      <p className="text-xs text-zinc-500 mb-1 font-medium">
                        Load Time
                      </p>
                      <p className="text-lg font-bold text-zinc-900">1.2s</p>
                      <p className="text-xs text-green-600 font-semibold">
                        -60%
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl border border-zinc-200/60 p-4 transition-all hover:shadow-md">
                    <p className="text-xs text-zinc-500 mb-4 font-medium">
                      Architecture Metrics
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-zinc-700">
                        <span className="font-medium">
                          Component Reusability
                        </span>
                        <span className="font-bold text-zinc-900">85%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-200 overflow-hidden">
                        <div
                          className="h-2 rounded-full bg-indigo-600 transition-all duration-1000"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-zinc-700">
                        <span className="font-medium">Type Coverage</span>
                        <span className="font-bold text-zinc-900">95%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-200 overflow-hidden">
                        <div
                          className="h-2 rounded-full bg-indigo-600 transition-all duration-1000"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm font-semibold text-zinc-600">
                  Scalable Frontend Architecture
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Performance Optimized
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6 self-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-zinc-950">
                  E-Commerce Platform
                </h3>
                <p className="text-lg text-zinc-600">
                  High-traffic online store struggling with conversion rates and
                  mobile performance.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-400"></span>
                      Redesigned checkout flow reducing cart abandonment by 40%
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-400"></span>
                      Implemented progressive web app features for mobile-first
                      experience
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-400"></span>
                      Built advanced product filtering and search with instant
                      results
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-400"></span>
                      Integrated real-time inventory and personalized
                      recommendations
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Node.js",
                      "MongoDB",
                      "Stripe",
                      "AWS",
                      "Redis",
                      "GraphQL",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-3">
                    Results & Impact
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zinc-900">40%</p>
                      <p className="text-xs text-zinc-600">Higher Conversion</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zinc-900">65%</p>
                      <p className="text-xs text-zinc-600">Mobile Traffic</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zinc-900">$2.1M</p>
                      <p className="text-xs text-zinc-600">Revenue Increase</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-md"
                  >
                    View Case Study
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-700 transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg overflow-hidden">
                <div className="h-full p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">S</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          Shop
                        </p>
                        <p className="text-xs text-zinc-500">E-Commerce</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <p className="text-xs text-zinc-600">Live</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-200 text-center">
                      <p className="text-xs text-zinc-500">Orders</p>
                      <p className="text-sm font-bold text-zinc-900">1,247</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-200 text-center">
                      <p className="text-xs text-zinc-500">Revenue</p>
                      <p className="text-sm font-bold text-zinc-900">$45.2K</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-200 text-center">
                      <p className="text-xs text-zinc-500">Conversion</p>
                      <p className="text-sm font-bold text-zinc-900">3.2%</p>
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-lg border border-zinc-200 p-4">
                    <p className="text-xs text-zinc-500 mb-3">
                      Product Categories
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span>Electronics</span>
                        <span className="font-medium">42%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: "42%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span>Clothing</span>
                        <span className="font-medium">28%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: "28%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span>Home & Garden</span>
                        <span className="font-medium">30%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-zinc-600">
                  Modern E-Commerce Platform
                </p>
                <p className="text-xs text-zinc-500">Mobile-First Design</p>
              </div>
            </div>
          </div>
        </article>

        {/* Project 3 */}
        <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6 self-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-zinc-950">
                  Healthcare Management System
                </h3>
                <p className="text-lg text-zinc-600">
                  Critical patient data system with outdated interface causing
                  errors and inefficiencies.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-400"></span>
                      Designed HIPAA-compliant interface with strict security
                      measures
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-400"></span>
                      Implemented real-time patient monitoring and alert systems
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-400"></span>
                      Built intuitive workflows reducing administrative time by
                      50%
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-400"></span>
                      Integrated with existing EMR systems and medical devices
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Electron",
                      "PostgreSQL",
                      "WebSocket",
                      "Docker",
                      "Kubernetes",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-3">
                    Results & Impact
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zinc-900">50%</p>
                      <p className="text-xs text-zinc-600">Time Reduction</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zinc-900">99.9%</p>
                      <p className="text-xs text-zinc-600">Uptime</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zinc-900">15</p>
                      <p className="text-xs text-zinc-600">Hospitals</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-md"
                  >
                    View Case Study
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-700 transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-50 to-green-100 shadow-lg overflow-hidden">
                <div className="h-full p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">H</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          HealthHub
                        </p>
                        <p className="text-xs text-zinc-500">Medical System</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <p className="text-xs text-zinc-600">Secure</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-zinc-200">
                      <p className="text-xs text-zinc-500 mb-1">
                        Active Patients
                      </p>
                      <p className="text-lg font-bold text-zinc-900">8,432</p>
                      <p className="text-xs text-green-600">+8.3%</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-zinc-200">
                      <p className="text-xs text-zinc-500 mb-1">
                        Response Time
                      </p>
                      <p className="text-lg font-bold text-zinc-900">
                        &lt;100ms
                      </p>
                      <p className="text-xs text-green-600">Critical</p>
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-lg border border-zinc-200 p-4">
                    <p className="text-xs text-zinc-500 mb-3">System Health</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-zinc-700">
                        <span>Database</span>
                        <span className="font-medium text-green-600">
                          Healthy
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-zinc-700">
                        <span>API Services</span>
                        <span className="font-medium text-green-600">
                          Online
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-zinc-700">
                        <span>Security</span>
                        <span className="font-medium text-green-600">
                          Active
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-zinc-700">
                        <span>Backup</span>
                        <span className="font-medium text-green-600">
                          Current
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-zinc-600">
                  HIPAA-Compliant Healthcare System
                </p>
                <p className="text-xs text-zinc-500">Critical Patient Care</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

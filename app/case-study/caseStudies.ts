export type CaseStudy = {
  slug: string;
  navTitle: string;
  cardSummary: string;
  eyebrow: string;
  title: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  problemHeading: string;
  problemText: string;
  impactHeading: string;
  impact: { label: string; value: string }[];
  approachEyebrow: string;
  approachHeading: string;
  approach: string[];
  howItWorksHeading?: string;
  howItWorksIntro?: string;
  howItWorks?: { title: string; text: string }[];
  challengesHeading?: string;
  challengesIntro?: string;
  challenges?: { title: string; text: string }[];
  techStackHeading?: string;
  techStackIntro?: string;
  techStack?: string[];
  closingHeading: string;
  closingText: string;
  note?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-onboarding-mcp-server",
    navTitle: "AI-Powered Developer Onboarding (MCP Server)",
    cardSummary:
      "An MCP server, triggered from Copilot in VS Code, that automates developer onboarding end to end.",
    eyebrow: "Microsoft Xbox · Tech Mahindra",
    title: "AI-powered onboarding: from two weeks to thirty minutes.",
    summary:
      "How an AI-powered MCP server turned a slow, manual developer setup ritual into a guided, self-serve flow that saves 80+ hours for every new developer who joins.",
    heroImage:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "AI-powered automation pipeline for developer onboarding",
    problemHeading: "Onboarding ate two weeks before a first commit.",
    problemText:
      "Every new developer faced the same manual gauntlet: VPN validation, Docker setup, authentication, builds, and linting. It was slow, error-prone, and repeated from scratch for each joiner, quietly costing the team days of senior engineering time.",
    impactHeading: "Days of setup collapsed into a single guided run.",
    impact: [
      { label: "Onboarding time", value: "2 wks → 30 min" },
      { label: "Saved per developer", value: "80+ hrs" },
      { label: "AI-powered tools", value: "21" },
    ],
    approachEyebrow: "Design Decisions",
    approachHeading: "The choices that made it stick.",
    approach: [
      "Meet developers where they already are. The flow triggers from the Copilot chat inside VS Code, so there is no new tool to learn and no long setup doc to follow.",
      "Build it as real software, not a script. The server validates state, handles errors, and recovers gracefully, so it holds up across different machines and edge cases.",
      "Keep a human in control. The developer asks for what they need and watches each step run, rather than handing over a black box.",
      "Make it reusable by default. The same flow works for every new joiner, so the time saved compounds with each hire.",
    ],
    howItWorksHeading: "One request, six steps, a ready-to-build project.",
    howItWorksIntro:
      "The server runs as a production MCP integration behind the Copilot chat developers already use, exposing 21 AI-powered tools across setup, infrastructure, networking, and daily operations.",
    howItWorks: [
      {
        title: "Triggered from Copilot chat",
        text: "A new developer opens VS Code, opens the Copilot chat, and simply asks to complete their onboarding and project setup.",
      },
      {
        title: "Checks identity and access",
        text: "The MCP server first validates credentials and pending entitlement or access requests, so setup never starts on a half-provisioned machine.",
      },
      {
        title: "Detects what is missing",
        text: "It compares the current environment against what the project needs and identifies the gaps: repositories to clone, software to install, and configuration to apply.",
      },
      {
        title: "Performs the setup itself",
        text: "Rather than printing instructions, the server runs the installs and configuration directly through its MCP tools, with error handling at each step.",
      },
      {
        title: "Completes the repository setup",
        text: "It clones and configures the repositories and wires in the run tools, leaving the developer with a project that builds and runs.",
      },
      {
        title: "Productive in about 30 minutes",
        text: "What used to take roughly two weeks of manual setup and doc-reading is done in one guided session, ready for the next joiner.",
      },
    ],
    challengesHeading: "The hard parts, and how I solved them.",
    challengesIntro:
      "The value was not in calling a model; it was in the systems work that made automation reliable on a messy real-world enterprise machine.",
    challenges: [
      {
        title: "Dual Node.js versions, no conflict",
        text: "The legacy frontend needs Node 14 while the MCP SDK needs Node 18+. A PowerShell launcher finds or auto-installs Node 20 through nvm without touching the system default, so a new machine just works with zero configuration.",
      },
      {
        title: "Self-propagating IP detection",
        text: "Cloud dev VMs get a new IP on every restart, breaking IIS bindings, hosts entries, and frontend config. The server auto-detects the primary adapter and propagates the IP across every config file.",
      },
      {
        title: "Auto-activating time-limited access",
        text: "Azure Contributor roles expire every 8 hours via PIM, and a forgotten reactivation breaks deployments. The PIM REST API flow is automated so the role self-activates with a justification, no portal clicks.",
      },
      {
        title: "A self-healing morning check",
        text: "One command verifies network, VPN, Azure role, Docker, IP, hosts, firewall, IIS, certificates, and Node, then auto-fixes what it can and returns clear pass/fail/fix guidance for the rest.",
      },
    ],
    techStackHeading: "Production stack, not a prototype.",
    techStackIntro:
      "Roughly 6,000+ lines of TypeScript across 21 tools and utilities, built to the MCP specification with progress reporting and error handling throughout.",
    techStack: [
      "TypeScript",
      "Node.js 20",
      "Model Context Protocol (MCP) SDK",
      "JSON-RPC 2.0 (stdio)",
      "GitHub Copilot Agent Mode",
      "PowerShell (Windows automation)",
      "Azure PIM REST API",
      "Azure CLI",
      "Windows IIS",
      "Docker",
    ],
    closingHeading: "I turn AI into tooling teams actually use.",
    closingText:
      "The strongest AI work is not a demo. It is a deployed tool that removes real friction, holds up in production, and gets adopted across a team. This project pairs GenAI and MCP with full-stack engineering and developer-experience thinking.",
    note: "My own concept, architecture, and build. Full implementation details shared on request.",
  },
  {
    slug: "incidentiq",
    navTitle: "IncidentIQ: Agentic AI for Incident Response",
    cardSummary:
      "An agentic pipeline that takes a production alert to a merge-ready pull request, with a human on every merge.",
    eyebrow: "Microsoft Xbox · Tech Mahindra · CodeRush 2026 Finalist",
    title: "IncidentIQ: from a production alert to a merge-ready PR.",
    summary:
      "An AI-powered incident-management agent that classifies a signal, retrieves similar past incidents, forms a root-cause hypothesis, and drafts the fix, with a mandatory human review on every merge.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "AI incident intelligence dashboard and analytics",
    problemHeading: "Incident management was roughly 80% manual.",
    problemText:
      "Engineers filed tickets by hand hours after a failure, about 30% of incidents were routed to the wrong on-call team, and triage started only after 20 to 40 minutes of manual log reading. The same incidents were re-investigated repeatedly, with no institutional memory.",
    impactHeading: "Toil replaced by minutes of review.",
    impact: [
      { label: "Signal to draft PR (POC)", value: "<10 min" },
      { label: "Routing accuracy (POC)", value: "~95%" },
      { label: "Human review", value: "Every merge" },
    ],
    approachEyebrow: "Design Decisions",
    approachHeading: "Safety designed in, not bolted on.",
    approach: [
      "Retrieval-grounded. With no citation from a past incident or runbook, the agent makes no recommendation. This eliminates the most common LLM failure mode: a hallucinated fix.",
      "Confidence threshold. Below the threshold the agent escalates to a human instead of guessing.",
      "Human-in-the-loop is mandatory. Nothing auto-merges. The engineer stays accountable for every code change.",
      "PII and secret pre-processor runs before any model call, with a full audit log per action.",
      "Model routing. Cheap classification runs on a small model, reasoning on a larger one, under a per-incident cost cap.",
    ],
    howItWorksHeading: "Five autonomous stages with a learning loop.",
    howItWorksIntro:
      "A single agent pipeline takes a raw signal all the way to a draft fix, then feeds the outcome of every closed incident back into the retrieval store.",
    howItWorks: [
      {
        title: "Ingest",
        text: "Webhook ingest from monitoring and alerting tools, plus user reports.",
      },
      {
        title: "Analyze",
        text: "An LLM reasons over historical incidents and runbooks retrieved with hybrid search (keyword plus embeddings).",
      },
      {
        title: "Decide",
        text: "Severity, routing, and a root-cause hypothesis are produced with a confidence score.",
      },
      {
        title: "Act",
        text: "The agent opens the ticket, creates the branch, and drafts the PR. It never auto-merges.",
      },
      {
        title: "Learn",
        text: "The outcome of every closed incident is fed back into the retrieval store to sharpen future recommendations.",
      },
    ],
    challengesHeading: "The risks I had to plan for.",
    challengesIntro:
      "An agent that touches incident response has to be defensible to a reliability and compliance reviewer before it is useful.",
    challenges: [
      {
        title: "Acting on a wrong recommendation",
        text: "Human-in-the-loop is mandatory and nothing auto-applies; a PR review is always required before merge.",
      },
      {
        title: "A hallucinated fix",
        text: "Retrieval-grounding means no citation, no suggestion, backed by a confidence threshold that escalates uncertain cases.",
      },
      {
        title: "Sensitive data reaching the model",
        text: "A pre-processor redacts secret patterns, and Azure-hosted models do not train on prompts.",
      },
      {
        title: "Cost exceeding the savings",
        text: "Model routing sends classification to a small model and reasoning to a larger one, under a per-incident cost cap.",
      },
    ],
    techStackHeading: "Built on the Azure AI stack.",
    techStackIntro:
      "An agent orchestration layer over Azure OpenAI and hybrid retrieval, with continuous evaluation and per-recommendation tracing.",
    techStack: [
      "Microsoft Agent Framework",
      "Azure OpenAI (GPT-4o, GPT-4o-mini)",
      "Azure AI Search (hybrid retrieval)",
      "RAG",
      "Azure Functions",
      "Event Grid / Service Bus",
      "Application Insights",
      "Responsible AI",
    ],
    closingHeading: "Agentic AI that stays accountable.",
    closingText:
      "The interesting part of an incident agent is not the model call; it is the grounding, the confidence gating, and the human-in-the-loop contract that make automation trustworthy. POC results are illustrative of POC-scale measurements, not enterprise rollout claims.",
    note: "POC complete, intelligence layer in progress. My own concept and architecture; full implementation details shared on request.",
  },
  {
    slug: "shieldai",
    navTitle: "ShieldAI: AI-Augmented Pre-Release Safety Gate",
    cardSummary:
      "A CD pipeline gate that catches production breakage in ~30 seconds: deterministic checks block, AI advises, humans decide.",
    eyebrow: "Microsoft Xbox · Tech Mahindra",
    title: "ShieldAI: catch production breakage in about 30 seconds.",
    summary:
      "An AI-augmented pre-release gate that runs in parallel to existing tests and catches the failure classes green suites miss, on a simple contract: deterministic checks block, AI advises, humans decide.",
    heroImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Continuous delivery pipeline safety checks and deployment verification",
    problemHeading: "A real gap between green tests and production.",
    problemText:
      "Between staging tests passing and manual approval to push, nothing actually verified the deployed app behaved correctly. Visual regressions, silent dependency failures, 403 and 401 API errors, infra drift, and cascading failures all slipped through. One real example: an admin page returned 403 on a batch endpoint after a deploy, went undetected for days, and needed a manual postmortem, with test coverage green the whole time.",
    impactHeading: "Zero critical-path cost, real coverage gained.",
    impact: [
      { label: "Gate runtime", value: "~30 sec" },
      { label: "Tests passing", value: "51" },
      { label: "Failure classes caught", value: "5" },
    ],
    approachEyebrow: "Design Decisions",
    approachHeading: "Deterministic checks block. AI advises. Humans decide.",
    approach: [
      "The AI never gates a deploy on its own opinion. Only verifiable, deterministic signals can block; humans make the final call.",
      "The gate runs in parallel to the existing Playwright stage, so critical-path time is the max of the two, not the sum. The target budget is about 30 seconds.",
      "A dual-provider design (GitHub Models by default, Azure OpenAI for single-tenant) sits behind one config flag, so teams that need stricter data control swap with no application code changes.",
      "Rollback is a one-line YAML removal, so teams trust a tool they can remove instantly.",
    ],
    howItWorksHeading: "Six checks in two categories.",
    howItWorksIntro:
      "The gate drops in parallel to existing end-to-end tests and runs three deterministic checks that can block and three AI checks that only advise.",
    howItWorks: [
      {
        title: "Frontend render (blocks)",
        text: "A real browser loads each app and verifies that it renders, navigation works, and JS and CSS load.",
      },
      {
        title: "Backend API health (blocks)",
        text: "HTTP checks run against configured endpoints to catch dead-on-arrival services.",
      },
      {
        title: "Dependency and TLS (blocks)",
        text: "Reachability and certificate expiry checks catch silent dependency and SSL failures.",
      },
      {
        title: "AI visual verification (advises)",
        text: "A vision model analyzes screenshots for regressions a status code cannot see.",
      },
      {
        title: "AI failure diagnosis (advises)",
        text: "When a deterministic check fails, a model explains the likely root cause to speed up triage.",
      },
      {
        title: "AI risk scoring (advises)",
        text: "A model scores deployment risk from the change set to inform the reviewer.",
      },
    ],
    challengesHeading: "Why the design holds up.",
    challengesIntro:
      "Every objection a platform or compliance reviewer would raise had to have an answer built in.",
    challenges: [
      {
        title: "Will this slow down deploys?",
        text: "It runs in parallel to the existing test stage, so critical-path time is the max of the two, with a target of about 30 seconds.",
      },
      {
        title: "What if the AI is wrong?",
        text: "AI checks are advisory only. Only deterministic signals can block a deploy.",
      },
      {
        title: "What about flaky checks?",
        text: "Deterministic checks have explicit retry and timeout policy and publish full reports, so a human can override in seconds.",
      },
      {
        title: "What about data leaving our boundary?",
        text: "The default provider keeps data inside the Microsoft boundary; enterprise mode keeps it inside the team's own Azure tenant, with a secret scrubber before any model call.",
      },
    ],
    techStackHeading: "Pipeline-native, provider-flexible.",
    techStackIntro:
      "A declarative pipeline stage with browser automation and a swappable model provider, publishing standard report artifacts.",
    techStack: [
      "Playwright (Chromium)",
      "CD pipeline (declarative YAML)",
      "GitHub Models",
      "Azure OpenAI",
      "Managed Identity",
      "Vision models",
      "JUnit XML / JSON reports",
      "Responsible AI",
    ],
    closingHeading: "AI as an advisor, not an authority.",
    closingText:
      "The core design call is the block-advise-decide contract: verifiable checks hold the gate, AI adds judgement where it helps, and humans stay in charge. That is what makes an AI safety tool defensible to the people who own production.",
    note: "Implementation complete, 51 tests passing, ready for review. My own concept and architecture; full implementation details shared on request.",
  },
  {
    slug: "legacy-ui-modernization",
    navTitle: "Legacy UI Modernization (Angular to React)",
    cardSummary:
      "A React 18 + TypeScript migration of a legacy Angular 1.x portal (~20 pages) with reusable patterns adopted by the team and zero backend changes.",
    eyebrow: "Microsoft Xbox · Tech Mahindra",
    title: "Legacy UI modernization: Angular 1.x to React, zero backend changes.",
    summary:
      "Leading the React modernization of a legacy Angular 1.x configuration portal inside a large enterprise monorepo, with feature parity across ~20 pages and reusable patterns the rest of the team adopted.",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Source code on screen representing a React and TypeScript migration",
    problemHeading: "The last Angular 1.x holdout in a React monorepo.",
    problemText:
      "An end-of-life Angular 1.x portal that internal users relied on to configure platform features had drifted from the team's design system, forced full-page navigation for every edit, and lacked dark theme, consistent error handling, and accessibility. The rest of the parent portal had standardized on React and Redux in a monorepo.",
    impactHeading: "A modern foundation, identical behavior.",
    impact: [
      { label: "Admin pages", value: "~20" },
      { label: "Backend changes", value: "Zero" },
      { label: "Target stack", value: "React 18 + TS" },
    ],
    approachEyebrow: "Approach",
    approachHeading: "Migration, not redesign. Parity first.",
    approach: [
      "Built the shared chassis first: Redux store wiring, auth integrated with the host portal's token model, a layout shell, and a local Express proxy, so every page migration could focus on UI and data, not plumbing.",
      "Migrated page by page against a fixed template, so once the first two reference pages were done, every later page followed the same shape.",
      "Used one saga per feature domain that mirrored the legacy service calls one-for-one, making it trivial to delete legacy code as each domain landed.",
      "Wrapped all server data in a loading/content/error envelope, eliminating a class of is-it-loading-or-empty bugs the legacy app had.",
      "Replaced per-edit route navigation with inline overlay modals, removing route sprawl and preserving user context.",
    ],
    challengesHeading: "Notable technical challenges.",
    challengesIntro:
      "Most of the real work was HTTP-level and integration detail that only surfaces in a large, live enterprise system.",
    challenges: [
      {
        title: "Dev server broke static assets",
        text: "The monorepo dev server forced a custom Content-Type that broke serving images from public. The fix was to import images through the bundler instead, documented as a gotcha for contributors.",
      },
      {
        title: "Conflicting 409 semantics on import",
        text: "The import flow returned 409 both for a genuine conflict and for no-op. Inspecting the response marker let me surface no-op as a warning instead of a hard error, and the bug reports stopped within a week.",
      },
      {
        title: "ETag came from a different field per service",
        text: "Two related services nested the ETag differently, causing silent overwrite-on-save bugs. Centralizing extraction with a typed helper made it impossible to read the wrong field.",
      },
      {
        title: "Identifier ambiguity across services",
        text: "Two similarly named IDs were easy to mix up and only failed at the backend. Branded TypeScript types made them non-interchangeable, with the right-ID decision centralized in one place.",
      },
      {
        title: "Environment-aware host routing",
        text: "A single helper combined build-injected env vars in dev and fell back to the current origin in production, so every saga routed correctly with zero hardcoded URLs in feature code.",
      },
    ],
    techStackHeading: "Monorepo-standard, deliberately boring.",
    techStackIntro:
      "Aligned to the monorepo's existing conventions rather than introducing net-new tools, so other engineers could contribute immediately.",
    techStack: [
      "React 18 (hooks only)",
      "TypeScript (strict, branded types)",
      "Redux + redux-saga",
      "React Router v6",
      "CSS Modules + CSS variables",
      "Yarn workspaces (monorepo)",
      "Webpack",
      "Node.js + Express (dev proxy)",
    ],
    closingHeading: "Patterns that outlive the migration.",
    closingText:
      "Beyond feature parity, the win was a set of house rules (saga-per-domain, an LCE state envelope, inline modals, themed CSS variables) that other engineers followed page by page, so the codebase stayed consistent as it grew. UX improvements like dark theme and clearer error states came for free with a clean rewrite.",
    note: "Ongoing migration, sanitized for sharing. Full implementation details available on request.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

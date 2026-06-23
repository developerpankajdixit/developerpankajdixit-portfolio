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
      "A tool in VS Code's Copilot chat that sets up a new developer's whole environment, and runs the project day to day, from two simple messages.",
    eyebrow: "Microsoft Xbox · Tech Mahindra",
    title: "AI-powered onboarding: from two weeks to thirty minutes.",
    summary:
      "During my own onboarding I hit the same slow, manual setup everyone did. So I documented every missing step, simplified the process, and then built an AI tool that does the whole thing. A new developer is now ready in under 30 minutes instead of about two weeks, and the same tool also handles the daily project start-up.",
    heroImage:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "AI-powered automation pipeline for developer onboarding",
    problemHeading: "Both first setup and daily start-up were slow and manual.",
    problemText:
      "The project had a complicated setup spread across a 15-step guide and several wiki pages: install the software, configure the web server (IIS), connect the VPN, install and run Docker, download images, start the Azure services, set up Visual Studio, and clone the code. It was easy to miss a step, and almost everyone hit problems that were not written down anywhere. Even after setup, starting the project each day meant repeating many of those steps by hand.",
    impactHeading: "Two weeks of setup became one guided run.",
    impact: [
      { label: "Onboarding time", value: "2 wks → 30 min" },
      { label: "Saved per developer", value: "80+ hrs" },
      { label: "AI-powered tools", value: "21" },
    ],
    approachEyebrow: "Design Decisions",
    approachHeading: "The choices that made it work.",
    approach: [
      "Understand the real process first. During my own onboarding I wrote down every step missing from the old docs and built a clear wiki, so I knew the full picture before automating anything.",
      "Simplify before automating. I cut steps that were not needed (for example, no longer opening Visual Studio just to build and clean the project over and over), so the tool was not automating busywork.",
      "Use the tool developers already have. It runs inside the Copilot chat in VS Code, so there is nothing new to learn.",
      "Build it as real, reliable software, not a quick script, with prerequisite checks and error handling so it works on different machines.",
      "Automate both halves: the one-time setup and the daily project start-up, since both were manual and repeated.",
    ],
    howItWorksHeading: "Two chat messages do the whole job.",
    howItWorksIntro:
      "Once the tool was in place, a developer only needs two messages in the Copilot chat: one to set everything up, and one to run the project. Behind those messages, 21 small AI tools do the work.",
    howItWorks: [
      {
        title: "Message 1: full onboarding setup",
        text: "The developer opens the Copilot chat and asks for a full setup. The tool takes it from there.",
      },
      {
        title: "Checks access first",
        text: "It confirms login and access permissions before anything else, so setup never starts on a half-ready machine.",
      },
      {
        title: "Installs and configures everything",
        text: "It checks prerequisites, installs missing software, sets up the web server, VPN, Docker, certificates, and Azure access, and clones and configures the code, handling errors as it goes.",
      },
      {
        title: "Message 2: run the project locally",
        text: "A second message starts the daily run: it brings up Docker, starts the Azure services, builds the solution, and runs the container scripts, all the tasks that used to be manual every day.",
      },
      {
        title: "A daily health check",
        text: "One command checks network, VPN, access, Docker, addresses, firewall, web server, and certificates, and fixes what it can.",
      },
      {
        title: "The result",
        text: "Onboarding drops from about two weeks to under 30 minutes, and the daily start-up becomes a single message.",
      },
    ],
    challengesHeading: "The hard parts, and how I solved them.",
    challengesIntro:
      "The hard part was not calling an AI model. It was the engineering that made the automation reliable on a real, messy work machine.",
    challenges: [
      {
        title: "Two versions of Node.js without clashes",
        text: "The older part of the app needs an older Node.js, but the AI tool needs a newer one. A small setup script finds or installs the right version on its own, so a new machine just works with no manual config.",
      },
      {
        title: "Handling changing network addresses",
        text: "Cloud dev machines get a new network (IP) address on every restart, which breaks the local setup. The tool detects the new address and updates every config file automatically, ending a daily manual chore.",
      },
      {
        title: "Auto-renewing temporary access",
        text: "Cloud access permissions expire every 8 hours, and forgetting to renew them breaks deployments. The tool renews them automatically, with no clicking through the Azure portal.",
      },
      {
        title: "A self-checking daily health check",
        text: "One command checks network, VPN, access, Docker, address, firewall, web server, certificates, and Node.js, fixes what it can, and clearly reports what still needs attention.",
      },
    ],
    techStackHeading: "Real production software, not a demo.",
    techStackIntro:
      "About 6,000 lines of TypeScript across 21 tools, built to the MCP standard with progress updates and error handling throughout.",
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
    closingHeading: "From my own pain point to a team-wide tool.",
    closingText:
      "This started with my own onboarding frustration and grew into a tool the whole team uses for both setup and daily work, earning direct appreciation from the Microsoft project lead. It is a good example of how I work: find the real problem, simplify it, then automate it as reliable software.",
    note: "My own concept, architecture, and build. Full implementation details shared on request.",
  },
  {
    slug: "incidentiq",
    navTitle: "IncidentIQ: AI Agent for Incident Response",
    cardSummary:
      "An AI agent that takes a live system alert and turns it into a ready-to-review fix, with a person approving every change.",
    eyebrow: "Microsoft Xbox · Tech Mahindra · CodeRush 2026 Finalist",
    title: "IncidentIQ: from a system alert to a ready-to-review fix.",
    summary:
      "An AI agent for handling production problems. When an alert comes in, it sorts it, looks up similar past incidents, suggests the likely cause, and drafts a fix, but a person reviews and approves every change.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "AI incident intelligence dashboard and analytics",
    problemHeading: "Handling incidents was about 80% manual.",
    problemText:
      "When something broke, engineers created tickets by hand hours later, around 30% of incidents went to the wrong team, and real investigation only started after 20 to 40 minutes of reading logs. The same problems were investigated again and again, because nothing remembered past fixes.",
    impactHeading: "Hours of busywork became minutes of review.",
    impact: [
      { label: "Alert to draft fix (POC)", value: "<10 min" },
      { label: "Routing accuracy (POC)", value: "~95%" },
      { label: "Human review", value: "Every change" },
    ],
    approachEyebrow: "Design Decisions",
    approachHeading: "Safety built in from the start.",
    approach: [
      "Grounded in real history. The agent only suggests a fix if it can point to a similar past incident or a runbook (a step-by-step guide for a known problem). This prevents the most common AI mistake: confidently inventing a wrong answer.",
      "Knows when to step back. If it is not confident enough, it hands the incident to a person instead of guessing.",
      "A person always approves. Nothing is merged automatically; an engineer reviews and owns every code change.",
      "Protects sensitive data. It removes secrets and private data before anything is sent to the AI model, and logs every action.",
      "Controls cost. Simple sorting uses a small, cheap model; deeper reasoning uses a bigger one, with a spending cap per incident.",
    ],
    howItWorksHeading: "Five steps, and it learns over time.",
    howItWorksIntro:
      "One pipeline takes a raw alert all the way to a draft fix, then feeds the result of every closed incident back in so it keeps getting better.",
    howItWorks: [
      {
        title: "Receive",
        text: "It takes in alerts from monitoring tools and reports from users.",
      },
      {
        title: "Analyze",
        text: "The AI reviews similar past incidents and guides, found using both keyword and meaning-based search.",
      },
      {
        title: "Decide",
        text: "It sets the severity, picks the right team, and suggests a likely cause, along with a confidence score.",
      },
      {
        title: "Act",
        text: "It opens the ticket, creates a code branch, and drafts the fix. It never merges on its own.",
      },
      {
        title: "Learn",
        text: "The outcome of every closed incident is saved so future suggestions get better.",
      },
    ],
    challengesHeading: "The risks I planned for.",
    challengesIntro:
      "An AI that touches live incident handling has to satisfy a reliability and security reviewer before anyone will trust it.",
    challenges: [
      {
        title: "Acting on a wrong suggestion",
        text: "A person must review and approve every change before it goes in; nothing applies automatically.",
      },
      {
        title: "The AI inventing a fake fix",
        text: "It can only suggest something it can back up with a real source, plus a confidence score that sends shaky cases to a person.",
      },
      {
        title: "Sensitive data reaching the AI",
        text: "Secrets and private data are stripped out first, and the AI models do not train on the input.",
      },
      {
        title: "Cost growing larger than the savings",
        text: "Cheap tasks use a small model and only deeper work uses a bigger one, with a spending cap per incident.",
      },
    ],
    techStackHeading: "Built on Azure's AI tools.",
    techStackIntro:
      "An AI agent layer over Azure OpenAI and smart search, with ongoing quality checks and tracing for every recommendation.",
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
      "The interesting part is not calling an AI model. It is the grounding in real history, the confidence checks, and the rule that a person approves everything, which together make the automation trustworthy. The numbers here are from a proof-of-concept, not a full company-wide rollout.",
    note: "POC complete, intelligence layer in progress. My own concept and architecture; full implementation details shared on request.",
  },
  {
    slug: "shieldai",
    navTitle: "ShieldAI: AI-Assisted Pre-Release Safety Check",
    cardSummary:
      "A safety check in the release pipeline that catches broken releases in about 30 seconds: strict checks block, AI advises, people decide.",
    eyebrow: "Microsoft Xbox · Tech Mahindra",
    title: "ShieldAI: catch broken releases in about 30 seconds.",
    summary:
      "A safety check that runs right before a release, alongside the existing tests. It catches the kinds of failures normal tests miss, on a simple rule: strict checks can block a release, AI only gives advice, and people make the final call.",
    heroImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Continuous delivery pipeline safety checks and deployment verification",
    problemHeading: "A real gap between 'tests passed' and 'live'.",
    problemText:
      "Between the tests passing and someone approving the release, nothing actually checked that the live app really worked. Blank pages, broken logins, 'access denied' errors on data, and dead services all slipped through. One real case: an admin page started returning an 'access denied' error after a release, went unnoticed for days, and needed a manual investigation, while all the tests stayed green the whole time.",
    impactHeading: "No added wait, real safety gained.",
    impact: [
      { label: "Check runtime", value: "~30 sec" },
      { label: "Tests passing", value: "51" },
      { label: "Failure types caught", value: "5" },
    ],
    approachEyebrow: "Design Decisions",
    approachHeading: "Strict checks block. AI advises. People decide.",
    approach: [
      "The AI never blocks a release on its own opinion. Only clear, provable checks can block; people make the final call.",
      "It runs at the same time as the existing tests, so it adds almost no extra wait, around 30 seconds.",
      "It works with two AI providers behind a single setting, so teams that need stricter data control can switch with no code changes.",
      "Turning it off is a one-line change, so teams trust a tool they can remove instantly.",
    ],
    howItWorksHeading: "Six checks in two groups.",
    howItWorksIntro:
      "It runs next to the existing tests: three strict checks that can block a release, and three AI checks that only give advice.",
    howItWorks: [
      {
        title: "Page loads (can block)",
        text: "A real browser opens each app and confirms it actually displays, the menus work, and the code and styles load.",
      },
      {
        title: "Backend health (can block)",
        text: "It checks the key services to catch ones that are dead on arrival.",
      },
      {
        title: "Dependencies and security certs (can block)",
        text: "It confirms required services are reachable and that security certificates have not expired.",
      },
      {
        title: "AI visual check (advice)",
        text: "An AI looks at screenshots for visual problems a simple status code cannot catch.",
      },
      {
        title: "AI cause explanation (advice)",
        text: "When a strict check fails, an AI explains the likely cause to speed up the fix.",
      },
      {
        title: "AI risk score (advice)",
        text: "An AI rates how risky the release is based on what changed, to inform the reviewer.",
      },
    ],
    challengesHeading: "Why the design holds up.",
    challengesIntro:
      "Every objection a platform or security reviewer might raise has a built-in answer.",
    challenges: [
      {
        title: "Will it slow down releases?",
        text: "It runs at the same time as the existing tests, so it adds only about 30 seconds.",
      },
      {
        title: "What if the AI is wrong?",
        text: "AI checks are advice only. Only the strict, provable checks can block a release.",
      },
      {
        title: "What about unreliable checks?",
        text: "The strict checks retry and time out sensibly and publish full reports, so a person can override in seconds.",
      },
      {
        title: "What about data leaving our systems?",
        text: "By default the data stays inside Microsoft's systems; a stricter mode keeps it inside the team's own cloud, and secrets are removed before any AI call.",
      },
    ],
    techStackHeading: "Fits the pipeline, flexible on AI provider.",
    techStackIntro:
      "A simple release-pipeline step that drives a real browser and can swap its AI provider, publishing standard reports.",
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
    closingHeading: "AI as an advisor, not the decision-maker.",
    closingText:
      "The key idea is the 'block, advise, decide' rule: provable checks hold the gate, AI adds judgment where it helps, and people stay in charge. That is what makes an AI safety tool something the people who own production can trust.",
    note: "Implementation complete, 51 tests passing, ready for review. My own concept and architecture; full implementation details shared on request.",
  },
  {
    slug: "legacy-ui-modernization",
    navTitle: "Legacy UI Rebuild (Angular to React)",
    cardSummary:
      "Rebuilt an old Angular 1.x admin tool (~20 pages) in modern React and TypeScript, with reusable patterns the team adopted and no backend changes.",
    eyebrow: "Microsoft Xbox · Tech Mahindra",
    title: "Legacy UI rebuild: old Angular to modern React, no backend changes.",
    summary:
      "Leading the rebuild of an old, end-of-life admin tool from Angular 1.x to modern React and TypeScript, inside a large shared codebase. It matches the old features across about 20 pages, and the patterns I set up were reused by the rest of the team.",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    heroAlt: "Source code on screen representing a React and TypeScript rebuild",
    problemHeading: "The last old Angular tool in a modern React codebase.",
    problemText:
      "An old Angular 1.x tool that internal users relied on to configure features had fallen behind. It looked different from the rest of the product, made you load a whole new page just to edit one thing, and had no dark mode, weak error messages, and poor accessibility. Everything else had already moved to modern React.",
    impactHeading: "A modern base, exactly the same behavior.",
    impact: [
      { label: "Admin pages", value: "~20" },
      { label: "Backend changes", value: "Zero" },
      { label: "New stack", value: "React 18 + TS" },
    ],
    approachEyebrow: "Approach",
    approachHeading: "A rebuild, not a redesign. Match features first.",
    approach: [
      "Set up the shared foundation first (data handling, login, layout, and a local connection helper), so each page could focus on the screen and its data instead of plumbing.",
      "Rebuilt one page at a time using a fixed template, so after the first two example pages, every other page followed the same shape.",
      "Gave each feature area its own data module that mirrored the old app exactly, making it easy to delete the old code as each part was finished.",
      "Wrapped all server data in a clear 'loading / loaded / error' pattern, removing a whole class of confusing 'is it loading or empty?' bugs.",
      "Replaced 'open a new page to edit' with pop-up edit windows, so users keep their place on the screen.",
    ],
    challengesHeading: "Notable technical challenges.",
    challengesIntro:
      "Most of the real work was in the small integration details that only show up in a large, live system.",
    challenges: [
      {
        title: "The dev server broke images",
        text: "A server setting broke loading images the normal way. I loaded them through the build tool instead and documented it for other developers.",
      },
      {
        title: "One error code meant two different things",
        text: "An import action returned the same error code for a real conflict and for 'nothing changed.' I detected the 'nothing changed' case and showed it as a harmless note instead of a scary error, and the bug reports stopped within a week.",
      },
      {
        title: "A version tag came from different places",
        text: "Two related services stored the same version tag in different spots, causing silent 'saved over your changes' bugs. I centralized reading it so the wrong spot could not be used by mistake.",
      },
      {
        title: "Two similar IDs were easy to confuse",
        text: "Two look-alike IDs only failed deep in the backend when mixed up. I used the type system to make them impossible to swap by accident, and chose the right one in a single place.",
      },
      {
        title: "Right address for each environment",
        text: "One helper picked the correct server address for development versus production automatically, so there were no hard-coded addresses anywhere in the feature code.",
      },
    ],
    techStackHeading: "Standard for the codebase, deliberately boring.",
    techStackIntro:
      "I stuck to the team's existing tools instead of adding new ones, so other engineers could jump in right away.",
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
    closingHeading: "Patterns that outlast the rebuild.",
    closingText:
      "Beyond matching the old features, the real win was a set of shared patterns that other engineers reused page by page, keeping the code consistent as it grew. Nice extras like dark mode and clearer error messages came for free with the clean rebuild.",
    note: "Ongoing rebuild, sanitized for sharing. Full implementation details available on request.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

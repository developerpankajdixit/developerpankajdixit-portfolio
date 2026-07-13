# pankajdixit.com

Personal portfolio of Pankaj Dixit, AI Engineer and Full-Stack Developer. Built with Next.js (App Router), TypeScript, and Tailwind CSS, deployed on Vercel.

Live site: [pankajdixit.com](https://pankajdixit.com)

## What's inside

- Home page with proof points, selected work, focus areas, and a contact form
- Case studies with problem, impact, design decisions, and technical challenges for each project (AI-powered developer onboarding MCP server, IncidentIQ, ShieldAI, legacy UI modernization)
- About page with skills, certifications, and recognition
- Downloadable resume (PDF)

## Tech stack

- Next.js with the App Router and TypeScript
- Tailwind CSS
- Resend for the contact form email delivery
- Vercel for hosting, analytics, and speed insights

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The contact form needs a Resend API key in `.env.local`:

```
RESEND_API_KEY=your_key_here
```

Everything else runs without configuration.

## Project structure

```
app/
  page.tsx                  Home
  about/                    About, skills, certifications
  case-study/               Case study listing and detail pages
  components/               Header, footer, projects grid, contact form
  api/contact/              Contact form email endpoint
public/                     Images and the downloadable resume
```

## Checks

```bash
npx tsc --noEmit
npx eslint app
npm run build
```

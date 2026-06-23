import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="section-shell py-16">
      <div className="surface rounded-lg p-6">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-zinc-700">
          This is a short privacy notice for the portfolio site. I respect your
          privacy and never sell your personal data. Contact form submissions
          are stored only to respond to inquiries and are deleted upon request.
        </p>

        <h2 className="mt-6 text-lg font-semibold">Analytics</h2>
        <p className="mt-2 text-sm text-zinc-700">
          This site uses minimal analytics to measure traffic and improve
          performance. No personally-identifiable information is collected or
          sold.
        </p>

        <h2 className="mt-6 text-lg font-semibold">Contact</h2>
        <p className="mt-2 text-sm text-zinc-700">
          For privacy requests, email me at{' '}
          <a href="mailto:developerpankajdixit@gmail.com" className="font-semibold">
            developerpankajdixit@gmail.com
          </a>
          .
        </p>

        <p className="mt-6 text-xs text-zinc-500">Return to <Link href="/">home</Link>.</p>
      </div>
    </main>
  );
}

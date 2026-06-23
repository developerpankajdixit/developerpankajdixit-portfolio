import Link from "next/link";

export default function CopyrightPage() {
  const year = new Date().getFullYear();
  return (
    <main className="section-shell py-16">
      <div className="surface rounded-lg p-6">
        <h1 className="text-2xl font-bold">Copyright & Terms</h1>
        <p className="mt-4 text-sm text-zinc-700">
          © {year} Pankaj Dixit. All rights reserved. The content, design, and
          code on this site are owned by Pankaj Dixit unless otherwise noted.
        </p>

        <h2 className="mt-6 text-lg font-semibold">Permissions</h2>
        <p className="mt-2 text-sm text-zinc-700">
          You may link to pages on this portfolio and share public information
          for personal, non-commercial use. For any reuse or republication of
          site content, please contact me for written permission.
        </p>

        <p className="mt-6 text-xs text-zinc-500">
          Return to <Link href="/">home</Link>.
        </p>
      </div>
    </main>
  );
}

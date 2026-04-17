"use client";

import { FormEvent, useState } from "react";

type ContactFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const recipientEmail = "developerpankajdixit@gmail.com";

const initialFields: ContactFields = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function buildMailtoUrl(fields: ContactFields) {
  const subject = encodeURIComponent(
    `Portfolio inquiry from ${fields.name || "website visitor"}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${fields.name || "-"}`,
      `Email: ${fields.email || "-"}`,
      `Company: ${fields.company || "-"}`,
      "",
      "Project details:",
      fields.message || "-",
    ].join("\n"),
  );

  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(initialFields);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailtoUrl(fields);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/25 bg-white/5 p-5 backdrop-blur sm:p-6"
      aria-label="Quick contact form"
    >
      <h3 className="text-lg font-bold text-white">Quick Contact Form</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-200">
        Submit this form to open your email app with a pre-filled message.
      </p>

      <div className="mt-5 grid gap-4">
        <label className="text-sm font-semibold text-zinc-100" htmlFor="contact-name">
          Name
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={fields.name}
            onChange={(event) =>
              setFields((previous) => ({ ...previous, name: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-zinc-300 focus:border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300/30"
            placeholder="Your name"
          />
        </label>

        <label className="text-sm font-semibold text-zinc-100" htmlFor="contact-email">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={(event) =>
              setFields((previous) => ({ ...previous, email: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-zinc-300 focus:border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300/30"
            placeholder="you@example.com"
          />
        </label>

        <label className="text-sm font-semibold text-zinc-100" htmlFor="contact-company">
          Company (optional)
          <input
            id="contact-company"
            name="company"
            autoComplete="organization"
            value={fields.company}
            onChange={(event) =>
              setFields((previous) => ({ ...previous, company: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-zinc-300 focus:border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300/30"
            placeholder="Company name"
          />
        </label>

        <label className="text-sm font-semibold text-zinc-100" htmlFor="contact-message">
          Project details
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            value={fields.message}
            onChange={(event) =>
              setFields((previous) => ({ ...previous, message: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-zinc-300 focus:border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300/30"
            placeholder="Tell me about your project, timeline, and goals."
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn-primary mt-5 w-full border-lime-300 bg-lime-300 text-zinc-950 hover:border-white hover:bg-white"
      >
        Send Inquiry
      </button>
    </form>
  );
}

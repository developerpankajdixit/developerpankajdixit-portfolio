"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

type ContactFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFields: ContactFields = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(initialFields);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!fields.name.trim()) return "Name is required";
    if (!fields.email.trim()) return "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email)) return "Enter a valid email";

    if (!fields.message.trim()) return "Project details are required";

    return null;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      toast.error(validationError);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFields(initialFields);
      } else {
        toast.error("Something went wrong");
      }
    } catch {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/25 bg-white/5 p-5 backdrop-blur sm:p-6"
      aria-label="Quick contact form"
    >
      <h3 className="text-lg font-bold text-white">Quick Contact Form</h3>

      <p className="mt-2 text-sm leading-6 text-zinc-200">
        Submit this form to contact directly.
      </p>

      <div className="mt-5 grid gap-4">
        <label className="text-sm font-semibold text-zinc-100">
          Name
          <input
            required
            value={fields.name}
            name="name"
            autoComplete="name"
            placeholder="Your name"
            onChange={(e) =>
              setFields((prev) => ({ ...prev, name: e.target.value }))
            }
            className="mt-2 w-full rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white"
          />
        </label>

        <label className="text-sm font-semibold text-zinc-100">
          Email
          <input
            type="email"
            required
            value={fields.email}
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            onChange={(e) =>
              setFields((prev) => ({ ...prev, email: e.target.value }))
            }
            className="mt-2 w-full rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white"
          />
        </label>

        <label className="text-sm font-semibold text-zinc-100">
          Company (optional)
          <input
            value={fields.company}
            name="company"
            placeholder="Company name"
            autoComplete="organization"
            onChange={(e) =>
              setFields((prev) => ({ ...prev, company: e.target.value }))
            }
            className="mt-2 w-full rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white"
          />
        </label>

        <label className="text-sm font-semibold text-zinc-100">
          Project details
          <textarea
            required
            value={fields.message}
            name="message"
            placeholder="Tell me about your project, timeline, and goals."
            rows={5}
            onChange={(e) =>
              setFields((prev) => ({ ...prev, message: e.target.value }))
            }
            className="mt-2 w-full rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white"
          />
        </label>
      </div>

      {/* Keep only validation error (optional inline) */}
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary mt-5 w-full border-lime-300 bg-lime-300 text-zinc-950 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}

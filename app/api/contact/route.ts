import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_LENGTHS = {
  name: 100,
  email: 200,
  company: 150,
  message: 5000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(body: unknown): body is {
  name: string;
  email: string;
  company?: string;
  message: string;
} {
  if (typeof body !== "object" || body === null) return false;
  const { name, email, company, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim() || name.length > MAX_LENGTHS.name) {
    return false;
  }
  if (
    typeof email !== "string" ||
    email.length > MAX_LENGTHS.email ||
    !EMAIL_REGEX.test(email)
  ) {
    return false;
  }
  if (
    company !== undefined &&
    (typeof company !== "string" || company.length > MAX_LENGTHS.company)
  ) {
    return false;
  }
  if (
    typeof message !== "string" ||
    !message.trim() ||
    message.length > MAX_LENGTHS.message
  ) {
    return false;
  }
  return true;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!isValidPayload(body)) {
      return Response.json(
        { success: false, error: "Invalid input" },
        { status: 400 },
      );
    }

    const { name, email, company, message } = body;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["developerpankajdixit@gmail.com"],
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Company: ${company || "Not provided"}
            Message: ${message}
        `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Failed to send message" },
      { status: 500 },
    );
  }
}

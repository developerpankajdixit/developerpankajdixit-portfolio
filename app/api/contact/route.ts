import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    const data = await resend.emails.send({
      // from: "Pankaj <contact@pankajdixit.com>",
      from: "Portfolio <onboarding@resend.dev>",
      to: ["developerpankajdixit@gmail.com"],
      subject: `New Inquiry from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Company: ${company || "Not provided"}
            Message: ${message}
        `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}

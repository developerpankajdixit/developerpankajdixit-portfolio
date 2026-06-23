import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    // CSP reports are typically JSON; log for review.
    console.log("CSP Report received:", body);
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("Failed to handle CSP report", err);
    return new NextResponse(null, { status: 500 });
  }
}

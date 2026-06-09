import { NextRequest, NextResponse } from "next/server";
import { validateWaitlistPayload } from "@/lib/validation";
import { insertWaitlistEntry } from "@/lib/supabaseAdmin";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = validateWaitlistPayload(body);

    if (!result.ok) {
      // Honeypot triggered — silently accept
      if (result.error === "honeypot") {
        return NextResponse.json({ status: "ok" }, { status: 200 });
      }
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { email, audience, aux_value, referrer, user_agent } = result.data;

    const insertResult = await insertWaitlistEntry({
      email,
      audience,
      aux_value,
      referrer,
      user_agent,
    });

    return NextResponse.json(
      { status: insertResult.status === "inserted" ? "ok" : "already", email },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Check for unique constraint violation (duplicate email)
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as { code: string }).code === "23505"
    ) {
      return NextResponse.json({ status: "already" }, { status: 200 });
    }

    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again?" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

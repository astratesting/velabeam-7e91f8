import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

export interface WaitlistEntry {
  email: string;
  audience: "dev" | "agency" | "owner";
  aux_value?: string;
  referrer?: string;
  user_agent?: string;
}

export async function insertWaitlistEntry(entry: WaitlistEntry) {
  if (!supabaseAdmin) {
    // In dev without Supabase configured, simulate success
    if (process.env.NODE_ENV === "development") {
      console.warn("Supabase not configured — simulating waitlist insert:", entry);
      return { status: "inserted" as const };
    }
    throw new Error("Supabase not configured");
  }

  const { data, error } = await supabaseAdmin
    .from("waitlist")
    .upsert(
      {
        email: entry.email,
        audience: entry.audience,
        aux_value: entry.aux_value ?? null,
        referrer: entry.referrer ?? null,
        user_agent: entry.user_agent ?? null,
      },
      { onConflict: "email", ignoreDuplicates: false }
    )
    .select("email");

  if (error) {
    throw error;
  }

  // Supabase upsert returns the row — if it was an existing email, the
  // created_at will be unchanged but we still get the row back.
  return { status: "inserted" as const, data };
}

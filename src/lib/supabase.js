import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isConfigured = Boolean(url && anonKey);

if (!isConfigured) {
  console.warn("Supabase env vars missing — form submissions will fail.");
}

export const supabase = isConfigured
  ? createClient(url, anonKey)
  : {
      from() {
        return {
          insert: async () => ({
            error: new Error("Supabase not configured: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing."),
          }),
        };
      },
    };

export const dynamic = "force-dynamic";

import { getSupabase } from "@/lib/supabaseClient";

export default async function Home() {
  const supabase = getSupabase();
  const { data } = await supabase.from("projects").select("*");

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
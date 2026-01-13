export const dynamic = "force-dynamic";

import { getSupabase } from "@/lib/supabaseClient";

export default async function Home() {
  const supabase = getSupabase();

  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Supabase error</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Projects loaded</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

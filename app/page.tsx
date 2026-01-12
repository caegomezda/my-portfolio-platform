"use client";

import { useEffect, useState } from "react";
// import { supabase } from "../lib/supabase";
// console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);



type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  logo_url: string;
  github_url: string;
  apk_url: string;
};

// export default function Home() {
//   const [projects, setProjects] = useState<Project[]>([]);

//   useEffect(() => {
//     supabase
//       .from("projects")
//       .select("*")
//       .order("created_at", { ascending: false })
//       .then(({ data }) => {
//         setProjects(data || []);
//       });
//   }, []);

//   return (
//     <main style={{ padding: 40 }}>
//       <h1>🚀 Mis Proyectos</h1>

//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//         {projects.map(p => (
//           <div key={p.id} style={{ border: "1px solid #ddd", padding: 20 }}>
//             <img src={p.logo_url} style={{ height: 80 }} />
//             <h3>{p.title}</h3>
//             <p>{p.description}</p>

//             <div>
//               {p.github_url && <a href={p.github_url}>GitHub</a>}{" "}
//               {p.apk_url && <a href={p.apk_url}>APK</a>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

import { getSupabase } from "@/lib/supabaseClient";

export default async function Home() {
  const supabase = getSupabase();

  const { data } = await supabase.from("projects").select("*");
  const [projects, setProjects] = useState<Project[]>([]);


  // return (
  //   <pre>{JSON.stringify(data, null, 2)}</pre>
  // );
    return (
    <main style={{ padding: 40 }}>
      <h1>🚀 Mis Proyectos</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {projects.map(p => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: 20 }}>
            <img src={p.logo_url} style={{ height: 80 }} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <div>
              {p.github_url && <a href={p.github_url}>GitHub</a>}{" "}
              {p.apk_url && <a href={p.apk_url}>APK</a>}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


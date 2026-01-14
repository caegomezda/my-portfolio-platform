export const dynamic = "force-dynamic";

import { getSupabase } from "@/lib/supabaseClient";
import Link from "next/link";


export default async function Home() {
  const supabase = getSupabase();

  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    return (
      <div className="min-h-screen bg-black text-red-400 p-10">
        <h1 className="text-2xl font-bold mb-4">Supabase Error</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      
      {/* HEADER */}
      <header className="flex flex-col md:flex-row items-center justify-between p-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold tracking-wide">
          Camilo Eduardo Gómez Dávila
        </h1>

        <div className="flex gap-6 mt-4 md:mt-0 text-2xl">
          <a
            href="https://www.linkedin.com/in/caegomezda/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            🔗
          </a>
          <a
            href="https://github.com/caegomezda"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            💻
          </a>
        </div>
      </header>

      {/* PROJECTS */}
      <main className="p-10">
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((project: any) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
              <div
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition cursor-pointer"
              >
              {/* Logo */}
              {project.logo_url && (
                <img
                  src={project.logo_url}
                  alt={project.title}
                  className="w-full h-48 object-contain bg-black p-4"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-blue-400">
                    {project.category}
                  </span>

                  <div className="flex gap-4">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        className="text-gray-300 hover:text-white"
                      >
                        💻
                      </a>
                    )}

                    {project.apk_url && (
                      <a
                        href={project.apk_url}
                        target="_blank"
                        className="text-green-400 hover:text-green-300"
                      >
                        ⬇
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

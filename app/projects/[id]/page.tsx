export const dynamic = "force-dynamic";

import { getSupabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = getSupabase();

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !project) {
    return (
      <div className="min-h-screen bg-black text-red-400 p-10">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-10">
      
      {/* BACK */}
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 mb-8 inline-block"
      >
        ← Back to projects
      </Link>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {project.logo_url && (
          <img
            src={project.logo_url}
            alt={project.title}
            className="w-64 h-64 object-contain bg-black p-4 rounded-xl border border-gray-800"
          />
        )}

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {project.title}
          </h1>

          <span className="text-sm uppercase tracking-widest text-blue-400">
            {project.category}
          </span>

          <p className="text-gray-300 mt-6 max-w-2xl">
            {project.description}
          </p>

          <div className="flex gap-6 mt-6 text-xl">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                className="hover:text-white"
              >
                💻 GitHub
              </a>
            )}

            {project.apk_url && (
              <a
                href={project.apk_url}
                target="_blank"
                className="hover:text-green-400"
              >
                ⬇ Download APK
              </a>
            )}
          </div>
        </div>
      </div>

      {/* IMAGES PLACEHOLDER */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          Screenshots
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-48 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-500"
            >
              Screenshot {i}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

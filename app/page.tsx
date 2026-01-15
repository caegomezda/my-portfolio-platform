export const dynamic = "force-dynamic";

import { getSupabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import ProjectCard from "./components/ProjectCard";



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
            className="hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/caegomezda"
            target="_blank"
            className="hover:text-gray-300 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/573XXXXXXXXX"
            target="_blank"
            className="hover:text-green-500 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </header>


      {/* PROJECTS */}
    <main className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
    </div>
  );
}

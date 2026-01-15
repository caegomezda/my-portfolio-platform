"use client";

import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function ProjectCard({ project }: { project: any }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/projects/${project.id}`)}
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden
                 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]
                 transition cursor-pointer"
    >
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

          <div className="flex gap-4 text-xl">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-white"
              >
                <FaGithub />
              </a>
            )}

            {project.apk_url && (
              <a
                href={project.apk_url}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="text-green-400 hover:text-green-300"
              >
                <HiDownload />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

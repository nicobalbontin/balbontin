import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group block overflow-hidden"
        >
          <div className="relative overflow-hidden">
            {project.thumbnailType === "video" ? (
              <video
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={project.thumbnail} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-[length:var(--ds-text-h4)] font-bold leading-[1.3]">
              {project.title}
            </h3>
            <span className="flex items-center gap-2 text-sm font-medium transition-opacity group-hover:opacity-60">
              View project
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function SkillChips() {
  const chips = [
    "Landing page",
    "Design system",
    "Usability testing",
    "User research",
    "User interface",
    "Webflow sites",
    "Wireframing",
    "Design sprints",
    "Creative workshops",
  ];

  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {chips.map((chip) => (
        <span
          key={chip}
          className="rounded-full border border-white/30 px-4 py-2 text-sm"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

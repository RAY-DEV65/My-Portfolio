
import React, { useState, useRef } from "react";

import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiBriefcase,
} from "react-icons/fi";

import { projects } from "../data/data";

const categories = ["All", "Websites", "Web Apps", "Branding"];

const projectsPerPage = 3;

const categoryStyles = {
  Websites:
    "bg-blue-500/10 text-blue-500 border-blue-500/20 dark:text-blue-400",

  "Web Apps":
    "bg-purple-500/10 text-purple-500 border-purple-500/20 dark:text-purple-400",

  Branding:
    "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
};

const technologyStyles = {
  React:
    "bg-cyan-500/10 text-cyan-600 border-cyan-500/20 dark:text-cyan-400",

  JavaScript:
    "bg-yellow-500/10 text-yellow-600 border-yellow-500/20 dark:text-yellow-400",

  "Tailwind CSS":
    "bg-sky-500/10 text-sky-600 border-sky-500/20 dark:text-sky-400",

  CSS:
    "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",

  Vite:
    "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",

  Photoshop:
    "bg-blue-600/10 text-blue-600 border-blue-600/20 dark:text-blue-400",

  Illustrator:
    "bg-orange-500/10 text-orange-600 border-orange-500/20 dark:text-orange-400",

  "Brand Identity":
    "bg-pink-500/10 text-pink-600 border-pink-500/20 dark:text-pink-400",

  "Responsive Design":
    "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",

  "Brand Strategy":
    "bg-rose-500/10 text-rose-600 border-rose-500/20 dark:text-rose-400",
};

const Projects = () => {
  const projectsSectionRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll to the top of the Projects section.
  const scrollToProjects = () => {
    if (!projectsSectionRef.current) return;

    const navbarOffset = 90;

    const sectionTop =
      projectsSectionRef.current.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(0, sectionTop),
      behavior: "smooth",
    });
  };

  // Filter projects by category.
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  // Calculate pagination.
  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  const startIndex = (currentPage - 1) * projectsPerPage;

  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  // Change category and reset pagination.
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Pagination handlers.
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
      scrollToProjects();
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
      scrollToProjects();
    }
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;

    setCurrentPage(page);
    scrollToProjects();
  };

  return (
    <>
      <style>{`
        @keyframes projectBorder {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes projectFade {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes viewBorder {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* PROJECTS SECTION */}
      <section
        ref={projectsSectionRef}
        id="projects"
        className="relative scroll-mt-24 overflow-hidden bg-white py-10 transition-colors duration-500 dark:bg-[#07101c] md:py-32"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-[#004d93]/15" />

        <div className="relative mx-auto w-[92%] max-w-[1200px]">
          {/* HEADER */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            {/* Label */}
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              <FiBriefcase size={14} />
              My Work
            </span>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Turning{" "}
              <span className="bg-gradient-to-r from-[#004d93] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Ideas
              </span>{" "}
              Into Reality
            </h2>

            {/* Description */}
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
              A selection of websites, applications, and brand identities
              I've designed and built with creativity, strategy, and
              technology.
            </p>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mb-12 flex justify-center">
            <div className="flex max-w-full gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-1 dark:border-white/[0.07] dark:bg-white/[0.025]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#004d93] text-white shadow-[0_0_20px_rgba(0,77,147,0.25)]"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative rounded-2xl p-[1px]"
                style={{
                  background:
                    "linear-gradient(120deg, #004d93, #5ca9ed, #7c3aed, #004d93)",
                  backgroundSize: "300% 300%",
                  animation: `
                    projectBorder 6s ease infinite,
                    projectFade 0.6s ease both
                  `,
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[15px] bg-white transition-all duration-500 dark:bg-[#0c1827]">
                  {/* PROJECT IMAGE */}
                  <div className="relative h-60 shrink-0 overflow-hidden bg-slate-100 dark:bg-[#0b1725]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Category */}
                    <span
                      className={`absolute left-4 top-4 rounded-md border px-3 py-1.5 text-[11px] font-semibold backdrop-blur-md ${
                        categoryStyles[project.category] ||
                        "border-white/20 bg-black/40 text-white"
                      }`}
                    >
                      {project.category}
                    </span>

                    {/* ACTION BUTTONS */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      {/* GitHub or Behance */}
                      {project.category === "Branding" ? (
                        <a
                          href={project.behanceUrl || "#"}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} on Behance`}
                          className="group/action flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-500 hover:w-[112px] hover:bg-[#1769ff]"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center text-sm font-bold">
                            Bē
                          </span>

                          <span className="w-0 overflow-hidden whitespace-nowrap text-center text-xs font-semibold opacity-0 transition-all duration-500 group-hover/action:w-[65px] group-hover/action:opacity-100">
                            Behance
                          </span>
                        </a>
                      ) : (
                        <a
                          href={project.githubUrl || "#"}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} source code`}
                          className="group/action flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-500 hover:w-[105px] hover:bg-[#24292f]"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                            <FiGithub size={17} />
                          </span>

                          <span className="w-0 overflow-hidden whitespace-nowrap text-center text-xs font-semibold opacity-0 transition-all duration-500 group-hover/action:w-[60px] group-hover/action:opacity-100">
                            GitHub
                          </span>
                        </a>
                      )}

                      {/* LIVE PROJECT */}
                      <a
                        href={
                          project.category === "Branding"
                            ? project.behanceUrl || "#"
                            : project.liveUrl || "#"
                        }
                        target="_blank"
                        rel="noreferrer"
                        aria-label={
                          project.category === "Branding"
                            ? `View ${project.title} on Behance`
                            : `View ${project.title} live`
                        }
                        className="group/action flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#004d93] text-white shadow-lg transition-all duration-500 hover:w-[112px] hover:bg-[#075da8]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                          <FiArrowUpRight size={18} />
                        </span>

                        <span className="w-0 overflow-hidden whitespace-nowrap text-center text-xs font-semibold opacity-0 transition-all duration-500 group-hover/action:w-[65px] group-hover/action:opacity-100">
                          {project.category === "Branding"
                            ? "Behance"
                            : "Live Demo"}
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* PROJECT CONTENT */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      <span className="text-xs font-bold text-[#004d93]/30 dark:text-[#5ca9ed]/40">
                        {String(project.id).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {(project.technologies || []).map((technology) => (
                        <span
                          key={technology}
                          className={`rounded-md border px-2.5 py-1 text-[10px] font-medium ${
                            technologyStyles[technology] ||
                            "border-slate-200 bg-slate-100 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                          }`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* VIEW PROJECT */}
                    <div className="mt-auto pt-7">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/view relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-xs font-semibold text-[#004d93] dark:text-[#5ca9ed]"
                      >
                        <span
                          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover/view:opacity-100"
                          style={{
                            background:
                              "linear-gradient(90deg, #004d93, #5ca9ed, #7c3aed, #004d93)",
                            backgroundSize: "300% 100%",
                            animation: "viewBorder 2.5s linear infinite",
                          }}
                        />

                        <span className="absolute inset-[1px] rounded-full bg-white dark:bg-[#0c1827]" />

                        <span className="relative z-10">
                          View Project
                        </span>

                        <FiArrowUpRight
                          size={15}
                          className="relative z-10 transition-transform duration-300 group-hover/view:translate-x-1 group-hover/view:-translate-y-1"
                        />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-3">
              {/* Previous */}
              <button
                onClick={previousPage}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all duration-300 hover:border-[#004d93] hover:bg-[#004d93]/5 hover:text-[#004d93] disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/10 dark:text-slate-400 dark:hover:border-[#5ca9ed] dark:hover:text-[#5ca9ed]"
              >
                <FiChevronLeft />
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-2">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    aria-label={`Go to page ${page}`}
                    aria-current={
                      currentPage === page ? "page" : undefined
                    }
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-semibold transition-all duration-300 ${
                      currentPage === page
                        ? "bg-[#004d93] text-white shadow-[0_0_20px_rgba(0,77,147,0.3)]"
                        : "border border-slate-200 text-slate-500 hover:border-[#004d93] hover:text-[#004d93] dark:border-white/10 dark:text-slate-400 dark:hover:border-[#5ca9ed] dark:hover:text-[#5ca9ed]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all duration-300 hover:border-[#004d93] hover:bg-[#004d93]/5 hover:text-[#004d93] disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/10 dark:text-slate-400 dark:hover:border-[#5ca9ed] dark:hover:text-[#5ca9ed]"
              >
                <FiChevronRight />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0a1421]"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-red-500"
            >
              <FiX />
            </button>

            {/* MODAL HERO */}
            <div className="relative h-56 overflow-hidden sm:h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span
                  className={`mb-3 inline-block rounded-md border px-3 py-1 text-[11px] font-semibold ${
                    categoryStyles[selectedProject.category] ||
                    "border-white/20 bg-black/40 text-white"
                  }`}
                >
                  {selectedProject.category}
                </span>

                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* MODAL BODY */}
            <div className="max-h-[55vh] overflow-y-auto p-6 sm:p-8">
              <p className="max-w-3xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                {selectedProject.description}
              </p>

              {/* PROJECT STORY */}
              <div className="mt-8 overflow-x-auto pb-4">
                <div className="flex min-w-max gap-4">
                  {/* PROBLEM */}
                  <div className="w-[280px] rounded-2xl border border-red-500/10 bg-red-500/[0.03] p-6 sm:w-[330px]">
                    <span className="text-xs font-bold uppercase tracking-[2px] text-red-500">
                      01 — Problem
                    </span>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {selectedProject.problem ||
                        "This project was designed to address a specific user or business need."}
                    </p>
                  </div>

                  {/* SOLUTION */}
                  <div className="w-[280px] rounded-2xl border border-blue-500/10 bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.03] p-6 sm:w-[330px]">
                    <span className="text-xs font-bold uppercase tracking-[2px] text-blue-500 dark:text-blue-400">
                      02 — Solution
                    </span>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {selectedProject.solution ||
                        "A considered design and development approach was used to meet the project requirements."}
                    </p>
                  </div>

                  {/* FEATURES */}
                  <div className="w-[280px] rounded-2xl border border-purple-500/10 bg-purple-500/[0.03] p-6 sm:w-[330px]">
                    <span className="text-xs font-bold uppercase tracking-[2px] text-purple-500 dark:text-purple-400">
                      03 — Features
                    </span>

                    <div className="mt-4 space-y-2">
                      {(selectedProject.features || []).length > 0 ? (
                        selectedProject.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                            {feature}
                          </div>
                        ))
                      ) : (
                        <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                          Project features and functionality.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="w-[280px] rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.03] p-6 sm:w-[330px]">
                    <span className="text-xs font-bold uppercase tracking-[2px] text-cyan-600 dark:text-cyan-400">
                      04 — Technologies
                    </span>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {(selectedProject.technologies || []).map(
                        (technology) => (
                          <span
                            key={technology}
                            className={`rounded-lg border px-3 py-2 text-xs ${
                              technologyStyles[technology] ||
                              "border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                            }`}
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* OUTCOME */}
                  <div className="w-[280px] rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.03] p-6 sm:w-[330px]">
                    <span className="text-xs font-bold uppercase tracking-[2px] text-emerald-600 dark:text-emerald-400">
                      05 — Outcome
                    </span>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {selectedProject.outcome ||
                        "The project delivers a solution aligned with its intended goals."}
                    </p>
                  </div>
                </div>
              </div>

              {/* MODAL ACTIONS */}
              <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-6 dark:border-white/[0.07]">
                {(selectedProject.category === "Branding"
                  ? selectedProject.behanceUrl
                  : selectedProject.liveUrl) && (
                  <a
                    href={
                      selectedProject.category === "Branding"
                        ? selectedProject.behanceUrl
                        : selectedProject.liveUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#004d93] px-5 py-3 text-xs font-semibold text-white transition-all hover:bg-[#075da8] hover:shadow-[0_0_25px_rgba(0,77,147,0.35)]"
                  >
                    {selectedProject.category === "Branding"
                      ? "View on Behance"
                      : "View Live Project"}

                    <FiExternalLink />
                  </a>
                )}

                {selectedProject.category !== "Branding" &&
                  selectedProject.githubUrl &&
                  selectedProject.githubUrl !== "#" && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-xs font-semibold text-slate-600 transition-all hover:border-[#004d93] hover:text-[#004d93] dark:border-white/10 dark:text-slate-300 dark:hover:border-[#5ca9ed] dark:hover:text-[#5ca9ed]"
                    >
                      <FiGithub />
                      View Code
                    </a>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
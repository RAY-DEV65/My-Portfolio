import React from "react";

import {
  DiPhotoshop,
  DiIllustrator,
  DiGit,
  DiGithub,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
} from "react-icons/di";

import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const tools = [
  { name: "Photoshop", icon: DiPhotoshop, color: "#31A8FF" },
  { name: "Illustrator", icon: DiIllustrator, color: "#FF9A00" },
  { name: "Git", icon: DiGit, color: "#F05032" },
  { name: "GitHub", icon: DiGithub, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "CSS3", icon: DiCss3, color: "#1572B6" },
  { name: "HTML5", icon: DiHtml5, color: "#E34F26" },
  { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: DiReact, color: "#61DAFB" },
];

const Tool = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <div
      className="
        tool-card
        group
        flex
        shrink-0
        items-center
        gap-2
        rounded-lg
        border
        border-slate-200
        bg-white/80
        px-3
        py-2
        text-slate-500
        dark:border-white/10
        dark:bg-white/[0.04]
        dark:text-slate-400
      "
      style={{ "--tool-color": tool.color }}
    >
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

      <span className="whitespace-nowrap text-xs font-medium">
        {tool.name}
      </span>
    </div>
  );
};

const ToolGroup = () => (
  <div className="flex shrink-0 items-center gap-2">
    {tools.map((tool, index) => (
      <Tool key={index} tool={tool} />
    ))}
  </div>
);

const TechMarquee = () => {
  /*
    Repeat the group several times.
    This makes sure the viewport is always filled,
    even on very wide screens.
  */
  const groups = Array.from({ length: 6 });

  return (
    <section className="relative w-full py-6">

      <style>
        {`
          .tech-window {
            width: 100%;
            overflow: hidden;
            padding: 5px 0;
          }

          .tech-track {
            display: flex;
            width: max-content;
            align-items: center;
            will-change: transform;
          }

          .tech-group {
            flex-shrink: 0;
            padding-right: 8px;
          }

          /*
            ROW 1
            Starts completely filled and moves RIGHT
          */
          .tech-right {
            animation: techMoveRight 35s linear infinite;
          }

          @keyframes techMoveRight {
            0% {
              transform: translateX(-20%);
            }

            100% {
              transform: translateX(0);
            }
          }

          /*
            ROW 2
            Starts completely filled and moves LEFT
          */
          .tech-left {
            animation: techMoveLeft 35s linear infinite;
          }

          @keyframes techMoveLeft {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-20%);
            }
          }

          .tool-card {
            transition:
              border-color 0.25s ease,
              color 0.25s ease;
          }

          .tool-card:hover {
            border-color: var(--tool-color);
            color: var(--tool-color);
          }
        `}
      </style>

      {/* Left fade */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-full
          w-12
          bg-gradient-to-r
          from-white
          to-transparent
          dark:from-[#0d1510]
        "
      />

      {/* Right fade */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          h-full
          w-12
          bg-gradient-to-l
          from-white
          to-transparent
          dark:from-[#0d1510]
        "
      />

      {/* ROW 1 — RIGHT */}
      <div className="tech-window">
        <div className="tech-track tech-right">
          {groups.map((_, index) => (
            <div className="tech-group" key={`right-${index}`}>
              <ToolGroup />
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2 — LEFT */}
      <div className="tech-window mt-2">
        <div className="tech-track tech-left">
          {groups.map((_, index) => (
            <div className="tech-group" key={`left-${index}`}>
              <ToolGroup />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TechMarquee;
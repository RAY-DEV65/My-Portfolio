
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiDownload,
  FiCode,
  FiPenTool,
  FiUsers,
  FiClock,
  FiLayers,
} from "react-icons/fi";

import {
  DiIllustrator,
  DiPhotoshop,
  DiGit,
  DiGithub,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  // DiNodejs,
} from "react-icons/di";

import {
  SiTailwindcss,
  // SiTypescript,
  // SiExpress,
  // SiSupabase,
  SiFigma,
} from "react-icons/si";

import { FaBootstrap } from "react-icons/fa";

/* ============================================================
   TOOLS
============================================================ */

const developerTools = [
  {
    name: "React",
    icon: DiReact,
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: DiJavascript1,
    color: "#F7DF1E",
  },
  // {
  //   name: "TypeScript",
  //   icon: SiTypescript,
  //   color: "#3178C6",
  // },
  {
    name: "HTML5",
    icon: DiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: DiCss3,
    color: "#1572B6",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "#7952B3",
  },
  // {
  //   name: "Node.js",
  //   icon: DiNodejs,
  //   color: "#339933",
  // },
  // {
  //   name: "Express",
  //   icon: SiExpress,
  //   color: "#ffffff",
  // },
  // {
  //   name: "Supabase",
  //   icon: SiSupabase,
  //   color: "#3ECF8E",
  // },
  {
    name: "Git",
    icon: DiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: DiGithub,
    color: "#ffffff",
  },
];

const designerTools = [
  {
    name: "Photoshop",
    icon: DiPhotoshop,
    color: "#31A8FF",
  },
  {
    name: "Illustrator",
    icon: DiIllustrator,
    color: "#FF9A00",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
];

/* ============================================================
   PROFILE DATA
============================================================ */

const profiles = {
  developer: {
    label: "Developer",
    title: "Web & Software Developer",

    description:
      "I build responsive websites and modern web applications that turn ideas into useful digital experiences. I care about clean interfaces, smooth interactions, and writing code that is practical and maintainable.",

    cv: "/developer-cv.pdf",

    stats: [
      {
        number: "10+",
        label: "Projects",
        icon: FiLayers,
      },
      {
        number: "7+",
        label: "Clients",
        icon: FiUsers,
      },
      {
        number: "2+",
        label: "Years Experience",
        icon: FiClock,
      },
      {
        number: "10+",
        label: "Technologies",
        icon: FiCode,
      },
    ],

    tools: developerTools,
  },

  designer: {
    label: "Designer",
    title: "Brand & Graphic Designer",

    description:
      "I create visual identities and digital designs that help brands communicate clearly and stand out. I combine creativity, structure, and attention to detail to create visuals that feel purposeful.",

    cv: "/designer-cv.pdf",

    stats: [
      {
        number: "100+",
        label: "Projects",
        icon: FiLayers,
      },
      {
        number: "50+",
        label: "Clients",
        icon: FiUsers,
      },
      {
        number: "5+",
        label: "Years Experience",
        icon: FiClock,
      },
      {
        number: "5+",
        label: "Design Tools",
        icon: FiPenTool,
      },
    ],

    tools: designerTools,
  },
};

/* ============================================================
   ANIMATIONS
============================================================ */

const contentVariants = {
  initial: {
    opacity: 0,
    x: 60,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    x: -60,
    transition: {
      duration: 0.3,
    },
  },
};

const statsContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const statItem = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.5,
    },
  },
};

const toolsContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const toolItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
    },
  },
};

/* ============================================================
   ABOUT
============================================================ */

export default function About() {
  const [activeProfile, setActiveProfile] = useState("developer");

  const profile = profiles[activeProfile];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-slate-900
        transition-colors
        duration-500
        dark:bg-[#070d14]
        dark:text-white
        sm:py-28
        lg:py-32
      "
    >
      {/* ======================================================
          INFINITE BACKGROUND GLOW
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main blue glow */}

        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#004d93]/10
            blur-[120px]
            dark:bg-[#004d93]/20
          "
        />

        {/* Secondary glow */}

        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 70, -40, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-48
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#004d93]/8
            blur-[120px]
            dark:bg-[#004d93]/15
          "
        />

        {/* Center light */}

        <motion.div
          animate={{
            opacity: [0.05, 0.18, 0.05],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[45%]
            top-[35%]
            h-40
            w-40
            rounded-full
            bg-[#004d93]/10
            blur-[80px]
            dark:bg-[#d5e4f4]/5
          "
        />

        {/* Small moving light */}

        <motion.div
          animate={{
            x: [0, 300, 0],
            y: [0, 100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-1/2
            h-2
            w-2
            rounded-full
            bg-[#004d93]
            blur-sm
          "
        />
      </div>

      {/* ======================================================
          CONTAINER
      ======================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Label */}

          <span
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/5
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600
              dark:text-blue-400
            "
          >
            <FiUsers size={14} />

            About Me
          </span>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            More Than{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#004d93]
                via-blue-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              What I Do
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-600
              dark:text-slate-400
              sm:text-lg
            "
          >
            I bring together technology and creativity to build digital
            experiences, brands, and products that make an impact.
          </p>
        </motion.div>

        {/* ====================================================
            MAIN GRID
        ===================================================== */}

        <div
          className="
            grid
            items-start
            gap-12
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
          "
        >
          {/* ==================================================
              LEFT
          =================================================== */}

          <div>
            {/* ==================================================
                DEVELOPER / DESIGNER SWITCH
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                mb-10
                inline-flex
                rounded-full
                border
                border-slate-200
                bg-slate-100
                p-1.5
                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >
              {Object.entries(profiles).map(([key, item]) => {
                const active = activeProfile === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveProfile(key)}
                    className="
                      relative
                      min-w-[135px]
                      rounded-full
                      px-5
                      py-3
                      text-sm
                      font-semibold
                    "
                  >
                    {active && (
                      <motion.span
                        layoutId="activeProfile"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-[#004d93]
                          shadow-lg
                          shadow-[#004d93]/30
                        "
                      />
                    )}

                    <span
                      className={`
                        relative
                        z-10
                        flex
                        items-center
                        justify-center
                        gap-2
                        transition-colors
                        duration-300
                        ${
                          active
                            ? "text-white"
                            : "text-slate-500 hover:text-[#004d93] dark:text-slate-500 dark:hover:text-white"
                        }
                      `}
                    >
                      {key === "developer" ? (
                        <FiCode size={16} />
                      ) : (
                        <FiPenTool size={16} />
                      )}

                      {item.label}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* ==================================================
                PROFILE CONTENT
            =================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Profile label */}

                <div className="mb-4 flex items-center gap-3">
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#004d93]
                      shadow-[0_0_12px_#004d93]
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#004d93]
                    "
                  >
                    {profile.label}
                  </span>
                </div>

                {/* Title */}

                <h3
                  className="
                    text-3xl
                    font-bold
                    leading-tight
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {profile.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-base
                    leading-8
                    text-slate-500
                    dark:text-slate-400
                    sm:text-lg
                  "
                >
                  {profile.description}
                </p>

                {/* ==================================================
                    STATS
                =================================================== */}

                <motion.div
                  variants={statsContainer}
                  initial="hidden"
                  animate="visible"
                  className="
                    mt-10
                    grid
                    grid-cols-2
                    gap-3
                    sm:grid-cols-4
                  "
                >
                  {profile.stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <motion.div
                        key={stat.label}
                        variants={statItem}
                        whileHover={{
                          y: -6,
                          scale: 1.03,
                        }}
                        className="
                          group
                          rounded-2xl
                          border
                          border-slate-200
                          bg-white/70
                          p-4
                          shadow-sm
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          hover:border-[#004d93]/30
                          hover:shadow-lg
                          dark:border-white/10
                          dark:bg-white/[0.04]
                          dark:hover:border-[#004d93]/60
                        "
                      >
                        <Icon
                          size={19}
                          className="
                            mb-4
                            text-[#004d93]
                            transition-transform
                            duration-300
                            group-hover:scale-125
                          "
                        />

                        <div className="text-2xl font-bold">
                          {stat.number}
                        </div>

                        <div
                          className="
                            mt-1
                            text-xs
                            text-slate-500
                            dark:text-slate-500
                          "
                        >
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* ==================================================
                    CV
                =================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="
                    mt-9
                    flex
                    flex-wrap
                    items-center
                    gap-5
                  "
                >
                  <motion.a
                    href={profile.cv}
                    download
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-full
                      bg-[#004d93]
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-[#004d93]/20
                    "
                  >
                    <FiDownload size={17} />

                    Download {profile.label} CV

                    <FiArrowUpRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ==================================================
              RIGHT — TOOLKIT
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* Glow behind toolkit */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-10
                rounded-full
                bg-[#004d93]
                blur-[80px]
              "
            />

            {/* ==================================================
                TOOLKIT
            =================================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white/80
                p-5
                shadow-xl
                backdrop-blur-xl
                transition-colors
                duration-500
                dark:border-white/10
                dark:bg-[#0b141e]/80
                sm:p-6
              "
            >
              {/* Header */}

              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#004d93]
                    "
                  >
                    My Toolkit
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    {activeProfile === "developer"
                      ? "Development Stack"
                      : "Design Tools"}
                  </h3>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      "0 0 0px rgba(0,77,147,0)",
                      "0 0 25px rgba(0,77,147,0.45)",
                      "0 0 0px rgba(0,77,147,0)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#004d93]
                    text-white
                  "
                >
                  {activeProfile === "developer" ? (
                    <FiCode size={18} />
                  ) : (
                    <FiPenTool size={18} />
                  )}
                </motion.div>
              </div>

              {/* ==================================================
                  INLINE TOOL LIST
              =================================================== */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProfile}
                  variants={toolsContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-2.5"
                >
                  {profile.tools.map((tool, index) => {
                    const ToolIcon = tool.icon;

                    return (
                      <motion.div
                        key={tool.name}
                        variants={toolItem}
                        whileHover={{
                          y: -3,
                          scale: 1.04,
                        }}
                        className="
                          group
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-slate-200
                          bg-slate-50
                          px-3
                          py-2
                          transition-all
                          duration-300
                          hover:border-[#004d93]/30
                          hover:bg-white
                          dark:border-white/10
                          dark:bg-white/[0.035]
                          dark:hover:border-white/20
                          dark:hover:bg-white/[0.07]
                        "
                      >
                        {/* Animated glowing icon */}

                        <motion.div
                          animate={{
                            color: [
                              "#64748b",
                              tool.color,
                              "#64748b",
                            ],

                            filter: [
                              "drop-shadow(0 0 0px transparent)",
                              `drop-shadow(0 0 7px ${tool.color})`,
                              "drop-shadow(0 0 0px transparent)",
                            ],
                          }}
                          transition={{
                            duration: 3 + index * 0.15,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.18,
                          }}
                          whileHover={{
                            color: tool.color,
                            filter: `drop-shadow(0 0 9px ${tool.color})`,
                            scale: 1.15,
                          }}
                        >
                          <ToolIcon size={20} />
                        </motion.div>

                        {/* Tool name */}

                        <span
                          className="
                            whitespace-nowrap
                            text-xs
                            font-medium
                            text-slate-600
                            dark:text-slate-400
                          "
                        >
                          {tool.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Bottom line */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  border-t
                  border-slate-200
                  pt-4
                  dark:border-white/10
                "
              >
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#004d93]
                    shadow-[0_0_8px_#004d93]
                  "
                />

                <span className="text-xs text-slate-500">
                  Always learning. Always creating.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

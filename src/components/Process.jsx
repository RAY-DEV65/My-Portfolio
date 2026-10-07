import React, { useState } from "react";
import {
  FiSearch,
  FiMap,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiPenTool,
  FiLayers,
  FiEdit3,
  FiSend,
  FiArrowRight,
  FiZap,
} from "react-icons/fi";

const developmentProcess = [
  {
    number: "01",
    title: "Discover",
    short: "Understanding the vision",
    icon: FiSearch,
    description:
      "Every successful project starts with understanding the problem. I learn about your goals, target audience, requirements, and the experience you want to create.",
    points: [
      "Understand project goals",
      "Identify target users",
      "Define requirements",
      "Study existing challenges",
    ],
  },
  {
    number: "02",
    title: "Plan",
    short: "Building the roadmap",
    icon: FiMap,
    description:
      "Once the direction is clear, I create a practical roadmap for the project. This includes the structure, functionality, technology stack, and development priorities.",
    points: [
      "Define project structure",
      "Choose the right technologies",
      "Plan features and functionality",
      "Create development milestones",
    ],
  },
  {
    number: "03",
    title: "Build",
    short: "Turning ideas into reality",
    icon: FiCode,
    description:
      "This is where the project comes to life. I develop responsive interfaces and functional features while keeping the code clean, maintainable, and scalable.",
    points: [
      "Build responsive interfaces",
      "Develop interactive features",
      "Write clean reusable code",
      "Integrate required technologies",
    ],
  },
  {
    number: "04",
    title: "Test",
    short: "Making everything work",
    icon: FiCheckCircle,
    description:
      "Before launch, I carefully test the project across different screen sizes and interactions to make sure everything works as expected.",
    points: [
      "Test functionality",
      "Check responsiveness",
      "Fix bugs and inconsistencies",
      "Improve performance",
    ],
  },
  {
    number: "05",
    title: "Launch",
    short: "Taking it live",
    icon: FiUploadCloud,
    description:
      "Once everything is ready, I deploy the project and make sure the final product is stable, accessible, and ready for real users.",
    points: [
      "Prepare production build",
      "Deploy the project",
      "Perform final checks",
      "Make post-launch improvements",
    ],
  },
];

const designProcess = [
  {
    number: "01",
    title: "Research",
    short: "Understanding the brand",
    icon: FiSearch,
    description:
      "I begin by understanding the brand, its audience, competitors, personality, and the message it needs to communicate.",
    points: [
      "Research the target audience",
      "Understand brand positioning",
      "Study competitors",
      "Define the visual direction",
    ],
  },
  {
    number: "02",
    title: "Concept",
    short: "Exploring possibilities",
    icon: FiPenTool,
    description:
      "I explore different creative directions, experimenting with layouts, typography, colors, shapes, and visual ideas before settling on the strongest concept.",
    points: [
      "Explore creative directions",
      "Develop visual concepts",
      "Explore typography",
      "Experiment with color and composition",
    ],
  },
  {
    number: "03",
    title: "Design",
    short: "Creating the experience",
    icon: FiLayers,
    description:
      "The selected concept is transformed into a polished visual system. Every element is designed to work together and communicate clearly.",
    points: [
      "Create the main visual design",
      "Build consistent layouts",
      "Develop visual hierarchy",
      "Create brand or interface elements",
    ],
  },
  {
    number: "04",
    title: "Refine",
    short: "Perfecting the details",
    icon: FiEdit3,
    description:
      "Great design lives in the details. I review spacing, typography, colors, alignment, hierarchy, and usability to make the final result feel intentional.",
    points: [
      "Review visual consistency",
      "Improve spacing and hierarchy",
      "Refine typography",
      "Improve usability and presentation",
    ],
  },
  {
    number: "05",
    title: "Deliver",
    short: "Ready for production",
    icon: FiSend,
    description:
      "The final design is organized and prepared for implementation, printing, publishing, or whatever the project requires.",
    points: [
      "Prepare final assets",
      "Organize project files",
      "Export required formats",
      "Prepare designs for implementation",
    ],
  },
];

const Process = () => {
  const [activeProcess, setActiveProcess] = useState("development");
  const [activeStep, setActiveStep] = useState(0);

  const process =
    activeProcess === "development"
      ? developmentProcess
      : designProcess;

  const currentStep = process[activeStep];

  const handleProcessChange = (processName) => {
    setActiveProcess(processName);
    setActiveStep(0);
  };

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 dark:bg-[#07111d] dark:text-white sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <FiZap />
            How I Work
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From{" "}
            <span className="bg-gradient-to-r from-[#004d93] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Idea
            </span>{" "}
            to Reality
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            A structured approach that combines creativity, strategy,
            technology, and attention to detail to turn ideas into meaningful
            digital experiences.
          </p>
        </div>

        {/* Process switcher */}
        <div className="mx-auto mb-14 flex max-w-md rounded-2xl border border-slate-200 bg-slate-100 p-1.5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
          <button
            onClick={() => handleProcessChange("development")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              activeProcess === "development"
                ? "bg-[#004d93] text-white shadow-lg shadow-blue-900/20"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            <FiCode />
            Development
          </button>

          <button
            onClick={() => handleProcessChange("design")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              activeProcess === "design"
                ? "bg-[#004d93] text-white shadow-lg shadow-blue-900/20"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            <FiPenTool />
            Design
          </button>
        </div>

        {/* Main process */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left - steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[25px] top-7 bottom-7 hidden w-px bg-slate-200 dark:bg-white/10 sm:block" />

            {/* Active vertical line */}
            <div
              className="absolute left-[25px] top-7 hidden w-px bg-gradient-to-b from-blue-500 to-cyan-400 transition-all duration-500 sm:block"
              style={{
                height: `${(activeStep / (process.length - 1)) * 100}%`,
              }}
            />

            <div className="space-y-4">
              {process.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    className={`group relative flex w-full items-center gap-5 rounded-2xl p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border border-blue-500/20 bg-blue-500/[0.06] shadow-lg shadow-blue-500/5"
                        : "border border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:border-white/10 dark:hover:bg-white/[0.03]"
                    }`}
                  >
                    {/* Number / icon */}
                    <div
                      className={`relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "border-blue-400 bg-[#004d93] text-white shadow-lg shadow-blue-900/30"
                          : isCompleted
                          ? "border-blue-500/40 bg-blue-500/10 text-blue-500"
                          : "border-slate-200 bg-white text-slate-400 group-hover:border-blue-300 group-hover:text-blue-500 dark:border-white/10 dark:bg-[#0b1724] dark:text-slate-500"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-bold tracking-widest ${
                            isActive
                              ? "text-blue-500"
                              : "text-slate-400 dark:text-slate-600"
                          }`}
                        >
                          {step.number}
                        </span>

                        <h3
                          className={`text-base font-bold sm:text-lg ${
                            isActive
                              ? "text-slate-900 dark:text-white"
                              : "text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                        {step.short}
                      </p>
                    </div>

                    <FiArrowRight
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-blue-500 opacity-100"
                          : "-translate-x-2 text-slate-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right - details */}
          <div className="relative">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-[#0b1724] dark:shadow-black/20 sm:p-8 lg:p-10">
              {/* Top decoration */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                    <currentStep.icon size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                      Step {currentStep.number}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>

                <span className="hidden text-5xl font-black text-slate-200 dark:text-white/[0.04] sm:block">
                  {currentStep.number}
                </span>
              </div>

              {/* Description */}
              <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
                {currentStep.description}
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-slate-200 dark:bg-white/10" />

              {/* Points */}
              <div className="space-y-4">
                {currentStep.points.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-4"
                    style={{
                      animation: `processFade 0.4s ease ${
                        index * 0.08
                      }s both`,
                    }}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-500">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-10">
                <div className="mb-3 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400">
                    Process progress
                  </span>

                  <span className="text-blue-500">
                    {activeStep + 1} / {process.length}
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#004d93] via-blue-500 to-cyan-400 transition-all duration-500"
                    style={{
                      width: `${
                        ((activeStep + 1) / process.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes processFade {
          from {
            opacity: 0;
            transform: translateX(10px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
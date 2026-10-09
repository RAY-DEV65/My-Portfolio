import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiPenTool,
  FiMonitor,
  FiX,
  FiCheck,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Professional, responsive websites that strengthen your online presence and help turn visitors into customers.",
    icon: FiMonitor,
    color: "#0ea5e9",
    glow: "rgba(14,165,233,0.35)",
    features: [
      "Business Websites",
      "Portfolio Websites",
      "Landing Pages",
      "E-commerce Stores",
      "Agency Websites",
      "Blog Websites",
      "Booking & Reservation Websites",
    ],
    details:
      "I design and develop polished websites that help businesses and individuals present themselves with confidence online. From business sites and portfolios to e-commerce stores and landing pages, each website is built with responsive layouts, clear navigation, and a consistent experience across mobile, tablet, and desktop.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Purpose-built web applications that streamline workflows, solve problems, and support business growth.",
    icon: FiCode,
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.35)",
    features: [
      "Custom Web Applications",
      "Dashboard Systems",
      "Interactive Interfaces",
      "React Development",
      "API Integration",
      "Performance Optimization",
    ],
    details:
      "I develop interactive web applications around your specific goals and workflows. From dashboards and management systems to booking platforms and custom tools, I focus on clear user experiences, reliable functionality, responsive interfaces, and solutions that can grow with your needs.",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Strategic, distinctive visual identities that build recognition and help your business stand out.",
    icon: FiPenTool,
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.35)",
    features: [
      "Logo Design",
      "Brand Identity",
      "Flyer Design",
      "Product Design",
      "Social Media Design",
      "Advertising Creatives",
    ],
    details:
      "I create cohesive brand identities that communicate what your business stands for and make it easier for people to recognize and remember you. From logo design and typography to color systems, marketing materials, and brand guidelines, each element is designed to work together across your digital and print touchpoints.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Prevent background scrolling while the modal is open.
  useEffect(() => {
    if (!selectedService) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedService]);

  // Close the modal with the Escape key.
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* Services Section */}
      <section
        id="services"
        className="relative overflow-hidden bg-white py-16 sm:py-20 dark:bg-[#070d14]"
      >
        {/* Background Glow */}
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -40, 0],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#004d93] blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-[#004d93] blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              <FiMonitor />
              What I Do
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Services That Turn{" "}
              <span className="bg-gradient-to-r from-[#004d93] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Ideas
              </span>{" "}
              Into Reality
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
              I combine development and design to create digital solutions
              that look great, work smoothly, and help your ideas move
              forward.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative flex min-h-[190px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,77,147,0.10)] dark:border-white/10 dark:bg-white/[0.025]"
                >
                  {/* Animated Glowing Border */}
                  <motion.div
                    animate={{ opacity: [0.2, 0.7, 0.2] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-0 rounded-xl"
                    style={{
                      border: `1px solid ${service.color}`,
                      boxShadow: `0 0 12px ${service.glow}`,
                    }}
                  />

                  {/* Top Glow */}
                  <motion.div
                    animate={{ opacity: [0.15, 0.35, 0.15] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl"
                    style={{
                      backgroundColor: service.color,
                    }}
                  />

                  {/* Card Header */}
                  <div className="relative flex items-center justify-between">
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 0px ${service.glow}`,
                          `0 0 18px ${service.glow}`,
                          `0 0 0px ${service.glow}`,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut",
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                      }}
                    >
                      <Icon size={19} />
                    </motion.div>

                    <span
                      className="text-xs font-bold tracking-wider"
                      style={{ color: `${service.color}99` }}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative mt-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  {/* Details Button */}
                  <div className="relative mt-auto flex items-end justify-end pt-5">
                    <motion.button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      whileTap={{ scale: 0.92 }}
                      aria-label={`Learn more about ${service.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-all"
                      style={{
                        backgroundColor: service.color,
                        boxShadow: `0 0 12px ${service.glow}`,
                      }}
                    >
                      <FiArrowUpRight size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#004d93]/15 bg-[#d5e4f4]/40 p-5 dark:border-[#004d93]/20 dark:bg-[#004d93]/10 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Have a project in mind?
              </h3>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Let&apos;s build something meaningful together.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 25px rgba(0,77,147,0.22)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#004d93] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003d75]"
            >
              Let&apos;s Talk
              <FiArrowUpRight size={17} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-[#0d151d] sm:p-8"
            >
              {/* Modal Glow */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[90px]"
                style={{
                  backgroundColor: selectedService.color,
                  opacity: 0.15,
                }}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
              >
                <FiX size={19} />
              </button>

              {/* Modal Header */}
              <div className="relative flex items-start gap-4 pr-10">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `${selectedService.color}15`,
                    color: selectedService.color,
                    boxShadow: `0 0 20px ${selectedService.glow}`,
                  }}
                >
                  {React.createElement(selectedService.icon, {
                    size: 23,
                  })}
                </div>

                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: selectedService.color }}
                  >
                    Service {selectedService.number}
                  </span>

                  <h3
                    id="service-modal-title"
                    className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl"
                  >
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Service Description */}
              <div className="relative mt-6">
                <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                  {selectedService.details}
                </p>
              </div>

              {/* Service Features */}
              <div className="relative mt-7">
                <h4
                  className="text-sm font-bold uppercase tracking-[0.15em]"
                  style={{ color: selectedService.color }}
                >
                  What I Offer
                </h4>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedService.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                        style={{
                          backgroundColor: selectedService.color,
                        }}
                      >
                        <FiCheck size={12} />
                      </span>

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="relative mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Have a project that needs this service?
                </p>

                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#004d93] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#003d75]"
                >
                  Start a Project
                  <FiArrowUpRight size={17} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;
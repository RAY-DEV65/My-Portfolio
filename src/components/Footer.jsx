import React from "react";

import {
  FiArrowUpRight,
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Business Websites",
    "Web Applications",
    "Brand Design",
    "React Development",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      href: "https://github.com/RAY-DEV65",
      color: "hover:bg-[#181717]",
      textColor: "group-hover:text-white",
      tooltip: "bg-[#181717]",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      href: "https://linkedin.com/in/rokeeb-a-yusuff-80130a367/",
      color: "hover:bg-[#0A66C2]",
      textColor: "group-hover:text-white",
      tooltip: "bg-[#0A66C2]",
    },
    {
      name: "X",
      icon: ({ size, className }) => (
        <span style={{ fontSize: size }} className={className}>
          𝕏
        </span>
      ),
      href: "https://x.com/ray_dtechguy",
      color: "hover:bg-black",
      textColor: "group-hover:text-white",
      tooltip: "bg-black",
    },
    {
      name: "Facebook",
      icon: ({ size, className }) => (
        <span style={{ fontSize: size }} className={`font-bold ${className}`}>
          f
        </span>
      ),
      href: "https://facebook.com/profile.php?id=61586563433791",
      color: "hover:bg-[#1877F2]",
      textColor: "group-hover:text-white",
      tooltip: "bg-[#1877F2]",
    },
    {
      name: "Instagram",
      icon: FiInstagram,
      href: "https://instagram.com/ray_the_tech_guy",
      color:
        "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
      textColor: "group-hover:text-white",
      tooltip: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    },
    {
      name: "TikTok",
      icon: ({ size, className }) => (
        <span style={{ fontSize: size }} className={`font-bold ${className}`}>
          ♪
        </span>
      ),
      href: "https://tiktok.com/@ray_coding",
      color: "hover:bg-black",
      textColor: "group-hover:text-white",
      tooltip: "bg-black",
    },
    {
      name: "YouTube",
      icon: ({ size, className }) => (
        <span style={{ fontSize: size }} className={`font-bold ${className}`}>
          ▶
        </span>
      ),
      href: "https://youtube.com/@ray_thetechguy",
      color: "hover:bg-[#FF0000]",
      textColor: "group-hover:text-white",
      tooltip: "bg-[#FF0000]",
    },
    {
      name: "Behance",
      icon: ({ size, className }) => (
        <span style={{ fontSize: size }} className={`font-bold ${className}`}>
          Be
        </span>
      ),
      href: "https://behance.net/alkhotuwiyy",
      color: "hover:bg-[#1769FF]",
      textColor: "group-hover:text-white",
      tooltip: "bg-[#1769FF]",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-900 dark:border-white/10 dark:bg-[#050d16] dark:text-white">
      {/* =========================================
          BACKGROUND GLOWS
      ========================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* =========================================
            MAIN FOOTER
        ========================================== */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* =========================================
              BRAND
          ========================================== */}

          <div>
            <a href="#home" className="group inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#004d93] to-blue-500 text-lg font-black text-white shadow-[0_8px_25px_rgba(0,77,147,0.25)] transition-transform duration-300 group-hover:scale-105">
                R
              </div>

              <div>
                <h3 className="text-lg font-bold tracking-tight">R.A.Y</h3>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-500">
                  Developer & Designer
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              I build modern digital experiences and create visual identities
              that help ideas become meaningful brands and products.
            </p>

            {/* LOCATION */}

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
              <FiMapPin size={15} className="text-blue-500" />
              Available for remote projects
            </div>

            {/* EMAIL */}

            <a
              href="mailto:hello@rokeeb.com"
              className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors duration-300 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-400"
            >
              <FiMail size={15} />
              yusuffayobami02@gmail.com
            </a>
          </div>

          {/* =========================================
              QUICK LINKS
          ========================================== */}

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-slate-900 dark:text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-colors duration-300 hover:text-[#004d93] dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    <span className="h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-3" />

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================
              SERVICES
          ========================================== */}

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-slate-900 dark:text-white">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================
              SOCIALS
          ========================================== */}

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-slate-900 dark:text-white">
              Connect
            </h3>

            <p className="mb-5 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-500">
              Follow my work and connect with me across different platforms.
            </p>

            <div className="flex max-w-[220px] flex-wrap gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <div key={social.name} className="group relative">
                    {/* TOOLTIP */}

                    <span
                      className={`
                        pointer-events-none
                        absolute
                        -top-10
                        left-1/2
                        z-20
                        -translate-x-1/2
                        translate-y-2
                        whitespace-nowrap
                        rounded-lg
                        px-2.5
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-white
                        opacity-0
                        shadow-lg
                        transition-all
                        duration-200
                        group-hover:translate-y-0
                        group-hover:opacity-100
                        ${social.tooltip}
                      `}
                    >
                      {social.name}

                      {/* Tooltip Arrow */}

                      <span
                        className={`
                          absolute
                          -bottom-1
                          left-1/2
                          h-2
                          w-2
                          -translate-x-1/2
                          rotate-45
                          ${social.tooltip}
                        `}
                      />
                    </span>

                    {/* SOCIAL BUTTON */}

                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`
                        group
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        text-slate-500
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-transparent
                        hover:text-white
                        hover:shadow-[0_8px_20px_rgba(0,77,147,0.2)]
                        dark:border-white/10
                        dark:bg-white/5
                        dark:text-slate-400
                        ${social.color}
                        ${social.textColor}
                      `}
                    >
                      <Icon
                        size={17}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================== */}

        <div className="flex flex-col gap-5 border-t border-slate-200 py-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {currentYear} Rokeeb A. Yusuff. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs text-slate-500 dark:text-slate-500">
              Designed & Built {" "}
             {/*  <span className="mx-1 text-blue-500">♥</span> */}
              by R.A.Y
            </span>

            {/* BACK TO TOP */}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-[#004d93] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-[#004d93] dark:hover:text-white"
            >
              <FiArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

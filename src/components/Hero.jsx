import React, { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

const typewriterWords = [
  "Frontend Developer",
  "Brand Designer",
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
      <span
        style={{ fontSize: size }}
        className={className}
      >
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
      <span
        style={{ fontSize: size }}
        className={`font-bold ${className}`}
      >
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
    tooltip:
      "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  {
    name: "TikTok",
    icon: ({ size, className }) => (
      <span
        style={{ fontSize: size }}
        className={`font-bold ${className}`}
      >
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
      <span
        style={{ fontSize: size }}
        className={`font-bold ${className}`}
      >
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
      <span
        style={{ fontSize: size }}
        className={`font-bold ${className}`}
      >
        Be
      </span>
    ),
    href: "https://behance.net/alkhotuwiyy",
    color: "hover:bg-[#1769FF]",
    textColor: "group-hover:text-white",
    tooltip: "bg-[#1769FF]",
  },
];

/* ========================================
   MOVING PARTICLES
======================================== */

const particles = Array.from({ length: 75 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: `${Math.floor(Math.random() * 4) + 2}px`,
  duration: `${Math.floor(Math.random() * 14) + 8}s`,
  delay: `-${Math.floor(Math.random() * 15)}s`,
  opacity: (Math.random() * 0.55 + 0.2).toFixed(2),
  blur: Math.random() > 0.75 ? "2px" : "0px",
  direction:
    index % 4 === 0
      ? "particleOne"
      : index % 4 === 1
      ? "particleTwo"
      : index % 4 === 2
      ? "particleThree"
      : "particleFour",
}));

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;

    return (
      document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark"
    );
  });

  /* ========================================
     THEME DETECTION
  ======================================== */

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(
        document.documentElement.classList.contains("dark")
      );
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  /* ========================================
     TYPEWRITER
  ======================================== */

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);

      setWordIndex(
        (previousIndex) =>
          (previousIndex + 1) % typewriterWords.length
      );
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentWord.slice(0, displayText.length - 1)
              : currentWord.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 45 : 85
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <>
      <style>{`
        /* ========================================
           PARTICLE ANIMATIONS
        ======================================== */

        @keyframes particleOne {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          25% {
            transform: translate3d(80px, -60px, 0);
          }

          50% {
            transform: translate3d(-40px, -110px, 0);
          }

          75% {
            transform: translate3d(-90px, 40px, 0);
          }
        }

        @keyframes particleTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          25% {
            transform: translate3d(-70px, 70px, 0);
          }

          50% {
            transform: translate3d(60px, 110px, 0);
          }

          75% {
            transform: translate3d(100px, -30px, 0);
          }
        }

        @keyframes particleThree {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          25% {
            transform: translate3d(55px, 80px, 0);
          }

          50% {
            transform: translate3d(-90px, 40px, 0);
          }

          75% {
            transform: translate3d(-30px, -100px, 0);
          }
        }

        @keyframes particleFour {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          25% {
            transform: translate3d(-80px, -40px, 0);
          }

          50% {
            transform: translate3d(30px, -100px, 0);
          }

          75% {
            transform: translate3d(100px, 60px, 0);
          }
        }

        /* ========================================
           BADGES
        ======================================== */

        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes badgeFloatReverse {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(13px);
          }
        }

        /* ========================================
           PROFILE GLOW
        ======================================== */

        @keyframes profileGlow {
          0%, 100% {
            transform: scale(0.96);
            opacity: 0.55;
          }

          50% {
            transform: scale(1.04);
            opacity: 0.8;
          }
        }

        /* ========================================
           STATUS
        ======================================== */

        @keyframes blinkStatus {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45);
          }

          50% {
            opacity: 0.45;
            box-shadow: 0 0 0 7px rgba(34, 197, 94, 0);
          }
        }

        /* ========================================
           CURSOR
        ======================================== */

        @keyframes cursorBlink {
          0%, 45% {
            opacity: 1;
          }

          46%, 100% {
            opacity: 0;
          }
        }

        /* ========================================
           FRAME REFLECTION
        ======================================== */

        @keyframes frameReflection {
          0% {
            transform: translateX(-160%) rotate(18deg);
            opacity: 0;
          }

          12% {
            opacity: 0.9;
          }

          38% {
            opacity: 0.8;
          }

          52% {
            opacity: 0;
          }

          100% {
            transform: translateX(160%) rotate(18deg);
            opacity: 0;
          }
        }

        @keyframes frameGlow {
          0%, 100% {
            opacity: 0.45;
            transform: scale(0.98);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }

        /* ========================================
           DECORATIVE DOTS
        ======================================== */

        @keyframes decorativeDotOne {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(18px, -25px);
          }
        }

        @keyframes decorativeDotTwo {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-20px, 18px);
          }
        }

        @keyframes decorativeDotThree {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(15px, 20px);
          }
        }

        /* ========================================
           ANIMATION CLASSES
        ======================================== */

        .hero-typewriter-cursor {
          animation: cursorBlink 0.8s infinite;
        }

        .hero-profile-glow {
          animation: profileGlow 5s ease-in-out infinite;
        }

        .hero-badge-float {
          animation: badgeFloat 4s ease-in-out infinite;
        }

        .hero-badge-float-reverse {
          animation: badgeFloatReverse 4.5s ease-in-out infinite;
        }

        .hero-frame-reflection {
          animation: frameReflection 4.5s ease-in-out infinite;
        }

        .hero-frame-glow {
          animation: frameGlow 4s ease-in-out infinite;
        }

        .hero-status {
          animation: blinkStatus 2s ease-in-out infinite;
        }

        .hero-decorative-dot-one {
          animation: decorativeDotOne 5s ease-in-out infinite;
        }

        .hero-decorative-dot-two {
          animation: decorativeDotTwo 6s ease-in-out infinite;
        }

        .hero-decorative-dot-three {
          animation: decorativeDotThree 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-typewriter-cursor,
          .hero-profile-glow,
          .hero-badge-float,
          .hero-badge-float-reverse,
          .hero-frame-glow,
          .hero-frame-reflection,
          .hero-status,
          .hero-decorative-dot-one,
          .hero-decorative-dot-two,
          .hero-decorative-dot-three {
            animation: none;
          }
        }
      `}</style>

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section
        id="home"
        className="
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
          bg-[var(--background)]
          px-6
          pb-20
          pt-28
          text-[var(--text)]
          transition-colors
          duration-300
          sm:px-8
          lg:px-12
        "
      >
        {/* ========================================
            FADED TECH BACKGROUND
        ======================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
            opacity-[0.055]
            dark:opacity-[0.20]
          "
          style={{
            backgroundImage: "url('/images/drop.jpeg')",
          }}
        />

        {/* Background darkening */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[var(--background)]/85
          "
        />

        {/* ========================================
            BACKGROUND GLOW
        ======================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-160px]
            top-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/10
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-180px]
            right-[-120px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
          "
        />

        {/* ========================================
            MOVING BACKGROUND PARTICLES
        ======================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="absolute rounded-full bg-blue-400"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                filter: `blur(${particle.blur})`,
                boxShadow:
                  "0 0 18px rgba(59,130,246,0.45)",
                animation: `${particle.direction} ${particle.duration} ease-in-out ${particle.delay} infinite`,
              }}
            />
          ))}
        </div>

        {/* ========================================
            SUBTLE GRID
        ======================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ========================================
            MAIN CONTENT
        ======================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-7xl
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
          "
        >
          {/* ========================================
              LEFT CONTENT
          ======================================== */}

          <div className="max-w-3xl">

            {/* Availability */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--card)]/80
                px-4
                py-2.5
                text-sm
                font-medium
                text-[var(--muted)]
                shadow-sm
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-green-500
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-green-500
                  "
                />
              </span>

              Available for selected projects
            </div>

            {/* Heading */}

            <h1
              className="
                max-w-4xl
                text-5xl
                font-bold
                leading-[1.04]
                tracking-[-0.045em]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.4rem]
              "
            >
              I create digital

              <span className="block">
                experiences that{" "}

                <span className="text-blue-500">
                  stand out.
                </span>
              </span>
            </h1>

            {/* ========================================
                TYPEWRITER
            ======================================== */}

            <div
              className="
                mt-7
                flex
                min-h-[34px]
                items-center
                gap-2
                text-xl
                font-semibold
                sm:text-2xl
              "
            >
              <span className="text-[var(--muted)]">
                I’m a
              </span>

              <span className="text-blue-500">
                {displayText}
              </span>

              <span
                className="
                  hero-typewriter-cursor
                  inline-block
                  h-6
                  w-[2px]
                  bg-blue-500
                  sm:h-7
                "
              />
            </div>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-[var(--muted)]
                sm:text-lg
              "
            >
              I’m{" "}

              <span className="font-semibold text-[var(--text)]">
                Rokeeb A. Yusuff
              </span>

              , a creative professional combining web
              development, brand design, and visual
              communication to build work that is
              purposeful, modern, and memorable.
            </p>

            {/* ========================================
                CTA
            ======================================== */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-500
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:shadow-xl
                  hover:shadow-blue-500/30
                "
              >
                View My Work

                <FiArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              <a
                href="/developer-cv.pdf"
                download
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[var(--text)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:bg-blue-500/5
                  hover:text-blue-500
                "
              >
                <FiDownload
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />

                Download CV
              </a>
            </div>

            {/* ========================================
                SOCIAL HANDLES
            ======================================== */}

            <div className="mt-10">

              <p
                className="
                  mb-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--muted)]
                "
              >
                Connect with me
              </p>

              <div className="flex flex-wrap items-center gap-3">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <div
                      key={social.name}
                      className="group relative"
                    >

                      {/* Social Button */}

                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[var(--border)]
                          bg-[var(--card)]/80
                          text-[var(--muted)]
                          backdrop-blur-md
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-transparent
                          ${social.color}
                          ${social.textColor}
                        `}
                      >
                        <Icon
                          size={18}
                          className="
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </a>

                      {/* ========================================
                          COLORED TOOLTIP
                      ======================================== */}

                      <span
                        className={`
                          pointer-events-none
                          absolute
                          bottom-full
                          left-1/2
                          mb-3
                          -translate-x-1/2
                          translate-y-1
                          whitespace-nowrap
                          rounded-lg
                          px-2.5
                          py-1.5
                          text-[11px]
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

                        <span
                          className={`
                            absolute
                            left-1/2
                            top-full
                            -translate-x-1/2
                            border-x-[5px]
                            border-t-[5px]
                            border-x-transparent
                          `}
                          style={{
                            borderTopColor:
                              social.name === "GitHub"
                                ? "#181717"
                                : social.name === "LinkedIn"
                                ? "#0A66C2"
                                : social.name === "X"
                                ? "#000000"
                                : social.name === "Facebook"
                                ? "#1877F2"
                                : social.name === "Instagram"
                                ? "#DD2A7B"
                                : social.name === "TikTok"
                                ? "#000000"
                                : social.name === "YouTube"
                                ? "#FF0000"
                                : "#1769FF",
                          }}
                        />
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

          {/* ========================================
              RIGHT PROFILE AREA
          ======================================== */}

          <div
            className="
              relative
              flex
              min-h-[500px]
              items-center
              justify-center
              lg:min-h-[560px]
            "
          >

            {/* Large blue backlight */}

            <div
              className="
                hero-profile-glow
                absolute
                h-[320px]
                w-[380px]
                rounded-full
                bg-blue-500/25
                blur-[90px]
                sm:h-[390px]
                sm:w-[390px]
              "
            />

            {/* ========================================
                PROFILE IMAGE FRAME
            ======================================== */}

            <div
              className="
                group
                relative
                z-10
                h-[380px]
                w-[290px]
                overflow-hidden
                rounded-[2rem]
                border-2
                border-blue-400/30
                bg-[var(--card)]
                shadow-[0_0_60px_rgba(59,130,246,0.25)]
                sm:h-[440px]
                sm:w-[330px]
                lg:h-[470px]
                lg:w-[370px]
              "
            >

              {/* Strong outer glow */}

              <div
                className="
                  hero-frame-glow
                  pointer-events-none
                  absolute
                  -inset-5
                  z-0
                  rounded-[2.5rem]
                  bg-blue-500/35
                  blur-[25px]
                "
              />

              {/* Bright inner frame */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  rounded-[2rem]
                  border
                  border-blue-300/30
                "
              />

              {/* ========================================
                  DARK MODE IMAGE
              ======================================== */}

              <img
                src="/images/new.png"
                alt="Rokeeb A. Yusuff"
                className={`
                  relative
                  z-10
                  h-full
                  w-full
                  object-cover
                  object-top
                  transition-all
                  duration-700
                  ${
                    isDark
                      ? "opacity-100 scale-100"
                      : "pointer-events-none absolute opacity-0 scale-[0.98]"
                  }
                  group-hover:scale-[1.035]
                `}
              />

              {/* ========================================
                  LIGHT MODE IMAGE
              ======================================== */}

              <img
                src="/images/ray.png"
                alt="Rokeeb A. Yusuff"
                className={`
                  absolute
                  inset-0
                  z-10
                  h-full
                  w-full
                  object-cover
                  object-top
                  transition-all
                  duration-700
                  ${
                    !isDark
                      ? "opacity-100 scale-100"
                      : "pointer-events-none opacity-0 scale-[0.98]"
                  }
                  group-hover:scale-[1.035]
                `}
              />

              {/* Image overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-[15]
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-blue-500/10
                "
              />

              {/* Bottom subtle glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-[16]
                  h-32
                  bg-gradient-to-t
                  from-blue-950/30
                  to-transparent
                "
              />

              {/* ========================================
                  REFLECTION SWEEP
              ======================================== */}

              <div
                className="
                  hero-frame-reflection
                  pointer-events-none
                  absolute
                  -left-1/2
                  top-[-30%]
                  z-30
                  h-[180%]
                  w-[35%]
                  rotate-[18deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                  blur-[8px]
                "
              />

              {/* Brighter reflection */}

              <div
                className="
                  hero-frame-reflection
                  pointer-events-none
                  absolute
                  -left-1/2
                  top-[-30%]
                  z-30
                  h-[180%]
                  w-[10%]
                  rotate-[18deg]
                  bg-white/50
                  blur-[4px]
                "
                style={{
                  animationDelay: "2.2s",
                }}
              />
            </div>

            {/* ========================================
                TOP FLOATING BADGE
            ======================================== */}

            <div
              className="
                hero-badge-float
                absolute
                right-[0px]
                top-[35px]
                z-40
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--card)]/90
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
                sm:right-[-10px]
                sm:top-[65px]
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-blue-500
                  "
                >
                  <FiArrowUpRight size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-[var(--text)]
                    "
                  >
                    Building with purpose
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      text-[var(--muted)]
                    "
                  >
                    Design • Code • Identity
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================
                AVAILABLE FOR WORK BADGE
            ======================================== */}

            <div
              className="
                hero-badge-float-reverse
                absolute
                bottom-[25px]
                left-[0px]
                z-40
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--card)]/95
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
                sm:bottom-[55px]
                sm:left-[-35px]
              "
            >
              <div className="flex items-center gap-3">

                <span
                  className="
                    hero-status
                    flex
                    h-3
                    w-3
                    rounded-full
                    bg-green-500
                    shadow-[0_0_12px_rgba(34,197,94,0.7)]
                  "
                />

                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-[var(--text)]
                    "
                  >
                    Available for Work
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      text-[var(--muted)]
                    "
                  >
                    Open to selected projects
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================
                SMALL FLOATING DOTS
            ======================================== */}

            <span
              className="
                hero-decorative-dot-one
                absolute
                right-[20px]
                top-[180px]
                h-3
                w-3
                rounded-full
                bg-blue-500
                shadow-[0_0_20px_rgba(59,130,246,0.8)]
              "
            />

            <span
              className="
                hero-decorative-dot-two
                absolute
                bottom-[150px]
                right-[25px]
                h-2
                w-2
                rounded-full
                bg-blue-400
              "
            />

            <span
              className="
                hero-decorative-dot-three
                absolute
                left-[30px]
                top-[150px]
                h-2
                w-2
                rounded-full
                bg-blue-500/60
              "
            />
          </div>
        </div>

        {/* ========================================
            SCROLL INDICATOR
        ======================================== */}

        <a
          href="#about"
          className="
            absolute
            bottom-7
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-[var(--muted)]
            transition-colors
            duration-300
            hover:text-blue-500
            md:flex
          "
        >
          <span
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
            "
          >
            Scroll
          </span>

          <span
            className="
              h-10
              w-px
              bg-[var(--border)]
            "
          />
        </a>
      </section>
    </>
  );
};

export default Hero;
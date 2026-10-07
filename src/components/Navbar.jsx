import { useEffect, useState } from "react";

import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiArrowUpRight,
  FiHome,
  FiUser,
  FiBriefcase,
  FiLayers,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

const navLinks = [
  {
    name: "Home",
    id: "home",
    icon: FiHome,
  },
  {
    name: "About",
    id: "about",
    icon: FiUser,
  },
  {
    name: "Services",
    id: "services",
    icon: FiLayers,
  },
  {
    name: "Projects",
    id: "projects",
    icon: FiBriefcase,
  },
  {
    name: "Testimonials",
    id: "testimonials",
    icon: FiMessageCircle,
  },
  {
    name: "Contact",
    id: "contact",
    icon: FiMail,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  /* ========================================
     THEME
  ======================================== */

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* ========================================
     ACTIVE SECTION + NAVBAR SCROLL
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setScrolled(scrollPosition > 20);

      if (scrollPosition < 300) {
        setActiveSection("home");
        return;
      }

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const referencePoint = 150;

      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= referencePoint &&
          rect.bottom > referencePoint
        ) {
          currentSection = section.id;
        }
      });

      /* Force Contact to be active at the bottom of the page */
      if (
        window.innerHeight + scrollPosition >=
        document.documentElement.scrollHeight - 100
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ========================================
     SCROLL TO SECTION
  ======================================== */

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 76;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  /* ========================================
     TOGGLE THEME
  ======================================== */

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <>
      {/* ========================================
          DESKTOP / MAIN NAVBAR
      ======================================== */}

      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-300
          ${
            scrolled
              ? `
                border-b
                border-[var(--border)]
                bg-[var(--background)]/90
                shadow-lg
                shadow-black/5
                backdrop-blur-xl
              `
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[76px]
            max-w-[1240px]
            items-center
            justify-between
            px-5
            sm:px-6
            lg:px-8
          "
        >
          {/* ========================================
              LOGO
          ======================================== */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-blue-500/30
                bg-blue-500/10
                text-lg
                font-bold
                text-blue-500
                transition-all
                duration-300
                group-hover:border-blue-500
                group-hover:bg-blue-500
                group-hover:text-white
                group-hover:shadow-lg
                group-hover:shadow-blue-500/20
              "
            >
              R
            </div>

            <div className="hidden text-left sm:block">
              <p
                className="
                  text-base
                  font-bold
                  leading-none
                  text-[var(--text)]
                "
              >
                R.A.Y
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[var(--muted)]
                "
              >
                Developer & Designer
              </p>
            </div>
          </button>

          {/* ========================================
              DESKTOP NAVIGATION
          ======================================== */}

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    group
                    relative
                    rounded-xl
                    px-3.5
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? `
                          bg-blue-500/10
                          text-blue-500
                          dark:text-blue-400
                        `
                        : `
                          text-[var(--muted)]
                          hover:bg-[var(--card)]
                          hover:text-[var(--text)]
                          hover:-translate-y-[1px]
                        `
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-blue-500
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-6"
                          : "w-0 group-hover:w-6"
                      }
                    `}
                  />
                </button>
              );
            })}
          </nav>

          {/* ========================================
              DESKTOP ACTIONS
          ======================================== */}

          <div className="hidden items-center gap-3 lg:flex">
            {/* Theme Toggle */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                text-[var(--muted)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-blue-500
                hover:bg-blue-500/10
                hover:text-blue-500
                hover:shadow-md
                hover:shadow-blue-500/10
              "
            >
              {darkMode ? (
                <FiSun
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-12
                  "
                />
              ) : (
                <FiMoon
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-rotate-12
                  "
                />
              )}
            </button>

            {/* Let's Talk */}

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                bg-blue-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-blue-600
                hover:shadow-lg
                hover:shadow-blue-500/25
              "
            >
              Let's Talk

              <FiArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </button>
          </div>

          {/* ========================================
              MOBILE ACTIONS
          ======================================== */}

          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Toggle */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                text-[var(--muted)]
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-blue-500/10
                hover:text-blue-500
              "
            >
              {darkMode ? (
                <FiSun
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-12
                  "
                />
              ) : (
                <FiMoon
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-rotate-12
                  "
                />
              )}
            </button>

            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                text-[var(--text)]
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-blue-500/10
                hover:text-blue-500
              "
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================
          MOBILE BLUR / CLICK OUTSIDE OVERLAY
      ======================================== */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed
          inset-0
          z-[60]
          bg-black/50
          backdrop-blur-md
          transition-all
          duration-500
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* ========================================
          MOBILE DRAWER
      ======================================== */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-[70]
          flex
          h-[100dvh]
          w-[300px]
          max-w-[85vw]
          flex-col
          border-r
          border-[var(--border)]
          bg-[var(--background)]
          shadow-2xl
          transition-transform
          duration-500
          lg:hidden
          ${
            menuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* ========================================
            DRAWER HEADER
        ======================================== */}

        <div
          className="
            flex
            h-[76px]
            shrink-0
            items-center
            justify-between
            border-b
            border-[var(--border)]
            px-5
          "
        >
          {/* Mobile Logo */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-blue-500
                font-bold
                text-white
              "
            >
              R
            </div>

            <div className="text-left">
              <p
                className="
                  text-base
                  font-bold
                  text-[var(--text)]
                "
              >
                R.A.Y
              </p>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[var(--muted)]
                "
              >
                Developer & Designer
              </p>
            </div>
          </button>

          {/* Close Button */}

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--border)]
              text-[var(--muted)]
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-blue-500
              hover:text-white
            "
          >
            <FiX size={20} />
          </button>
        </div>

        {/* ========================================
            DRAWER NAVIGATION
        ======================================== */}

        <nav
          className="
            flex-1
            overflow-y-auto
            overscroll-contain
            px-4
            py-6
          "
        >
          <p
            className="
              mb-4
              px-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[var(--muted)]
            "
          >
            Navigation
          </p>

          <div className="space-y-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive =
                activeSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() =>
                    scrollToSection(link.id)
                  }
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    gap-4
                    rounded-xl
                    px-4
                    py-3.5
                    text-left
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? `
                          bg-blue-500/10
                          text-blue-500
                        `
                        : `
                          text-[var(--muted)]
                          hover:bg-[var(--card)]
                          hover:text-[var(--text)]
                          hover:translate-x-1
                        `
                    }
                  `}
                >
                  {/* Active Indicator */}

                  <span
                    className={`
                      absolute
                      left-0
                      top-1/2
                      h-7
                      w-[3px]
                      -translate-y-1/2
                      rounded-r-full
                      bg-blue-500
                      transition-opacity
                      duration-300
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />

                  <Icon size={18} />

                  <span className="flex-1 text-sm font-medium">
                    {link.name}
                  </span>

                  <span className="text-[10px] text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiArrowUpRight
                    size={15}
                    className={`
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </nav>

        {/* ========================================
            DRAWER FOOTER
        ======================================== */}

        <div
          className="
            shrink-0
            border-t
            border-[var(--border)]
            p-5
          "
        >
          {/* Project Card */}

          <div
            className="
              mb-4
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-4
              transition-all
              duration-300
              hover:border-blue-500/40
            "
          >
            <p
              className="
                text-xs
                font-semibold
                text-[var(--text)]
              "
            >
              Let's work together
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[var(--muted)]
              "
            >
              Have a project in mind? Let's create
              something meaningful.
            </p>
          </div>

          {/* Let's Talk Button */}

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-500
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600
              hover:shadow-lg
              hover:shadow-blue-500/25
            "
          >
            Let's Talk

            <FiArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
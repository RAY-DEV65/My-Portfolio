
import React, { useEffect, useRef, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiStar,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Daniel Johnson",
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "Working with Rokeeb was a great experience. He understood the vision for my website and turned it into something clean, modern, and professional.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Founder & Entrepreneur",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review:
      "I was impressed by the attention to detail. From the design to the final implementation, everything felt intentional and professionally done.",
  },
  {
    id: 3,
    name: "Michael Adams",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    review:
      "Rokeeb didn't just build what I asked for. He also suggested better ways to structure the experience, which made the final product much stronger.",
  },
  {
    id: 4,
    name: "Amara Okafor",
    role: "Brand Strategist",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "The branding work was exactly what I needed. The final identity feels professional, memorable, and aligned with the direction of my business.",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Creative Director",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    review:
      "One thing I really appreciated was the communication throughout the project. Every stage was clear and the final result exceeded expectations.",
  },
  {
    id: 6,
    name: "Fatima Bello",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    review:
      "The website feels fast, responsive, and very easy to navigate. I loved how the design captured the personality of my brand.",
  },
  {
    id: 7,
    name: "Samuel Adeyemi",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=68",
    rating: 5,
    review:
      "Professional, creative, and easy to work with. Rokeeb delivered a polished product while keeping the development process straightforward.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [show, setShow] = useState(false);

  const GAP = 20;

  /* ==========================================
     REVEAL ON SCROLL
  ========================================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* ==========================================
     RESPONSIVE CARD COUNT
  ========================================== */
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  /* ==========================================
     CALCULATE REAL CARD WIDTH
  ========================================== */
  useEffect(() => {
    const calculateCardWidth = () => {
      if (!sliderRef.current) return;

      const containerWidth = sliderRef.current.clientWidth;

      const width =
        (containerWidth - GAP * (visibleCards - 1)) /
        visibleCards;

      setCardWidth(width);
    };

    calculateCardWidth();

    const resizeObserver = new ResizeObserver(
      calculateCardWidth
    );

    if (sliderRef.current) {
      resizeObserver.observe(sliderRef.current);
    }

    window.addEventListener("resize", calculateCardWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener(
        "resize",
        calculateCardWidth
      );
    };
  }, [visibleCards]);

  /* ==========================================
     SLIDER LIMIT
  ========================================== */
  const maxSlide = Math.max(
    testimonials.length - visibleCards,
    0
  );

  /* ==========================================
     KEEP CURRENT INDEX VALID
  ========================================== */
  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);

  /* ==========================================
     NEXT
  ========================================== */
  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev >= maxSlide ? 0 : prev + 1
    );
  };

  /* ==========================================
     PREVIOUS
  ========================================== */
  const previousTestimonial = () => {
    setCurrent((prev) =>
      prev <= 0 ? maxSlide : prev - 1
    );
  };

  /* ==========================================
     AUTO SLIDE
  ========================================== */
  useEffect(() => {
    if (maxSlide <= 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev >= maxSlide ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [maxSlide]);

  /* ==========================================
     TRACK TRANSLATION
  ========================================== */
  const translateX =
    current * (cardWidth + GAP);

  const totalDots = maxSlide + 1;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`relative w-full overflow-hidden bg-white px-6 py-24 text-slate-900 transition-all duration-1000 dark:bg-[#07111d] dark:text-white sm:px-8 lg:px-12 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* ========================================
            HEADING
        ========================================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Client Experiences
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What People{" "}
            <span className="bg-gradient-to-r from-[#004d93] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Say
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            A few words from people I've had the opportunity
            to work with and help bring their ideas to life.
          </p>
        </div>

        {/* ========================================
            SLIDER
        ========================================= */}
        <div className="flex w-full items-center gap-3 sm:gap-5">
          {/* PREVIOUS */}
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-[#004d93] hover:bg-[#004d93] hover:text-white dark:border-white/10 dark:bg-[#0b1724] dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-[#004d93] dark:hover:text-white sm:h-11 sm:w-11"
          >
            <FiChevronLeft
              size={19}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </button>

          {/* SLIDER WINDOW */}
          <div
            ref={sliderRef}
            className="min-w-0 flex-1 overflow-hidden py-4"
          >
            {/* TRACK */}
            <div
              className="flex gap-5 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translate3d(-${translateX}px, 0, 0)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  style={{
                    width: `${cardWidth}px`,
                    minWidth: `${cardWidth}px`,
                  }}
                  className="group relative flex min-h-[290px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-[#0b1724] dark:shadow-black/20 dark:hover:border-blue-500/30"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    {/* Quote */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-all duration-300 group-hover:bg-[#004d93] group-hover:text-white">
                      <FaQuoteLeft size={16} />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, index) => (
                        <FiStar
                          key={index}
                          size={14}
                          className="fill-current text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="mt-6 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    "{testimonial.review}"
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px bg-slate-100 dark:bg-white/10" />

                  {/* Client */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full border-2 border-blue-500/30 object-cover"
                    />

                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Decorative number */}
                  <span className="pointer-events-none absolute bottom-3 right-5 text-5xl font-black text-slate-100 transition-all duration-300 group-hover:text-blue-500/5 dark:text-white/[0.025]">
                    {String(testimonial.id).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:translate-x-1 hover:border-[#004d93] hover:bg-[#004d93] hover:text-white dark:border-white/10 dark:bg-[#0b1724] dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-[#004d93] dark:hover:text-white sm:h-11 sm:w-11"
          >
            <FiChevronRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* ========================================
            DOTS
        ========================================= */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {Array.from({ length: totalDots }).map(
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show testimonial group ${
                  index + 1
                }`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-7 bg-[#004d93]"
                    : "w-1.5 bg-slate-300 hover:bg-blue-400 dark:bg-slate-700"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useEffect, useRef, useState } from "react";

import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiX,
  FiLoader,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";

const Contact = () => {
  const formRef = useRef(null);
  const toastTimerRef = useRef(null);
  const requestTimerRef = useRef(null);

  const [isSending, setIsSending] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  /* ==========================================
     DROPDOWN OPTIONS
  ========================================== */

  const projectTypes = ["Website", "Web Application", "Brand Design", "Other"];

  const budgets = [
    "Under $250",
    "$250 - $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500+",
    "Not sure yet",
  ];

  /* ==========================================
     SHOW TOAST
  ========================================== */

  const showToast = (type, message) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast({
      show: true,
      type,
      message,
    });

    toastTimerRef.current = setTimeout(() => {
      setToast({
        show: false,
        type: "",
        message: "",
      });
    }, 4000);
  };

  /* ==========================================
     CLOSE TOAST
  ========================================== */

  const closeToast = () => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast({
      show: false,
      type: "",
      message: "",
    });
  };

  /* ==========================================
     CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  ========================================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("[data-custom-select]")) {
        setProjectTypeOpen(false);
        setBudgetOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* ==========================================
     CLEAN UP TIMERS
  ========================================== */

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }

      if (requestTimerRef.current) {
        clearTimeout(requestTimerRef.current);
      }
    };
  }, []);

  /* ==========================================
     SUBMIT FORM - WEB3FORMS
  ========================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    /*
      Make sure the custom dropdown values are included
      in the submitted FormData.
    */

    const formData = new FormData(formRef.current);

    formData.set("project_type", projectType);
    formData.set("budget", budget);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      throw new Error("Web3Forms access key is missing.");
    }

    formData.set("access_key", accessKey);

    formData.set("from_name", "Rokeeb Portfolio Contact Form");

    /*
      I use the visitor's subject as the email subject.
    */

    const visitorSubject = formData.get("subject") || "New Project Inquiry";

    formData.set("subject", visitorSubject);

    /*
      Web3Forms bot protection.
    */

    formData.set("botcheck", "");

    const controller = new AbortController();

    requestTimerRef.current = setTimeout(() => {
      controller.abort();
    }, 5000);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      showToast(
        "success",
        "Message sent successfully! I'll get back to you as soon as possible.",
      );

      formRef.current.reset();

      setProjectType("");
      setBudget("");
    } catch (error) {
      console.error("Web3Forms Error:", error);

      if (error.name === "AbortError") {
        showToast(
          "error",
          "The request took too long. Please check your connection and try again.",
        );
      } else {
        showToast(
          "error",
          "Something went wrong. Please try again or contact me directly.",
        );
      }
    } finally {
      if (requestTimerRef.current) {
        clearTimeout(requestTimerRef.current);
      }

      setIsSending(false);
    }
  };

  /* ==========================================
     SELECT PROJECT TYPE
  ========================================== */

  const selectProjectType = (value) => {
    setProjectType(value);
    setProjectTypeOpen(false);
  };

  /* ==========================================
     SELECT BUDGET
  ========================================== */

  const selectBudget = (value) => {
    setBudget(value);
    setBudgetOpen(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-slate-50 px-6 py-24 text-slate-900 dark:bg-[#07111d] dark:text-white sm:px-8 lg:px-12"
    >
      {/* ========================================
          BACKGROUND GLOWS
      ========================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />

      {/* ========================================
          SUCCESS / ERROR TOAST
      ========================================= */}

      {toast.show && (
        <div
          className={`fixed right-5 top-5 z-[9999] flex w-[calc(100%-40px)] max-w-md items-start gap-3 overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 sm:right-8 sm:top-8 ${
            toast.type === "success"
              ? "border-emerald-500/20 bg-white/95 dark:bg-[#0b1724]/95"
              : "border-red-500/20 bg-white/95 dark:bg-[#0b1724]/95"
          }`}
        >
          {/* Icon */}

          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              toast.type === "success"
                ? "bg-emerald-500/10 text-emerald-500"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            {toast.type === "success" ? (
              <FiCheckCircle size={19} />
            ) : (
              <FiAlertCircle size={19} />
            )}
          </div>

          {/* Message */}

          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {toast.type === "success" ? "Message Sent" : "Submission Failed"}
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {toast.message}
            </p>
          </div>

          {/* Close */}

          <button
            type="button"
            onClick={closeToast}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Close notification"
          >
            <FiX size={15} />
          </button>

          {/* Progress */}

          <div
            className={`absolute bottom-0 left-0 h-0.5 rounded-full ${
              toast.type === "success" ? "bg-emerald-500" : "bg-red-500"
            }`}
            style={{
              width: "100%",
              animation: "toastProgress 4s linear forwards",
            }}
          />
        </div>
      )}

      <style>
        {`
          @keyframes toastProgress {
            from {
              width: 100%;
            }

            to {
              width: 0%;
            }
          }
        `}
      </style>

      <div className="relative mx-auto max-w-7xl">
        {/* ========================================
            HEADING
        ========================================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Get In Touch
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#004d93] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Have a project in mind? Tell me about it and let's turn your idea
            into something meaningful.
          </p>
        </div>

        {/* ========================================
            CONTACT GRID
        ========================================= */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ======================================
              LEFT SIDE
          ====================================== */}

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#0b1724] dark:shadow-black/20 lg:p-10">
            {/* Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px]" />

            <div className="relative">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Let's start a conversation.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Whether you have a new project, need help improving an
                  existing one, or simply want to discuss an idea, I'd love to
                  hear from you.
                </p>
              </div>

              {/* CONTACT DETAILS */}

              <div className="space-y-5">
                {/* EMAIL */}

                <a
                  href="mailto:yusuffayobami02@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-all duration-300 group-hover:bg-[#004d93] group-hover:text-white">
                    <FiMail size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700 transition-colors group-hover:text-[#004d93] dark:text-slate-300 dark:group-hover:text-blue-400">
                      yusuffayobami02@gmail.com
                    </p>
                  </div>
                </a>

                {/* PHONE */}

                <a
                  href="tel:+2348134413540"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500 transition-all duration-300 group-hover:bg-[#004d93] group-hover:text-white">
                    <FiPhone size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700 transition-colors group-hover:text-[#004d93] dark:text-slate-300 dark:group-hover:text-blue-400">
                      +234 813 441 3540
                    </p>
                  </div>
                </a>

                {/* LOCATION */}

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 transition-all duration-300">
                    <FiMapPin size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                      Nigeria · Available Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* AVAILABILITY */}

              <div className="mt-10 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>

                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    Available for new projects
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-500">
                  Currently accepting selected freelance and collaboration
                  opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* ======================================
              FORM
          ====================================== */}

          <div className="relative overflow-visible rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#0b1724] dark:shadow-black/20 lg:p-10">
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]" />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative space-y-6"
            >
              {/* NAME + EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Rokeeb Yusuff"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500 dark:focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="yusuff@gmail.com"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500 dark:focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              {/* PROJECT TYPE + BUDGET */}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* PROJECT TYPE */}

                <div className="relative" data-custom-select>
                  <label
                    htmlFor="project_type"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Project Type
                  </label>

                  <input
                    type="hidden"
                    name="project_type"
                    value={projectType}
                  />

                  <button
                    type="button"
                    onClick={() => {
                      setProjectTypeOpen(!projectTypeOpen);
                      setBudgetOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm outline-none transition-all duration-300 ${
                      projectType
                        ? "border-slate-200 bg-slate-50 text-slate-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                        : "border-slate-200 bg-slate-50 text-slate-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-500"
                    } ${
                      projectTypeOpen
                        ? "border-blue-500 bg-white ring-4 ring-blue-500/10 dark:border-blue-500 dark:bg-white/[0.05]"
                        : ""
                    }`}
                  >
                    <span>{projectType || "Select a service"}</span>

                    <FiChevronDown
                      size={17}
                      className={`shrink-0 transition-transform duration-300 ${
                        projectTypeOpen
                          ? "rotate-180 text-blue-500"
                          : "text-slate-400"
                      }`}
                    />
                  </button>

                  {projectTypeOpen && (
                    <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_50px_rgba(15,23,42,0.15)] dark:border-white/10 dark:bg-[#101c2a] dark:shadow-black/40">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => selectProjectType(type)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-all duration-200 ${
                            projectType === type
                              ? "bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                              : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.05]"
                          }`}
                        >
                          <span>{type}</span>

                          {projectType === type && (
                            <FiCheck size={16} className="text-blue-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* BUDGET */}

                <div className="relative" data-custom-select>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Budget
                  </label>

                  <input type="hidden" name="budget" value={budget} />

                  <button
                    type="button"
                    onClick={() => {
                      setBudgetOpen(!budgetOpen);
                      setProjectTypeOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm outline-none transition-all duration-300 ${
                      budget
                        ? "border-slate-200 bg-slate-50 text-slate-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                        : "border-slate-200 bg-slate-50 text-slate-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-500"
                    } ${
                      budgetOpen
                        ? "border-blue-500 bg-white ring-4 ring-blue-500/10 dark:border-blue-500 dark:bg-white/[0.05]"
                        : ""
                    }`}
                  >
                    <span>{budget || "Select budget"}</span>

                    <FiChevronDown
                      size={17}
                      className={`shrink-0 transition-transform duration-300 ${
                        budgetOpen
                          ? "rotate-180 text-blue-500"
                          : "text-slate-400"
                      }`}
                    />
                  </button>

                  {budgetOpen && (
                    <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_50px_rgba(15,23,42,0.15)] dark:border-white/10 dark:bg-[#101c2a] dark:shadow-black/40">
                      {budgets.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => selectBudget(amount)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-all duration-200 ${
                            budget === amount
                              ? "bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                              : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.05]"
                          }`}
                        >
                          <span>{amount}</span>

                          {budget === amount && (
                            <FiCheck size={16} className="text-blue-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* SUBJECT */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Tell me briefly what you need"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500 dark:focus:bg-white/[0.05]"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project, goals, timeline, or anything else I should know..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-blue-500 dark:focus:bg-white/[0.05]"
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={isSending || !projectType || !budget}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#004d93] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,77,147,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-[0_15px_35px_rgba(0,77,147,0.3)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSending ? (
                  <>
                    <FiLoader size={18} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Project Inquiry
                    <FiSend
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400 dark:text-slate-600">
                Your information will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

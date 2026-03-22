"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (value: string): boolean => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value.trim());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setErrorMessage("Your email would be helpful here.");
      setFormState("error");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setErrorMessage("That doesn't look quite right — double-check your email?");
      setFormState("error");
      return;
    }

    setFormState("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong. Try again?");
      }

      setFormState("success");
      setEmail("");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again?"
      );
      setFormState("error");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {formState === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center rounded-2xl bg-amber-50 border border-amber-200 px-6 py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100"
            >
              <svg
                className="h-6 w-6 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </motion.div>
            <h3 className="text-lg font-semibold text-stone-800 mb-1">
              You&rsquo;re braver than you think
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Welcome to BoldPitch. We&rsquo;ll be in touch soon with early access.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-2"
            noValidate
          >
            <div className="flex-1 flex flex-col gap-1.5">
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@yourdomain.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (formState === "error") {
                    setFormState("idle");
                    setErrorMessage("");
                  }
                }}
                disabled={formState === "loading"}
                className={`
                  w-full rounded-xl border px-4 py-3 text-sm text-stone-800
                  placeholder:text-stone-400 bg-white
                  outline-none transition-all duration-200
                  focus:ring-2 focus:ring-amber-300 focus:border-amber-400
                  disabled:opacity-60 disabled:cursor-not-allowed
                  ${
                    formState === "error"
                      ? "border-red-300 ring-1 ring-red-200"
                      : "border-stone-200 hover:border-stone-300"
                  }
                `}
                aria-invalid={formState === "error"}
                aria-describedby={formState === "error" ? "waitlist-error" : undefined}
              />
              <AnimatePresence>
                {formState === "error" && errorMessage && (
                  <motion.p
                    id="waitlist-error"
                    role="alert"
                    initial={{ opacity: 0, height: 0, y: -4 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs text-red-500 pl-1"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              disabled={formState === "loading"}
              whileHover={formState !== "loading" ? { scale: 1.02 } : {}}
              whileTap={formState !== "loading" ? { scale: 0.98 } : {}}
              className={`
                relative rounded-xl px-6 py-3 text-sm font-medium
                transition-all duration-200 whitespace-nowrap
                disabled:cursor-not-allowed
                bg-stone-800 text-white hover:bg-stone-700
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-stone-500 focus-visible:ring-offset-2
                sm:self-start
              `}
            >
              <AnimatePresence mode="wait">
                {formState === "loading" ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="inline-block h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                    />
                    Joining…
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    Join the waitlist
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
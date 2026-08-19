"use client";

import { useId, useState } from "react";
import Link from "next/link";

export default function SubscribeSection() {
  const [submitted, setSubmitted] = useState(false);
  const emailId = useId();

  return (
    <section id="subscribe" className="relative z-10 w-full border-t border-gold/40 bg-beige">
      <div className="container">
        <div className="flex flex-col items-start gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-20">
          <div className="lg:max-w-[420px]">
            <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
                <path d="M3 6l9 7 9-7" />
              </svg>
              Stay in the loop
            </div>
            <h2 className="font-serif text-[28px]/tight italic text-navy lg:text-[40px]/tight">
              Subscribe to our insights
            </h2>
            <p className="mt-3 max-w-sm text-navy/70">
              Get KHQ&apos;s legal insights and firm news delivered straight to your inbox.
            </p>
          </div>

          {submitted ? (
            <p className="text-lg text-navy lg:max-w-md">
              Thanks for subscribing — check your inbox to confirm.
            </p>
          ) : (
            <div className="w-full lg:max-w-md">
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label htmlFor={emailId} className="sr-only">
                  Email address
                </label>
                <input
                  id={emailId}
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="h-[52px] flex-1 rounded-lg border border-white/60 bg-white/30 px-4 text-navy shadow-[0_8px_30px_-12px_rgba(0,38,59,0.15)] outline-none backdrop-blur-lg backdrop-saturate-150 placeholder:text-navy/50 focus:border-gold"
                />
                <button
                  type="submit"
                  className="flex h-[52px] shrink-0 items-center justify-center gap-3 rounded-lg bg-gold px-8 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-navy"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-xs text-navy/50">
                By subscribing you agree to our{" "}
                <Link href="/privacy-policy" className="underline hover:text-navy">
                  Privacy Policy
                </Link>
                . Unsubscribe anytime.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function EnquireModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("khq:open-enquire", handler);
    return () => window.removeEventListener("khq:open-enquire", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        aria-label="Close modal"
        className="absolute inset-0 bg-navy/70"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 sm:p-10">
        <button
          type="button"
          aria-label="Close modal"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-2xl leading-none text-navy/60 hover:text-navy"
        >
          &times;
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <p className="page-title text-2xl text-gold">Thank you</p>
            <p className="mt-3 text-sm text-navy/80">
              We&apos;ve received your enquiry and will be in touch shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className="page-title text-3xl text-navy sm:text-4xl">How can we help you?</h2>
            <form
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs uppercase tracking-wide text-navy/60">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full border-b border-navy/30 bg-transparent py-2 outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-navy/60">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-b border-navy/30 bg-transparent py-2 outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-navy/60">
                  Phone*
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border-b border-navy/30 bg-transparent py-2 outline-none focus:border-gold"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs uppercase tracking-wide text-navy/60">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-b border-navy/30 bg-transparent py-2 outline-none focus:border-gold"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs uppercase tracking-wide text-navy/60">
                  Your Message*
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full border-b border-navy/30 bg-transparent py-2 outline-none focus:border-gold"
                />
              </div>
              <p className="text-[11px] leading-snug text-navy/50 sm:col-span-2">
                Your information is collected by Kelly Hazell Quill Lawyers Pty Ltd (trading as
                KHQ Lawyers) and will be used and held in accordance with our Privacy Policy.
              </p>
              <button
                type="submit"
                className="mt-2 w-full bg-gold py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-navy sm:col-span-2"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

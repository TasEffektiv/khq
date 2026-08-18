"use client";

import { useState } from "react";

export default function SubscribeSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative z-10 w-full bg-beige">
      <div className="container">
        <div className="grid w-full items-start gap-x-4 border-b border-white py-10 md:flex">
          <h2 className="font-serif text-2xl italic text-white md:basis-5/12 lg:translate-y-px lg:text-[32px]">
            Subscribe:
          </h2>
          {submitted ? (
            <p className="flex-1 text-white">Thanks for subscribing.</p>
          ) : (
            <form
              className="flex flex-1 gap-4 text-white"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter Your Email Here"
                className="my-5 flex h-[32px] flex-1 items-center border-b border-current bg-transparent text-lg italic outline-none placeholder:text-white focus:border-b md:my-0 md:border-0 lg:h-[40px] lg:text-[22px]"
              />
              <button
                type="submit"
                className="group flex w-[120px] items-center gap-3 uppercase hover:text-navy lg:w-[160px]"
              >
                <span>Submit</span>
                <span className="flex w-full items-center transition-transform group-hover:translate-x-1">
                  <span className="relative -mr-[14px] h-px w-full bg-current" />
                  <span
                    className="p-1.5 -rotate-45"
                    style={{ borderWidth: "0 1px 1px 0", borderColor: "currentColor", borderStyle: "solid" }}
                  />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

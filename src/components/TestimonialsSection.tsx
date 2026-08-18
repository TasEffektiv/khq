"use client";

import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="container pb-10">
      <SectionHeading>Testimonials</SectionHeading>

      <div className="relative py-10 lg:py-14">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.name + t.quote.slice(0, 12)}
              data-card
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-xl bg-beige py-8 text-white shadow-xl sm:w-[420px]"
            >
              <div className="px-6 text-center xl:px-10">
                <p className="text-[14px] leading-snug xl:text-[15px]">
                  <em>&lsquo;{t.quote}&rsquo;</em> {t.attribution}
                </p>
                <div className="my-4 text-center">
                  <h4 className="text-[14px] font-bold capitalize xl:text-[15px]">{t.name}</h4>
                  {t.role && <p className="text-[11px]">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => scrollByCard(-1)}
            className="flex size-10 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-white"
          >
            &#8592;
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => scrollByCard(1)}
            className="flex size-10 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-white"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section>
      <div className="container pb-10">
        <SectionHeading>Testimonials</SectionHeading>

        <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden py-10 lg:mt-14">
          <div className="flex w-max animate-marquee gap-6">
            {loop.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="relative flex min-h-[340px] w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-navy/10 bg-beige/50 p-8 text-navy shadow-xl backdrop-blur-md backdrop-saturate-150 sm:w-[380px] sm:p-9 lg:w-[420px]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-serif text-[160px] italic leading-none text-white/50"
                >
                  &ldquo;
                </span>
                <div className="relative pt-6 text-center">
                  <p className="text-[14px] italic leading-relaxed xl:text-[15px]">{t.quote}</p>
                  <p className="mt-4 text-[10px] uppercase tracking-wide text-navy/50">{t.attribution}</p>
                </div>
                <div className="mt-6 border-t border-white/50 pt-5 text-center">
                  <h4 className="text-[14px] font-bold capitalize xl:text-[15px]">{t.name}</h4>
                  {t.role && <p className="mt-0.5 text-[11px] text-navy/60">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

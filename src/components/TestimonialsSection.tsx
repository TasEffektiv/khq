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
                className="flex w-[300px] shrink-0 flex-col rounded-xl border border-white/25 bg-beige/70 py-8 text-white shadow-xl backdrop-blur-md backdrop-saturate-150 sm:w-[380px] lg:w-[420px]"
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
        </div>
      </div>
    </section>
  );
}

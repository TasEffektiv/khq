import Link from "next/link";
import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";
import { expertiseAreas } from "@/lib/data";

export default function ExpertiseSection() {
  return (
    <section className="container">
      <SectionHeading>Expertise</SectionHeading>

      <div className="grid grid-cols-1 gap-14 py-10">
        <FeatureCard
          image="/images/expertise.jpg"
          alt="KHQ Lawyers - a boutique top-tier commercial law firm"
          title="Expertise"
          copy="As a full-service top-tier firm, our teams, across all areas of commercial law, are highly respected professionals who invest their own time to get to know and fully understand our clients to deliver bespoke solutions for their specific needs and desired outcomes."
          href="/expertise"
        />

        <div>
          <h3 className="max-w-[500px] font-serif text-[22px]/tight italic text-gold lg:text-[28px]/tight">
            Our full range of areas of expertise
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group flex items-center justify-between gap-4 rounded-xl border border-white/60 bg-white/20 px-5 py-4 text-navy shadow-[0_8px_30px_-12px_rgba(0,38,59,0.15)] backdrop-blur-lg backdrop-saturate-150 transition-colors duration-300 hover:bg-white/40 hover:text-gold"
              >
                <span className="text-base/tight">{area.label}</span>
                <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowGlyph />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

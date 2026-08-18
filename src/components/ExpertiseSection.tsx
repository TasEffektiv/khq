import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";

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
      </div>
    </section>
  );
}

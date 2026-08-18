import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";

export default function AboutSection() {
  return (
    <section className="container">
      <SectionHeading>About KHQ Lawyers</SectionHeading>

      <div className="grid grid-cols-1 gap-14 py-10">
        <FeatureCard
          image="/images/about-1.jpg"
          alt="KHQ Lawyers - 600 Bourke Street, Melbourne"
          title="Welcome to KHQ"
          copy="Get to know our story, our values and the standards we set and bring to our work, our clients and our people every single day."
          href="/our-history"
          cta="Read more"
        />
        <FeatureCard
          image="/images/about-2.jpg"
          alt="KHQ Lawyers - 600 Bourke Street, Melbourne"
          title="Recognition"
          copy="We're proud that both our people, and our firm, are consistently recognised by leading international ranking directories such as Chambers & Partners, Legal 500, Doyles Guide and The Best Lawyers™ - a reflection of the dedication, expertise and excellence we strive to deliver to our clients."
          href="/our-history"
        />
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import InsightsPageHero from "@/components/InsightsPageHero";
import InsightsFeatured from "@/components/InsightsFeatured";
import InsightsAlerts from "@/components/InsightsAlerts";
import InsightsSpotlight from "@/components/InsightsSpotlight";
import InsightsArchive from "@/components/InsightsArchive";
import SubscribeSection from "@/components/SubscribeSection";
import { insights, expertiseAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights | KHQ Lawyers",
  description:
    "Legal guidance, firm news and regulatory alerts from KHQ Lawyers, curated by practitioners across every practice area.",
};

function spotlightFor(division: string, image: string) {
  return {
    division,
    href: expertiseAreas.find((area) => area.label === division)?.href ?? "/expertise",
    image,
    articles: insights.filter((post) => post.division === division).slice(0, 2),
  };
}

export default function InsightsPage() {
  const spotlights = [
    spotlightFor("Family & Relationship Law", "/images/about-2.jpg"),
    spotlightFor("Workplace Relations & Safety", "/images/about-1.jpg"),
  ];

  return (
    <main>
      <InsightsPageHero />

      <div className="relative overflow-clip bg-[url('/images/bg-swoosh.png')] bg-cover bg-center">
        <InsightsFeatured />

        <InsightsAlerts />

        <section id="spotlight" className="container scroll-mt-20 lg:scroll-mt-28">
          <div className="divide-y divide-navy/10">
            {spotlights.map((spotlight, i) => (
              <InsightsSpotlight key={spotlight.division} {...spotlight} reverse={i % 2 === 1} />
            ))}
          </div>
        </section>

        <InsightsArchive />
      </div>

      <SubscribeSection />
    </main>
  );
}

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PullQuote from "@/components/PullQuote";
import ExpertiseSection from "@/components/ExpertiseSection";
import Divider from "@/components/Divider";
import InsightsSection from "@/components/InsightsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="relative overflow-clip bg-[url('/images/bg-swoosh.png')] bg-cover bg-center">
        <AboutSection />

        <PullQuote>
          Our people, our expertise, our experience &ndash; your peace of mind.
        </PullQuote>

        <ExpertiseSection />

        <Divider />

        <PullQuote>
          Having our clients at the heart of all we do means you&apos;ll never get an &lsquo;off
          the shelf&rsquo; or &lsquo;one size fits all&rsquo; solution from KHQ Lawyers.
        </PullQuote>

        <InsightsSection />

        <TestimonialsSection />
      </div>

      <SubscribeSection />
    </main>
  );
}

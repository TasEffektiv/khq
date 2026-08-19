import Image from "next/image";

export default function InsightsPageHero() {
  return (
    <div className="relative w-full overflow-hidden border-b border-gold pt-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://khq.com.au/wp-content/uploads/2024/03/PIO_Abstract_ConcreteElements_Web.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container pb-10 pt-10 text-white lg:pb-14 lg:pt-14">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold">
          <span className="size-2 rounded-full border border-current" />
          Insights
        </div>
        <h1 className="page-title max-w-[820px]">The KHQ Inner Circle</h1>
        <p className="mt-6 max-w-[600px] text-base text-white/70 lg:text-lg">
          Your central knowledge hub for all the latest legal guidance. Curated by our top-tier
          practitioners, from all practice areas, it delivers you concise, insightful, and timely
          legal information.
        </p>
      </div>
    </div>
  );
}

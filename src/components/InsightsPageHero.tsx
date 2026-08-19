export default function InsightsPageHero() {
  return (
    <div className="relative w-full overflow-hidden border-b border-gold bg-[url('/images/bg-swoosh.png')] bg-cover bg-center pt-24">
      <div className="container pb-10 pt-10 text-navy lg:pb-14 lg:pt-14">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold">
          <span className="size-2 rounded-full border border-current" />
          The KHQ Inner Circle
        </div>
        <h1 className="page-title max-w-[760px]">Insights</h1>
        <p className="mt-6 max-w-[600px] text-base text-navy/70 lg:text-lg">
          Legal guidance, firm news and regulatory alerts curated by practitioners across every
          KHQ practice area — published as it happens.
        </p>
      </div>
    </div>
  );
}

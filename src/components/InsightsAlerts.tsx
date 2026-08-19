import Link from "next/link";
import { insights } from "@/lib/data";

export default function InsightsAlerts() {
  const alerts = insights.filter((post) => post.tag === "Alerts").slice(0, 4);

  if (alerts.length === 0) return null;

  return (
    <section id="alerts" className="relative w-full scroll-mt-20 overflow-hidden bg-navy text-white lg:scroll-mt-28">
      <div className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full border border-white/10" />
      <div className="container relative py-14 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="lg:max-w-[340px]">
            <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold">
              <span className="size-2 rounded-full border border-current" />
              Alerts
            </div>
            <h2 className="font-serif text-[28px]/tight italic lg:text-[36px]/tight">Super Alerts</h2>
            <p className="mt-4 text-sm text-white/70 lg:text-base">
              Regular legislative and regulatory updates from our Superannuation &amp; Financial
              Services team, tracking every change that matters to trustees and administrators.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="#archive"
                className="group flex items-center gap-4 text-sm uppercase tracking-wide text-gold hover:font-medium"
              >
                View all Super Alerts
                <span className="flex items-center transition-transform group-hover:translate-x-2">
                  <span className="relative -mr-[10px] h-px w-6 bg-current" />
                  <span className="p-1 -rotate-45" style={{ borderWidth: "0 1px 1px 0", borderColor: "currentColor", borderStyle: "solid" }} />
                </span>
              </a>
              <a
                href="#subscribe"
                className="group flex items-center gap-4 text-sm uppercase tracking-wide text-white/80 hover:text-white hover:font-medium"
              >
                Subscribe for alerts
                <span className="flex items-center transition-transform group-hover:translate-x-2">
                  <span className="relative -mr-[10px] h-px w-6 bg-current" />
                  <span className="p-1 -rotate-45" style={{ borderWidth: "0 1px 1px 0", borderColor: "currentColor", borderStyle: "solid" }} />
                </span>
              </a>
            </div>
          </div>

          <ul className="flex-1 divide-y divide-white/15">
            {alerts.map((alert) => (
              <li key={alert.id}>
                <Link href={alert.href} className="group block py-5 first:pt-0 last:pb-0">
                  <time className="text-xs uppercase tracking-wide text-gold/80">{alert.date}</time>
                  <p className="mt-1.5 text-base/snug text-white/90 group-hover:text-white group-hover:underline">
                    {alert.title.replace(/^Super Alert\s*–\s*\d+\s\w+\s\d{4}:\s*/, "")}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import ArrowLink from "./ArrowLink";
import { insights } from "@/lib/data";

export default function InsightsFeatured() {
  const stories = insights.filter((post) => post.tag !== "Alerts").slice(0, 3);
  const [lead, ...rest] = stories;

  if (!lead) return null;

  return (
    <section id="featured" className="container scroll-mt-20 py-10 lg:scroll-mt-28 lg:py-14">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <article className="group relative">
          <Link href={lead.href} className="block overflow-hidden rounded-xl">
            <Image
              src={lead.image}
              alt={lead.title}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </Link>
          <div className="mt-5">
            <div className="mb-2 flex items-center gap-2 text-[11px]/snug font-bold uppercase">
              <span className="text-gold">{lead.tag}</span>
              {lead.division && (
                <>
                  <span className="text-gold/40">•</span>
                  <span className="text-navy/60">{lead.division}</span>
                </>
              )}
            </div>
            <h2 className="text-2xl/tight text-navy transition-colors group-hover:text-gold lg:text-[32px]/tight">
              <Link href={lead.href}>{lead.title}</Link>
            </h2>
            <p className="mt-3 max-w-[560px] text-sm text-navy/70 lg:text-base">{lead.excerpt}</p>
            <time className="mt-4 block text-xs uppercase tracking-wide text-navy/50">{lead.date}</time>
            <ArrowLink href={lead.href} className="mt-5 max-w-[200px]">
              Read More
            </ArrowLink>
          </div>
        </article>

        <div className="flex flex-col gap-10">
          {rest.map((post) => (
            <article key={post.id} className="group relative flex gap-5">
              <Link
                href={post.href}
                className="relative block w-[140px] shrink-0 self-stretch overflow-hidden rounded-lg sm:w-[180px]"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 640px) 180px, 140px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div>
                <div className="mb-1.5 flex items-center gap-2 text-[11px]/snug font-bold uppercase">
                  <span className="text-gold">{post.tag}</span>
                  {post.division && (
                    <>
                      <span className="text-gold/40">•</span>
                      <span className="text-navy/60">{post.division}</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg/tight text-navy transition-colors group-hover:text-gold lg:text-xl/tight">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <time className="mt-2 block text-xs uppercase tracking-wide text-navy/50">{post.date}</time>
                <ArrowLink href={post.href} className="mt-3 max-w-[160px]">
                  Read More
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

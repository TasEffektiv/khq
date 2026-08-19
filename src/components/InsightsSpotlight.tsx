import Image from "next/image";
import Link from "next/link";
import ArrowLink from "./ArrowLink";
import type { Insight } from "@/lib/data";

export default function InsightsSpotlight({
  division,
  href,
  image,
  articles,
  reverse = false,
}: {
  division: string;
  href: string;
  image: string;
  articles: Insight[];
  reverse?: boolean;
}) {
  if (articles.length === 0) return null;

  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={division}
          width={1024}
          height={768}
          className="aspect-[4/3] h-full w-full object-cover"
        />
      </div>

      <div>
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold">
          <span className="size-2 rounded-full border border-current" />
          Spotlight
        </div>
        <h3 className="font-serif text-[26px]/tight italic text-navy lg:text-[32px]/tight">
          {division}
        </h3>

        <ul className="mt-6 flex flex-col gap-5 border-t border-navy/10 pt-6">
          {articles.map((post) => (
            <li key={post.id} className="group relative">
              <Link href={post.href} className="before:absolute before:inset-0">
                <p className="text-lg/tight text-navy group-hover:text-gold">{post.title}</p>
              </Link>
              <time className="mt-1.5 block text-xs uppercase tracking-wide text-navy/50">{post.date}</time>
            </li>
          ))}
        </ul>

        <ArrowLink href={href} className="mt-7">
          Explore {division}
        </ArrowLink>
      </div>
    </div>
  );
}

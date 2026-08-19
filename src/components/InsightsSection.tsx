import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ArrowLink from "./ArrowLink";
import { insights } from "@/lib/data";

export default function InsightsSection() {
  return (
    <section className="container pb-10">
      <SectionHeading>Insights</SectionHeading>

      <div className="grid grid-cols-1 gap-x-10 gap-y-10 py-10 md:grid-cols-3 lg:gap-x-20 lg:py-14">
        {insights.map((post) => (
          <article
            key={post.id}
            className="group relative flex w-full flex-col gap-5 rounded-xl border border-white/60 bg-white/20 p-4 shadow-[0_8px_30px_-12px_rgba(0,38,59,0.15)] backdrop-blur-lg backdrop-saturate-150 transition-colors duration-300 hover:bg-white/35 lg:gap-7 lg:p-5"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="mb-1 text-[11px]/snug font-bold uppercase text-gold">
                {post.tag}
              </div>
              <h3 className="text-xl/tight">
                <Link href={post.href} className="before:absolute before:inset-0">
                  {post.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center">
        <ArrowLink href="/insights">Read More</ArrowLink>
      </div>
    </section>
  );
}

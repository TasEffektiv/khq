"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { insights, insightCategories, type InsightCategory } from "@/lib/data";

const PAGE_SIZE = 6;

export default function InsightsArchive() {
  const [category, setCategory] = useState<InsightCategory | "All">("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = category === "All" ? insights : insights.filter((post) => post.tag === category);
  const shown = filtered.slice(0, visible);

  function selectCategory(next: InsightCategory | "All") {
    setCategory(next);
    setVisible(PAGE_SIZE);
  }

  return (
    <section id="archive" className="container scroll-mt-20 pb-16 pt-4 lg:scroll-mt-28 lg:pb-24">
      <SectionHeading>Browse all insights</SectionHeading>

      <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
        {(["All", ...insightCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => selectCategory(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide transition-colors ${
              category === cat
                ? "border-gold bg-gold text-white"
                : "border-navy/20 text-navy/70 hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3 lg:gap-x-16">
        {shown.map((post) => (
          <article
            key={post.id}
            className="group relative flex w-full flex-col gap-5 rounded-xl border border-white/60 bg-white/20 p-4 shadow-[0_8px_30px_-12px_rgba(0,38,59,0.15)] backdrop-blur-lg backdrop-saturate-150 transition-colors duration-300 hover:bg-white/35 lg:gap-6 lg:p-5"
          >
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center gap-2 text-[11px]/snug font-bold uppercase">
                <span className="text-gold">{post.tag}</span>
                <span className="text-gold/40">•</span>
                <time className="text-navy/60">{post.date}</time>
              </div>
              <h3 className="text-xl/tight">
                <Link href={post.href} className="before:absolute before:inset-0">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-navy/70">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="mt-10 text-navy/60">No insights in this category yet — check back soon.</p>
      )}

      {visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="text-sm uppercase tracking-wide text-gold hover:font-medium"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
}

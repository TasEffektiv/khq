"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import FilterDropdown from "./FilterDropdown";
import { insights, insightCategories, insightDivisions, type InsightCategory } from "@/lib/data";

const PAGE_SIZE = 6;

export default function InsightsArchive() {
  const [category, setCategory] = useState<InsightCategory | "All">("All");
  const [division, setDivision] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [appliedFilters, setAppliedFilters] = useState({ category, division, search });

  if (
    appliedFilters.category !== category ||
    appliedFilters.division !== division ||
    appliedFilters.search !== search
  ) {
    setAppliedFilters({ category, division, search });
    setVisible(PAGE_SIZE);
  }

  const filtered = insights.filter((post) => {
    if (category !== "All" && post.tag !== category) return false;
    if (division !== "All" && post.division !== division) return false;
    if (search) {
      const q = search.toLowerCase();
      if (!post.title.toLowerCase().includes(q) && !post.excerpt.toLowerCase().includes(q)) return false;
    }
    return true;
  });
  const shown = filtered.slice(0, visible);

  function selectCategory(next: InsightCategory | "All") {
    setCategory(next);
  }

  return (
    <section id="archive" className="container scroll-mt-20 pb-16 pt-4 lg:scroll-mt-28 lg:pb-24">
      <SectionHeading>Browse all insights</SectionHeading>

      <div className="mt-6 flex flex-col gap-4 lg:mt-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
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

          <FilterDropdown
            label="Expertise"
            value={division}
            options={["All", ...insightDivisions]}
            onChange={setDivision}
          />
        </div>

        <div className="relative w-full lg:max-w-xs">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search insights..."
            className="w-full rounded-full border border-navy/20 bg-white/50 px-4 py-1.5 pr-9 text-sm text-navy placeholder-navy/40 outline-none transition-colors focus:border-gold"
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-navy/40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      {search && (
        <p className="mt-6 text-sm text-navy/60">
          Showing results for &ldquo;{search}&rdquo; — {filtered.length}{" "}
          {filtered.length === 1 ? "result" : "results"}
        </p>
      )}

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
        <p className="mt-10 text-navy/60">No insights match these filters — try broadening your search.</p>
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

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import WordmarkLogo from "./WordmarkLogo";
import { primaryNav, mobileNav } from "@/lib/data";
import { openEnquireModal } from "./EnquireButton";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dense = scrolled || mobileOpen;
  const [about, ourPeople, expertise, insights, chinaAlliance] = primaryNav;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-16 w-full border-b text-navy transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 lg:h-24 ${
        dense
          ? "border-gold/70 bg-white/55 shadow-[0_8px_30px_-12px_rgba(0,38,59,0.25)] backdrop-blur-2xl backdrop-saturate-150"
          : "border-gold bg-transparent"
      }`}
    >
      <div className="container h-full !border-r-0 lg:!pr-0">
        <div className="relative z-20 flex h-full items-center justify-between">
          <Link
            href="/"
            title="KHQ LAWYERS"
            className="flex h-full shrink-0 items-center border-gold pr-5 lg:basis-1/4 lg:border-r"
          >
            <WordmarkLogo className="h-auto w-24 lg:w-[131px]" />
          </Link>

          <div className="hidden h-full flex-1 lg:flex">
            <div className="flex flex-1 flex-col border-r border-gold">
              <div className="flex basis-[40%] items-center justify-end border-b border-gold px-4">
                {desktopSearchOpen ? (
                  <form role="search" className="flex w-full max-w-[400px] items-center justify-end gap-2">
                    <input
                      type="search"
                      placeholder="Search..."
                      autoFocus
                      className="w-full bg-transparent text-gold placeholder-gold/80 outline-none"
                    />
                    <button type="submit" className="text-gold">
                      <ArrowIcon />
                    </button>
                  </form>
                ) : (
                  <button
                    type="button"
                    onClick={() => setDesktopSearchOpen(true)}
                    className="flex items-center gap-2 whitespace-nowrap text-gold"
                  >
                    <span className="text-sm uppercase tracking-widest">Search</span>
                    <ArrowIcon />
                  </button>
                )}
              </div>

              <nav className="flex h-full flex-1 items-center justify-end gap-8 px-7 text-sm font-medium">
                <NavCell item={about} />
                <NavCell item={ourPeople} />
                <div className="group relative flex items-center gap-5">
                  <Link href={expertise.href} className="flex items-center gap-2">
                    <span className="size-2 rounded-full border border-current group-hover:bg-current" />
                    {expertise.label}
                  </Link>
                  <Link href={insights.href} className="flex items-center gap-2">
                    <span className="size-2 rounded-full border border-current" />
                    {insights.label}
                  </Link>
                  <Link href={chinaAlliance.href} className="whitespace-nowrap text-xs text-navy/70 hover:text-gold">
                    {chinaAlliance.label}
                  </Link>
                  {expertise.dropdown && (
                    <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                      <ul className="min-w-[280px] bg-white text-sm shadow-lg">
                        {expertise.dropdown.map((child) => (
                          <li
                            key={child.label}
                            className="border-b border-navy/5 py-1.5 first:pt-3.5 last:border-0 last:pb-3.5"
                          >
                            <Link href={child.href} className="block whitespace-nowrap px-4 py-1 hover:text-gold">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>

          <div className="hidden h-full flex-col lg:flex lg:w-40">
            <div className="flex basis-[40%] items-center justify-end border-b border-gold px-2">
              <a
                href="https://qsop.quickfee.com.au/#/company/quickfee/firm/ndkhq"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap text-sm text-gold"
              >
                PAYMENT PORTAL
              </a>
            </div>
            <div className="relative h-full flex-1 border-r border-gold">
              <div className="absolute -top-px right-0 h-px w-96 translate-x-full bg-gold" />
              <button
                type="button"
                onClick={openEnquireModal}
                className="flex h-full w-full items-center justify-center text-base font-medium uppercase hover:bg-white"
              >
                Enquire
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:hidden">
            <button
              type="button"
              onClick={openEnquireModal}
              className="bg-gold px-3 py-1.5 text-sm font-medium uppercase text-white"
            >
              Enquire
            </button>
            <button
              type="button"
              aria-label="Search"
              onClick={() => {
                setSearchOpen((v) => !v);
                setMobileOpen(false);
              }}
              className="text-gold"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => {
                setMobileOpen((v) => !v);
                setSearchOpen(false);
              }}
            >
              {mobileOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" className="size-6">
                  <path
                    fill="currentColor"
                    d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="absolute left-0 top-full w-full border-b border-gold bg-white shadow-md lg:hidden">
          <form role="search" className="flex h-[50px] items-center px-4">
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-transparent text-gold placeholder-gold/70 outline-none"
            />
            <button type="submit" className="text-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </form>
        </div>
      )}

      {mobileOpen && (
        <nav className="absolute left-0 top-full max-h-[calc(100svh-4rem)] w-full overflow-auto bg-light text-navy shadow-md lg:hidden">
          <ul className="grid grid-cols-1 gap-1 py-5 text-center">
            {mobileNav.map((item) => (
              <MobileNavItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function NavCell({ item }: { item: (typeof primaryNav)[number] }) {
  return (
    <div className="group relative flex items-center">
      <Link href={item.href} className="flex items-center gap-2">
        <span className="size-2 rounded-full border border-current group-hover:bg-current" />
        {item.label}
      </Link>
      {item.dropdown && (
        <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
          <ul className="min-w-[280px] bg-white text-sm shadow-lg">
            {item.dropdown.map((child) => (
              <li key={child.label} className="border-b border-navy/5 py-1.5 first:pt-3.5 last:border-0 last:pb-3.5">
                <Link href={child.href} className="block whitespace-nowrap px-4 py-1 hover:text-gold">
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: (typeof mobileNav)[number];
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.dropdown) {
    return (
      <li>
        <Link href={item.href} onClick={onNavigate} className="block py-2 text-lg/tight">
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-center gap-1 py-2 text-lg/tight"
      >
        {item.label}
      </button>
      {expanded && (
        <ul className="mt-2 bg-white py-2">
          {item.dropdown.map((child) => (
            <li key={child.label} className="py-2">
              <Link href={child.href} onClick={onNavigate} className="text-base/tight hover:text-gold">
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

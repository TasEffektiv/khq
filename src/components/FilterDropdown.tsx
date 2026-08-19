"use client";

import { useEffect, useRef, useState } from "react";

export default function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickAway(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide transition-colors ${
          value !== "All"
            ? "border-gold bg-gold text-white"
            : "border-navy/20 text-navy/70 hover:border-gold hover:text-gold"
        }`}
      >
        {label}: {value}
        <svg
          viewBox="0 0 12 8"
          fill="none"
          className={`size-2.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <ul className="absolute left-0 top-full z-20 mt-2 max-h-72 w-max min-w-full overflow-auto rounded-md bg-white py-2 shadow-lg">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`block w-full whitespace-nowrap px-4 py-1.5 text-left text-sm hover:bg-light hover:text-gold ${
                  option === value ? "text-gold" : "text-navy"
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

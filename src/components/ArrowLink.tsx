import Link from "next/link";

export default function ArrowLink({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "navy";
  className?: string;
}) {
  const isGold = variant === "gold";
  return (
    <Link
      href={href}
      className={`group flex w-full items-center gap-4 uppercase hover:font-medium ${
        isGold ? "text-gold" : "text-navy"
      } ${className}`}
    >
      <span className="whitespace-nowrap text-sm tracking-wide">{children}</span>
      <span className="flex w-full items-center transition-transform group-hover:translate-x-2">
        <span
          className={`relative -mr-[14px] h-px w-full ${isGold ? "bg-gold" : "bg-navy"}`}
        />
        <span
          className={`p-1.5 -rotate-45 ${isGold ? "border-gold" : "border-navy"}`}
          style={{ borderWidth: "0 1px 1px 0" }}
        />
      </span>
    </Link>
  );
}

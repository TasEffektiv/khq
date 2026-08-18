export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <section className="container py-7">
      <p className="max-w-[800px] font-serif text-[28px]/tight italic text-gold lg:text-[40px]/tight">
        {children}
      </p>
    </section>
  );
}

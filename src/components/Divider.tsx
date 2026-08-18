export default function Divider() {
  return (
    <section className="relative h-[40px] md:h-[64px] lg:h-[100px]">
      <div className="container h-full" />
      <div className="absolute top-1/2 h-px w-full bg-gold" />
    </section>
  );
}

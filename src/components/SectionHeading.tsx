export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-x-8 gap-y-5 pt-10 md:mb-0 lg:pt-16">
      <h2 className="whitespace-nowrap text-lg/tight uppercase tracking-wider text-gold">
        {children}
      </h2>
      <hr className="hidden w-full border-gold md:block" />
    </div>
  );
}

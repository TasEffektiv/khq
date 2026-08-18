import Image from "next/image";
import ArrowLink from "./ArrowLink";

export default function FeatureCard({
  image,
  alt,
  title,
  copy,
  href,
  cta = "Read More",
}: {
  image: string;
  alt: string;
  title: string;
  copy: string;
  href: string;
  cta?: string;
}) {
  return (
    <article className="grid grid-cols-1 gap-x-16 gap-y-5 md:grid-cols-3 md:gap-x-10 lg:gap-x-20">
      <div className="shrink-0">
        <Image
          src={image}
          alt={alt}
          width={1024}
          height={768}
          className="aspect-[4/3] h-full w-full rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between py-4 md:col-span-2">
        <div className="max-w-[650px]">
          <h2 className="mb-2 text-[26px]/tight md:mb-3">{title}</h2>
          <p className="text-sm">{copy}</p>
        </div>
        <ArrowLink href={href} className="mt-5">
          {cta}
        </ArrowLink>
      </div>
    </article>
  );
}

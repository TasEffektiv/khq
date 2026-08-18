import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[85vh] max-h-[750px] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0 flex min-h-full min-w-full items-center justify-center">
        <video
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.png"
        >
          <source src="/video/hero-loop.mp4" type="video/mp4" />
        </video>
        <Image
          src="/images/hero-mobile.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="z-0 block object-cover md:hidden"
        />
      </div>

      <div className="absolute bottom-0 z-10 h-[calc(100%-4rem)] w-full">
        <div className="relative flex h-full flex-col justify-end">
          <div className="container relative z-10 grow content-end text-navy">
            <h1 className="page-title max-w-[660px] py-8">
              Award-winning
              <br />
              boutique top-tier
              <br />
              law firm
            </h1>
          </div>
          <div className="border-t border-gold max-md:bg-light">
            <div className="container flex flex-col gap-5 py-5 lg:flex-row lg:justify-between">
              <p className="max-w-[600px] text-base text-navy">
                KHQ Lawyers is a different style of law firm, a &lsquo;boutique top-tier&rsquo;
                firm. One that combines the best of relationship-driven &lsquo;boutique&rsquo;
                service (think rapid, responsive, strategic advice) with top-tier expertise and
                talent. It&rsquo;s a unique blend that delivers more than just outcomes. Quite
                simply &ndash; you&rsquo;ll know it when you experience it.
              </p>
              <a
                href="https://vimeo.com/1096168614/5c9cee14e7?share=copy"
                target="_blank"
                rel="noreferrer"
                className="group flex w-full items-center gap-4 py-2 text-navy hover:font-medium md:w-[325px]"
              >
                <span className="text-base">Play &ndash; The boutique top-tier advantage</span>
                <span className="flex w-full items-center transition-transform group-hover:translate-x-2">
                  <span className="relative -mr-[19px] h-px w-full bg-current" />
                  <span
                    className="p-2 -rotate-45"
                    style={{ borderWidth: "0 1px 1px 0", borderColor: "currentColor", borderStyle: "solid" }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-10 h-px w-full bg-gold" />
    </div>
  );
}

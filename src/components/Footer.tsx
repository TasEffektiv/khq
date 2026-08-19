import Link from "next/link";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import EnquireButton from "./EnquireButton";

const companyLinks = [
  { label: "About Us", href: "/our-history" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
  { label: "The KHQ Way", href: "/the-khq-way" },
];

const serviceLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "Notary Public", href: "/expertise/notary-public" },
  {
    label: "Payment Portal",
    href: "https://qsop.quickfee.com.au/#/company/quickfee/firm/ndkhq",
    external: true,
  },
  { label: "Subscribe", href: "/#subscribe" },
];

export default function Footer() {
  return (
    <footer className="bg-beige text-navy text-sm">
      <div className="container">
        <div className="footer-container flex flex-col justify-between gap-10 pt-10 lg:flex-row">
          <div className="max-w-[315px] lg:w-4/12">
            <Logo className="mb-6 h-auto w-28 text-navy lg:w-[120px]" />
          </div>

          <div className="grid grid-cols-2 justify-between gap-y-6 md:flex lg:w-7/12">
            <div className="hidden md:block">
              <div className="mb-2 font-medium lg:mb-5">COMPANY</div>
              <ul>
                {companyLinks.map((l) => (
                  <li key={l.label} className="mt-1 text-sm hover:underline">
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <div className="mb-2 font-medium lg:mb-5">SERVICES</div>
              <ul>
                {serviceLinks.map((l) => (
                  <li key={l.label} className="mt-1 text-sm hover:underline">
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:w-[40%]">
              <div className="mb-2 font-medium lg:mb-5">CONTACT</div>
              <p className="text-pretty">
                Level 4, 600 Bourke Street,
                <br /> Melbourne VIC 3000
              </p>
              <p className="mt-2 text-pretty md:mt-1">T +61 3 9663 9877</p>
              <EnquireButton className="mt-2 block text-pretty hover:underline">
                Enquire
              </EnquireButton>
              <a
                href="https://qsop.quickfee.com.au/#/company/quickfee/firm/ndkhq"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block hover:underline md:hidden"
              >
                Payment Portal
              </a>
              <SocialIcons className="mt-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="container !border-0">
        <div className="my-10 flex items-end justify-between gap-y-10 text-white md:items-center">
          <div className="text-xs md:w-4/12 lg:w-5/12">
            <div className="mb-0.5 opacity-70 md:hidden">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms-of-use" className="hover:underline">
                Terms of Use
              </Link>
            </div>
            <div>KHQ LAWYERS &copy; 2026</div>
          </div>
          <div className="grid grid-cols-1 justify-between text-right text-xs md:flex md:w-8/12 md:text-left lg:w-7/12">
            <div className="hidden md:block">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms-of-use" className="hover:underline">
                Terms of Use
              </Link>
            </div>
            <div>
              Website by{" "}
              <a href="https://qualiacreative.com.au/" target="_blank" rel="noreferrer" className="hover:underline">
                Qualia Creative
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const aboutDropdown = [
  { label: "Our history", href: "/our-history" },
  { label: "The KHQ Way", href: "/the-khq-way" },
  { label: "Our international network", href: "/our-international-network" },
  { label: "KHQ-DeHeng strategic alliance", href: "/expertise/deheng-china-strategic-alliance" },
  { label: "Careers", href: "/careers" },
  { label: "Recognition", href: "/recognition" },
];

export const expertiseAreas = [
  { label: "Commercial Property & Development", href: "/expertise/commercial-property-development" },
  { label: "Competition Law & Regulatory Compliance", href: "/expertise/competition-law-regulatory-compliance" },
  { label: "Construction, Infrastructure & Energy", href: "/expertise/construction-infrastructure-law" },
  { label: "Corporate & Commercial", href: "/expertise/corporate-commercial-law" },
  { label: "Data Privacy, Cyber & Digital", href: "/expertise/data-privacy-cyber-digital" },
  { label: "Family & Relationship Law", href: "/expertise/family-relationship-law" },
  { label: "Food & Beverage", href: "/expertise/food-beverage-law" },
  { label: "Insolvency & Restructuring", href: "/expertise/insolvency-restructuring-law" },
  { label: "Intellectual Property", href: "/expertise/intellectual-property-law" },
  { label: "Litigation & Dispute Resolution", href: "/expertise/litigation-dispute-resolution-law" },
  { label: "Notary Public", href: "/expertise/notary-public" },
  { label: "Private Wealth Law", href: "/expertise/private-wealth-law" },
  { label: "Superannuation & Financial Services", href: "/expertise/superannuation-law-financial-services" },
  { label: "Tax & Structuring", href: "/expertise/tax-law-structuring" },
  { label: "Technology", href: "/expertise/technology-law" },
  { label: "Wills & Estates", href: "/expertise/wills-estates" },
  { label: "Workplace Relations & Safety", href: "/expertise/workplace-relations-safety-law" },
];

export const primaryNav = [
  { label: "About", href: "/our-history", dropdown: aboutDropdown },
  { label: "Our People", href: "/our-people" },
  { label: "Expertise", href: "/expertise", dropdown: expertiseAreas },
  { label: "Insights", href: "/insights" },
  { label: "中国联盟 - 德恒律师事务所", href: "/expertise/deheng-china-strategic-alliance" },
];

type NavItem = { label: string; href: string; dropdown?: { label: string; href: string }[] };

export const mobileNav: NavItem[] = [{ label: "Home", href: "/" }, ...primaryNav];

export type InsightCategory = "Alerts" | "Articles" | "Publications" | "Media Release";

export const insightCategories: InsightCategory[] = ["Alerts", "Articles", "Publications", "Media Release"];

export type Insight = {
  id: number;
  tag: InsightCategory;
  division?: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

// Ordered newest first — homepage and archive views both rely on this order.
export const insights: Insight[] = [
  {
    id: 12,
    tag: "Publications",
    division: "Corporate & Commercial",
    date: "18 August 2026",
    title: "KHQ Deal Review: M&A and capital markets activity, H1 2026",
    excerpt: "Our half-yearly review of M&A and capital markets activity across the sectors we act in.",
    image: "/images/news/news-5.jpg",
    href: "/blog/khq-deal-review-h1-2026",
  },
  {
    id: 1,
    tag: "Alerts",
    division: "Superannuation & Financial Services",
    date: "14 August 2026",
    title:
      "Super Alert – 14 August 2026: Bill proposing extension of Superannuation Guarantee to workers under 18, ASIC propose to extend various legislative instrument",
    excerpt:
      "A wrap of the latest superannuation guarantee reforms and regulatory instruments moving through Parliament this fortnight.",
    image: "/images/alerts/alert-1.jpg",
    href: "/blog/super-alert-14-august-2026",
  },
  {
    id: 7,
    tag: "Articles",
    division: "Family & Relationship Law",
    date: "12 August 2026",
    title: "Coercive control and the family law system: what the reforms mean for separating couples",
    excerpt:
      "A look at how recent coercive control reforms are reshaping property and parenting outcomes in the family courts.",
    image: "/images/news/news-2.jpg",
    href: "/blog/coercive-control-family-law-reforms",
  },
  {
    id: 14,
    tag: "Media Release",
    date: "8 August 2026",
    title: "KHQ Lawyers recognised across 14 practice areas in Chambers Asia Pacific 2027",
    excerpt:
      "KHQ Lawyers and its people have been ranked across fourteen practice areas in the newly released Chambers Asia Pacific guide.",
    image: "/images/about-1.jpg",
    href: "/blog/khq-chambers-asia-pacific-2027",
  },
  {
    id: 2,
    tag: "Alerts",
    division: "Superannuation & Financial Services",
    date: "7 August 2026",
    title:
      "Super Alert – 7 August 2026: ATO law companion rulings on the Payday Super reforms, AFCA reported a record number of complaints in 2025-26",
    excerpt: "The ATO's latest guidance on Payday Super, plus what a record AFCA complaint year means for trustees.",
    image: "/images/alerts/alert-2.jpg",
    href: "/blog/super-alert-7-august-2026",
  },
  {
    id: 9,
    tag: "Articles",
    division: "Workplace Relations & Safety",
    date: "5 August 2026",
    title: "Psychosocial hazards: what regulators are actually enforcing in 2026",
    excerpt:
      "A practical rundown of where WHS regulators are focusing psychosocial hazard enforcement this year, and how employers should respond.",
    image: "/images/news/news-6.jpg",
    href: "/blog/psychosocial-hazards-enforcement-2026",
  },
  {
    id: 11,
    tag: "Articles",
    division: "Food & Beverage",
    date: "3 August 2026",
    title: "Hydration and wellness claims under the microscope: labelling risk for F&B brands",
    excerpt:
      "Regulators are scrutinising hydration and wellness marketing claims — here's where the line sits for food and beverage brands.",
    image: "/images/news/news-4.jpg",
    href: "/blog/hydration-wellness-claims-labelling-risk",
  },
  {
    id: 3,
    tag: "Alerts",
    division: "Superannuation & Financial Services",
    date: "31 July 2026",
    title: "Super Alert – 31 July 2026: ATO guidance re Member Verification Requests and Superstream NPP register guidance release",
    excerpt:
      "New ATO guidance on member verification and the Superstream NPP register, explained for trustees and administrators.",
    image: "/images/alerts/alert-3.jpg",
    href: "/blog/super-alert-31-july-2026",
  },
  {
    id: 8,
    tag: "Articles",
    division: "Family & Relationship Law",
    date: "29 July 2026",
    title: "AI in the family courts: evidence, disclosure and the risks of getting it wrong",
    excerpt:
      "As AI-generated material starts turning up in family law disputes, courts are drawing new lines around disclosure and reliability.",
    image: "/images/news/news-3.jpg",
    href: "/blog/ai-family-courts-evidence",
  },
  {
    id: 4,
    tag: "Alerts",
    division: "Superannuation & Financial Services",
    date: "24 July 2026",
    title: "Super Alert – 24 July 2026: Lost Super Enquiry guidance, ASIC announces record enforcement period in 2025-26",
    excerpt: "ASIC's record enforcement year and updated guidance for handling lost super enquiries.",
    image: "/images/alerts/alert-4.jpg",
    href: "/blog/super-alert-24-july-2026",
  },
  {
    id: 10,
    tag: "Articles",
    division: "Workplace Relations & Safety",
    date: "22 July 2026",
    title: "Right to disconnect, twelve months on: lessons from the first wave of disputes",
    excerpt: "What the first round of right to disconnect disputes has revealed about drafting workable workplace policies.",
    image: "/images/news/news-1.jpg",
    href: "/blog/right-to-disconnect-one-year-on",
  },
  {
    id: 15,
    tag: "Media Release",
    date: "20 July 2026",
    title: "KHQ Lawyers welcomes two new Principals to the Superannuation & Financial Services team",
    excerpt:
      "KHQ Lawyers continues to grow its market-leading Superannuation & Financial Services practice with two new Principal appointments.",
    image: "/images/about-2.jpg",
    href: "/blog/khq-welcomes-new-principals-super-team",
  },
  {
    id: 5,
    tag: "Alerts",
    division: "Superannuation & Financial Services",
    date: "17 July 2026",
    title:
      "Super Alert – 17 July 2026: ASIC & APRA updated statements of intent, ATO guidance on SuperStream release authority lodgments",
    excerpt: "ASIC and APRA refresh their joint statement of intent, and the ATO clarifies SuperStream release authority lodgments.",
    image: "/images/alerts/alert-5.jpg",
    href: "/blog/super-alert-17-july-2026",
  },
  {
    id: 6,
    tag: "Alerts",
    division: "Superannuation & Financial Services",
    date: "10 July 2026",
    title: "Super Alert – 10 July 2026: APRA consultation re super reporting standards, ASIC legislative instrument for IDPS operators",
    excerpt: "APRA opens consultation on new reporting standards while ASIC issues a fresh legislative instrument for IDPS operators.",
    image: "/images/alerts/alert-6.jpg",
    href: "/blog/super-alert-10-july-2026",
  },
  {
    id: 13,
    tag: "Publications",
    division: "Construction, Infrastructure & Energy",
    date: "1 July 2026",
    title: "Security of Payment guide: 2026 update for principals and contractors",
    excerpt: "Our annual guide to security of payment regimes across Australian jurisdictions, updated for 2026.",
    image: "/images/news/news-3.jpg",
    href: "/blog/security-of-payment-guide-2026",
  },
];

export const insightDivisions = expertiseAreas
  .map((area) => area.label)
  .filter((label) => insights.some((post) => post.division === label));

export const testimonials = [
  {
    quote:
      "Michael Cochrane is a delight to work with; he has strong legal expertise, is calm under pressure, and is an exceptional team leader who assembles a high-quality, approachable team for fast-paced, high-stakes litigation.",
    attribution: "Legal 500 Asia Pacific Client Testimonial",
    name: "Michael Cochrane",
    role: "Principal - Workplace Relations & Safety",
  },
  {
    quote: "Natalie Cambrell is fantastic to deal with and has a great deal of knowledge.",
    attribution: "Superannuation fund respondent - Chambers Asia Pacific",
    name: "Natalie Cambrell",
    role: "Director - Superannuation & Financial Services",
  },
  {
    quote:
      "I retained Ines Kallweit and Amy Weaver to assist in a controversial and upsetting personal estate matter. I am also a lawyer, but in a different field. I cannot recommend them highly enough. Their advice was sensible and clear, they were proactive and they swiftly brought the matter to a satisfactory conclusion. Thank you, Ines and Amy.",
    attribution: "Janine De Saxe",
    name: "Ines Kallweit",
    role: "Principal & Notary Public - Wills & Estates",
  },
  {
    quote:
      "I have worked with Toby Norgate for a number of years and value his advice. His advice is always practical and lead to quick negotiated solutions.",
    attribution: "Legal 500 Asia Pacific client testimonial",
    name: "Toby Norgate",
    role: "Principal - Corporate and Commercial",
  },
  {
    quote:
      "I have had the privilege of working with Elizabeth Ho over the past decade, both in referring clients to her and engaging her services for our own legal matters. Throughout this time, she has consistently demonstrated a comprehensive and authoritative understanding of Australian property law.",
    attribution: "Ivan Poh",
    name: "Elizabeth Ho",
    role: "Principal Solicitor - Commercial Property & Development",
  },
  {
    quote:
      "Venn King has very good financial services knowledge and experience and responds very promptly. This practice is legally and commercially brilliant and provides exceptional service.",
    attribution: "Legal 500 Asia Pacific Client Testimonial",
    name: "Venn King",
    role: "Principal Solicitor - Corporate & Commercial",
  },
  {
    quote:
      "KHQ were able to respond to our needs in a decisive and expeditious manner. They were able to pair us with the right level of skill to best represent our interests and took attentive and detailed support to another level.",
    attribution: "Legal 500 Asia Pacific Client Testimonial",
    name: "Litigation & Dispute Resolution",
    role: "",
  },
  {
    quote:
      "I'd like to thank Elizabeth, Evelyn and the KHQ team for their assistance in a number of commercial property transactions. The team's knowledge and hard work achieved an excellent outcome under time pressure. We appreciated the breadth of support and KHQ's efforts in this matter.",
    attribution: "Property Law Respondent",
    name: "Commercial Property & Development",
    role: "",
  },
  {
    quote:
      "Yudi New is an excellent litigator and I have recommended him to colleagues without hesitation. I would do so again any time. Yudi is experienced, particularly in class actions, financial services, regulatory, and a range of other commercial spheres.",
    attribution: "Legal 500 Asia Pacific Client Testimonial",
    name: "Yudi New",
    role: "Senior Consultant - Litigation & Dispute Resolution",
  },
  {
    quote:
      "I principally deal with Andrew Walker and his associates. I've universally found them (and him specifically) very easy to deal with. He asks great questions to get to the core of the matter at hand and offers sound legal advice that is commercially grounded. He responds promptly to my requests and makes himself available.",
    attribution: "Legal 500 Asia Pacific client testimonial",
    name: "Andrew Walker",
    role: "",
  },
  {
    quote:
      "Claire Brown is a fantastic adviser whose expertise, reliability, and clarity ensure strategic, practical guidance.",
    attribution: "Legal 500 Asia Pacific",
    name: "Claire Brown",
    role: "Principal - Workplace Relations & Safety",
  },
  {
    quote:
      "We engaged KHQ Lawyers during one of the most challenging / difficult times of our lives. The team was compassionate, professional, and thorough.",
    attribution: "Wills and Estates client",
    name: "Oliver LaCaze",
    role: "Special Counsel - Wills and Estates",
  },
  {
    quote:
      "Charles is one of the most knowledgeable food law practitioners I've worked with anywhere in the world.",
    attribution: "Andrew Janis, Vow",
    name: "Charles Fisher",
    role: "Principal Solicitor - Food & Beverage",
  },
  {
    quote:
      "Monica and the team helped me move from feeling powerless, confused and afraid of the future to being empowered.",
    attribution: "KD",
    name: "Monica Blizzard",
    role: "Director - Family & Relationship Law",
  },
];

export const officeLocations = [
  { city: "Melbourne", address: "Level 4, 600 Bourke Street, Melbourne VIC 3000" },
  { city: "Sydney", address: "Level 21, 8 Chifley Square, Sydney NSW 2000" },
  { city: "Adelaide", address: "Level 1/89 Pirie St, Adelaide SA 5000" },
];

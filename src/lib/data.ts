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

export const insights = [
  {
    id: 1,
    tag: "News",
    date: "14 August 2026",
    title:
      "Bill proposing extension of Superannuation Guarantee to workers under 18, ASIC propose to extend various legislative instrument",
    image: "/images/news/news-1.jpg",
    href: "/blog/super-alert-14-august-2026",
  },
  {
    id: 2,
    tag: "News",
    date: "7 August 2026",
    title:
      "ATO law companion rulings on the Payday Super reforms, AFCA reported a record number of complaints in 2025-26",
    image: "/images/news/news-2.jpg",
    href: "/blog/super-alert-7-august-2026",
  },
  {
    id: 3,
    tag: "News",
    date: "31 July 2026",
    title: "ATO guidance re Member Verification Requests and Superstream NPP register guidance release",
    image: "/images/news/news-3.jpg",
    href: "/blog/super-alert-31-july-2026",
  },
  {
    id: 4,
    tag: "News",
    date: "24 July 2026",
    title: "Lost Super Enquiry guidance, ASIC announces record enforcement period in 2025-26",
    image: "/images/news/news-4.jpg",
    href: "/blog/super-alert-24-july-2026",
  },
  {
    id: 5,
    tag: "News",
    date: "17 July 2026",
    title: "ASIC & APRA updated statements of intent, ATO guidance on SuperStream release authority lodgments",
    image: "/images/news/news-5.jpg",
    href: "/blog/super-alert-17-july-2026",
  },
  {
    id: 6,
    tag: "News",
    date: "10 July 2026",
    title: "APRA consultation re super reporting standards, ASIC legislative instrument for IDPS operators",
    image: "/images/news/news-6.jpg",
    href: "/blog/super-alert-10-july-2026",
  },
];

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

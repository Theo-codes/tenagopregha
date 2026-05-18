export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const HOME_FLOATING_CARDS = [
  { label: "Role", value: "Product Designer & Developer", delay: "0ms", top: "10%", right: "20%" },
  { label: "Based in", value: "Lagos, Nigeria 🇳🇬", delay: "1500ms", top: "45%", right: "5%" },
  { label: "Projects shipped", value: "8+ & counting", delay: "3000ms", top: "80%", right: "25%" },
];

export const HOME_SKILLS = [
  { name: "Product Design / UI & UX", percent: 92 },
  { name: "Frontend Development", percent: 85 },
  { name: "Next.js / React", percent: 80 },
  { name: "Product Management", percent: 72 },
];
export const HOME_PROJECTS = [
  { num: "01", tags: ["Mobile App Design", "Admin"], name: "Nidi", desc: "On-demand chauffeur, emergency and logistics platform.", url: "https://www.nididrive.com/" },
  { num: "02", tags: ["Mobile App Design"], name: "Fuur AI", desc: "AI app that identifies breeds, understands sounds & tracks pet health.", url: "https://fuur.ai/" },
  { num: "03", tags: ["Mobile App Design", "Website Development", "Admin"], name: "Spec AI", desc: "AI-powered drink authenticity scanner — spot fakes instantly.", url: "https://www.myspecai.com/" },
  { num: "04", tags: ["Mobile App Design", "Website Development"], name: "Veesitor", desc: "Visitor management system.", url: "https://veesitor.com/" },
  { num: "05", tags: ["Website Development"], name: "Trioedu", desc: "Educational technology platform.", url: "https://www.trioedu.tech/" },
  { num: "06", tags: ["Progressive Web App", "Fullstack"], name: "Dime", desc: "Daily expense logger to help you track and understand your spending.", url: "#", featured: true },
];
export const SOCIAL_LINKS = [
  { platform: "Email", handle: "tenagopregha@gmail.com", url: "mailto:tenagopregha@gmail.com", icon: "✉️" },
  { platform: "LinkedIn", handle: "gopregha-theophilus", url: "https://www.linkedin.com/in/gopregha-theophilus/", icon: "💼" },
  { platform: "GitHub", handle: "Theo-codes", url: "https://github.com/Theo-codes", icon: "🐙" },
  { platform: "Twitter / X", handle: "@Tenagopregha", url: "https://x.com/Tenagopregha", icon: "🐦" },
];

export const ABOUT_SKILLS = [
  {
    title: "Product Design / UI & UX",
    icon: "🎨",
    desc: "Figma, design systems, user flows, wireframing, prototyping, interaction design, visual design, component libraries.",
  },
  {
    title: "Frontend Development",
    icon: "⚡",
    desc: "Next.js, React, Tailwind CSS, responsive design, PWA.",
  },
  {
    title: "Product Management",
    icon: "🧠",
    desc: "Roadmapping, PRD writing, user research, sprint planning — used as a strategic lens, not a primary role.",
  },
];

export const EXPERIENCE = [
  {
    year: "2024 Present",
    role: "Product Designer & Frontend Developer",
    company: "Early Stage Startup · Lagos, Nigeria",
  },
  {
    year: "2023 Present",
    role: "Freelance Frontend Developer",
    company: "Client Projects · Remote",
  },
  {
    year: "2019 2023",
    role: "B.Sc. Computer Science",
    company: "University · Nigeria",
  },
];

export const VALUES = [
  {
    num: "01",
    title: "Craft over shortcuts",
    desc: "Details matter: pixel perfect transitions, well named variables, and thoughtful architecture over rushed delivery.",
  },
  {
    num: "02",
    title: "Ship, then sharpen",
    desc: "Perfection is the enemy of progress. Ship early to learn from real users, then iterate with sharp focus.",
  },
  {
    num: "03",
    title: "Users are people, not metrics",
    desc: "Data informs, but empathy drives. Always build for the human on the other side of the screen first.",
  },
  {
    num: "04",
    title: "Always be building",
    desc: "Side projects are a laboratory. The best way to learn a new paradigm is to build something shipped to the world.",
  },
];

export const WORK_PROJECTS = [
  {
    num: "01",
    slug: "dime",
    title: "Dime",
    desc: "A daily expense logger built to help you track, categorize, and understand exactly where your money goes — one entry at a time.",
    tags: ["Fintech", "PWA", "Personal Finance"],
    url: "https://dime-app.vercel.app/",
    coverImage: "/dCover.png",
    caseStudy: {
      problem: "Most people have no clear picture of their daily spending habits. Budgeting apps are often too complex, requiring bank integrations and lengthy setup — so users abandon them before building the habit.",
      solution: "Dime strips expense tracking down to its core: log what you spent, where, and how much — in seconds. A clean, distraction-free interface makes it frictionless to build the daily logging habit, while summaries surface spending patterns over time.",
      personas: ["Young professionals trying to build better financial habits without complex bank-linked apps.", "Freelancers and self-employed individuals needing a lightweight way to track daily outflows."],
      impact: "Enables users to identify spending patterns they were previously blind to, building financial self-awareness one daily log at a time — with zero setup friction.",
    }
  },
  {
    num: "02",
    slug: "spec-ai",
    title: "Spec AI",
    desc: "An AI-powered app that helps you instantly identify whether a drink is fake or original — scan, verify, stay safe.",
    tags: ["AI", "Mobile", "Safety"],
    url: "https://www.myspecai.com/",
    coverImage: "/sCover.png",
    caseStudy: {
      problem: "Counterfeit drinks are a serious and widespread problem — consumers have no reliable, accessible way to verify the authenticity of beverages before purchase or consumption, putting health and safety at risk.",
      solution: "Spec AI uses AI-powered scanning to let anyone verify whether a drink is genuine or counterfeit in seconds. Point, scan, and get an instant verdict — no expertise required.",
      personas: ["Everyday consumers who want to verify drinks before buying at retail stores or events.", "Bar owners and hospitality managers ensuring the products they serve are genuine and safe."],
      impact: "Empowers consumers with a reliable safety tool against counterfeit beverages, reducing the risk of unknowingly purchasing or consuming fake products.",
    }
  },
  {
    num: "03",
    slug: "fuur-ai",
    title: "Fuur AI",
    desc: "The only app that identifies your pet's breed, understands their sounds, tracks their health, and connects you with a global community of pet lovers — powered by AI.",
    tags: ["AI", "Pet Tech", "Mobile"],
    url: "https://fuur.ai/",
    coverImage: "/fCover.png",
    caseStudy: {
      problem: "Pet owners lack a single, intelligent tool to truly understand their animals. Breed identification, decoding pet sounds, health tracking, and community are all fragmented across separate apps — leaving owners guessing when it matters most.",
      solution: "Fuur AI brings everything a pet owner needs into one AI-powered platform: identify any pet's breed by photo, decode what their sounds mean, log and monitor their health over time, and tap into a global community of fellow pet lovers.",
      personas: ["New pet owners who want to understand their pet's breed, behavior, and health needs without extensive research.", "Experienced pet enthusiasts seeking a smarter companion app that connects them with a community and tracks their pet's wellbeing over time."],
      impact: "Gives pet owners the intelligence and confidence to truly understand and care for their animals — turning guesswork into clarity across breed, sound, health, and community.",
    }
  },
  {
    num: "04",
    slug: "veesitor",
    title: "Veesitor",
    desc: "Visitor management system.",
    tags: ["SaaS", "PropTech", "Real Estate"],
    url: "https://veesitor.com/",
    coverImage: "/vCover.png",
    caseStudy: {
      problem: "Traditional visitor management relies on paper logs or clunky legacy software, failing to provide a seamless, secure, and modern experience for guests and facilities.",
      solution: "Veesitor modernizes the entry experience with a clean, intuitive web application designed for both administrators managing facilities and the guests signing in.",
      personas: ["Facility Managers needing secure, digital logs of building traffic.", "Visitors expecting a fast, frictionless check in experience upon arrival."],
      impact: "Modernized facility security, providing real time visitor tracking and a premium first impression for arriving guests.",
    }
  },
  {
    num: "05",
    slug: "nidi",
    title: "Nidi",
    desc: "An on-demand chauffeur, emergency response, and logistics platform — connecting passengers and businesses with reliable drivers across Nigeria.",
    tags: ["Mobility", "Marketplace", "Logistics"],
    url: "https://www.nididrive.com/",
    coverImage: "/nCover.png",
    caseStudy: {
      problem: "Getting reliable, on-demand transportation — whether for a personal commute, an emergency situation, or a logistics delivery — remains fragmented and unpredictable across Nigeria. Users are left juggling multiple services with inconsistent quality and no unified experience.",
      solution: "Nidi unifies on-demand chauffeur bookings, emergency transport, and last-mile logistics into a single, intuitive platform. Passengers get instant access to vetted drivers; businesses get a dependable logistics layer — all through a clean, trust-building interface.",
      personas: ["Professionals and executives in Lagos needing reliable, pre-booked or on-demand chauffeur services for daily commutes and corporate trips.", "Individuals and businesses requiring fast emergency transport or same-day logistics delivery without the complexity of coordinating multiple providers."],
      impact: "Streamlined access to mobility and logistics services for users across Nigeria, reducing the friction of booking reliable transport and building trust through a consistent, professional in-app experience.",
    }
  },
  {
    num: "06",
    slug: "trioedu",
    title: "Trioedu",
    desc: "Educational technology platform.",
    tags: ["EdTech", "Web", "Edtech"],
    url: "https://www.trioedu.tech/",
    coverImage: "/tCover.png",
  },
  {
    num: "07",
    slug: "derry-oaks",
    title: "DerryOaks",
    desc: "Corporate consulting agency web presence.",
    tags: ["Consulting", "Corporate", "Consulting"],
    url: "https://derryoaksconsulting.com/home/",
    coverImage: "/deCover.png",
  },
  {
    num: "08",
    slug: "invessa",
    title: "Invessa",
    desc: "Peer-to-Peer Lending App.",
    tags: ["Mobile App", "Admin Design", "Fintech"],
    url: "https://invessa.io/",
    coverImage: "/iCover.png",
    caseStudy: {
      problem: "Traditional lending processes are often slow, opaque, and exclude many individuals from accessing fair credit or investment opportunities.",
      solution: "Invessa is a Peer-to-Peer lending platform that connects borrowers directly with investors. The mobile app provides a seamless borrowing and lending experience, while the admin dashboard offers comprehensive oversight and management tools.",
      personas: ["Borrowers seeking accessible and transparent loan options.", "Investors looking to diversify their portfolios with peer-to-peer lending."],
      impact: "Democratizes access to credit and investment, streamlining the lending process with an intuitive mobile interface and powerful administrative controls.",
      videoEmbedUrl: "https://res.cloudinary.com/dgdx2a9cq/video/upload/v1773317445/invessa-wireframe_bo06ld.mov",
      highFiImage: "/invessa_highfi.png",
    }
  },
  {
    num: "09",
    slug: "blockshot",
    title: "BlockShot",
    desc: "A fast-paced browser game built and shipped solo. Dodge blocks, collect power-ups, and beat your high score; playable entirely in the browser with keyboard or mouse controls.",
    tags: ["Game", "Web"],
    url: "https://blockshot-game-oy5r.vercel.app/",
    coverImage: "/blockshot.png",
  },
  {
    num: "10",
    slug: "social-battery",
    title: "Social Battery Check",
    desc: "A quick 10-question quiz that diagnoses how charged (or drained) your social energy really is and serves personalised advice at the end. Built with Figma Make and shipped live.",
    tags: ["Wellness", "Tool"],
    url: "https://garnet-cloudy-69578433.figma.site/",
    coverImage: "/social-battery-calculator.png",
  },
];

export const WORK_FILTERS = ["All", "AI", "Fintech", "Mobility", "Real Estate", "Edtech", "Consulting", "Game", "Wellness"];

export const PROCESS = [
  {
    num: "01",
    title: "Discover",
    desc: "I start with the user's world. Flows, pain points, competitive audit. What does good actually look like here?",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes, high-fidelity Figma mockups, design systems. The product takes shape visually before a single line of code.",
  },
  {
    num: "03",
    title: "Build",
    desc: "I build what I design personally. Next.js, Tailwind, Supabase. No handoff friction, no lost intent.",
  },
  {
    num: "04",
    title: "Refine",
    desc: "Real users, real feedback. Iterate on both the design and the code until it earns its place.",
  },
];

export const FAQS = [
  {
    question: "Are you available for freelance work?",
    answer: "Yes I take on select design and frontend projects alongside my primary role. I typically work on product design, UI/UX, and frontend builds. Get in touch and let's see if there's a fit.",
  },
  {
    question: "What industries do you work in?",
    answer: "My background spans Fintech, Mobility, AI, PropTech, and Corporate Consulting. I enjoy diving into complex domains that require careful abstraction.",
  },
  {
    question: "How quickly do you respond?",
    answer: "I aim to respond to all inquiries within 24 hours on weekdays.",
  },
  {
    question: "Do you do PM work, dev work, or both?",
    answer: "My core is product design and frontend development I design in Figma and build in Next.js. I bring product management thinking as a strategic layer, especially useful on early stage products.",
  },
];

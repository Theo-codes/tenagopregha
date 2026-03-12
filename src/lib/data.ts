export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const HOME_FLOATING_CARDS = [
  { label: "Role", value: "Product Designer & Developer", delay: "0ms", top: "10%", right: "20%" },
  { label: "Based in", value: "Lagos, Nigeria 🇳🇬", delay: "1500ms", top: "45%", right: "5%" },
  { label: "Projects shipped", value: "6+ & counting", delay: "3000ms", top: "80%", right: "25%" },
];

export const HOME_SKILLS = [
  { name: "Product Design / UI & UX", percent: 92 },
  { name: "Frontend Development", percent: 85 },
  { name: "Next.js / React", percent: 80 },
  { name: "Product Management", percent: 72 },
];
export const HOME_PROJECTS = [
  { num: "01", tags: ["Mobile App Design", "Admin"], name: "Nidi", desc: "Cloud storage solutions.", url: "https://www.nididrive.com/" },
  { num: "02", tags: ["Mobile App Design"], name: "Fuur AI", desc: "Automated generative AI content.", url: "https://fuur.ai/" },
  { num: "03", tags: ["Mobile App Design", "Website Development", "Admin"], name: "Spec AI", desc: "Conversational UI for product specs.", url: "https://www.myspecai.com/" },
  { num: "04", tags: ["Mobile App Design", "Website Development"], name: "Veesitor", desc: "Visitor management system.", url: "https://veesitor.com/" },
  { num: "05", tags: ["Website Development"], name: "Trioedu", desc: "Educational technology platform.", url: "https://www.trioedu.tech/" },
  { num: "06", tags: ["Progressive Web App", "Fullstack"], name: "Dime", desc: "Push notifications and dashboard management.", url: "#", featured: true },
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
    year: "2024–Present",
    role: "Product Designer & Frontend Developer",
    company: "Early-Stage Startup · Lagos, Nigeria",
  },
  {
    year: "2023–Present",
    role: "Freelance Frontend Developer",
    company: "Client Projects · Remote",
  },
  {
    year: "2019–2023",
    role: "B.Sc. Computer Science",
    company: "University · Nigeria",
  },
];

export const VALUES = [
  {
    num: "01",
    title: "Craft over shortcuts",
    desc: "Details matter: pixel-perfect transitions, well-named variables, and thoughtful architecture over rushed delivery.",
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
    desc: "A comprehensive push notification management system and analytics dashboard. Built to handle complex messaging architectures with an intuitive, minimalist UI. Currently driving engagement for early adopters.",
    tags: ["SaaS", "Dashboard", "Fintech"],
    url: "#",
    caseStudy: {
      problem: "Startups and early-stage companies often struggle to manage push notifications efficiently without building complex infrastructure from scratch. Existing solutions are either too expensive, bloated, or require significant engineering effort to implement standard messaging flows.",
      solution: "Dime is a minimalist, developer-friendly push notification management platform. It abstracts away the complexity of handling diverse messaging architectures, providing an intuitive dashboard to manage campaigns, trace message delivery, and analyze engagement metrics out of the box.",
      personas: ["Product Managers needing to execute rapid messaging campaigns without engineering bottlenecks.", "Frontend Engineers integrating push architecture into new apps without writing custom backend services."],
      impact: "Currently driving higher user engagement for our early adopters, reducing the notification implementation timeline by up to 70% for new projects, and allowing non-technical teammates to orchestrate complex messaging logic natively.",
    }
  },
  {
    num: "02",
    slug: "spec-ai",
    title: "Spec AI",
    desc: "Conversational UI for product specs.",
    tags: ["AI", "Mobile", "Safety"],
    url: "https://www.myspecai.com/",
    caseStudy: {
      problem: "Product details and specifications are often buried in dense, unreadable documentation. Users struggle to find exactly what they need, leading to churn and frustration.",
      solution: "Spec AI introduces a conversational interface for interrogating product documentation. By providing a natural language interface, it allows users to ask specific questions and receive immediate, precise answers.",
      personas: ["Everyday consumers trying to quickly understand complex product features.", "B2B buyers needing rapid, accurate qualification of technical specifications."],
      impact: "Increased user retention by providing immediate answers, reducing the cognitive load of navigating extensive documentation.",
    }
  },
  {
    num: "03",
    slug: "fuur-ai",
    title: "Fuur AI",
    desc: "Automated generative AI content.",
    tags: ["AI", "Pet Tech", "Mobile"],
    url: "https://fuur.ai/",
    caseStudy: {
      problem: "Creating consistent, high-quality, and engaging digital content is resource-intensive and often lacks dynamic personalization.",
      solution: "Fuur AI utilizes generative models to automate customized content creation rapidly. The application features a sleek, mobile-optimized UI designed for immediate user gratification.",
      personas: ["Content creators seeking rapid ideation and drafting tools.", "Marketing teams needing high-volume variations of targeted content."],
      impact: "Significantly decreased time-to-publish for creators, enabling a higher volume of personalized content generation without sacrificing quality.",
    }
  },
  {
    num: "04",
    slug: "veesitor",
    title: "Veesitor",
    desc: "Visitor management system.",
    tags: ["SaaS", "PropTech", "Real Estate"],
    url: "https://veesitor.com/",
    caseStudy: {
      problem: "Traditional visitor management relies on paper logs or clunky legacy software, failing to provide a seamless, secure, and modern experience for guests and facilities.",
      solution: "Veesitor modernizes the entry experience with a clean, intuitive web application designed for both administrators managing facilities and the guests signing in.",
      personas: ["Facility Managers needing secure, digital logs of building traffic.", "Visitors expecting a fast, frictionless check-in experience upon arrival."],
      impact: "Modernized facility security, providing real-time visitor tracking and a premium first impression for arriving guests.",
    }
  },
  {
    num: "05",
    slug: "nidi",
    title: "Nidi",
    desc: "Cloud storage solutions.",
    tags: ["Mobility", "Marketplace", "Mobility"],
    url: "https://www.nididrive.com/",
    caseStudy: {
      problem: "Users face challenges navigating complex interfaces when uploading, organizing, and retrieving files from the cloud, leading to disorganized digital spaces.",
      solution: "Nidi offers a streamlined cloud storage interface focused on visual clarity, drag-and-drop mechanics, and rapid retrieval.",
      personas: ["Freelancers and creatives managing large volumes of visual assets.", "Remote teams needing straightforward, fast file-sharing capabilities."],
      impact: "Improved user efficiency in file management tasks, driven by a highly responsive frontend and a simplified organizational model.",
    }
  },
  {
    num: "06",
    slug: "trioedu",
    title: "Trioedu",
    desc: "Educational technology platform.",
    tags: ["EdTech", "Web", "Edtech"],
    url: "https://www.trioedu.tech/",
  },
  {
    num: "07",
    slug: "derry-oaks",
    title: "DerryOaks",
    desc: "Corporate consulting agency web presence.",
    tags: ["Consulting", "Corporate", "Consulting"],
    url: "https://derryoaksconsulting.com/home/",
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
];

export const WORK_FILTERS = ["All", "AI", "Fintech", "Mobility", "Real Estate", "Edtech", "Consulting"];

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
    desc: "I build what I design — personally. Next.js, Tailwind, Supabase. No handoff friction, no lost intent.",
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
    answer: "Yes — I take on select design and frontend projects alongside my primary role. I typically work on product design, UI/UX, and frontend builds. Get in touch and let's see if there's a fit.",
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
    answer: "My core is product design and frontend development — I design in Figma and build in Next.js. I bring product management thinking as a strategic layer, especially useful on early-stage products.",
  },
];

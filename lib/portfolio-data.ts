// ─── Update these with your real information ───────────────────────────────

export const PROFILE = {
  name: "Razan Mohamed",
  role: "Software Developer",
  tagline: "I’m passionate about building impactful technology through software development, AI, and data-driven solutions. ",
  location: "Waterloo, ON",
  email: "razan4424@gmail.com",
  github: "https://github.com/rzlm",
  linkedin: "https://www.linkedin.com/in/razan-mohamedd/",
  twitter: "https://twitter.com/razanmohamed",
  website: "https://razanmohamed.dev",
  available: true,
}

export const PROJECTS = [
  // {
  //   id: 1,
  //   name: "Nexus Dashboard",
  //   description:
  //     "Worked with startup founders to transform ideas into scalable software solutions and technical roadmaps. Supported consulting engagements, innovative AI initiatives, and internal tools while developing workflow automation and enterprise-grade software solutions aligned with university standards and compliance requirements.",
  //   tech: ["", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   featured: true,
  // },
  {
    id: 2,
    name: "OpenDeploy CLI",
    description:
      "A zero-config deployment CLI that packages and ships any Node.js project to any VPS with a single command.",
    tech: ["Node.js", "TypeScript", "Docker", "SSH2"],
    github: "https://github.com",
    live: null,
    featured: true,
  },
  {
    id: 3,
    name: "Lingo — Language App",
    description:
      "Gamified language-learning mobile app with spaced-repetition flashcards and AI-generated exercises.",
    tech: ["React Native", "Expo", "OpenAI API", "Supabase"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    name: "Palette UI",
    description:
      "An open-source component library built on Radix primitives with 30+ accessible, themeable components.",
    tech: ["React", "TypeScript", "Radix UI", "Storybook", "Vite"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    name: "Taskflow",
    description:
      "Minimalist Kanban board with drag-and-drop, keyboard shortcuts, and offline-first support via IndexedDB.",
    tech: ["SvelteKit", "TypeScript", "Dnd-kit", "IndexedDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    name: "DevPulse",
    description:
      "GitHub activity tracker that aggregates PRs, reviews, and commit streaks into a personal weekly digest email.",
    tech: ["Next.js", "GitHub API", "Resend", "Vercel Cron"],
    github: "https://github.com",
    live: null,
    featured: false,
  },
]

export const EXPERIENCE = [
  {
    id: 1,
    company: "Wilfrid Laurier University - StartUp Lab",
    role: "Software Developer",
    period: "Jan 2026 – Apr 2026",
    location: "Waterloo, ON",
    description:
      "Worked with startup founders to transform ideas into scalable software solutions and technical roadmaps. Supported consulting engagements, innovative AI initiatives, and internal tools while developing workflow automation and enterprise-grade software solutions aligned with university standards and compliance requirements.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Drizzle ORM", "AWS", "Microsoft Azure"],

  },
  {
    id: 2,
    company: "Prism Resources",
    role: "VP Training Services",
    period: "Sept. 2025 – Aug. 2026",
    location: "Waterloo, ON",
    description:
      "Led operations for student training programs serving 3,000+ students across courses in Finance, AI, coding, Power BI, Excel, Figma, and Google Analytics. Developed a Generative AI course in collaboration with university faculty and used Python to analyze program data and improve delivery.",
    tech: ["React", "TypeScript", "Figma", "Storybook", "Vite"],
    type: "full-time",
  },
  {
    id: 3,
    company: "Definity Financial Corporation",
    role: "ServiceNow Technical Writer",
    period: "Jan 2020 – May 2021",
    location: "Waterloo, ON",
    description:
      "Created technical documentation, onboarding guides, and workflow documentation for ServiceNow and RPA systems. Collaborated with technical teams to simplify complex processes for both technical and non-technical audiences.",
    tech: ["React", "Next.js", "Figma", "Tailwind CSS", "Webflow"],

  },
  {
    id: 4,
    company: "Civiconnect",
    role: "Web Developer",
    period: "Sept 2024 – Dec 2024",
    location: "Beamsville, ON",
    description:
      "Collaborated on full-stack web applications using React, Next.js, and StrapiCMS. Assisted with API testing, integrations, and building reliable user-focused web experiences.",
    tech: ["React", "REST APIs", "CSS Modules"],
   
  },
]

export const ARTICLES = [
  {
    id: 1,
    title: "Why I switched from Redux to Zustand — and never looked back",
    slug: "redux-to-zustand",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    description:
      "An honest comparison of Redux Toolkit vs Zustand for mid-sized React apps, with real migration steps.",
    tags: ["React", "State Management"],
  },
  {
    id: 2,
    title: "The hidden cost of useEffect — and how to avoid it",
    slug: "useffect-cost",
    date: "Jan 22, 2026",
    readTime: "8 min read",
    description:
      "Deep-dive into render waterfalls caused by data-fetching inside useEffect and modern alternatives.",
    tags: ["React", "Performance"],
  },
  {
    id: 3,
    title: "Building accessible comboboxes from scratch",
    slug: "accessible-combobox",
    date: "Dec 5, 2025",
    readTime: "10 min read",
    description:
      "Step-by-step guide to building a fully keyboard-accessible, ARIA-compliant combobox with Radix UI.",
    tags: ["Accessibility", "UI"],
  },
  {
    id: 4,
    title: "Tailwind v4: what changed, what matters",
    slug: "tailwind-v4",
    date: "Nov 18, 2025",
    readTime: "5 min read",
    description:
      "Practical breakdown of the Tailwind CSS v4 migration — CSS-first config, new utilities, and gotchas.",
    tags: ["Tailwind CSS", "CSS"],
  },
  {
    id: 5,
    title: "Postgres full-text search vs pgvector — choosing the right tool",
    slug: "postgres-search",
    date: "Oct 30, 2025",
    readTime: "9 min read",
    description:
      "When to use Postgres tsvector, when to reach for pgvector, and when to just call a search API.",
    tags: ["PostgreSQL", "Backend"],
  },
]

export const SKILLS = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "Bash"],
  frontend: ["React", "Next.js", "SvelteKit", "Tailwind CSS", "Radix UI", "Framer Motion"],
  backend: ["Node.js", "Bun", "PostgreSQL", "Redis", "Prisma", "REST", "GraphQL"],
  tooling: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions", "Figma"],
}

export const GITHUB_STATS = {
  username: "rzlm",
  repos: 42,
  stars: 318,
  followers: 210,
  contributions2025: 847,
  pinnedRepos: [
    {
      name: "nexus-dashboard",
      description: "Real-time analytics dashboard built with Next.js and WebSockets.",
      stars: 142,
      forks: 28,
      language: "TypeScript",
      color: "#3178C6",
    },
    {
      name: "opendeploy-cli",
      description: "Zero-config deployment CLI for Node.js apps.",
      stars: 98,
      forks: 14,
      language: "TypeScript",
      color: "#3178C6",
    },
    {
      name: "palette-ui",
      description: "Open-source accessible component library on Radix primitives.",
      stars: 67,
      forks: 11,
      language: "TypeScript",
      color: "#3178C6",
    },
    {
      name: "lingo-app",
      description: "AI-powered gamified language-learning app built with React Native.",
      stars: 11,
      forks: 3,
      language: "TypeScript",
      color: "#3178C6",
    },
  ],
}

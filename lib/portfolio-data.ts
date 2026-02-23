// ─── Update these with your real information ───────────────────────────────

export const PROFILE = {
  name: "Razan Mohamed",
  role: "Full-Stack Developer",
  tagline: "Building fast, beautiful, and accessible digital experiences.",
  location: "Dubai, UAE",
  email: "razan@example.com",
  github: "https://github.com/razanmohamed",
  linkedin: "https://linkedin.com/in/razanmohamed",
  twitter: "https://twitter.com/razanmohamed",
  website: "https://razanmohamed.dev",
  available: true,
}

export const PROJECTS = [
  {
    id: 1,
    name: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard with live WebSocket data, customisable widgets, and role-based access control.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
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
    company: "Acme Corp",
    role: "Senior Full-Stack Engineer",
    period: "Jan 2023 – Present",
    location: "Remote",
    description:
      "Led architecture of a multi-tenant SaaS platform serving 50k+ users. Reduced p95 API latency by 60 % through query optimisation and edge caching.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    type: "full-time",
  },
  {
    id: 2,
    company: "Bright Labs",
    role: "Frontend Engineer",
    period: "Jun 2021 – Dec 2022",
    location: "Dubai, UAE",
    description:
      "Built and shipped a design system used across 8 product teams. Improved Lighthouse scores from 42 → 94 by implementing lazy loading and code-splitting strategies.",
    tech: ["React", "TypeScript", "Figma", "Storybook", "Vite"],
    type: "full-time",
  },
  {
    id: 3,
    company: "Freelance",
    role: "UI/UX Developer",
    period: "Jan 2020 – May 2021",
    location: "Remote",
    description:
      "Designed and developed 15+ client websites across e-commerce, SaaS, and marketing verticals. Maintained 100 % on-time delivery and 5 ★ client rating.",
    tech: ["React", "Next.js", "Figma", "Tailwind CSS", "Webflow"],
    type: "contract",
  },
  {
    id: 4,
    company: "TechStart",
    role: "Junior Developer Intern",
    period: "Jun 2019 – Dec 2019",
    location: "Dubai, UAE",
    description:
      "Contributed to an internal CRM tool — implemented REST API integrations and built reusable React components consumed across the product.",
    tech: ["React", "REST APIs", "CSS Modules"],
    type: "internship",
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
  username: "razanmohamed",
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

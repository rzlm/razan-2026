import { PROJECTS, EXPERIENCE, ARTICLES, SKILLS } from "@/lib/portfolio-data"
import type { FileId } from "@/app/page"

export type SearchItem = {
  id: string
  type: "project" | "experience" | "article" | "skill"
  title: string
  subtitle: string
  tags: string[]
  navigateTo: FileId
}

export const SEARCH_ITEMS: SearchItem[] = [
  ...PROJECTS.map((p) => ({
    id: `project-${p.id}`,
    type: "project" as const,
    title: p.name,
    subtitle: p.description,
    tags: p.tech,
    navigateTo: "projects" as FileId,
  })),

  ...EXPERIENCE.map((e) => ({
    id: `experience-${e.id}`,
    type: "experience" as const,
    title: `${e.role} @ ${e.company}`,
    subtitle: e.description,
    tags: e.tech,
    navigateTo: "experience" as FileId,
  })),

  ...ARTICLES.map((a) => ({
    id: `article-${a.id}`,
    type: "article" as const,
    title: a.title,
    subtitle: a.description,
    tags: a.tags,
    navigateTo: "articles" as FileId,
  })),

  ...Object.entries(SKILLS).flatMap(([category, items]) =>
    items.map((skill) => ({
      id: `skill-${category}-${skill}`,
      type: "skill" as const,
      title: skill,
      subtitle: `Skill · ${category}`,
      tags: [category],
      navigateTo: "about" as FileId,
    }))
  ),
]

export const FUSE_OPTIONS = {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "subtitle", weight: 0.3 },
    { name: "tags", weight: 0.2 },
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
}

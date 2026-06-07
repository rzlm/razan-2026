import { ExternalLink, Github } from "lucide-react"
import { PROJECTS } from "@/lib/portfolio-data"

const TECH_COLORS: Record<string, { bg: string; text: string }> = {
  "Next.js":      { bg: "var(--color-vscode-active)", text: "var(--color-vscode-muted)" },
  "React":        { bg: "var(--color-vscode-active)", text: "#7dd3fc" },
  "TypeScript":   { bg: "var(--color-vscode-active)", text: "#60a5fa" },
  "Node.js":      { bg: "var(--color-vscode-active)", text: "#4ade80" },
  "Tailwind CSS": { bg: "var(--color-vscode-active)", text: "var(--color-vscode-type)" },
  "PostgreSQL":   { bg: "var(--color-vscode-active)", text: "var(--color-vscode-keyword)" },
  "Prisma":       { bg: "var(--color-vscode-active)", text: "#7dd3fc" },
  "Redis":        { bg: "var(--color-vscode-active)", text: "var(--color-vscode-pink)" },
  "Docker":       { bg: "var(--color-vscode-active)", text: "var(--color-vscode-type)" },
  "Supabase":     { bg: "var(--color-vscode-active)", text: "#34d399" },
  "React Native": { bg: "var(--color-vscode-active)", text: "#7dd3fc" },
  "Expo":         { bg: "var(--color-vscode-active)", text: "var(--color-vscode-muted)" },
  "SvelteKit":    { bg: "var(--color-vscode-active)", text: "#fb923c" },
  "Vite":         { bg: "var(--color-vscode-active)", text: "var(--color-vscode-keyword)" },
  "Radix UI":     { bg: "var(--color-vscode-active)", text: "var(--color-vscode-fn)" },
  "Storybook":    { bg: "var(--color-vscode-active)", text: "var(--color-vscode-pink)" },
  "OpenAI API":   { bg: "var(--color-vscode-active)", text: "#34d399" },
  "AWS":          { bg: "var(--color-vscode-active)", text: "var(--color-vscode-string)" },
  "Vercel Cron":  { bg: "var(--color-vscode-active)", text: "var(--color-vscode-variable)" },
  "Resend":       { bg: "var(--color-vscode-active)", text: "var(--color-vscode-pink)" },
  "GitHub API":   { bg: "var(--color-vscode-active)", text: "#4ade80" },
  "Dnd-kit":      { bg: "var(--color-vscode-active)", text: "var(--color-vscode-fn)" },
  "IndexedDB":    { bg: "var(--color-vscode-active)", text: "var(--color-vscode-keyword)" },
  "GraphQL":      { bg: "var(--color-vscode-active)", text: "var(--color-vscode-fn)" },
  "SSH2":         { bg: "var(--color-vscode-active)", text: "#86efac" },
  "REST":         { bg: "var(--color-vscode-active)", text: "var(--color-vscode-variable)" },
  "Bun":          { bg: "var(--color-vscode-active)", text: "var(--color-vscode-string)" },
  "Figma":        { bg: "var(--color-vscode-active)", text: "var(--color-vscode-pink)" },
  "Webflow":      { bg: "var(--color-vscode-active)", text: "var(--color-vscode-type)" },
  "CSS Modules":  { bg: "var(--color-vscode-active)", text: "var(--color-vscode-keyword)" },
}

function TechBadge({ name }: { name: string }) {
  const colors = TECH_COLORS[name] ?? { bg: "var(--color-vscode-active)", text: "var(--color-vscode-muted)" }
  return (
    <span className="px-2 py-0.5 rounded text-xs" style={{ background: colors.bg, color: colors.text, border: "1px solid var(--color-vscode-border)", fontFamily: "var(--font-mono)" }}>
      {name}
    </span>
  )
}

export function ProjectsPanel() {
  const featured = PROJECTS.filter((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <div className="h-full overflow-y-auto p-8" style={{ background: "var(--color-vscode-editor)" }}>
      <p className="text-xs mb-6" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)" }}>
        <span style={{ color: "var(--color-vscode-string)" }}>razan-portfolio</span>
        <span style={{ color: "var(--color-vscode-border)" }}> › </span>
        <span style={{ color: "var(--color-vscode-text)" }}>projects.tsx</span>
      </p>

      <h2 className="mb-2" style={{ color: "var(--color-vscode-text)", fontFamily: "var(--font-sans)", fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em" }}>Projects</h2>
      <p className="mb-10" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-sans)", fontSize: "14px", lineHeight: 1.6 }}>
        Things I&apos;ve built — from side projects to production systems.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
        {featured.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-lg p-5 transition-colors duration-150"
            style={{ background: "var(--color-vscode-sidebar)", border: "1px solid var(--color-vscode-border)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--color-vscode-accent) 40%, transparent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-vscode-border)")}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 style={{ color: "var(--color-vscode-accent)", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 600 }}>
                {project.name}
              </h3>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-pointer transition-colors duration-150" style={{ color: "var(--color-vscode-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-text)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-muted)")}
                  ><Github size={15} /></a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live site" className="cursor-pointer transition-colors duration-150" style={{ color: "var(--color-vscode-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-text)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-muted)")}
                  ><ExternalLink size={15} /></a>
                )}
              </div>
            </div>
            <p className="flex-1 mb-4" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-sans)", fontSize: "13px", lineHeight: 1.65 }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => <TechBadge key={t} name={t} />)}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-4" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        Other projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {rest.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-md p-4 transition-colors duration-150"
            style={{ background: "var(--color-vscode-sidebar)", border: "1px solid var(--color-vscode-border)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--color-vscode-accent) 40%, transparent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-vscode-border)")}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 style={{ color: "var(--color-vscode-variable)", fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 600 }}>
                {project.name}
              </h4>
              <div className="flex gap-1.5">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-pointer" style={{ color: "var(--color-vscode-muted)" }}><Github size={14} /></a>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live site" className="cursor-pointer" style={{ color: "var(--color-vscode-muted)" }}><ExternalLink size={14} /></a>}
              </div>
            </div>
            <p className="flex-1 mb-3" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-sans)", fontSize: "12px", lineHeight: 1.6 }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tech.slice(0, 3).map((t) => <TechBadge key={t} name={t} />)}
              {project.tech.length > 3 && (
                <span style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "11px", alignSelf: "center" }}>
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="h-8" />
    </div>
  )
}

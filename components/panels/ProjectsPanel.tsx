import { ExternalLink, Github } from "lucide-react"
import { PROJECTS } from "@/lib/portfolio-data"

const TECH_COLORS: Record<string, { bg: string; text: string }> = {
  "Next.js":      { bg: "#1a1230", text: "#a78bfa" },
  "React":        { bg: "#1e1535", text: "#7dd3fc" },
  "TypeScript":   { bg: "#1a1535", text: "#60a5fa" },
  "Node.js":      { bg: "#1a3a2a", text: "#4ade80" },
  "Tailwind CSS": { bg: "#1e1a40", text: "#c084fc" },
  "PostgreSQL":   { bg: "#2a1a40", text: "#a78bfa" },
  "Prisma":       { bg: "#1a1a3a", text: "#7dd3fc" },
  "Redis":        { bg: "#3a1a2a", text: "#f9a8d4" },
  "Docker":       { bg: "#1a1a40", text: "#67e8f9" },
  "Supabase":     { bg: "#1a3a2a", text: "#34d399" },
  "React Native": { bg: "#1e1535", text: "#7dd3fc" },
  "Expo":         { bg: "#1a1230", text: "#c8b8f8" },
  "SvelteKit":    { bg: "#3a1a10", text: "#fb923c" },
  "Vite":         { bg: "#2a1a3a", text: "#c084fc" },
  "Radix UI":     { bg: "#2a1230", text: "#e879f9" },
  "Storybook":    { bg: "#3a1a2a", text: "#f472b6" },
  "OpenAI API":   { bg: "#1a3a2a", text: "#34d399" },
  "AWS":          { bg: "#3a2a10", text: "#fbbf24" },
  "Vercel Cron":  { bg: "#1a1230", text: "#818cf8" },
  "Resend":       { bg: "#2a1a2a", text: "#f9a8d4" },
  "GitHub API":   { bg: "#1a2a1a", text: "#4ade80" },
  "Dnd-kit":      { bg: "#2a1a30", text: "#e879f9" },
  "IndexedDB":    { bg: "#2a1a3a", text: "#c084fc" },
  "GraphQL":      { bg: "#3a1a2a", text: "#e879f9" },
  "SSH2":         { bg: "#1a2a1a", text: "#86efac" },
  "REST":         { bg: "#2a1a30", text: "#f0abfc" },
  "Bun":          { bg: "#2a1a10", text: "#fcd34d" },
  "Figma":        { bg: "#3a1a2a", text: "#f472b6" },
  "Webflow":      { bg: "#1a2a40", text: "#67e8f9" },
  "CSS Modules":  { bg: "#1a1a40", text: "#c084fc" },
}

function TechBadge({ name }: { name: string }) {
  const colors = TECH_COLORS[name] ?? { bg: "#1a1230", text: "#a78bfa" }
  return (
    <span
      className="px-2 py-0.5 rounded text-xs"
      style={{
        background: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.text}22`,
        fontFamily: "var(--font-mono)",
      }}
    >
      {name}
    </span>
  )
}

export function ProjectsPanel() {
  const featured = PROJECTS.filter((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <div
      className="h-full overflow-y-auto p-8"
      style={{ background: "var(--color-vscode-editor)" }}
    >
      {/* Breadcrumb */}
      <p
        className="text-xs mb-6"
        style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)" }}
      >
        <span style={{ color: "#f9a8d4" }}>razan-portfolio</span>
        <span style={{ color: "#3d2f5e" }}> › </span>
        <span style={{ color: "#e4deff" }}>projects.tsx</span>
      </p>

      {/* Heading */}
      <h2
        className="mb-2"
        style={{
          color: "#e4deff",
          fontFamily: "var(--font-sans)",
          fontSize: "1.75rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        Projects
      </h2>
      <p
        className="mb-10"
        style={{
          color: "var(--color-vscode-muted)",
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        Things I&apos;ve built — from side projects to production systems.
      </p>

      {/* Featured */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
        {featured.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-lg p-5 transition-colors duration-150 group cursor-default"
            style={{
              background: "var(--color-vscode-sidebar)",
              border: "1px solid var(--color-vscode-border)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "#c084fc66")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-vscode-border)")
            }
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3
                style={{
                  color: "#c084fc",
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {project.name}
              </h3>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source on GitHub"
                    className="cursor-pointer transition-colors duration-150"
                    style={{ color: "var(--color-vscode-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#e4deff")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-muted)")
                    }
                  >
                    <Github size={15} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live site"
                    className="cursor-pointer transition-colors duration-150"
                    style={{ color: "var(--color-vscode-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#e4deff")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-muted)")
                    }
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p
              className="flex-1 mb-4"
              style={{
                color: "#7b6ea6",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                lineHeight: 1.65,
              }}
            >
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Other projects */}
      <h3
        className="mb-4"
        style={{
          color: "var(--color-vscode-muted)",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        Other projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {rest.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-md p-4 transition-colors duration-150"
            style={{
              background: "var(--color-vscode-sidebar)",
              border: "1px solid var(--color-vscode-border)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "#c084fc66")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-vscode-border)")
            }
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4
                style={{
                  color: "#f0abfc",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {project.name}
              </h4>
              <div className="flex gap-1.5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="cursor-pointer"
                    style={{ color: "var(--color-vscode-muted)" }}
                  >
                    <Github size={14} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="cursor-pointer"
                    style={{ color: "var(--color-vscode-muted)" }}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
            <p
              className="flex-1 mb-3"
              style={{ color: "#3d2f5e", fontFamily: "var(--font-sans)", fontSize: "12px", lineHeight: 1.6 }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tech.slice(0, 3).map((t) => (
                <TechBadge key={t} name={t} />
              ))}
              {project.tech.length > 3 && (
                <span
                  style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "11px", alignSelf: "center" }}
                >
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

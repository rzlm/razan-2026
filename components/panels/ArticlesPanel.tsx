import { Clock, Tag, ArrowUpRight } from "lucide-react"
import { ARTICLES } from "@/lib/portfolio-data"

const TAG_COLORS: Record<string, { color: string; bg: string }> = {
  React:              { color: "#7dd3fc", bg: "#1e1535" },
  "State Management": { color: "#c084fc", bg: "#2a1a3a" },
  Performance:        { color: "#fbbf24", bg: "#3a2a10" },
  Accessibility:      { color: "#4ade80", bg: "#1a3a2a" },
  UI:                 { color: "#f472b6", bg: "#3a1a2a" },
  "Tailwind CSS":     { color: "#67e8f9", bg: "#1a1a40" },
  CSS:                { color: "#67e8f9", bg: "#1a1a40" },
  PostgreSQL:         { color: "#a78bfa", bg: "#2a1a3a" },
  Backend:            { color: "#fb923c", bg: "#3a2010" },
  TypeScript:         { color: "#60a5fa", bg: "#1a1535" },
}

export function ArticlesPanel() {
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
        <span style={{ color: "#e4deff" }}>articles.tsx</span>
      </p>

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
        Writing
      </h2>
      <p
        className="mb-10"
        style={{
          color: "var(--color-vscode-muted)",
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
        }}
      >
        Thoughts on software, design, and the craft of building things.
      </p>

      <div className="flex flex-col gap-px max-w-2xl">
        {ARTICLES.map((article, i) => (
          <a
            key={article.id}
            href={`/articles/${article.slug}`}
            className="group flex flex-col gap-3 p-5 rounded-lg cursor-pointer transition-colors duration-150"
            style={{
              background: "transparent",
              border: "1px solid transparent",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "var(--color-vscode-sidebar)"
              el.style.borderColor = "var(--color-vscode-border)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "transparent"
              el.style.borderColor = "transparent"
            }}
          >
            {/* Date + read time */}
            <div
              className="flex items-center gap-3"
              style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "11px" }}
            >
              <span>{article.date}</span>
              <span className="flex items-center gap-1">
                <Clock size={10} />
                {article.readTime}
              </span>
            </div>

            {/* Title */}
            <div className="flex items-start justify-between gap-3">
              <h3
                className="transition-colors duration-150"
                style={{
                  color: "#e4deff",
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#c084fc")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#e4deff")
                }
              >
                {article.title}
              </h3>
              <ArrowUpRight
                size={16}
                className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                style={{ color: "#c084fc" }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                color: "#7b6ea6",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                lineHeight: 1.65,
              }}
            >
              {article.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {article.tags.map((tag) => {
                const style = TAG_COLORS[tag] ?? { color: "#a78bfa", bg: "#1a1230" }
                return (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2 py-0.5 rounded text-xs"
                    style={{
                      background: style.bg,
                      color: style.color,
                      border: `1px solid ${style.color}22`,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <Tag size={9} />
                    {tag}
                  </span>
                )
              })}
            </div>

            {/* Divider (except last) */}
            {i < ARTICLES.length - 1 && (
              <div
                className="mt-1 -mx-5 border-t"
                style={{ borderColor: "var(--color-vscode-border)" }}
              />
            )}
          </a>
        ))}
      </div>

      <div className="h-8" />
    </div>
  )
}

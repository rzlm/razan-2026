import { Star, GitFork, Github, Users, BookOpen, TrendingUp } from "lucide-react"
import { GITHUB_STATS, PROFILE } from "@/lib/portfolio-data"

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  Go: "#00ADD8",
  Rust: "#CE422B",
  CSS: "#563D7C",
  HTML: "#E34F26",
}

// Deterministic "contribution graph" — 52 weeks × 7 days
function ContributionGraph() {
  // Seed with a readable pattern based on position
  const weeks = 52
  const days = 7
  const levels = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]

  function level(week: number, day: number): number {
    const n = (week * 7 + day + week * 3) % 17
    if (n < 8) return 0
    if (n < 11) return 1
    if (n < 13) return 2
    if (n < 15) return 3
    return 4
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px]" style={{ minWidth: "max-content" }}>
        {Array.from({ length: weeks }, (_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }, (_, d) => (
              <div
                key={d}
                title={`${level(w, d) * 3} contributions`}
                className="w-[10px] h-[10px] rounded-sm"
                style={{ background: levels[level(w, d)] }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: number | string
}) {
  return (
    <div
      className="flex flex-col gap-1 rounded-lg p-4"
      style={{
        background: "var(--color-vscode-sidebar)",
        border: "1px solid var(--color-vscode-border)",
      }}
    >
      <div className="flex items-center gap-1.5" style={{ color: "var(--color-vscode-muted)" }}>
        <Icon size={13} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {label}
        </span>
      </div>
      <span
        style={{
          color: "#d4d4d4",
          fontFamily: "var(--font-mono)",
          fontSize: "1.5rem",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {value.toLocaleString()}
      </span>
    </div>
  )
}

export function GithubPanel() {
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
        <span style={{ color: "#ce9178" }}>razan-portfolio</span>
        <span style={{ color: "#6b6b6b" }}> › </span>
        <span style={{ color: "#d4d4d4" }}>github.tsx</span>
      </p>

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Github size={28} style={{ color: "#d4d4d4" }} />
        <div>
          <h2
            style={{
              color: "#d4d4d4",
              fontFamily: "var(--font-sans)",
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            @{GITHUB_STATS.username}
          </h2>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
            style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "12px" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4ec9b0")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-muted)")}
          >
            github.com/{GITHUB_STATS.username} ↗
          </a>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <StatCard icon={BookOpen} label="Repos" value={GITHUB_STATS.repos} />
        <StatCard icon={Star} label="Stars" value={GITHUB_STATS.stars} />
        <StatCard icon={Users} label="Followers" value={GITHUB_STATS.followers} />
        <StatCard icon={TrendingUp} label="Commits '25" value={GITHUB_STATS.contributions2025} />
      </div>

      {/* Contribution graph */}
      <div
        className="rounded-lg p-5 mb-8"
        style={{
          background: "var(--color-vscode-sidebar)",
          border: "1px solid var(--color-vscode-border)",
        }}
      >
        <p
          className="mb-4"
          style={{
            color: "var(--color-vscode-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Contribution Activity · 2025
        </p>
        <ContributionGraph />
        <div className="flex items-center justify-end gap-1 mt-3">
          <span style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "10px" }}>
            Less
          </span>
          {["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"].map((c) => (
            <div key={c} className="w-[10px] h-[10px] rounded-sm" style={{ background: c }} />
          ))}
          <span style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "10px" }}>
            More
          </span>
        </div>
      </div>

      {/* Pinned repos */}
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
        Pinned Repositories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {GITHUB_STATS.pinnedRepos.map((repo) => (
          <a
            key={repo.name}
            href={`${PROFILE.github}/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-lg p-4 cursor-pointer transition-colors duration-150"
            style={{
              background: "var(--color-vscode-sidebar)",
              border: "1px solid var(--color-vscode-border)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "#007acc66")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-vscode-border)")
            }
          >
            {/* Repo name */}
            <div className="flex items-center gap-2">
              <BookOpen size={13} style={{ color: "#4ec9b0", flexShrink: 0 }} />
              <span
                style={{
                  color: "#4ec9b0",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {repo.name}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                color: "#858585",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                lineHeight: 1.55,
                flex: 1,
              }}
            >
              {repo.description}
            </p>

            {/* Meta */}
            <div
              className="flex items-center gap-4"
              style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "11px" }}
            >
              <span className="flex items-center gap-1">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: LANG_COLORS[repo.language] ?? "#858585" }}
                />
                {repo.language}
              </span>
              <span className="flex items-center gap-1">
                <Star size={11} />
                {repo.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={11} />
                {repo.forks}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="h-8" />
    </div>
  )
}

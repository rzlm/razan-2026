"use client"

import { useEffect, useState } from "react"
import { Star, GitFork, Github, Users, BookOpen } from "lucide-react"
import { PROFILE } from "@/lib/portfolio-data"

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python:     "#3776AB",
  Go:         "#00ADD8",
  Rust:       "#CE422B",
  CSS:        "#563D7C",
  HTML:       "#E34F26",
}

// Theme-aware contribution graph levels using CSS variables + color-mix
const GRAPH_LEVELS = [
  "var(--color-vscode-active)",
  "color-mix(in srgb, var(--color-vscode-accent) 15%, var(--color-vscode-editor))",
  "color-mix(in srgb, var(--color-vscode-accent) 35%, var(--color-vscode-editor))",
  "color-mix(in srgb, var(--color-vscode-accent) 60%, var(--color-vscode-editor))",
  "var(--color-vscode-accent)",
]

function ContributionGraph() {
  const weeks = 52
  const days = 7

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
              <div key={d} title={`${level(w, d) * 3} contributions`} className="w-[10px] h-[10px] rounded-sm" style={{ background: GRAPH_LEVELS[level(w, d)] }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: number | string }) {
  return (
    <div className="flex flex-col gap-1 rounded-lg p-4" style={{ background: "var(--color-vscode-sidebar)", border: "1px solid var(--color-vscode-border)" }}>
      <div className="flex items-center gap-1.5" style={{ color: "var(--color-vscode-muted)" }}>
        <Icon size={13} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
      </div>
      <span style={{ color: "var(--color-vscode-text)", fontFamily: "var(--font-mono)", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1 }}>
        {typeof value === "number" ? value.toLocaleString() : value}
      </span>
    </div>
  )
}

type GhData = {
  username: string
  repos: number
  followers: number
  stars: number
  topRepos: { name: string; description: string; stars: number; forks: number; language: string }[]
}

export function GithubPanel() {
  const [data, setData] = useState<GhData | null>(null)
  const username = PROFILE.github.replace("https://github.com/", "")

  useEffect(() => {
    fetch("/api/github").then((r) => r.json()).then((d) => setData(d)).catch(() => null)
  }, [])

  return (
    <div className="h-full overflow-y-auto p-8" style={{ background: "var(--color-vscode-editor)" }}>
      <p className="text-xs mb-6" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)" }}>
        <span style={{ color: "var(--color-vscode-string)" }}>razan-portfolio</span>
        <span style={{ color: "var(--color-vscode-border)" }}> › </span>
        <span style={{ color: "var(--color-vscode-text)" }}>github.tsx</span>
      </p>

      <div className="flex items-center gap-3 mb-8">
        <Github size={28} style={{ color: "var(--color-vscode-text)" }} />
        <div>
          <h2 style={{ color: "var(--color-vscode-text)", fontFamily: "var(--font-sans)", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
            @{username}
          </h2>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "12px" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-muted)")}
          >
            github.com/{username} ↗
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        <StatCard icon={BookOpen} label="Repos"     value={data?.repos     ?? "—"} />
        <StatCard icon={Star}     label="Stars"     value={data?.stars     ?? "—"} />
        <StatCard icon={Users}    label="Followers" value={data?.followers ?? "—"} />
      </div>

      <div className="rounded-lg p-5 mb-8" style={{ background: "var(--color-vscode-sidebar)", border: "1px solid var(--color-vscode-border)" }}>
        <p className="mb-4" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Contribution Activity
        </p>
        <ContributionGraph />
        <div className="flex items-center justify-end gap-1 mt-3">
          <span style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "10px" }}>Less</span>
          {GRAPH_LEVELS.map((c, i) => <div key={i} className="w-[10px] h-[10px] rounded-sm" style={{ background: c }} />)}
          <span style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "10px" }}>More</span>
        </div>
      </div>

      {data && data.topRepos.length > 0 && (
        <>
          <h3 className="mb-4" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Top Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.topRepos.map((repo) => (
              <a
                key={repo.name}
                href={`${PROFILE.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 rounded-lg p-4 cursor-pointer transition-colors duration-150"
                style={{ background: "var(--color-vscode-sidebar)", border: "1px solid var(--color-vscode-border)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--color-vscode-accent) 40%, transparent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-vscode-border)")}
              >
                <div className="flex items-center gap-2">
                  <BookOpen size={13} style={{ color: "var(--color-vscode-accent)", flexShrink: 0 }} />
                  <span style={{ color: "var(--color-vscode-accent)", fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 600 }}>{repo.name}</span>
                </div>
                {repo.description && (
                  <p style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-sans)", fontSize: "12px", lineHeight: 1.55, flex: 1 }}>{repo.description}</p>
                )}
                <div className="flex items-center gap-4" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                  {repo.language !== "Unknown" && (
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: LANG_COLORS[repo.language] ?? "var(--color-vscode-muted)" }} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Star size={11} />{repo.stars}</span>
                  <span className="flex items-center gap-1"><GitFork size={11} />{repo.forks}</span>
                </div>
              </a>
            ))}
          </div>
        </>
      )}

      {!data && <div style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "13px" }}>Loading repositories…</div>}

      <div className="h-8" />
    </div>
  )
}

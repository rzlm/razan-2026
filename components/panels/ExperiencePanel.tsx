import { MapPin, Clock } from "lucide-react"
import { EXPERIENCE } from "@/lib/portfolio-data"

const TYPE_LABELS: Record<string, { label: string; color: string; bg: string; border: string }> = {
  "full-time":  { label: "Full-time",  color: "var(--color-vscode-type)",    bg: "color-mix(in srgb, var(--color-vscode-type) 10%, transparent)",    border: "color-mix(in srgb, var(--color-vscode-type) 30%, transparent)" },
  "contract":   { label: "Contract",   color: "var(--color-vscode-fn)",      bg: "color-mix(in srgb, var(--color-vscode-fn) 10%, transparent)",      border: "color-mix(in srgb, var(--color-vscode-fn) 30%, transparent)" },
  "internship": { label: "Internship", color: "var(--color-vscode-variable)", bg: "color-mix(in srgb, var(--color-vscode-variable) 10%, transparent)", border: "color-mix(in srgb, var(--color-vscode-variable) 30%, transparent)" },
  "part-time":  { label: "Part-time",  color: "var(--color-vscode-pink)",    bg: "color-mix(in srgb, var(--color-vscode-pink) 10%, transparent)",    border: "color-mix(in srgb, var(--color-vscode-pink) 30%, transparent)" },
}

export function ExperiencePanel() {
  return (
    <div className="h-full overflow-y-auto p-8" style={{ background: "var(--color-vscode-editor)" }}>
      <p className="text-xs mb-6" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)" }}>
        <span style={{ color: "var(--color-vscode-string)" }}>razan-portfolio</span>
        <span style={{ color: "var(--color-vscode-border)" }}> › </span>
        <span style={{ color: "var(--color-vscode-text)" }}>experience.tsx</span>
      </p>

      <h2 className="mb-2" style={{ color: "var(--color-vscode-text)", fontFamily: "var(--font-sans)", fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
        Work Experience
      </h2>
      <p className="mb-12" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-sans)", fontSize: "14px" }}>
        Where I&apos;ve worked and what I&apos;ve shipped.
      </p>

      <div className="relative max-w-2xl">
        <div className="absolute left-[7px] top-2 bottom-8 w-px" style={{ background: "var(--color-vscode-border)" }} />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((job, i) => {
            const typeStyle = TYPE_LABELS[job.type] ?? TYPE_LABELS["full-time"]
            return (
              <div key={job.id} className="flex gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-4 h-4 rounded-full border-2 mt-1 z-10"
                    style={{
                      background: i === 0 ? "var(--color-vscode-accent)" : "var(--color-vscode-editor)",
                      borderColor: i === 0 ? "var(--color-vscode-accent)" : "var(--color-vscode-border)",
                    }}
                  />
                </div>

                <div className="flex-1 rounded-lg p-5 -mt-0.5" style={{ background: "var(--color-vscode-sidebar)", border: "1px solid var(--color-vscode-border)" }}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 style={{ color: "var(--color-vscode-text)", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 600 }}>
                        {job.role}
                      </h3>
                      <p style={{ color: "var(--color-vscode-accent)", fontFamily: "var(--font-sans)", fontSize: "13px", marginTop: "2px" }}>
                        {job.company}
                      </p>
                    </div>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs flex-shrink-0"
                      style={{ background: typeStyle.bg, color: typeStyle.color, border: `1px solid ${typeStyle.border}`, fontFamily: "var(--font-mono)" }}
                    >
                      {typeStyle.label}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
                    <span className="flex items-center gap-1"><Clock size={11} />{job.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                  </div>

                  <p className="mb-4" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-sans)", fontSize: "13px", lineHeight: 1.65 }}>
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xs" style={{ background: "var(--color-vscode-active)", color: "var(--color-vscode-muted)", border: "1px solid var(--color-vscode-border)", fontFamily: "var(--font-mono)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="h-8" />
    </div>
  )
}

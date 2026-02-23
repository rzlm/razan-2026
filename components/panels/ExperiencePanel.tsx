import { MapPin, Briefcase, Clock } from "lucide-react"
import { EXPERIENCE } from "@/lib/portfolio-data"

const TYPE_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  "full-time": { label: "Full-time", color: "#4ec9b0", bg: "rgba(78,201,176,0.1)" },
  "contract": { label: "Contract", color: "#dcdcaa", bg: "rgba(220,220,170,0.1)" },
  "internship": { label: "Internship", color: "#9cdcfe", bg: "rgba(156,220,254,0.1)" },
  "part-time": { label: "Part-time", color: "#c586c0", bg: "rgba(197,134,192,0.1)" },
}

export function ExperiencePanel() {
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
        <span style={{ color: "#d4d4d4" }}>experience.tsx</span>
      </p>

      <h2
        className="mb-2"
        style={{
          color: "#d4d4d4",
          fontFamily: "var(--font-sans)",
          fontSize: "1.75rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        Work Experience
      </h2>
      <p
        className="mb-12"
        style={{
          color: "var(--color-vscode-muted)",
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
        }}
      >
        Where I&apos;ve worked and what I&apos;ve shipped.
      </p>

      {/* Timeline */}
      <div className="relative max-w-2xl">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-2 bottom-8 w-px"
          style={{ background: "var(--color-vscode-border)" }}
        />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((job, i) => {
            const typeStyle = TYPE_LABELS[job.type] ?? TYPE_LABELS["full-time"]
            return (
              <div key={job.id} className="flex gap-6">
                {/* Dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-4 h-4 rounded-full border-2 mt-1 z-10"
                    style={{
                      background: i === 0 ? "#007acc" : "var(--color-vscode-editor)",
                      borderColor: i === 0 ? "#007acc" : "#4b4b4b",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-lg p-5 -mt-0.5"
                  style={{
                    background: "var(--color-vscode-sidebar)",
                    border: "1px solid var(--color-vscode-border)",
                  }}
                >
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3
                        style={{
                          color: "#d4d4d4",
                          fontFamily: "var(--font-sans)",
                          fontSize: "15px",
                          fontWeight: 600,
                        }}
                      >
                        {job.role}
                      </h3>
                      <p
                        style={{
                          color: "#4ec9b0",
                          fontFamily: "var(--font-sans)",
                          fontSize: "13px",
                          marginTop: "2px",
                        }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs flex-shrink-0"
                      style={{
                        background: typeStyle.bg,
                        color: typeStyle.color,
                        border: `1px solid ${typeStyle.color}33`,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {typeStyle.label}
                    </span>
                  </div>

                  {/* Meta */}
                  <div
                    className="flex flex-wrap gap-4 mb-4"
                    style={{
                      color: "var(--color-vscode-muted)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                    }}
                  >
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {job.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="mb-4"
                    style={{
                      color: "#9d9d9d",
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      lineHeight: 1.65,
                    }}
                  >
                    {job.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          background: "#1e293b",
                          color: "#94a3b8",
                          border: "1px solid #94a3b822",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
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

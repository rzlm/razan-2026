import { MapPin, Clock } from "lucide-react"
import { EXPERIENCE } from "@/lib/portfolio-data"

const TYPE_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  "full-time":  { label: "Full-time",  color: "#67e8f9", bg: "rgba(103,232,249,0.1)" },
  "contract":   { label: "Contract",   color: "#e879f9", bg: "rgba(232,121,249,0.1)" },
  "internship": { label: "Internship", color: "#f0abfc", bg: "rgba(240,171,252,0.1)" },
  "part-time":  { label: "Part-time",  color: "#f472b6", bg: "rgba(244,114,182,0.1)" },
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
        <span style={{ color: "#f9a8d4" }}>razan-portfolio</span>
        <span style={{ color: "#3d2f5e" }}> › </span>
        <span style={{ color: "#e4deff" }}>experience.tsx</span>
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
                      background: i === 0 ? "#c084fc" : "var(--color-vscode-editor)",
                      borderColor: i === 0 ? "#c084fc" : "#2d1f4e",
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
                          color: "#e4deff",
                          fontFamily: "var(--font-sans)",
                          fontSize: "15px",
                          fontWeight: 600,
                        }}
                      >
                        {job.role}
                      </h3>
                      <p
                        style={{
                          color: "#c084fc",
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
                      color: "#9d8fc0",
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
                          background: "#1a1230",
                          color: "#a78bfa",
                          border: "1px solid #a78bfa22",
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

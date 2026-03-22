import { MapPin, Mail, Globe } from "lucide-react"
import { PROFILE, SKILLS } from "@/lib/portfolio-data"

const SKILL_COLORS: Record<string, string> = {
  languages: "#c084fc",
  frontend:  "#67e8f9",
  backend:   "#e879f9",
  tooling:   "#f472b6",
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre
      className="rounded-lg p-5 overflow-x-auto text-sm leading-relaxed"
      style={{
        background: "#0a0814",
        border: "1px solid var(--color-vscode-border)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {children}
    </pre>
  )
}

const kw   = (s: string) => <span style={{ color: "#c084fc" }}>{s}</span>
const str  = (s: string) => <span style={{ color: "#f9a8d4" }}>{s}</span>
const prop = (s: string) => <span style={{ color: "#f0abfc" }}>{s}</span>
const type = (s: string) => <span style={{ color: "#67e8f9" }}>{s}</span>
const cmt  = (s: string) => <span style={{ color: "#9d7fd4" }}>{s}</span>
const bool = (s: string) => <span style={{ color: "#c084fc" }}>{s}</span>
const num  = (s: string) => <span style={{ color: "#fda4af" }}>{s}</span>
const p    = (s: string) => <span style={{ color: "#e4deff" }}>{s}</span>

export function AboutPanel() {
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
        <span style={{ color: "#e4deff" }}>about.tsx</span>
      </p>

      <div className="max-w-3xl grid lg:grid-cols-[1fr_320px] gap-10">
        {/* Left – code view */}
        <div className="flex flex-col gap-6">
          <div>
            <h2
              className="mb-6"
              style={{
                color: "#e4deff",
                fontFamily: "var(--font-sans)",
                fontSize: "1.75rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              About Me
            </h2>

            <CodeBlock>
              {cmt("// about.ts\n")}
              {"\n"}
              {kw("const ")}
              {prop("me")}
              {p(" = {\n")}
              {"  "}
              {prop("name")}
              {p(":         ")}
              {str(`"${PROFILE.name}"`)}{p(",\n")}
              {"  "}
              {prop("role")}
              {p(":         ")}
              {str(`"${PROFILE.role}"`)}{p(",\n")}
              {"  "}
              {prop("location")}
              {p(":     ")}
              {str(`"${PROFILE.location}"`)}{p(",\n")}
              {"  "}
              {prop("available")}
              {p(":    ")}
              {bool(PROFILE.available ? "true" : "false")}{p(",\n")}
              {"\n"}
              {"  "}
              {prop("languages")}
              {p(":    [")}
              {SKILLS.languages.map((s, i) => (
                <span key={s}>
                  {str(`"${s}"`)}
                  {i < SKILLS.languages.length - 1 ? p(", ") : ""}
                </span>
              ))}
              {p("],\n")}
              {"\n"}
              {"  "}
              {prop("frontend")}
              {p(":     [")}
              {SKILLS.frontend.map((s, i) => (
                <span key={s}>
                  {str(`"${s}"`)}
                  {i < SKILLS.frontend.length - 1 ? p(", ") : ""}
                </span>
              ))}
              {p("],\n")}
              {"\n"}
              {"  "}
              {prop("backend")}
              {p(":      [")}
              {SKILLS.backend.map((s, i) => (
                <span key={s}>
                  {str(`"${s}"`)}
                  {i < SKILLS.backend.length - 1 ? p(", ") : ""}
                </span>
              ))}
              {p("],\n")}
              {"\n"}
              {"  "}
              {prop("tooling")}
              {p(":      [")}
              {SKILLS.tooling.map((s, i) => (
                <span key={s}>
                  {str(`"${s}"`)}
                  {i < SKILLS.tooling.length - 1 ? p(", ") : ""}
                </span>
              ))}
              {p("],\n")}
              {p("}")}
            </CodeBlock>
          </div>

          {/* Skills grid */}
          <div className="flex flex-col gap-4">
            <h3
              style={{
                color: "var(--color-vscode-muted)",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(Object.entries(SKILLS) as [string, string[]][]).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-lg p-4"
                  style={{
                    background: "var(--color-vscode-sidebar)",
                    border: "1px solid var(--color-vscode-border)",
                  }}
                >
                  <p
                    className="mb-2 capitalize"
                    style={{
                      color: SKILL_COLORS[category] ?? "#e4deff",
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          background: "#1a1230",
                          color: "#a78bfa",
                          border: "1px solid #a78bfa22",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right – human side */}
        <div className="flex flex-col gap-6">
          {/* Avatar placeholder */}
          <div
            className="w-full aspect-square max-w-[260px] rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #1a1230 0%, #0d0a1c 100%)",
              border: "1px solid var(--color-vscode-border)",
            }}
          >
            <span
              style={{
                color: "#c084fc",
                fontFamily: "var(--font-mono)",
                fontSize: "4rem",
                userSelect: "none",
              }}
            >
              RM
            </span>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-3">
            <p
              style={{
                color: "#9d8fc0",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                lineHeight: 1.7,
              }}
            >
              I&apos;m a full-stack developer who loves building things that feel fast, look great, and work for everyone. I care deeply about accessibility, developer experience, and writing code that&apos;s easy to read and maintain.
            </p>
            <p
              style={{
                color: "#9d8fc0",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                lineHeight: 1.7,
              }}
            >
              When I&apos;m not coding, you&apos;ll find me writing about the things I learn, contributing to open source, or tinkering with side projects that nobody asked for.
            </p>
          </div>

          {/* Contact */}
          <div
            className="rounded-lg p-4 flex flex-col gap-3"
            style={{
              background: "var(--color-vscode-sidebar)",
              border: "1px solid var(--color-vscode-border)",
            }}
          >
            <p
              style={{
                color: "var(--color-vscode-muted)",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Contact
            </p>
            {[
              { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { icon: MapPin, label: PROFILE.location, href: null },
              { icon: Globe, label: "razanmohamed.dev", href: PROFILE.website },
            ].map(({ icon: Icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 cursor-pointer transition-colors duration-150"
                  style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "13px" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#c084fc")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-vscode-muted)")
                  }
                >
                  <Icon size={13} />
                  {label}
                </a>
              ) : (
                <span
                  key={label}
                  className="flex items-center gap-2"
                  style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "13px" }}
                >
                  <Icon size={13} />
                  {label}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="h-8" />
    </div>
  )
}

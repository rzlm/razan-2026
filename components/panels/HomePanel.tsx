"use client"

import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react"
import { PROFILE } from "@/lib/portfolio-data"
import type { FileId } from "@/app/page"

interface HomePanelProps {
  onNavigate: (id: FileId) => void
}

const QUICK_OPEN: { id: FileId; desc: string }[] = [
  { id: "projects", desc: "View my work" },
  { id: "experience", desc: "Work history" },
  { id: "about", desc: "Get to know me" },
  { id: "articles", desc: "Writing" },
  { id: "github", desc: "Open source" },
]

const SOCIAL = [
  { icon: Github, label: "GitHub", href: PROFILE.github },
  { icon: Linkedin, label: "LinkedIn", href: PROFILE.linkedin },
  { icon: Twitter, label: "Twitter", href: PROFILE.twitter },
  { icon: Mail, label: "Email", href: `mailto:${PROFILE.email}` },
]

export function HomePanel({ onNavigate }: HomePanelProps) {
  return (
    <div
      className="flex h-full items-center justify-center px-12 py-16"
      style={{ background: "var(--color-vscode-editor)" }}
    >
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── Left: Identity ───────────────────────────────────── */}
        <div className="flex flex-col gap-5">
          <p
            style={{
              color: "#6a9955",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
            }}
          >
            // hi there 👋
          </p>

          <h1
            style={{
              color: "#d4d4d4",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            {PROFILE.name.split(" ")[0]}
            <br />
            <span style={{ color: "#4ec9b0" }}>{PROFILE.name.split(" ")[1]}</span>
          </h1>

          <p
            style={{
              color: "#9cdcfe",
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
            }}
          >
            {PROFILE.role}
          </p>

          <p
            style={{
              color: "var(--color-vscode-muted)",
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              lineHeight: 1.7,
              maxWidth: "38ch",
            }}
          >
            {PROFILE.tagline}
          </p>

          {PROFILE.available && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs w-fit"
              style={{
                background: "rgba(78,201,176,0.08)",
                border: "1px solid rgba(78,201,176,0.25)",
                color: "#4ec9b0",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ec9b0] animate-pulse" />
              Available for work
            </div>
          )}
        </div>

        {/* ── Right: Navigation + Socials ──────────────────────── */}
        <div className="flex flex-col gap-10">

          {/* Quick open */}
          <div className="flex flex-col gap-2">
            <p
              style={{
                color: "var(--color-vscode-muted)",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}
            >
              Quick Open
            </p>
            {QUICK_OPEN.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex items-center justify-between gap-2 text-left rounded px-4 py-3 cursor-pointer transition-colors duration-150 group"
                style={{
                  background: "var(--color-vscode-sidebar)",
                  border: "1px solid var(--color-vscode-border)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--color-vscode-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--color-vscode-sidebar)")
                }
              >
                <span
                  style={{ color: "#d4d4d4", fontFamily: "var(--font-mono)", fontSize: "13px" }}
                >
                  {item.id}.tsx
                </span>
                <div className="flex items-center gap-1.5">
                  <span
                    style={{
                      color: "var(--color-vscode-muted)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                    }}
                  >
                    {item.desc}
                  </span>
                  <ArrowRight
                    size={12}
                    style={{ color: "var(--color-vscode-muted)" }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Social links */}
          <div>
            <p
              style={{
                color: "var(--color-vscode-muted)",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              Connect
            </p>
            <div className="flex gap-2">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded cursor-pointer transition-all duration-150"
                  style={{
                    background: "var(--color-vscode-sidebar)",
                    border: "1px solid var(--color-vscode-border)",
                    color: "var(--color-vscode-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "var(--color-vscode-hover)"
                    el.style.color = "#d4d4d4"
                    el.style.borderColor = "#007acc"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "var(--color-vscode-sidebar)"
                    el.style.color = "var(--color-vscode-muted)"
                    el.style.borderColor = "var(--color-vscode-border)"
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

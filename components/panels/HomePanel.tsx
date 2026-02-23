"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react"
import { PROFILE } from "@/lib/portfolio-data"
import type { FileId } from "@/app/page"

// ── Syntax-highlight helpers ─────────────────────────────────────────────────
const Kw = ({ t }: { t: string }) => <span style={{ color: "#569cd6" }}>{t}</span>
const Str = ({ t }: { t: string }) => <span style={{ color: "#ce9178" }}>{t}</span>
const Fn = ({ t }: { t: string }) => <span style={{ color: "#dcdcaa" }}>{t}</span>
const Type = ({ t }: { t: string }) => <span style={{ color: "#4ec9b0" }}>{t}</span>
const Cmt = ({ t }: { t: string }) => <span style={{ color: "#6a9955" }}>{t}</span>
const Prop = ({ t }: { t: string }) => <span style={{ color: "#9cdcfe" }}>{t}</span>
const Punct = ({ t }: { t: string }) => <span style={{ color: "#d4d4d4" }}>{t}</span>
const Bool = ({ t }: { t: string }) => <span style={{ color: "#569cd6" }}>{t}</span>

function Line({
  n,
  indent = 0,
  children,
}: {
  n: number
  indent?: number
  children?: React.ReactNode
}) {
  return (
    <div className="flex">
      <span
        className="w-10 text-right pr-5 flex-shrink-0 select-none"
        style={{ color: "#3d3d3d" }}
      >
        {n}
      </span>
      <span style={{ paddingLeft: `${indent * 1.75}rem` }}>{children ?? "\u00a0"}</span>
    </div>
  )
}

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
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    const t = setInterval(() => setCursor((v) => !v), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      className="flex h-full overflow-hidden"
      style={{ background: "var(--color-vscode-editor)", fontFamily: "var(--font-mono)", fontSize: "14px", lineHeight: "1.9" }}
    >
      {/* ── Code pane ────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto pt-6 pb-8 min-w-0">
        <Line n={1}>
          <Cmt t={`// ${PROFILE.name} · portfolio`} />
        </Line>
        <Line n={2} />
        <Line n={3}>
          <Kw t="import" />{" "}
          <Punct t="{" />{" "}
          <Prop t="me" />{" "}
          <Punct t="}" />{" "}
          <Kw t=" from " />
          <Str t={`"./about"`} />
        </Line>
        <Line n={4} />
        <Line n={5}>
          <Kw t="interface " />
          <Type t="Developer" />
          <Punct t=" {" />
        </Line>
        <Line n={6} indent={1}>
          <Prop t="name" />
          <Punct t=":    " />
          <Type t="string" />
        </Line>
        <Line n={7} indent={1}>
          <Prop t="role" />
          <Punct t=":    " />
          <Type t="string" />
        </Line>
        <Line n={8} indent={1}>
          <Prop t="focus" />
          <Punct t=":   " />
          <Type t="string" />
          <Punct t="[]" />
        </Line>
        <Line n={9} indent={1}>
          <Prop t="available" />
          <Punct t=": " />
          <Type t="boolean" />
        </Line>
        <Line n={10}>
          <Punct t="}" />
        </Line>
        <Line n={11} />
        <Line n={12}>
          <Kw t="const " />
          <Prop t="developer" />
          <Punct t=": " />
          <Type t="Developer" />
          <Punct t=" = {" />
        </Line>
        <Line n={13} indent={1}>
          <Prop t="name" />
          <Punct t=":    " />
          <Str t={`"${PROFILE.name}"`} />
          <Punct t="," />
        </Line>
        <Line n={14} indent={1}>
          <Prop t="role" />
          <Punct t=":    " />
          <Str t={`"${PROFILE.role}"`} />
          <Punct t="," />
        </Line>
        <Line n={15} indent={1}>
          <Prop t="focus" />
          <Punct t=":   [" />
        </Line>
        <Line n={16} indent={2}>
          <Str t='"Web Applications"' />
          <Punct t="," />
        </Line>
        <Line n={17} indent={2}>
          <Str t='"UI/UX Design"' />
          <Punct t="," />
        </Line>
        <Line n={18} indent={2}>
          <Str t='"Developer Experience"' />
          <Punct t="," />
        </Line>
        <Line n={19} indent={1}>
          <Punct t="]," />
        </Line>
        <Line n={20} indent={1}>
          <Prop t="available" />
          <Punct t=": " />
          <Bool t={PROFILE.available ? "true" : "false"} />
        </Line>
        <Line n={21}>
          <Punct t="}" />
        </Line>
        <Line n={22} />
        <Line n={23}>
          <Kw t="export default function " />
          <Fn t="Portfolio" />
          <Punct t="() {" />
        </Line>
        <Line n={24} indent={1}>
          <Kw t="return " />
          <Punct t="(" />
        </Line>
        <Line n={25} indent={2}>
          <Cmt t="// Click a file in the sidebar to explore →" />
        </Line>
        <Line n={26} indent={2}>
          <Str t='"Welcome."' />
        </Line>
        <Line n={27} indent={1}>
          <Punct t=")" />
        </Line>
        <Line n={28}>
          <Punct t="}" />
        </Line>
        <Line n={29} />
        <Line n={30}>
          <span style={{ color: "#aeafad", opacity: cursor ? 1 : 0, transition: "opacity .1s" }}>
            ▋
          </span>
        </Line>
      </div>

      {/* ── Info pane ────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex flex-col gap-8 w-80 xl:w-96 flex-shrink-0 pt-10 pb-8 px-8 overflow-y-auto"
        style={{ borderLeft: "1px solid var(--color-vscode-border)" }}
      >
        {/* Name + role */}
        <div>
          <p style={{ color: "#6a9955", fontFamily: "var(--font-mono)", fontSize: "13px", marginBottom: "10px" }}>
            // hi there 👋
          </p>
          <h1
            style={{
              color: "#d4d4d4",
              fontFamily: "var(--font-sans)",
              fontSize: "2.4rem",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "10px",
              letterSpacing: "-0.02em",
            }}
          >
            {PROFILE.name.split(" ")[0]}
            <br />
            <span style={{ color: "#4ec9b0" }}>{PROFILE.name.split(" ")[1]}</span>
          </h1>
          <p style={{ color: "#9cdcfe", fontFamily: "var(--font-mono)", fontSize: "13px" }}>
            {PROFILE.role}
          </p>
          <p
            style={{
              color: "var(--color-vscode-muted)",
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              marginTop: "12px",
              lineHeight: 1.65,
            }}
          >
            {PROFILE.tagline}
          </p>
          {PROFILE.available && (
            <div
              className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full text-xs"
              style={{
                background: "rgba(78,201,176,0.1)",
                border: "1px solid rgba(78,201,176,0.3)",
                color: "#4ec9b0",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#4ec9b0] animate-pulse"
              />
              Available for work
            </div>
          )}
        </div>

        {/* Quick open */}
        <div className="flex flex-col gap-1.5">
          <p
            style={{
              color: "var(--color-vscode-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "6px",
            }}
          >
            Quick Open
          </p>
          {QUICK_OPEN.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex items-center justify-between gap-2 text-left rounded px-3 py-2 cursor-pointer transition-colors duration-150 group"
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
              <div className="flex items-center gap-2">
                <span
                  style={{ color: "#d4d4d4", fontFamily: "var(--font-mono)", fontSize: "13px" }}
                >
                  {item.id}.tsx
                </span>
              </div>
              <div className="flex items-center gap-1">
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
              marginBottom: "10px",
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
                className="flex items-center justify-center w-9 h-9 rounded cursor-pointer transition-all duration-150"
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
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

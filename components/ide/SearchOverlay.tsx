"use client"

import { useEffect, useRef, useState } from "react"
import Fuse from "fuse.js"
import { Search, X, FileCode, Briefcase, BookOpen, Cpu } from "lucide-react"
import { SEARCH_ITEMS, FUSE_OPTIONS, type SearchItem } from "@/lib/search-data"
import type { FileId } from "@/app/page"

const fuse = new Fuse(SEARCH_ITEMS, FUSE_OPTIONS)

const TYPE_META: Record<SearchItem["type"], { label: string; icon: React.ElementType; colorVar: string }> = {
  project:    { label: "Project",    icon: FileCode,  colorVar: "var(--color-vscode-type)" },
  experience: { label: "Experience", icon: Briefcase, colorVar: "var(--color-vscode-accent)" },
  article:    { label: "Article",    icon: BookOpen,  colorVar: "var(--color-vscode-string)" },
  skill:      { label: "Skill",      icon: Cpu,       colorVar: "var(--color-vscode-fn)" },
}

interface SearchOverlayProps {
  onClose: () => void
  onNavigate: (id: FileId) => void
}

export function SearchOverlay({ onClose, onNavigate }: SearchOverlayProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  const handleQuery = (value: string) => {
    setQuery(value)
    setSelected(0)
    setResults(value.trim() ? fuse.search(value).map((r) => r.item) : [])
  }

  const handleSelect = (item: SearchItem) => { onNavigate(item.navigateTo); onClose() }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected((v) => Math.min(v + 1, results.length - 1)) }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelected((v) => Math.max(v - 1, 0)) }
    else if (e.key === "Enter" && results[selected]) handleSelect(results[selected])
  }

  return (
    <>
      <div className="fixed inset-0 z-50" style={{ background: "rgba(0,0,0,0.5)" }} onClick={onClose} aria-hidden="true" />

      <div className="fixed left-1/2 top-16 z-50 w-full max-w-xl -translate-x-1/2" style={{ filter: "drop-shadow(0 8px 40px rgba(0,0,0,0.4))" }}>
        {/* Input */}
        <div
          className="flex items-center gap-3 px-4"
          style={{
            background: "var(--color-vscode-hover)",
            border: "1px solid var(--color-vscode-accent)",
            borderBottom: results.length ? "1px solid var(--color-vscode-border)" : undefined,
            borderRadius: results.length ? "4px 4px 0 0" : "4px",
            height: "44px",
          }}
        >
          <Search size={15} style={{ color: "var(--color-vscode-muted)", flexShrink: 0 }} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, experience, articles, skills…"
            className="flex-1 bg-transparent outline-none"
            style={{ color: "var(--color-vscode-text)", fontFamily: "var(--font-mono)", fontSize: "13px", caretColor: "var(--color-vscode-accent)" }}
            spellCheck={false}
          />
          {query && (
            <button onClick={() => handleQuery("")} style={{ color: "var(--color-vscode-muted)" }} className="cursor-pointer">
              <X size={14} />
            </button>
          )}
        </div>

        {/* Results */}
        {results.length > 0 && (
          <ul role="listbox" style={{ background: "var(--color-vscode-sidebar)", border: "1px solid var(--color-vscode-border)", borderTop: "none", borderRadius: "0 0 4px 4px", maxHeight: "360px", overflowY: "auto" }}>
            {results.map((item, i) => {
              const meta = TYPE_META[item.type]
              const Icon = meta.icon
              const isSelected = i === selected
              return (
                <li key={item.id} role="option" aria-selected={isSelected}>
                  <button
                    className="flex items-start gap-3 w-full text-left px-4 py-2.5 cursor-pointer"
                    style={{
                      background: isSelected ? "var(--color-vscode-hover)" : "transparent",
                      borderLeft: isSelected ? `2px solid ${meta.colorVar}` : "2px solid transparent",
                    }}
                    onMouseEnter={() => setSelected(i)}
                    onClick={() => handleSelect(item)}
                  >
                    <Icon size={14} style={{ color: meta.colorVar, marginTop: "2px", flexShrink: 0 }} />
                    <div className="flex-1 min-w-0">
                      <div className="truncate" style={{ color: "var(--color-vscode-text)", fontFamily: "var(--font-mono)", fontSize: "13px" }}>{item.title}</div>
                      <div className="truncate" style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-sans)", fontSize: "11px", marginTop: "1px" }}>{item.subtitle}</div>
                    </div>
                    <span
                      className="flex-shrink-0 text-xs px-1.5 py-0.5 rounded"
                      style={{ background: "color-mix(in srgb, var(--color-vscode-accent) 12%, transparent)", color: meta.colorVar, fontFamily: "var(--font-mono)", fontSize: "10px", alignSelf: "center" }}
                    >
                      {meta.label}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {query.trim() && results.length === 0 && (
          <div style={{ background: "var(--color-vscode-sidebar)", border: "1px solid var(--color-vscode-border)", borderTop: "none", borderRadius: "0 0 4px 4px", padding: "24px 16px", textAlign: "center", color: "var(--color-vscode-muted)", fontFamily: "var(--font-mono)", fontSize: "13px" }}>
            No results for &ldquo;{query}&rdquo;
          </div>
        )}
      </div>
    </>
  )
}

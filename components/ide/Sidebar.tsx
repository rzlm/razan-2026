"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { TSIcon } from "@/components/ide/TSIcon"
import type { FileId } from "@/app/page"
import { FILES } from "@/app/page"

interface SidebarProps {
  activeFile: FileId
  onFileOpen: (id: FileId) => void
  mobileOpen?: boolean
  onMobileClose?: () => void
}

export function Sidebar({ activeFile, onFileOpen, mobileOpen, onMobileClose }: SidebarProps) {
  const [expanded, setExpanded] = useState(true)

  const handleFileClick = (id: FileId) => {
    onFileOpen(id)
    onMobileClose?.()
  }

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/50"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <div
        className={[
          "flex-shrink-0 overflow-y-auto select-none z-40 transition-transform duration-200",
          "fixed md:relative inset-y-0 left-0",
          "md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
        style={{
          width: "220px",
          background: "var(--color-vscode-sidebar)",
          borderRight: "1px solid var(--color-vscode-border)",
        }}
      >
        {/* Explorer header */}
        <div
          className="px-4 py-2 uppercase text-xs font-semibold tracking-widest"
          style={{ color: "var(--color-vscode-muted)", fontFamily: "var(--font-sans)" }}
        >
          Explorer
        </div>

        {/* Folder tree */}
        <div>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 w-full px-2 py-0.5 cursor-pointer transition-colors duration-100"
            style={{ color: "var(--color-vscode-text)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--color-vscode-hover)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "transparent")
            }
          >
            {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <span
              className="uppercase text-xs font-bold tracking-wide"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              RAZAN-PORTFOLIO
            </span>
          </button>

          {expanded && (
            <ul role="list" className="ml-3">
              {FILES.map((file) => {
                const isActive = activeFile === file.id
                return (
                  <li key={file.id}>
                    <button
                      onClick={() => handleFileClick(file.id)}
                      className="flex items-center gap-2 w-full px-3 py-0.5 cursor-pointer transition-colors duration-100 text-left"
                      style={{
                        background: isActive ? "var(--color-vscode-active)" : "transparent",
                        color: isActive ? "#e4deff" : "#c8b8f8",
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        borderLeft: isActive
                          ? "1px solid var(--color-vscode-accent)"
                          : "1px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive)
                          (e.currentTarget as HTMLElement).style.background =
                            "var(--color-vscode-hover)"
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive)
                          (e.currentTarget as HTMLElement).style.background = "transparent"
                      }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <TSIcon size={14} />
                      <span>{file.filename}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

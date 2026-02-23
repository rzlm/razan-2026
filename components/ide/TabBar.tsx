"use client"

import { X } from "lucide-react"
import { TSIcon } from "@/components/ide/TSIcon"
import type { FileId } from "@/app/page"
import { FILES } from "@/app/page"

interface TabBarProps {
  openFiles: FileId[]
  activeFile: FileId
  onTabClick: (id: FileId) => void
  onTabClose: (id: FileId) => void
}

export function TabBar({ openFiles, activeFile, onTabClick, onTabClose }: TabBarProps) {
  return (
    <div
      className="flex items-end overflow-x-auto flex-shrink-0 scrollbar-none"
      style={{
        background: "var(--color-vscode-tabbar)",
        borderBottom: "1px solid var(--color-vscode-border)",
        minHeight: "35px",
      }}
    >
      {openFiles.map((fileId) => {
        const file = FILES.find((f) => f.id === fileId)!
        const isActive = fileId === activeFile

        return (
          <div
            key={fileId}
            role="tab"
            aria-selected={isActive}
            className="flex items-center gap-1.5 px-3 h-[35px] cursor-pointer group flex-shrink-0 border-r transition-colors duration-100"
            style={{
              background: isActive ? "var(--color-vscode-tab-active)" : "var(--color-vscode-tabbar)",
              borderColor: "var(--color-vscode-border)",
              borderTop: isActive
                ? "1px solid var(--color-vscode-accent)"
                : "1px solid transparent",
              color: isActive ? "#d4d4d4" : "var(--color-vscode-muted)",
            }}
            onClick={() => onTabClick(fileId)}
            onMouseEnter={(e) => {
              if (!isActive)
                (e.currentTarget as HTMLElement).style.background = "var(--color-vscode-hover)"
            }}
            onMouseLeave={(e) => {
              if (!isActive)
                (e.currentTarget as HTMLElement).style.background = "var(--color-vscode-tabbar)"
            }}
          >
            <TSIcon size={13} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", whiteSpace: "nowrap" }}>
              {file.filename}
            </span>
            <button
              className="opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-100 rounded ml-0.5 p-0.5 hover:bg-white/10"
              style={{ color: "var(--color-vscode-muted)" }}
              onClick={(e) => {
                e.stopPropagation()
                onTabClose(fileId)
              }}
              aria-label={`Close ${file.filename}`}
            >
              <X size={12} />
            </button>
          </div>
        )
      })}
    </div>
  )
}

"use client"

import { Menu } from "lucide-react"

interface TitleBarProps {
  onMenuClick?: () => void
}

export function TitleBar({ onMenuClick }: TitleBarProps) {
  return (
    <div
      className="flex items-center h-9 px-4 flex-shrink-0 select-none"
      style={{
        background: "var(--color-vscode-titlebar)",
        borderBottom: "1px solid var(--color-vscode-border)",
      }}
    >
      {/* macOS traffic lights */}
      <div className="flex items-center gap-2 mr-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden mr-3 cursor-pointer transition-colors duration-150 rounded p-1"
        style={{ color: "var(--color-vscode-muted)" }}
        onClick={onMenuClick}
        aria-label="Toggle sidebar"
      >
        <Menu size={16} />
      </button>

      {/* Title */}
      <div
        className="flex-1 text-center text-xs pointer-events-none"
        style={{
          color: "var(--color-vscode-muted)",
          fontFamily: "var(--font-mono)",
        }}
      >
        razan-portfolio — Visual Studio Code
      </div>

      {/* Spacer to balance traffic lights */}
      <div className="w-16 hidden md:block" />
    </div>
  )
}

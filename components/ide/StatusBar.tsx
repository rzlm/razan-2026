import { GitBranch, CheckCircle, Wifi } from "lucide-react"
import type { FileId } from "@/app/page"
import { FILES } from "@/app/page"
import { PROFILE } from "@/lib/portfolio-data"

interface StatusBarProps {
  activeFile: FileId
}

export function StatusBar({ activeFile }: StatusBarProps) {
  const file = FILES.find((f) => f.id === activeFile)

  return (
    <div
      className="flex items-center justify-between px-2 h-[22px] text-[11px] flex-shrink-0 select-none"
      style={{
        background: "var(--color-vscode-statusbar)",
        color: "white",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch size={11} />
          main
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle size={11} />0 errors, 0 warnings
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {PROFILE.available && (
          <span className="flex items-center gap-1 opacity-90">
            <Wifi size={11} />
            Available for work
          </span>
        )}
        <span>
          {file?.filename ?? "home.tsx"} · TypeScript React
        </span>
        <span>UTF-8</span>
        <span>Ln 1, Col 1</span>
      </div>
    </div>
  )
}

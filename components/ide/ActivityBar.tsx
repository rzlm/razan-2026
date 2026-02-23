import { Files, Search, GitBranch, Package, Settings } from "lucide-react"

const ITEMS = [
  { icon: Files, label: "Explorer", active: true },
  { icon: Search, label: "Search" },
  { icon: GitBranch, label: "Source Control" },
  { icon: Package, label: "Extensions" },
]

const BOTTOM_ITEMS = [{ icon: Settings, label: "Settings" }]

export function ActivityBar() {
  return (
    <div
      className="hidden md:flex flex-col items-center w-12 flex-shrink-0"
      style={{
        background: "var(--color-vscode-activitybar)",
        borderRight: "1px solid var(--color-vscode-border)",
      }}
    >
      <div className="flex flex-col items-center flex-1 pt-1">
        {ITEMS.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            aria-label={label}
            title={label}
            className="flex items-center justify-center w-12 h-12 cursor-pointer transition-colors duration-150 relative"
            style={{
              color: active ? "#d4d4d4" : "var(--color-vscode-muted)",
              borderLeft: active ? "2px solid #d4d4d4" : "2px solid transparent",
            }}
          >
            <Icon size={22} strokeWidth={active ? 1.75 : 1.5} />
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center pb-2">
        {BOTTOM_ITEMS.map(({ icon: Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            title={label}
            className="flex items-center justify-center w-12 h-12 cursor-pointer transition-colors duration-150"
            style={{ color: "var(--color-vscode-muted)" }}
          >
            <Icon size={22} strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </div>
  )
}

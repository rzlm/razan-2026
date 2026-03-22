import { Files, Search, GitBranch, Package, Settings } from "lucide-react"

interface ActivityBarProps {
  onSearchOpen: () => void
}

export function ActivityBar({ onSearchOpen }: ActivityBarProps) {
  const ITEMS = [
    { icon: Files, label: "Explorer", active: true, onClick: undefined },
    { icon: Search, label: "Search", active: false, onClick: onSearchOpen },
    { icon: GitBranch, label: "Source Control", active: false, onClick: undefined },
    { icon: Package, label: "Extensions", active: false, onClick: undefined },
  ]

  return (
    <div
      className="hidden md:flex flex-col items-center w-12 flex-shrink-0"
      style={{
        background: "var(--color-vscode-activitybar)",
        borderRight: "1px solid var(--color-vscode-border)",
      }}
    >
      <div className="flex flex-col items-center flex-1 pt-1">
        {ITEMS.map(({ icon: Icon, label, active, onClick }) => (
          <button
            key={label}
            aria-label={label}
            title={label}
            onClick={onClick}
            className="flex items-center justify-center w-12 h-12 cursor-pointer transition-colors duration-150 relative"
            style={{
              color: active ? "#e4deff" : "var(--color-vscode-muted)",
              borderLeft: active ? "2px solid #e4deff" : "2px solid transparent",
            }}
          >
            <Icon size={22} strokeWidth={active ? 1.75 : 1.5} />
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center pb-2">
        <button
          aria-label="Settings"
          title="Settings"
          className="flex items-center justify-center w-12 h-12 cursor-pointer transition-colors duration-150"
          style={{ color: "var(--color-vscode-muted)" }}
        >
          <Settings size={22} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}

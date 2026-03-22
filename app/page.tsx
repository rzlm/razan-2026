"use client"

import { useState } from "react"
import { TitleBar } from "@/components/ide/TitleBar"
import { ActivityBar } from "@/components/ide/ActivityBar"
import { Sidebar } from "@/components/ide/Sidebar"
import { TabBar } from "@/components/ide/TabBar"
import { StatusBar } from "@/components/ide/StatusBar"
import { SearchOverlay } from "@/components/ide/SearchOverlay"
import { HomePanel } from "@/components/panels/HomePanel"
import { ProjectsPanel } from "@/components/panels/ProjectsPanel"
import { ExperiencePanel } from "@/components/panels/ExperiencePanel"
import { AboutPanel } from "@/components/panels/AboutPanel"
import { ArticlesPanel } from "@/components/panels/ArticlesPanel"
import { GithubPanel } from "@/components/panels/GithubPanel"

export type FileId = "home" | "projects" | "experience" | "about" | "articles" | "github"

export const FILES: { id: FileId; filename: string }[] = [
  { id: "home", filename: "home.tsx" },
  { id: "projects", filename: "projects.tsx" },
  { id: "experience", filename: "experience.tsx" },
  { id: "about", filename: "about.tsx" },
  { id: "articles", filename: "articles.tsx" },
  { id: "github", filename: "github.tsx" },
]

export default function Page() {
  const [activeFile, setActiveFile] = useState<FileId>("home")
  const [openFiles, setOpenFiles] = useState<FileId[]>(["home"])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const handleFileOpen = (id: FileId) => {
    if (!openFiles.includes(id)) {
      setOpenFiles((prev) => [...prev, id])
    }
    setActiveFile(id)
    setSidebarOpen(false)
  }

  const handleTabClose = (id: FileId) => {
    const newOpen = openFiles.filter((f) => f !== id)
    setOpenFiles(newOpen)
    if (activeFile === id) {
      setActiveFile(newOpen[newOpen.length - 1] ?? "home")
    }
  }

  function renderPanel() {
    switch (activeFile) {
      case "home":
        return <HomePanel onNavigate={handleFileOpen} />
      case "projects":
        return <ProjectsPanel />
      case "experience":
        return <ExperiencePanel />
      case "about":
        return <AboutPanel />
      case "articles":
        return <ArticlesPanel />
      case "github":
        return <GithubPanel />
    }
  }

  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ background: "var(--color-vscode-editor)", color: "#d4d4d4" }}
    >
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onNavigate={handleFileOpen}
        />
      )}

      <TitleBar onMenuClick={() => setSidebarOpen((v) => !v)} />

      <div className="flex flex-1 overflow-hidden">
        <ActivityBar onSearchOpen={() => setSearchOpen(true)} />

        <Sidebar
          activeFile={activeFile}
          onFileOpen={handleFileOpen}
          mobileOpen={sidebarOpen}
          onMobileClose={() => setSidebarOpen(false)}
        />

        {/* Editor column */}
        <div className="flex flex-col flex-1 overflow-hidden min-w-0">
          <TabBar
            openFiles={openFiles}
            activeFile={activeFile}
            onTabClick={setActiveFile}
            onTabClose={handleTabClose}
          />

          {/* Editor content */}
          <main className="flex-1 overflow-hidden">
            {renderPanel()}
          </main>
        </div>
      </div>

      <StatusBar activeFile={activeFile} />
    </div>
  )
}

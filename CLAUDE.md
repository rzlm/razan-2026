# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

To add shadcn components:
```bash
npx shadcn add <component-name>
```

## Architecture

**Stack**: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn (`radix-lyra` style) · Radix UI / Base UI · lucide-react

**Key directories**:
- `app/` — Next.js App Router routes and root layout (`page.tsx` is the entire IDE shell)
- `components/ide/` — VSCode chrome: `TitleBar`, `ActivityBar`, `Sidebar`, `TabBar`, `StatusBar`, `TSIcon`
- `components/panels/` — Content panels: `HomePanel`, `ProjectsPanel`, `ExperiencePanel`, `AboutPanel`, `ArticlesPanel`, `GithubPanel`
- `components/ui/` — shadcn UI primitives
- `lib/portfolio-data.ts` — **All portfolio content lives here** (profile, projects, experience, articles, skills, GitHub stats)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

**IDE layout** (`app/page.tsx`):
- Manages `activeFile` and `openFiles` state (which tabs are open)
- `FileId` type and `FILES` array are exported from `page.tsx` and imported by IDE components
- The sidebar and tab bar read from `FILES`; clicking opens a tab and renders the matching panel
- Mobile: sidebar is hidden behind a toggle button in the title bar

**Styling**:
- Tailwind v4 is configured entirely in CSS (`app/globals.css`) — there is no `tailwind.config.js`
- VSCode Dark+ color tokens live in `@theme inline` in `globals.css` — use them as `var(--color-vscode-*)` in style props (e.g. `--color-vscode-editor: #1e1e1e`, `--color-vscode-sidebar`, `--color-vscode-accent`, etc.)
- Syntax-highlight colors: `--color-vscode-keyword` (#569cd6), `--color-vscode-string` (#ce9178), `--color-vscode-type` (#4ec9b0), `--color-vscode-fn` (#dcdcaa), `--color-vscode-comment` (#6a9955), `--color-vscode-variable` (#9cdcfe)
- Fonts: `var(--font-mono)` = JetBrains Mono (filenames, code, status bar), `var(--font-sans)` = IBM Plex Sans (body copy, headings)
- Dark mode uses the `.dark` class variant

**Path aliases** (defined in `tsconfig.json` and `components.json`):
- `@/components` → `components/`
- `@/components/ui` → `components/ui/`
- `@/lib` → `lib/`
- `@/hooks` → `hooks/`

**shadcn configuration** (`components.json`): style is `radix-lyra`, icon library is `lucide`, RTL is disabled, CSS variables are enabled.

The `cn()` utility from `@/lib/utils` should be used for all conditional/merged class names.

**To add a new section**: add a `FileId` to `FILES` in `page.tsx`, create a panel in `components/panels/`, and add a `case` to `renderPanel()`.

**To update portfolio content**: edit `lib/portfolio-data.ts` only — no component changes needed.

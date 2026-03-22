import { NextResponse } from "next/server"
import { PROFILE } from "@/lib/portfolio-data"

const username = PROFILE.github.replace("https://github.com/", "")

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=4`, {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      }),
    ])

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ error: "GitHub API error" }, { status: 502 })
    }

    const user = await userRes.json()
    const repos = await reposRes.json()

    const totalStars = repos.reduce(
      (sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count,
      0
    )

    return NextResponse.json({
      username,
      repos: user.public_repos,
      followers: user.followers,
      stars: totalStars,
      topRepos: repos.map((r: {
        name: string
        description: string | null
        stargazers_count: number
        forks_count: number
        language: string | null
      }) => ({
        name: r.name,
        description: r.description ?? "",
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language ?? "Unknown",
      })),
    })
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}

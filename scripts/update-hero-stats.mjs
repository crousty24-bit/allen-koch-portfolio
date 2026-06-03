import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const statsFilePath = resolve(rootDir, 'src/data/hero/githubStats.ts')

const githubLogin = process.env.GITHUB_LOGIN || 'crousty24-bit'
const githubToken = process.env.GH_PROFILE_TOKEN
const currentYear = new Date().getUTCFullYear()
const from = `${currentYear}-01-01T00:00:00Z`
const to = new Date().toISOString()

if (!githubToken) {
  console.error('Missing GH_PROFILE_TOKEN. Set it before running stats:update.')
  process.exit(1)
}

const query = `
  query UserCommitContributions($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
      }
    }
  }
`

const response = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${githubToken}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: {
      login: githubLogin,
      from,
      to,
    },
  }),
})

if (!response.ok) {
  throw new Error(
    `GitHub GraphQL request failed: ${response.status} ${response.statusText}`,
  )
}

const payload = await response.json()

if (payload.errors?.length) {
  throw new Error(
    `GitHub GraphQL returned errors: ${JSON.stringify(payload.errors)}`,
  )
}

const commitContributions =
  payload.data?.user?.contributionsCollection?.totalCommitContributions

if (!Number.isInteger(commitContributions) || commitContributions < 0) {
  throw new Error(
    `Invalid totalCommitContributions value: ${commitContributions}`,
  )
}

const nextContent = `export const githubStats = {
  commitContributions: ${commitContributions},
  contributionYear: ${currentYear},
} as const
`

let currentContent = ''

try {
  currentContent = await readFile(statsFilePath, 'utf8')
} catch (error) {
  if (error instanceof Error && 'code' in error && error.code !== 'ENOENT') {
    throw error
  }
}

if (currentContent === nextContent) {
  console.log(
    `Hero GitHub stats already up to date: ${commitContributions} commit contributions for ${currentYear}.`,
  )
  process.exit(0)
}

await mkdir(dirname(statsFilePath), { recursive: true })
await writeFile(statsFilePath, nextContent)

console.log(
  `Updated hero GitHub stats: ${commitContributions} commit contributions for ${currentYear}.`,
)

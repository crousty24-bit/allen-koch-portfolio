import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const statsFilePath = resolve(rootDir, 'src/data/hero/githubStats.ts')

const githubLogin = process.env.GITHUB_LOGIN || 'crousty24-bit'
const githubToken = process.env.GH_PROFILE_TOKEN

if (!githubToken) {
  console.error('Missing GH_PROFILE_TOKEN. Set it before running stats:update.')
  process.exit(1)
}

const query = `
  query UserContributions($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
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

const totalContributions =
  payload.data?.user?.contributionsCollection?.contributionCalendar
    ?.totalContributions

if (!Number.isInteger(totalContributions) || totalContributions < 0) {
  throw new Error(`Invalid totalContributions value: ${totalContributions}`)
}

const nextContent = `export const githubStats = {
  totalContributions: ${totalContributions},
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
    `Hero GitHub stats already up to date: ${totalContributions} contributions in the last year.`,
  )
  process.exit(0)
}

await mkdir(dirname(statsFilePath), { recursive: true })
await writeFile(statsFilePath, nextContent)

console.log(
  `Updated hero GitHub stats: ${totalContributions} contributions in the last year.`,
)

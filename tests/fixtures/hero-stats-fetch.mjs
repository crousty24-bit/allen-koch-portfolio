import assert from 'node:assert/strict'

const mode = process.env.HERO_STATS_FETCH_MODE

globalThis.fetch = async (url, options) => {
  if (url !== 'https://api.github.com/graphql') {
    throw new Error(`Unexpected fetch URL: ${url}`)
  }

  const { query, variables } = JSON.parse(options.body)
  assert.deepEqual(variables, { login: 'test-user' })
  assert.match(
    query,
    /contributionsCollection\s*\{\s*contributionCalendar\s*\{\s*totalContributions/,
  )

  if (mode === 'http-error') {
    return new Response('unavailable', {
      status: 503,
      statusText: 'Unavailable',
    })
  }

  const payload = {
    success: {
      data: {
        user: {
          contributionsCollection: {
            totalCommitContributions: 7,
            contributionCalendar: { totalContributions: 42 },
          },
        },
      },
    },
    'graphql-error': { errors: [{ message: 'denied' }] },
    'invalid-count': {
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: { totalContributions: '42' },
          },
        },
      },
    },
    'missing-user': { data: { user: null } },
  }[mode]

  return Response.json(payload)
}

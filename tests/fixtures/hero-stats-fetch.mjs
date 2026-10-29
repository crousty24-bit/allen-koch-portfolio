const mode = process.env.HERO_STATS_FETCH_MODE

globalThis.fetch = async (url) => {
  if (url !== 'https://api.github.com/graphql') {
    throw new Error(`Unexpected fetch URL: ${url}`)
  }

  if (mode === 'http-error') {
    return new Response('unavailable', {
      status: 503,
      statusText: 'Unavailable',
    })
  }

  const payload = {
    success: {
      data: {
        user: { contributionsCollection: { totalCommitContributions: 42 } },
      },
    },
    'graphql-error': { errors: [{ message: 'denied' }] },
    'invalid-count': {
      data: {
        user: { contributionsCollection: { totalCommitContributions: '42' } },
      },
    },
    'missing-user': { data: { user: null } },
  }[mode]

  return Response.json(payload)
}

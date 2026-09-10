import { describe, expect, it, vi } from 'vitest'

import {
  readStoredPreference,
  writeStoredPreference,
} from '../src/utils/storage'

const isTheme = (value: string): value is 'dark' | 'light' =>
  value === 'dark' || value === 'light'

describe('preference storage', () => {
  it('reads a valid stored preference', () => {
    const storage = { getItem: vi.fn(() => 'light') }

    expect(readStoredPreference(() => storage, 'theme', isTheme, 'dark')).toBe(
      'light',
    )
  })

  it('uses the fallback for an invalid stored preference', () => {
    const storage = { getItem: vi.fn(() => 'invalid') }

    expect(readStoredPreference(() => storage, 'theme', isTheme, 'dark')).toBe(
      'dark',
    )
  })

  it('uses the fallback when storage access is blocked', () => {
    expect(
      readStoredPreference(
        () => {
          throw new Error('Storage blocked')
        },
        'theme',
        isTheme,
        'dark',
      ),
    ).toBe('dark')
  })

  it('ignores blocked storage writes', () => {
    expect(() =>
      writeStoredPreference(
        () => ({
          setItem: () => {
            throw new Error('Storage blocked')
          },
        }),
        'theme',
        'light',
      ),
    ).not.toThrow()
  })
})

import { describe, expect, it } from 'vitest'

import { getSectionCover, getSectionPins } from '../src/utils/sectionStack'

const viewportHeight = 900
const coverLine = 80

describe('section stack geometry', () => {
  it('pins a tall section only once its bottom reaches the viewport bottom', () => {
    const [, tall] = getSectionPins([900, 2000, 600], viewportHeight, coverLine)

    expect(tall.top).toBe(viewportHeight - 2000)
    // Bottom (900 + 2000) meets the viewport bottom at this scroll offset.
    expect(tall.scroll).toBe(900 + 2000 - viewportHeight)
    expect(getSectionCover(tall, tall.scroll - 1)).toBe(0)
    expect(getSectionCover(tall, tall.scroll)).toBe(0)
  })

  it('is fully covered when the next section reaches the cover line', () => {
    const [, tall] = getSectionPins([900, 2000, 600], viewportHeight, coverLine)
    const nextSectionStart = 900 + 2000

    expect(getSectionCover(tall, nextSectionStart - coverLine)).toBe(1)
    expect(getSectionCover(tall, nextSectionStart)).toBe(1)
    expect(
      getSectionCover(tall, nextSectionStart - coverLine - tall.distance / 2),
    ).toBeCloseTo(0.5)
  })

  it('pins a short section at the cover line and covers it over its height', () => {
    const [, short] = getSectionPins([900, 500, 600], viewportHeight, coverLine)

    expect(short.top).toBe(coverLine)
    expect(short.scroll).toBe(900 - coverLine)
    expect(short.distance).toBe(500)
  })

  it('lets a tall section scroll a reading margin further before it pins', () => {
    const margin = 225
    const [first, tall] = getSectionPins(
      [900, 2000, 600],
      viewportHeight,
      coverLine,
      margin,
    )
    const [, short] = getSectionPins(
      [900, 500, 600],
      viewportHeight,
      coverLine,
      margin,
    )

    expect(first.top).toBe(0)
    // Bottom meets the margin line instead of the viewport bottom.
    expect(tall.scroll).toBe(900 + 2000 - (viewportHeight - margin))
    expect(tall.distance).toBe(viewportHeight - margin - coverLine)
    expect(getSectionCover(tall, tall.scroll)).toBe(0)
    expect(short.top).toBe(coverLine)
  })

  it('pins the first section at the page top and skips the last one', () => {
    const pins = getSectionPins([700, 2000, 600], viewportHeight, coverLine)

    expect(pins).toHaveLength(2)
    expect(pins[0]).toEqual({ top: 0, scroll: 0, distance: 700 - coverLine })
    expect(getSectionPins([600], viewportHeight, coverLine)).toEqual([])
  })
})

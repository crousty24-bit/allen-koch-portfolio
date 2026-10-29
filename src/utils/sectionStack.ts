export type SectionPin = {
  /** Sticky `top` offset, in px from the viewport top. */
  top: number
  /** Scroll offset, relative to the first section, at which the section pins. */
  scroll: number
  /** Scroll distance for the next section to cover it up to the cover line. */
  distance: number
}

/**
 * Tall sections pin once their bottom rises `readingMargin` above the viewport
 * bottom, so every part is read at full opacity, the last ones clear of the
 * edge; short ones pin at the cover line. The first section pins at 0 with no
 * margin. The last section has no pin: nothing comes after it to cover it.
 */
export function getSectionPins(
  heights: number[],
  viewportHeight: number,
  coverLine: number,
  readingMargin = 0,
): SectionPin[] {
  let start = 0

  return heights.slice(0, -1).map((height, index) => {
    const top =
      index === 0
        ? Math.min(0, viewportHeight - height)
        : Math.min(coverLine, viewportHeight - readingMargin - height)
    const pin = {
      top,
      scroll: start - top,
      distance: Math.max(top + height - coverLine, 1),
    }
    start += height
    return pin
  })
}

/** 0 while the section reads normally, 1 once the next one fully covers it. */
export function getSectionCover(pin: SectionPin, scrollOffset: number): number {
  return Math.min(Math.max((scrollOffset - pin.scroll) / pin.distance, 0), 1)
}

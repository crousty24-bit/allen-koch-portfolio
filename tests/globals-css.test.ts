import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const globalsCss = readFileSync(
  resolve(process.cwd(), 'src/styles/globals/globals.css'),
  'utf8',
)

const reducedMotionBlock = globalsCss.match(
  /@media \(prefers-reduced-motion: reduce\) \{[\s\S]*\n\}/,
)?.[0]

describe('global reduced-motion CSS', () => {
  it('overrides smooth scrolling and branch-specific animations', () => {
    expect(reducedMotionBlock).toContain('html:root')
    expect(reducedMotionBlock).toContain('scroll-behavior: auto')
    expect(reducedMotionBlock).toContain('.reveal')
    expect(reducedMotionBlock).toContain('.skills-tree__content:not([hidden])')
    expect(reducedMotionBlock).toContain(
      '.about-accordion__panel:not([hidden])',
    )
    expect(reducedMotionBlock).toContain('animation: none')
  })

  it('keeps scroll-fade sections visible when motion is reduced', () => {
    expect(reducedMotionBlock).toContain('.section--scroll-fade')
    expect(reducedMotionBlock).toContain('opacity: 1')
    expect(reducedMotionBlock).toContain('transform: none')
    expect(reducedMotionBlock).toContain('transition: none')
  })
})

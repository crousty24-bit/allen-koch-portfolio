import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const globalsCssDir = resolve(process.cwd(), 'src/styles/globals')
const responsiveCss = readFileSync(
  resolve(globalsCssDir, 'responsive.css'),
  'utf8',
)
const reducedMotionCss = readFileSync(
  resolve(globalsCssDir, 'reduced-motion.css'),
  'utf8',
)

describe('global reduced-motion CSS', () => {
  it('overrides smooth scrolling and branch-specific animations', () => {
    expect(reducedMotionCss).toContain('html:root')
    expect(reducedMotionCss).toContain('scroll-behavior: auto')
    expect(reducedMotionCss).toContain('.reveal')
    expect(reducedMotionCss).toContain('.skills-tree__content:not([hidden])')
    expect(reducedMotionCss).toContain('.about-accordion__panel:not([hidden])')
    expect(reducedMotionCss).toContain('animation: none')
  })

  it('keeps scroll-fade sections visible when motion is reduced', () => {
    expect(reducedMotionCss).toContain('.section--scroll-fade')
    expect(reducedMotionCss).toContain('opacity: 1')
    expect(reducedMotionCss).toContain('transform: none')
    expect(reducedMotionCss).toContain('transition: none')
  })
})

describe('global CSS organization', () => {
  it('centralizes responsive conditions in responsive.css', () => {
    const cssFiles = readdirSync(globalsCssDir).filter(
      (fileName) =>
        fileName.endsWith('.css') &&
        fileName !== 'responsive.css' &&
        fileName !== 'globals.css',
    )

    for (const cssFile of cssFiles) {
      const css = readFileSync(resolve(globalsCssDir, cssFile), 'utf8')

      expect(css, `${cssFile} should not contain media queries`).not.toContain(
        '@media',
      )
    }

    expect(responsiveCss).toContain(
      '@import "./responsive-1040.css" (max-width: 1040px)',
    )
    expect(responsiveCss).toContain(
      '@import "./responsive-760.css" (max-width: 760px)',
    )
    expect(responsiveCss).toContain(
      '@import "./responsive-430.css" (max-width: 430px)',
    )
    expect(responsiveCss).toContain(
      '@import "./reduced-motion.css" (prefers-reduced-motion: reduce)',
    )
  })
})

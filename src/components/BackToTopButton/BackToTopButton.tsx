import { useEffect, useState } from 'react'
import { copy, type Language } from '../../data/i18n/i18n'

type BackToTopButtonProps = {
  language: Language
}

export function BackToTopButton({ language }: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      aria-hidden={!isVisible}
      aria-label={copy[language].topButtonLabel}
      className={`back-to-top${isVisible ? ' back-to-top--visible' : ''}`}
      onClick={(event) => {
        event.currentTarget.blur()
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)')
          .matches
          ? 'auto'
          : 'smooth'

        window.scrollTo({ top: 0, behavior })
      }}
      tabIndex={isVisible ? 0 : -1}
      type="button"
    >
      <svg
        aria-hidden="true"
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
      >
        <path
          d="M10 15V5M10 5L5.5 9.5M10 5L14.5 9.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    </button>
  )
}

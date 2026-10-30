import HCaptcha from '@hcaptcha/react-hcaptcha'
import { type FormEvent, useRef, useState } from 'react'
import { copy, type Language, type Theme } from '../../data/i18n/i18n'
import { links } from '../../data/links/links'

type ContactSectionProps = {
  language: Language
  theme?: Theme
}

export function ContactSection({
  language,
  theme = 'light',
}: ContactSectionProps) {
  const email = links.find((link) => link.kind === 'email')
  const contactCopy = copy[language].contact
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim()
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error' | 'captcha'
  >('idle')
  const sending = useRef(false)
  const captcha = useRef<HCaptcha>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current || !accessKey) return
    const token = captcha.current?.isReady()
      ? captcha.current.getResponse()
      : ''
    if (!token) {
      setStatus('captcha')
      return
    }
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', accessKey)
    formData.set('h-captcha-response', token)
    sending.current = true
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
        signal: AbortSignal.timeout(15000),
      })
      const data: unknown = await response.json()
      if (
        !response.ok ||
        typeof data !== 'object' ||
        data === null ||
        !('success' in data) ||
        data.success !== true
      ) {
        throw new Error('Web3Forms rejected the submission')
      }
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      sending.current = false
      captcha.current?.resetCaptcha()
    }
  }

  return (
    <section className="section contact-section" id="contact" tabIndex={-1}>
      <div className="contact-panel reveal">
        <h2 className="section-title">{contactCopy.heading}</h2>
        <h3 className="contact-panel__title">{contactCopy.subheading}</h3>
        <div className="contact-panel__aside">
          <p>{contactCopy.text}</p>
          {email ? (
            <p className="contact-panel__alternative">
              {accessKey ? contactCopy.emailAlternative : null}
              <a className="contact-panel__email" href={email.href}>
                {email.href.replace('mailto:', '')}
              </a>
            </p>
          ) : null}
        </div>
        {accessKey ? (
          <form className="contact-panel__form" onSubmit={onSubmit}>
            <label htmlFor="contact-name">{contactCopy.name}</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={100}
              disabled={status === 'sending'}
            />
            <label htmlFor="contact-email">{contactCopy.email}</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              disabled={status === 'sending'}
              required
            />
            <label htmlFor="contact-message">{contactCopy.message}</label>
            <textarea
              id="contact-message"
              name="message"
              maxLength={5000}
              rows={6}
              disabled={status === 'sending'}
              required
            />
            <p className="contact-panel__privacy">
              {contactCopy.privacy}{' '}
              <a href="https://web3forms.com/privacy">
                {contactCopy.privacyLink}
              </a>
              {' · '}
              <a href="https://www.hcaptcha.com/privacy">
                {contactCopy.captchaPrivacyLink}
              </a>
            </p>
            <HCaptcha
              key={`${language}-${theme}`}
              ref={captcha}
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              size="compact"
              theme={theme}
              languageOverride={language}
              reCaptchaCompat={false}
              onVerify={() =>
                setStatus((current) =>
                  current === 'captcha' ? 'idle' : current,
                )
              }
              onError={() => setStatus('error')}
            />
            <button
              className="button button--primary"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? contactCopy.sending : contactCopy.submit}
            </button>
            <p
              className="contact-panel__status"
              role={status === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {status === 'sending'
                ? contactCopy.sending
                : status === 'success'
                  ? contactCopy.success
                  : status === 'error'
                    ? contactCopy.error
                    : status === 'captcha'
                      ? contactCopy.captcha
                      : ''}
            </p>
          </form>
        ) : null}
      </div>
    </section>
  )
}

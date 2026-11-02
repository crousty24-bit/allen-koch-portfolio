import HCaptcha from '@hcaptcha/react-hcaptcha'
import { type FormEvent, useEffect, useRef, useState } from 'react'
import { copy, type Language, type Theme } from '../../data/i18n/i18n'
import { legalPaths } from '../../data/legal/legal'
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
  const [captchaAllowed, setCaptchaAllowed] = useState(false)
  const [captchaFailed, setCaptchaFailed] = useState(false)
  const [captchaAttempt, setCaptchaAttempt] = useState(0)
  const sending = useRef(false)
  const captcha = useRef<HCaptcha>(null)

  const confirmation = useRef<HTMLHeadingElement>(null)
  const nameInput = useRef<HTMLInputElement>(null)
  const restarting = useRef(false)

  useEffect(() => {
    if (status === 'success') confirmation.current?.focus()
    if (status === 'idle' && restarting.current) {
      nameInput.current?.focus()
      restarting.current = false
    }
  }, [status])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current || !accessKey) return
    if (!captchaAllowed) {
      setStatus('captcha')
      return
    }
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
          <form
            className="contact-panel__form"
            onSubmit={onSubmit}
            aria-busy={status === 'sending'}
          >
            {status === 'success' ? (
              <div className="contact-panel__confirmation">
                <span className="contact-panel__check" aria-hidden="true">
                  ✓
                </span>
                <h4 ref={confirmation} tabIndex={-1}>
                  {contactCopy.success}
                </h4>
                <p>{contactCopy.successDetail}</p>
                <a className="button button--primary" href="#projects">
                  {contactCopy.viewProjects}
                </a>
                <button
                  className="button button--secondary"
                  type="button"
                  onClick={() => {
                    restarting.current = true
                    setStatus('idle')
                  }}
                >
                  {contactCopy.sendAnother}
                </button>
                <button
                  className="button button--secondary"
                  type="button"
                  onClick={() => window.location.reload()}
                >
                  {contactCopy.captchaWithdraw}
                </button>
              </div>
            ) : (
              <>
                <label htmlFor="contact-name">{contactCopy.name}</label>
                <input
                  ref={nameInput}
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
                <p className="contact-panel__privacy" id="captcha-choice">
                  {contactCopy.privacy}{' '}
                  {/* A new tab keeps the typed message and the page-scoped captcha consent. */}
                  <a
                    href={legalPaths.privacy}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {contactCopy.privacyLink}
                  </a>
                  {' · '}
                  <a href="https://www.hcaptcha.com/privacy">
                    {contactCopy.captchaPrivacyLink}
                  </a>
                </p>
                <button
                  className="button button--secondary contact-panel__captcha-choice"
                  type="button"
                  aria-describedby="captcha-choice"
                  disabled={status === 'sending'}
                  onClick={() => {
                    if (captchaAllowed) window.location.reload()
                    else setCaptchaAllowed(true)
                  }}
                >
                  {captchaAllowed
                    ? contactCopy.captchaWithdraw
                    : contactCopy.captchaLoad}
                </button>
                {status === 'captcha' ? (
                  <p
                    className="contact-panel__status contact-panel__status--notice"
                    role="alert"
                  >
                    {contactCopy.captcha}
                  </p>
                ) : null}
                {captchaAllowed ? (
                  <HCaptcha
                    key={`${language}-${theme}-${captchaAttempt}`}
                    ref={captcha}
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    size="compact"
                    theme={theme}
                    languageOverride={language}
                    reCaptchaCompat={false}
                    onLoad={() => setCaptchaFailed(false)}
                    onVerify={() => {
                      setCaptchaFailed(false)
                      setStatus((current) =>
                        current === 'captcha' ? 'idle' : current,
                      )
                    }}
                    onError={() => setCaptchaFailed(true)}
                  />
                ) : null}
                {captchaFailed ? (
                  <div className="contact-panel__captcha-error">
                    <p
                      className="contact-panel__status contact-panel__status--notice"
                      role="alert"
                    >
                      {contactCopy.captchaError}
                    </p>
                    <button
                      className="button button--secondary"
                      type="button"
                      disabled={status === 'sending'}
                      onClick={() => {
                        setCaptchaFailed(false)
                        setCaptchaAttempt((attempt) => attempt + 1)
                      }}
                    >
                      {contactCopy.captchaRetry}
                    </button>
                  </div>
                ) : null}
                <button
                  className="button button--primary"
                  type="submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span
                        className="contact-panel__spinner"
                        aria-hidden="true"
                      />
                      {contactCopy.sending}
                    </>
                  ) : (
                    contactCopy.submit
                  )}
                </button>
                <p
                  className={`contact-panel__status${status === 'error' ? ' contact-panel__status--notice' : ''}`}
                  role={status === 'error' ? 'alert' : 'status'}
                >
                  {status === 'sending'
                    ? contactCopy.sending
                    : status === 'error'
                      ? contactCopy.error
                      : ''}
                </p>
              </>
            )}
          </form>
        ) : null}
      </div>
    </section>
  )
}

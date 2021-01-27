import { PageProps } from '@interfaces/query'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import { Together, Wrapper } from './styles'

const config = {
  script:
    'https://script.google.com/macros/s/AKfycbwceq7GmWzFq5jkBh1FTMA69JZLKYoVOfri5LSpAmX3TF4JefbyE8Av/exec',
  sheet: 'responses',
  // email: '',
}

interface FormProps {
  name: string
  message: string
  email: string
  honeypot: string
}

interface ContactProps {
  footerProps: PageProps
}

export default function Contact({ footerProps }: ContactProps) {
  const { register, handleSubmit } = useForm()

  const [sent, setSent] = useState(false)

  const onSubmit = useCallback((data: FormProps) => {
    const { honeypot } = data

    // checking if bot
    if (honeypot) {
      return false
    }

    // use xhr as axios won't work (CORS)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', config.script)
    // xhr.withCredentials = true
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = function xhrGo() {
      setSent(true)
    }

    // preparing data
    const encoded = Object.keys(data)
      .map(k => {
        return `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`
      })
      .join('&')

    // finally sending
    xhr.send(encoded)
    return true
  }, [])

  return (
    <Wrapper>
      {sent ? (
        <div className="thankyou_message">
          <h2>Obrigado! Entraremos em contato em breve.</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Together>
            <label htmlFor="name">
              {footerProps.footerName}
              <input
                ref={register}
                id="name"
                key="name"
                name="name"
                placeholder={footerProps.footerNamePlaceholder}
              />
            </label>

            <label htmlFor="email">
              {footerProps.footerEmail}
              <input
                ref={register}
                id="email"
                key="email"
                name="email"
                type="email"
                required
                placeholder={footerProps.footerEmailPlaceholder}
              />
            </label>
          </Together>

          <label htmlFor="message">
            {footerProps.footerMessage}
            <textarea
              ref={register}
              id="message"
              key="message"
              name="message"
              rows={10}
              placeholder={footerProps.footerEmailPlaceholder}
            />
          </label>

          <label htmlFor="honeypot" style={{ display: 'none' }}>
            {/* To help avoid spam, utilize a Honeypot technique with a hidden text field; must
                    be empty to submit the form! Otherwise, we assume the user is a spam bot. */}
            <input
              ref={register}
              id="honeypot"
              key="honeypot"
              type="text"
              name="honeypot"
            />
          </label>

          <Button>{footerProps.footerButton}</Button>
        </form>
      )}
    </Wrapper>
  )
}

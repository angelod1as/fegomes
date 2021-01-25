import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import { Together, Wrapper } from './styles'

const config = {
  script:
    'https://script.google.com/macros/s/AKfycbwMxYDrufp73bKdU8gMvxFDdHRuzcR4IKQUB33B7GqwyfyZS04/exec',
  sheet: 'responses',
  // email: '',
}

interface FormProps {
  name: string
  message: string
  email: string
  honeypot: string
}

export default function Contact() {
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
              Name:
              <input
                ref={register}
                id="name"
                key="name"
                name="name"
                placeholder="João Silva"
              />
            </label>

            <label htmlFor="email">
              Your Email Address:
              <input
                ref={register}
                id="email"
                key="email"
                name="email"
                type="email"
                required
                placeholder="seu.nome@email.com"
              />
            </label>
          </Together>

          <label htmlFor="message">
            Message:
            <textarea
              ref={register}
              id="message"
              key="message"
              name="message"
              rows={10}
              placeholder="Fale sobre sua ideia, projeto ou questionamento..."
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

          <Button>Enviar mensagem</Button>
        </form>
      )}
    </Wrapper>
  )
}

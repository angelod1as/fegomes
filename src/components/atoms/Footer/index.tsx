import { nanoid } from 'nanoid'
import { Wrapper, Social, BottomBar } from './styles'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSoundcloud,
  FaTelegram,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'
import { useCallback } from 'react'

interface Social {
  social: string
  url: string
  icon: string
}

interface FooterProps {
  title: string
  lead: string
  social: Social[]
}

export default function Footer({ title, lead, social }: FooterProps) {
  const getSocial = useCallback(each => {
    switch (each.social) {
      case 'facebook':
        return <FaFacebook size={20} />
      case 'twitter':
        return <FaTwitter size={20} />
      case 'instagram':
        return <FaInstagram size={20} />
      case 'linkedin':
        return <FaLinkedin size={20} />
      case 'soundcloud':
        return <FaSoundcloud size={20} />
      case 'twitch':
        return <FaTwitch size={20} />
      case 'whatsapp':
        return <FaWhatsapp size={20} />
      case 'telegram':
        return <FaTelegram size={20} />
      default:
        return <div />
    }
  }, [])

  return (
    <Wrapper>
      <h3>{title}</h3>
      {lead && <p>{lead}</p>}
      {social && (
        <Social>
          {social.map((each: Social) => {
            return <div key={nanoid()}>{getSocial(each)}</div>
          })}
        </Social>
      )}
      <BottomBar>
        <div>© 2021 FeGomes. Todos os direitos reservados</div>
        <div>
          <a
            href="https://www.angelodias.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Desenvolvido por Angelo Dias
          </a>
        </div>
      </BottomBar>
    </Wrapper>
  )
}

import Button from '../Button'
import { Wrapper, TitleHolder, Lead } from './styles'

interface HeroProps {
  title: string
  lead?: string
  button: string
  to: string
  bg: string
  main?: boolean
}

export default function Hero({ title, lead, button, to, bg, main }: HeroProps) {
  const titleTag = main ? <h1>{title}</h1> : <h2>{title}</h2>

  return (
    <Wrapper bg={bg}>
      {title && <TitleHolder>{titleTag}</TitleHolder>}
      {lead && <Lead>{lead}</Lead>}
      {button && <Button to={to}>{button}</Button>}
    </Wrapper>
  )
}

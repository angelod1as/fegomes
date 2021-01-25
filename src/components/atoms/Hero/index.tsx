import { ReactNode } from 'react'
import Button from '../Button'
import { Wrapper, TitleHolder, Lead, Filter, Holder } from './styles'

interface HeroProps {
  title: string
  lead?: string
  button?: string
  to?: string
  backgroundImage: string
  main?: boolean
  children?: ReactNode
  className?: string
}

export default function Hero({
  title,
  lead,
  button,
  to,
  backgroundImage,
  main,
  children,
}: HeroProps) {
  const titleTag = main ? <h1>{title}</h1> : <h2>{title}</h2>

  return (
    <Wrapper backgroundImage={backgroundImage}>
      <Filter />
      <Holder>
        {title && <TitleHolder>{titleTag}</TitleHolder>}
        {lead && <Lead>{lead}</Lead>}
        {button && <Button to={to}>{button}</Button>}
        {children}
      </Holder>
    </Wrapper>
  )
}

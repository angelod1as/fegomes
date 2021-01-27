import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'
import Button from '../Button'
import { HeroWrapper, TitleHolder, Lead, Filter, Holder } from './styles'

interface HeroProps {
  title: string
  lead?: string
  button?: string
  to?: string
  backgroundImage?: string
  main?: boolean
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export default function Hero({
  title,
  lead,
  button,
  to,
  backgroundImage,
  main,
  children,
  style = {},
}: HeroProps) {
  const titleTag = main ? <h1>{title}</h1> : <h2>{title}</h2>
  const MainStyle = main ? { marginTop: 0 } : {}
  const HeroStyle = {
    ...style,
    ...MainStyle,
  }

  return (
    <HeroWrapper
      className={main && 'mainHero'}
      backgroundImage={backgroundImage}
      style={HeroStyle}
    >
      {backgroundImage && <Filter />}
      <Holder>
        {title && <TitleHolder>{titleTag}</TitleHolder>}
        {lead && <Lead>{lead}</Lead>}
        {button && <Button to={to}>{button}</Button>}
        {children}
      </Holder>
    </HeroWrapper>
  )
}

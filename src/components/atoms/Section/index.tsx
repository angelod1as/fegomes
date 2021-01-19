import { ReactNode } from 'react'
import { Title, Wrapper, Container } from './styles'

interface SectionProps {
  title: string
  bg: string
  children: ReactNode
}

export default function Section({ title, bg, children }: SectionProps) {
  return (
    <Wrapper bg={bg}>
      <Container>
        <Title>{title}</Title>
        <div>{children}</div>
      </Container>
    </Wrapper>
  )
}

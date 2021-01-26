import { ReactNode } from 'react'
import { Title, Wrapper, Container } from './styles'

interface SectionProps {
  title?: string
  children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <Wrapper>
      <Container>
        {title && <Title>{title}</Title>}
        <div>{children}</div>
      </Container>
    </Wrapper>
  )
}

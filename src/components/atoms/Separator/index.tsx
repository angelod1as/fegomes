import styled from 'styled-components'

interface SeparatorProps {
  h?: number
  w?: number
}

const Component = styled.div<SeparatorProps>`
  margin: ${p => (p.h ? p.h / 2 : 0)}px ${p => (p.w ? p.w / 2 : 0)}px;
`

export default function Separator({ h, w }: SeparatorProps) {
  return <Component {...{ h, w }}></Component>
}

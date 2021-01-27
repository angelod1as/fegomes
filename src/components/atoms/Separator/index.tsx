import styled from 'styled-components'

interface SeparatorProps {
  h?: number
  w?: number
}

const StyledSeparator = styled.div<SeparatorProps>`
  margin: ${p => (p.h ? p.h / 2 : 0)}px ${p => (p.w ? p.w / 2 : 0)}px;
`

export default function Separator({ h, w }: SeparatorProps) {
  return <StyledSeparator {...{ h, w }}></StyledSeparator>
}

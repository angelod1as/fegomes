import styled from 'styled-components'

export const Wrapper = styled.div``

export const Play = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.color.main};
  transition: color 0.2s;
`

export const WaveHolder = styled.div`
  cursor: pointer;
  position: relative;
  &:hover {
    ${Play} {
      color: ${p => p.theme.color.dark};
    }
  }
`

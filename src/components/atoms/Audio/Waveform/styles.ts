import styled from 'styled-components'

export const Wrapper = styled.div<{ height: number }>`
  width: 100%;
  height: ${p => p.height}px;
  position: relative;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`

interface WaveProps {
  style: {
    height: number
  }
}

export const Wave = styled.div<WaveProps>`
  width: 100%;
  border-radius: ${p => p.theme.numbers.radius};
`

export const Upper = styled.div<{ clip: number | null }>`
  clip-path: inset(0 0 0 ${p => p.clip}%);
  div {
    background-color: ${p => p.theme.color.gray};
  }
`

export const Lower = styled.div`
  div {
    background-color: ${p => p.theme.color.darkergray};
  }
`

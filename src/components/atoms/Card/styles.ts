import styled from 'styled-components'

export const Image = styled.div<{ image: string; square: boolean }>`
  width: 100%;
  height: 200px;
  ${p => (p.square ? `height: 300px;` : '')}
  background-color: ${p => p.theme.color.main};
  background-image: url(${p => p.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`

export const Icon = styled.div`
  border-radius: 50%;
  background-color: ${p => p.theme.color.main};
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${p => p.theme.color.white};
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
  transition: opacity 0.3s ease;

  h3 {
    margin: 15px 0 10px 0;
  }

  p {
    margin-bottom: 30px;
  }

  &:hover {
    opacity: 0.7;
  }
`

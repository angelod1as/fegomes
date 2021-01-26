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
  position: relative;

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

export const Current = styled.div<{ current: boolean }>`
  width: 13px;
  height: 13px;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 50%;

  border: 1px solid ${p => p.theme.color.gray};

  background-color: ${p =>
    p.current ? p.theme.color.main : p.theme.color.darkergray};
`

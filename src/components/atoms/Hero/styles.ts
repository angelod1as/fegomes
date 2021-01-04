import styled from 'styled-components'

export const Wrapper = styled.div<{ bg: string }>`
  width: 100%;
  height: 700px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.color.gray};
  color: ${p => p.theme.color.white};

  background-image: url(${p => p.bg});
  background-position: left center;
  background-size: cover;

  position: relative;
  z-index: 0;

  * {
    position: relative;
    z-index: 1;
  }
`

export const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.7;
`

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  text-align: center;

  max-width: 500px;
  z-index: 20;
`

export const TitleHolder = styled.div`
  h1,
  h2 {
    margin: 0 0 20px 0;
    padding: 0;
  }
`

export const Lead = styled.p`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.font.weight.regular};
`

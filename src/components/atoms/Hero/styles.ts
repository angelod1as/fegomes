import styled, { css } from 'styled-components'

export const HeroWrapper = styled.div<{ backgroundImage: string }>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  margin: 50px 0;

  ${p =>
    p.backgroundImage
      ? css`
          color: ${p => p.theme.color.white};
          min-height: 800px;
          background-color: ${p => p.theme.color.gray};
          background-image: url(${p.backgroundImage});
          background-position: left center;
          background-size: cover;
        `
      : css`
          color: ${p => p.theme.color.white};
          /* min-height: 400px; */
        `}

  position: relative;
  z-index: 0;

  * {
    /* position: relative; */
    z-index: 1;
  }
`

export const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${p => p.theme.color.black};
  opacity: 0.8;
`

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  text-align: center;

  max-width: 460px;
  z-index: 20;
`

export const TitleHolder = styled.div`
  h1,
  h2 {
    margin: 0 0 20px 0;
    padding: 0;
    color: ${p => p.theme.color.main};
  }
`

export const Lead = styled.p`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.font.weight.medium};
`

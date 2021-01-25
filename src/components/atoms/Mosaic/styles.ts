import styled, { css } from 'styled-components'

export const StyledMosaic = styled.div<{ isOpened: boolean; limit: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  overflow: hidden;
  position: relative;
  transition: max-height 0.3s;

  ${p =>
    p.limit &&
    (p.isOpened
      ? css`
          max-height: unset;
          padding-bottom: 50px;
        `
      : css`
          max-height: 500px;
        `)}
`

export const SeeMore = styled.div`
  color: ${p => p.theme.color.main};
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 50px 0 0px 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 50%
  );
  font-weight: ${p => p.theme.font.weight.medium};
`

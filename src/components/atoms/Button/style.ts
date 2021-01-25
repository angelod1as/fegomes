import styled, { css } from 'styled-components'

interface StyledButtonProps {
  hollow: boolean
  selected: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: 0;
  border: 0;
  background: transparent;

  font-weight: ${p => p.theme.font.weight.medium};
  color: ${p => p.theme.color.darkergray};

  transition: color 0.2s;

  &:hover {
    color: ${p => p.theme.color.main};
  }

  ${p =>
    !p.hollow
      ? css`
          background-color: ${p => p.theme.color.main};
          padding: 15px 20px;
          color: ${p => p.theme.color.white};

          transition: background-color 0.2s;

          &:hover {
            color: ${p => p.theme.color.white};
            background-color: ${p => p.theme.color.dark};
          }
        `
      : ''}

  ${p =>
    p.selected &&
    (p.hollow
      ? css`
          color: ${p => p.theme.color.main};
          &:hover {
            color: ${p => p.theme.color.black};
          }
        `
      : css`
          background-color: ${p => p.theme.color.dark};
          &:hover {
            background-color: ${p => p.theme.color.black};
          }
        `)}
`

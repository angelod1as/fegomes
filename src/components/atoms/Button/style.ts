import styled, { css } from 'styled-components'

export const StyledButton = styled.button<{ hollow: boolean }>`
  cursor: pointer;
  padding: 0;
  border: 0;
  background: transparent;

  font-weight: ${p => p.theme.font.weight.medium};
  color: ${p => p.theme.color.darkergray};

  transition: color 0.2s;

  &:hover {
    color: ${p => p.theme.color.black};
  }

  ${p =>
    !p.hollow
      ? css`
          background-color: ${p => p.theme.color.black};
          padding: 15px 20px;
          color: ${p => p.theme.color.white};

          transition: background-color 0.2s;

          &:hover {
            color: ${p => p.theme.color.white};
            background-color: ${p => p.theme.color.darkergray};
          }
        `
      : ''}
`

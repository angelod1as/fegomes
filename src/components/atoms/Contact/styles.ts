import styled, { css } from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.div`
  width: 100%;
  label,
  input,
  textarea {
    display: block;
    text-align: left;
    width: 100%;
    margin: 10px 0;
  }

  input,
  textarea {
    padding: 15px 20px;
  }

  label {
    font-weight: ${p => p.theme.font.weight.medium};
  }

  button {
    margin-top: 10px;
  }
`

export const Together = styled.div`
  @media ${p => p.theme.size.small} {
    display: flex;
    gap: 20px;
  }
`

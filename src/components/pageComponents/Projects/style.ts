import styled from 'styled-components'

export const Legend = styled.div`
  text-align: center;
  margin-bottom: 30px;

  p {
    margin: 0;
    font-size: 1em;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    p {
      span {
        display: inline-block;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        margin-right: 7px;
        background-color: ${p => p.theme.color.gray};
        border: 1px solid ${p => p.theme.color.black};
      }

      &:first-child {
        span {
          background-color: ${p => p.theme.color.main};
        }
      }
    }
  }
`

import styled from 'styled-components'

export const Content = styled.div`
  * > :first-child {
    margin-top: -8px;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    flex: 1;
  }

  div {
    flex: 1;
    width: 100%;
  }

  @media ${p => p.theme.size.small} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 20px;
  }

  margin-bottom: 100px;
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: ${p => p.theme.color.dark};
  color: ${p => p.theme.color.black};

  a {
    color: ${p => p.theme.color.black};
  }

  h3 {
    color: ${p => p.theme.color.white};
    font-style: normal;
    font-size: 2em;
    margin: 50px 0 10px 0;
  }

  & > p {
    max-width: 400px;
    margin: 0;
    color: ${p => p.theme.color.white};
  }
`

export const Social = styled.div`
  display: flex;
  margin: 30px 0;
  transition: opacity 0.3s ease;

  a {
    margin: 0 7px;
  }

  & svg {
    fill: ${p => p.theme.color.white};
  }

  &:hover {
    a {
      opacity: 0.5;
    }
  }

  div {
    margin: 0 10px;
    cursor: pointer;
  }
`

export const BottomBar = styled.div`
  margin-top: 20px;
  background-color: ${p => p.theme.color.main};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
`

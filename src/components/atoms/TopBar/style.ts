import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: ${p => p.theme.color.white};
  height: ${p => p.theme.numbers.menuHeight}px;
  padding: 0 20px;

  @media ${p => p.theme.size.small} {
    padding: 50px;
  }
`

export const Title = styled.h2`
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-style: normal;
  font-weight: ${p => p.theme.font.weight.medium};

  a {
    text-decoration: none;
    transition: color 0.2s;
    color: ${p => p.theme.color.black};

    &:hover {
      color: ${p => p.theme.color.darkergray};
    }
  }
`

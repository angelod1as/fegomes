import styled from 'styled-components'

export const MenuItems = styled.div`
  display: none;

  @media ${p => p.theme.size.small} {
    display: flex;
  }
`

export const Menu = styled.nav`
  input {
    display: none;
  }

  label {
    display: block;
  }

  & input:checked ~ ${MenuItems} {
    display: block;
  }

  @media ${p => p.theme.size.small} {
    label {
      display: none;
    }
  }
`

import styled from 'styled-components'

export const MenuItems = styled.div`
  position: absolute;
  top: ${p => p.theme.numbers.menuHeight}px;
  right: 0;
  overflow: hidden;

  transition: height 0.3s ease-in-out;
  height: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.color.black};
  width: 100%;
  opacity: 1;
  * {
    display: block;
    margin: 5px 0;
  }

  @media ${p => p.theme.size.small} {
    position: static;
    display: block;
    top: unset;
    right: unset;
    height: unset;
    * {
      display: inline-block;
      margin: 0 0 0 20px;
    }
  }
`

export const Menu = styled.nav`
  input {
    display: none;
  }

  label {
    display: block;
    /* &:after {
      content: '☰';
      display: block;
      position: relative;
    } */
  }

  input:checked ~ ${MenuItems} {
    height: calc(100vh - ${p => p.theme.numbers.menuHeight}px);
  }

  input:checked ~ label {
    background-color: red;
    &:after {
      content: 'X';
    }
  }

  @media ${p => p.theme.size.small} {
    label {
      display: none;
    }
  }
`

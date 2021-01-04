import { Menu, MenuItems } from './style'

export default function Hamburger({ children }) {
  return (
    <Menu>
      <label htmlFor="hamburger">☰</label>
      <input type="checkbox" id="hamburger" />

      <MenuItems>{children}</MenuItems>
    </Menu>
  )
}

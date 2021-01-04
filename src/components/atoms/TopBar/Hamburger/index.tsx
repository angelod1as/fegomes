import { Menu, MenuItems } from './style'

export default function Hamburger({ children }) {
  return (
    <Menu>
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />

      <MenuItems>{children}</MenuItems>
    </Menu>
  )
}

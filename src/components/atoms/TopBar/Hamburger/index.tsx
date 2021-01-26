import { nanoid } from 'nanoid'
import { cloneElement, ReactElement, useState } from 'react'
import { Menu, MenuItems } from './style'

export default function Hamburger({ children }) {
  const [opened, setOpened] = useState(false)

  return (
    <Menu>
      <label htmlFor="hamburger">☰</label>
      <input
        type="checkbox"
        id="hamburger"
        checked={opened}
        onChange={() => setOpened(!opened)}
      />

      <MenuItems>
        {children.map((each: ReactElement) => {
          return cloneElement(each, {
            key: nanoid(),
            onClick: () => setOpened(false),
          })
        })}
      </MenuItems>
    </Menu>
  )
}

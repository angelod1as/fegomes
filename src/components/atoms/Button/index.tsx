import Link from 'next/link'
import { ReactNode } from 'react'
import { StyledButton } from './style'

interface ButtonProps {
  to?: string
  children: ReactNode
  hollow?: boolean
  selected?: boolean
  onClick?: () => void
}

export default function Button({
  to,
  children,
  hollow,
  selected,
  onClick,
}: ButtonProps) {
  if (to) {
    return (
      <Link href={to}>
        <StyledButton selected={selected} hollow={hollow} onClick={onClick}>
          {children}
        </StyledButton>
      </Link>
    )
  }
  return (
    <StyledButton selected={selected} hollow={hollow}>
      {children}
    </StyledButton>
  )
}

import Link from 'next/link'
import { ReactNode } from 'react'
import { StyledButton } from './style'

interface ButtonProps {
  to?: string
  children: ReactNode
  hollow?: boolean
}

export default function Button({ to, children, hollow }: ButtonProps) {
  if (to) {
    return (
      <Link href={to}>
        <StyledButton hollow={hollow}>{children}</StyledButton>
      </Link>
    )
  }
  return <StyledButton hollow={hollow}>{children}</StyledButton>
}

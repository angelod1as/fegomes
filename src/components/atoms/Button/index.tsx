import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  to: string
  children: ReactNode
  hollow?: boolean
}

export default function Button({ to, children, hollow }: ButtonProps) {
  return (
    <Link href={to}>
      <button>{children}</button>
    </Link>
  )
}

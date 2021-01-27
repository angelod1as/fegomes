import Link from 'next/link'
import { Wrapper, Image, Icon, Current } from './styles'
import { FaVolumeUp, FaCut, FaTools } from 'react-icons/fa'
import { useCallback } from 'react'

interface CardProps {
  icon?: string
  image?: string
  title?: string
  lead?: string
  to?: string
  square?: boolean
  alt?: string
  current?: boolean
}

export default function Card({
  icon,
  title,
  lead,
  image,
  to,
  alt,
  square = false,
  current = undefined,
}: CardProps) {
  const getIcon = useCallback(() => {
    switch (icon) {
      case 'treatment':
        return <FaTools size={30} />
      case 'edit':
        return <FaCut size={30} />
      case 'sound':
        return <FaVolumeUp size={30} />
      default:
        return <div />
    }
  }, [icon])

  return (
    <Link href={to}>
      <Wrapper>
        {current !== undefined && <Current current={current}></Current>}
        {icon && <Icon>{getIcon()}</Icon>}
        {image && (
          <Image
            image={image}
            square={square}
            role="img"
            aria-label={title || alt}
          />
        )}
        {title && <h3>{title}</h3>}
        {lead && <p>{lead}</p>}
      </Wrapper>
    </Link>
  )
}

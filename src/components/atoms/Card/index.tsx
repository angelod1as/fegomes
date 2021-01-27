import Link from 'next/link'
import { Wrapper, Image, Icon, Current } from './styles'
import { FaVolumeUp, FaCut, FaTools } from 'react-icons/fa'
import { useCallback } from 'react'

interface CardProps {
  icon?: string
  image?: string
  title?: string
  description?: string
  to?: string
  alt?: string
  current?: boolean
}

export default function Card({
  icon,
  title,
  description,
  image,
  to,
  alt,
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
        {image && <Image image={image} role="img" aria-label={title || alt} />}
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </Wrapper>
    </Link>
  )
}

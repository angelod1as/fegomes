import Button from '../Button'
import { Wrapper, Image } from './styles'

interface CardProps {
  image?: string
  title?: string
  lead?: string
  to?: string
  buttonText?: string
}

export default function Card({
  title,
  buttonText,
  lead,
  image,
  to,
}: CardProps) {
  return (
    <Wrapper>
      <Image image={image} />
      <h3>{title}</h3>
      <p>{lead}</p>
      <Button to={to}>{buttonText}</Button>
    </Wrapper>
  )
}

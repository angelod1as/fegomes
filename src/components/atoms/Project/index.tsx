import { ProjectProps } from '@interfaces/query'
import Embed from '../Embed'
import { Description, Side, Title, Wrapper, Image, Tag } from './styles'

interface ProjectCompProps {
  project: ProjectProps
}

export default function Project({
  project: { current, description, embed, image, title },
}: ProjectCompProps) {
  return (
    <Wrapper>
      <Image image={image[0].url}></Image>
      <Side>
        {current !== undefined ? (
          <Tag current={current}>
            {current ? 'Anda comigo' : 'Já andou comigo'}
          </Tag>
        ) : (
          ''
        )}
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Embed embed={embed}></Embed>
      </Side>
    </Wrapper>
  )
}

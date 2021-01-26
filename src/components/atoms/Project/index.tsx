import Embed from '../Embed'
import { Description, Side, Title, Wrapper, Image, Tag } from './styles'

export default function Project({
  image,
  title,
  description,
  embed,
  current = undefined,
}) {
  current = true
  return (
    <Wrapper>
      <Image image="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></Image>
      <Side>
        {current !== undefined ? (
          <Tag current={current}>
            {current ? 'Anda comigo' : 'Já andou comigo'}
          </Tag>
        ) : (
          ''
        )}
        <Title>Título</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          tempora error voluptate a distinctio amet recusandae. Nihil quaerat
          nostrum, corporis quasi possimus enim in delectus, dolores laboriosam
          illum natus repellendus!
        </Description>
        <Embed embed={'<div>embed</div>'}></Embed>
      </Side>
    </Wrapper>
  )
}

import Button from '../Button'
import Hamburger from './Hamburger'
import { Wrapper, Title } from './style'

export default function TopBar() {
  return (
    <Wrapper>
      <Title>FeGomes Podcast</Title>
      <Hamburger>
        <Button to="/como-funciona" hollow>
          Como funciona
        </Button>
        <Button to="/projetos" hollow>
          Projetos
        </Button>
        <Button to="/sobre" hollow>
          Sobre
        </Button>
        <Button to="/contato">Contato</Button>
      </Hamburger>
    </Wrapper>
  )
}

import Link from 'next/link'
import Button from '../Button'
import Hamburger from './Hamburger'
import { TopBarWrapper, Title } from './style'
import { useRouter } from 'next/router'

export default function TopBar() {
  const { pathname } = useRouter()

  return (
    <TopBarWrapper>
      <Title>
        <Link href="/">FeGomes Podcast</Link>
      </Title>
      <Hamburger>
        <Button
          to="/como-funciona"
          hollow
          selected={pathname === '/como-funciona'}
        >
          Como funciona
        </Button>
        <Button to="/projetos" hollow selected={pathname.includes('/projetos')}>
          Projetos
        </Button>
        <Button to="/sobre" hollow selected={pathname.includes('/sobre')}>
          Sobre
        </Button>
        <Button to="/contato" selected={pathname.includes('/contato')}>
          Contato
        </Button>
      </Hamburger>
    </TopBarWrapper>
  )
}

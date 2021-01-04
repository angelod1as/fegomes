import Button from '../Button'

export default function TopBar() {
  return (
    <div>
      <div>FeGomes Podcast</div>
      <div>
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
      </div>
    </div>
  )
}

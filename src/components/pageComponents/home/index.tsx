import TopBar from '@components/atoms/TopBar'
import Hero from '@components/atoms/Hero'
import Section from '@components/atoms/Section'
import Footer from '@components/atoms/Footer'
import { Wrapper } from './styles'

export default function Home() {
  return (
    <Wrapper>
      <TopBar />
      <Hero
        title="Lorem"
        lead="Lorem"
        button="Saiba mais"
        to="/projetos"
        bg=""
        main
      ></Hero>
      <Section title="Projetos de destaque" bg="clear">
        <div>
          {/* Mosaic */}
          <div>
            <p>Imagem</p>
            <h3>Projeto 1</h3>
            <p>Lead</p>
            <button>Saiba mais</button>
          </div>
          <div>
            <p>Imagem</p>
            <h3>Projeto 1</h3>
            <p>Lead</p>
            <button>Saiba mais</button>
          </div>
          <div>
            <p>Imagem</p>
            <h3>Projeto 1</h3>
            <p>Lead</p>
            <button>Saiba mais</button>
          </div>
        </div>
      </Section>
      <Section title="Nossos podcasts" bg="clear">
        <div>
          <p>Imagem</p>
          <h3>Projeto 1</h3>
          <p>Lead</p>
          <button>Saiba mais</button>
        </div>
        <div>
          <p>Imagem</p>
          <h3>Projeto 1</h3>
          <p>Lead</p>
          <button>Saiba mais</button>
        </div>
        <div>
          <p>Imagem</p>
          <h3>Projeto 1</h3>
          <p>Lead</p>
          <button>Saiba mais</button>
        </div>
      </Section>
      <Section title="Como funciona" bg="clear">
        <div>
          <p>Ícone</p>
          <h3>Tratamento</h3>
          <p>Lead</p>
          <button>Saiba mais</button>
        </div>
        <div>
          <p>Ícone</p>
          <h3>Edição</h3>
          <p>Lead</p>
          <button>Saiba mais</button>
        </div>
        <div>
          <p>Ícone</p>
          <h3>Sonorização</h3>
          <p>Lead</p>
          <button>Saiba mais</button>
        </div>
      </Section>
      <Hero
        title="Vamos trabalhar juntos?"
        lead="lead"
        button="Contato"
        to="/contato"
        bg=""
      />
      <Footer
        title="FeGomes Podcast"
        lead="lorem"
        social={[
          {
            social: 'facebook',
            url: 'url',
            icon: 'facebook',
          },
          {
            social: 'instagram',
            url: 'url',
            icon: 'instagram',
          },
        ]}
      />
    </Wrapper>
  )
}

import TopBar from '@components/atoms/TopBar'
import Hero from '@components/atoms/Hero'
import Section from '@components/atoms/Section'
import Footer from '@components/atoms/Footer'
import { Wrapper } from './styles'
import Mosaic from '@components/atoms/Mosaic'
import Card from '@components/atoms/Card'

export default function Home() {
  return (
    <Wrapper>
      <TopBar />
      <Hero
        title="Transforme seu projeto em realidade"
        lead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, saepe architecto odit ducimusa"
        button="Saiba mais"
        to="/projetos"
        bg="https://images.unsplash.com/photo-1544719576-904e2d01e057?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1376&q=80"
        main
      ></Hero>
      <Section title="Projetos de destaque" bg="clear">
        <Mosaic>
          {/* Mosaic */}
          <Card
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Projeto 1"
            lead="suscipit accusamus laborum odit ipsum eos minima autem libero similique ipsam neq"
            to="buttonpath"
            buttonText="Saiba mais"
          />
          <Card
            image="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Projeto 2"
            lead="suscipit accusamus laborum odit ipsum eos minima autem libero similique ipsam neq"
            to="buttonpath"
            buttonText="Saiba mais"
          />
          <Card
            image="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            title="Projeto 2"
            lead="suscipit accusamus laborum odit ipsum eos minima autem libero similique ipsam neq"
            to="buttonpath"
            buttonText="Saiba mais"
          />
        </Mosaic>
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

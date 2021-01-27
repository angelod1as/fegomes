import Hero from '@components/atoms/Hero'
import Section from '@components/atoms/Section'
import Mosaic from '@components/atoms/Mosaic'
import Card from '@components/atoms/Card'
import { nanoid } from 'nanoid'
import { ProjectProps } from '@interfaces/query'

interface HomeProps {
  projects: ProjectProps[]
  highlighted: ProjectProps[]
}

export default function Home({ projects, highlighted }: HomeProps) {
  return (
    <>
      <Hero
        title="Transforme seu projeto em realidade"
        lead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, saepe architecto odit ducimusa"
        button="Veja meus projetos"
        to="/projetos"
        backgroundImage="https://images.unsplash.com/photo-1544719576-904e2d01e057?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1376&q=80"
        main
      />
      <Section title="Projetos de destaque">
        <Mosaic>
          {highlighted.map((each: ProjectProps) => (
            <Card
              key={nanoid()}
              image={each.image[0].url}
              title={each.title}
              description={each.shortDescription}
              to={`/projetos/${each.slug}`}
            />
          ))}
        </Mosaic>
      </Section>
      <Section title="Nossos podcasts">
        <Mosaic limit>
          {projects.map(each => (
            <Card
              key={nanoid()}
              image={each.image[0].url}
              to={`/projetos/${each.slug}`}
              alt={each.title}
            />
          ))}
        </Mosaic>
      </Section>
      <Section title="Como funciona">
        <Mosaic>
          <Card
            icon="treatment"
            title="Tratamento"
            description="suscipit accusamus laborum odit ipsum eos minima autem libero similique ipsam neq"
            to="/como-funciona"
          />
          <Card
            icon="edit"
            title="Edição"
            description="suscipit accusamus laborum odit ipsum eos minima autem libero similique ipsam neq"
            to="/como-funciona"
          />
          <Card
            icon="sound"
            title="Sonorização"
            description="suscipit accusamus laborum odit ipsum eos minima autem libero similique ipsam neq"
            to="/como-funciona"
          />
        </Mosaic>
      </Section>
    </>
  )
}

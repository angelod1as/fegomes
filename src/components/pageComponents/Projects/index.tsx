import Card from '@components/atoms/Card'
import Hero from '@components/atoms/Hero'
import Mosaic from '@components/atoms/Mosaic'
import Section from '@components/atoms/Section'
import { nanoid } from 'nanoid'
import slugify from 'slugify'
import { Legend } from './style'
import { ProjectProps } from '@pages/projetos'

interface ProjectsCompProps {
  projects: ProjectProps[]
}

export default function Projects({ projects }: ProjectsCompProps) {
  return (
    <>
      <Hero
        title="Fazer podcast é gostoso demais"
        lead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, saepe architecto odit ducimusa"
        main
      />
      <Section>
        <Legend>
          <div>
            <p>
              <span></span>Com quem ando
            </p>
            <p>
              <span></span>Já passearam comigo
            </p>
          </div>
        </Legend>
        <Mosaic>
          {projects.map((each: ProjectProps) => (
            <Card
              key={nanoid()}
              image={each.image[0].url}
              title={each.title}
              description={each.shortDescription}
              to={`/projetos/${slugify(each.title, { lower: true })}`}
              current={each.current}
            />
          ))}
        </Mosaic>
      </Section>
    </>
  )
}

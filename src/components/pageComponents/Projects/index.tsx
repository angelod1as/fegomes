import Card from '@components/atoms/Card'
import Hero from '@components/atoms/Hero'
import Mosaic from '@components/atoms/Mosaic'
import Section from '@components/atoms/Section'
import { PageProps, ProjectProps } from '@interfaces/query'
import { nanoid } from 'nanoid'
import slugify from 'slugify'
import { Legend } from './style'

interface ProjectsCompProps {
  projects: ProjectProps[]
  pageProps: PageProps
}

export default function Projects({ projects, pageProps }: ProjectsCompProps) {
  return (
    <>
      <Hero title={pageProps.title} lead={pageProps.description} main />
      <Section>
        <Legend>
          <div>
            <p>
              <span></span>
              {pageProps.projectFilterCurrent}
            </p>
            <p>
              <span></span>
              {pageProps.projectFilterOld}
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

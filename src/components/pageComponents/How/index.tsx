import Hero from '@components/atoms/Hero'
import Section from '@components/atoms/Section'
import { Columns, Column, Card } from './styles'
import Audio from '@components/atoms/Audio'
import { PageProps, ProjectsCollectionProps } from '@interfaces/query'
import { nanoid } from 'nanoid'

interface HowProps {
  pageProps: PageProps
}

const columns = ['first', 'second', 'third']

export default function How({ pageProps }: HowProps) {
  return (
    <>
      <Hero
        title={pageProps.title}
        lead={pageProps.description}
        main
        backgroundImage="https://res.cloudinary.com/femaxpe/image/upload/v1611799362/ss_persp_v63_pvlimu.jpg"
      />
      <Section title={pageProps.howTitle}>
        <Columns>
          {columns.map((each: string) => (
            <Column key={nanoid()}>
              <h3>{pageProps[`${each}HowTitle`]}</h3>
              <p>{pageProps[`${each}HowDescription`]}</p>
              {pageProps[`${each}ProjectsCollection`].items.map(
                (each: ProjectsCollectionProps) => (
                  <Card key={nanoid()}>
                    <h3>{each.title}</h3>
                    <Audio url={each.audioLink[0].url} />
                  </Card>
                )
              )}
            </Column>
          ))}
        </Columns>
      </Section>
    </>
  )
}

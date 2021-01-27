import Hero from '@components/atoms/Hero'
import Section from '@components/atoms/Section'
import Mosaic from '@components/atoms/Mosaic'
import Card from '@components/atoms/Card'
import { nanoid } from 'nanoid'
import { PageProps, ProjectProps } from '@interfaces/query'

interface HomeProps {
  projects: ProjectProps[]
  highlighted: ProjectProps[]
  how: PageProps
  home: PageProps
  projectPageSlug: PageProps['slug']
}

export default function Home({
  projects,
  highlighted,
  how,
  home,
  projectPageSlug,
}: HomeProps) {
  return (
    <>
      <Hero
        title={home.title}
        lead={home.description}
        button={home.homeMainButton}
        to={`/${projectPageSlug}`}
        backgroundImage={home.homeImage[0].url}
        main
      />
      <Section title={home.homeHighlightedTitle}>
        <Mosaic>
          {highlighted.map((each: ProjectProps) => (
            <Card
              key={nanoid()}
              image={each.image[0].url}
              title={each.title}
              description={each.shortDescription}
              to={`/${projectPageSlug}/${each.slug}`}
            />
          ))}
        </Mosaic>
      </Section>
      <Section title={home.homePodcastsTitle}>
        <Mosaic limit>
          {projects.map(each => (
            <Card
              key={nanoid()}
              image={each.image[0].url}
              to={`/${projectPageSlug}/${each.slug}`}
              alt={each.title}
            />
          ))}
        </Mosaic>
      </Section>
      <Section title={home.homeHowItWorksTitle}>
        <Mosaic>
          <Card
            icon="treatment"
            title={how.firstHowTitle}
            description={how.firstHowDescription}
            to={how.slug}
          />
          <Card
            icon="edit"
            title={how.secondHowTitle}
            description={how.secondHowDescription}
            to={how.slug}
          />
          <Card
            icon="sound"
            title={how.thirdHowTitle}
            description={how.thirdHowDescription}
            to={how.slug}
          />
        </Mosaic>
      </Section>
    </>
  )
}

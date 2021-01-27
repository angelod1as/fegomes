import Hero from '@components/atoms/Hero'
import Section from '@components/atoms/Section'
import { PageProps } from '@interfaces/query'
import { Content } from './styles'

interface AboutProps {
  pageProps: PageProps
}

export default function About({ pageProps }: AboutProps) {
  return (
    <>
      <Hero title={pageProps.title} lead={pageProps.description} main />
      <Section>
        <Content>
          <img src={pageProps.aboutImage[0].url} alt="" />
          <div>
            <h2>{pageProps.aboutTitle}</h2>
            <p>{pageProps.aboutDescription} </p>
          </div>
        </Content>
      </Section>
    </>
  )
}

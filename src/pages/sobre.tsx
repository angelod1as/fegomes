import { fetchContent } from '@functions/fetchGraphQL'
import About from '@pageComponents/About'
import { PageProps, PageQueryProps } from '@interfaces/query'

interface SobreProps {
  pageProps: PageProps
}

export default function Sobre({ pageProps }: SobreProps) {
  return (
    <>
      <About pageProps={pageProps} />
    </>
  )
}

export async function getStaticProps() {
  const pageQuery: PageQueryProps = await fetchContent(`
    query pageEntryQuery {
      page(id: "422RzmYizLhIbf6XmbNyI2") {
        title
        description
        aboutTitle
        aboutDescription
        aboutImage
      }
    }
  `)

  const footerQuery: PageQueryProps = await fetchContent(`
    query pageEntryQuery {
      page(id: "3lb5HQ2corU7Pxhj6VVr3S") {
        title
        footerName
        footerNamePlaceholder
        footerEmail
        footerEmailPlaceholder
        footerMessage
        footerMessagePlaceholder
        footerButton
        footerImage
        footerSocial
        footerSubTitle
        footerSubDescription
      }
    }
  `)
  const footerProps = footerQuery.page

  const pageProps = pageQuery.page

  return {
    props: {
      pageProps,
      footerProps,
    },
  }
}

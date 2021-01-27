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

  const pageProps = pageQuery.page

  return {
    props: {
      pageProps,
    },
  }
}

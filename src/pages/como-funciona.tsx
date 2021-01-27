import { fetchContent } from '@functions/fetchGraphQL'
import { PageProps, PageQueryProps } from '@interfaces/query'
import How from '@pageComponents/How'

interface ComoFuncionaProps {
  pageProps: PageProps
}

export default function ComoFunciona({ pageProps }: ComoFuncionaProps) {
  return (
    <>
      <How pageProps={pageProps} />
    </>
  )
}

export async function getStaticProps() {
  const pageQuery: PageQueryProps = await fetchContent(`
    query pageEntryQuery {
      page(id: "6R8dkAB4lju9hOh3BirjX4") {
        title
        description
        howTitle
        firstHowTitle
        firstProjectsCollection {
          items {
            title
            audioLink
            description
          }
        }
        secondHowTitle
        secondProjectsCollection {
          items {
            title
            audioLink
            description
          }
        }
        thirdHowTitle
        thirdProjectsCollection {
          items {
            title
            audioLink
            description
          }
        }
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

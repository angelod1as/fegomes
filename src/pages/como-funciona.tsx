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
        firstHowDescription
        secondHowDescription
        thirdHowDescription
        firstProjectsCollection {
          items {
            title
            audioLink
          }
        }
        secondHowTitle
        secondProjectsCollection {
          items {
            title
            audioLink
          }
        }
        thirdHowTitle
        thirdProjectsCollection {
          items {
            title
            audioLink
          }
        }
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

import { fetchContent } from '@functions/fetchGraphQL'
import { PageQueryProps } from '@interfaces/query'
import NotFound from '@pageComponents/NotFound'

export default function Custom404() {
  return <NotFound></NotFound>
}

export async function getStaticProps() {
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

  return {
    props: {
      footerProps,
    },
  }
}

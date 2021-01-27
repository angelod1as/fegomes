import { fetchContent } from '@functions/fetchGraphQL'
import { PageQueryProps, ProjectQueryProps } from '@interfaces/query'
import Home from '@pageComponents/Home/index'

export default function Index({
  projects,
  highlighted,
  how,
  home,
  projectPageSlug,
}) {
  return (
    <>
      <Home
        projects={projects}
        highlighted={highlighted}
        how={how}
        home={home}
        projectPageSlug={projectPageSlug}
      />
    </>
  )
}

export async function getStaticProps() {
  const projectsQuery: ProjectQueryProps = await fetchContent(`
    query projectCollectionQuery {
      projectCollection {
        items {
          title
          shortDescription
          image
          highlighted
          slug
        }
      }
    }
  `)

  const howQuery: PageQueryProps = await fetchContent(`
    query pageEntryQuery {
      page(id: "6R8dkAB4lju9hOh3BirjX4") {
        slug
        firstHowTitle
        firstHowDescription
        secondHowTitle
        secondHowDescription
        thirdHowTitle
        thirdHowDescription
      }
    }
  `)

  const homePageQuery: PageQueryProps = await fetchContent(`
    query pageEntryQuery {
      page(id: "3cPnzfcPVCYvdhw7LuWMAC") {
        title
        description
        homeImage
        homeMainButton
        homePodcastsTitle
        homeHowItWorksTitle
        homeHighlightedTitle
      }
    }
  `)

  const projectsPageQuery: PageQueryProps = await fetchContent(`
  query pageEntryQuery {
    page(id: "7GYTZ9VOcdxjrO6JNVNys6") {
      slug
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

  const projects = projectsQuery.projectCollection.items
  const highlighted = projects.filter(each => each.highlighted)

  const how = howQuery.page
  const home = homePageQuery.page
  const projectPageSlug = projectsPageQuery.page.slug

  return {
    props: {
      projects,
      highlighted,
      how,
      home,
      projectPageSlug,
      footerProps,
    },
  }
}

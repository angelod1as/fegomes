import Project from '@components/atoms/Project'
import { fetchContent } from '@functions/fetchGraphQL'
import { PageQueryProps, ProjectQueryProps } from '@interfaces/query'
import NotFound from '@pageComponents/NotFound'

export default function ProjectPage({ project }) {
  if (project) {
    return <Project project={project}></Project>
  }
  return <NotFound></NotFound>
}

export async function getStaticPaths() {
  const projectsQuery: ProjectQueryProps = await fetchContent(`
    query projectCollectionQuery {
      projectCollection {
        items {
          slug
        }
      }
    }
  `)

  const paths = projectsQuery.projectCollection.items.map(item => {
    return {
      params: { slug: item.slug },
    }
  })

  return { paths, fallback: true }
}

interface Params {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const projectsQuery: ProjectQueryProps = await fetchContent(`
  query projectCollectionQuery {
    projectCollection(where:{ slug: "${params.slug}"}) {
      items {
        title
        description
        image
        embed
        current
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

  const project = projectsQuery.projectCollection.items[0]

  return {
    props: {
      project: project || null,
      footerProps,
    },
  }
}

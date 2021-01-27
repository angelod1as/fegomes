import Project from '@components/atoms/Project'
import { fetchContent } from '@functions/fetchGraphQL'
import { ProjectQueryProps } from '@pages/projetos'

export default function ProjectPage({ project }) {
  return <Project project={project}></Project>
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
        image {
          cloudinary
        }
        embed
        current
      }
    }
  }
  `)

  const project = projectsQuery.projectCollection.items[0]

  return {
    props: {
      project,
    },
  }
}

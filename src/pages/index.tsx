// import fetchContentful from '@functions/fetchContentful'
import { fetchContent } from '@functions/fetchGraphQL'
import Home from '@pageComponents/Home/index'
import { ProjectQueryProps } from './projetos'

export default function Index({ projects, highlighted }) {
  return (
    <>
      <Home projects={projects} highlighted={highlighted} />
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

  const projects = projectsQuery.projectCollection.items
  const highlighted = projects.filter(each => each.highlighted)

  return {
    props: {
      projects,
      highlighted,
    },
  }
}

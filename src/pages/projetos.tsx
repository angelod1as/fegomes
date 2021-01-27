import { fetchContent } from '@functions/fetchGraphQL'
import Projects from '@pageComponents/Projects/index'
import {
  PageProps,
  PageQueryProps,
  ProjectProps,
  ProjectQueryProps,
} from '@interfaces/query'

interface ProjetosProps {
  projects: ProjectProps[]
  pageProps: PageProps
}

export default function Projetos({ projects, pageProps }: ProjetosProps) {
  return (
    <>
      <Projects projects={projects} pageProps={pageProps} />
    </>
  )
}

export async function getStaticProps() {
  const projectsQuery: ProjectQueryProps = await fetchContent(`
    query projectCollectionQuery {
      projectCollection {
        items {
          title
          description
          embed
          current
          shortDescription
          image
        }
      }
    }
  `)

  const pageQuery: PageQueryProps = await fetchContent(`
  query pageEntryQuery {
    page(id: "7GYTZ9VOcdxjrO6JNVNys6") {
      title
      description
      projectFilterCurrent
      projectFilterOld
    }
  }
  `)

  const projects = projectsQuery.projectCollection.items

  const pageProps = pageQuery.page

  return {
    props: {
      projects,
      pageProps,
    },
  }
}

import { fetchContent } from '@functions/fetchGraphQL'
import Projects from '@pageComponents/Projects/index'
import { CloudinaryItem } from 'src/types/cloudinary'

export interface ProjectProps {
  sys: {
    id: string
  }
  slug: string
  title: string
  description: string
  shortDescription: string
  image: CloudinaryItem[]
  current: boolean
  embed: string
  highlighted: boolean
}

export interface ProjectQueryProps {
  projectCollection: {
    items: ProjectProps[]
  }
}

interface ProjetosProps {
  projects: ProjectProps[]
}

export default function Projetos({ projects }: ProjetosProps) {
  return (
    <>
      <Projects projects={projects} />
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

  const projects = projectsQuery.projectCollection.items

  return {
    props: {
      projects,
    },
  }
}

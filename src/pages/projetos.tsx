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
  image: {
    cloudinary: CloudinaryItem[]
  }
  current: boolean
  embed: string
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
  // const items = await fetchContentful({ type: 'tile', locale })
  const projectsQuery: ProjectQueryProps = await fetchContent(`
    query projectCollectionQuery {
      projectCollection {
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

  const projects = projectsQuery.projectCollection.items

  return {
    props: {
      projects,
    },
  }
}

import { CloudinaryItem } from '@interfaces/cloudinary'

export interface ProjectsCollectionProps {
  title: string
  audioLink: CloudinaryItem[]
  description: string
}

export interface PageProps {
  title: string
  description: string
  aboutTitle: string
  aboutDescription: string
  aboutImage: CloudinaryItem[]
  projectFilterCurrent: string
  projectFilterOld: string
  howTitle: string
  firstHowTitle: string
  firstProjectsCollection: {
    items: ProjectsCollectionProps[]
  }
  secondHowTitle: string
  secondProjectsCollection: {
    items: ProjectsCollectionProps[]
  }
  thirdHowTitle: string
  thirdProjectsCollection: {
    items: ProjectsCollectionProps[]
  }
}

export interface PageQueryProps {
  page: PageProps[]
}

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

import { CloudinaryItem } from '@interfaces/cloudinary'

export interface ProjectsCollectionProps {
  title: string
  audioLink: CloudinaryItem[]
}

export interface PageProps {
  slug: string
  title: string
  description: string

  aboutTitle: string
  aboutDescription: string
  aboutImage: CloudinaryItem[]
  projectFilterCurrent: string
  projectFilterOld: string

  howTitle: string
  firstHowTitle: string
  firstHowDescription: string
  firstProjectsCollection: {
    items: ProjectsCollectionProps[]
  }
  secondHowTitle: string
  secondHowDescription: string
  secondProjectsCollection: {
    items: ProjectsCollectionProps[]
  }
  thirdHowTitle: string
  thirdHowDescription: string
  thirdProjectsCollection: {
    items: ProjectsCollectionProps[]
  }

  homeMainButton: string
  homeImage: CloudinaryItem[]
  homePodcastsTitle: string
  homeHowItWorksTitle: string
  homeHighlightedTitle: string

  footerName: string
  footerNamePlaceholder: string
  footerEmail: string
  footerEmailPlaceholder: string
  footerMessage: string
  footerMessagePlaceholder: string
  footerButton: string
  footerImage: CloudinaryItem[]
  footerSocial: {
    facebook: string
    twitter: string
    instagram: string
    linkedin: string
    soundcloud: string
    twitch: string
    whatsapp: string
    telegram: string
  }
  footerSubTitle: string
  footerSubDescription: string
}

export interface PageQueryProps {
  page: PageProps
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

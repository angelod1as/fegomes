/* eslint-disable no-use-before-define */
// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface ICloudinaryFields {
  /** Contentful */
  contentful: Record<string, any>

  /** Title */
  title: string

  /** Alt description */
  altDescription?: string | undefined

  /** Caption */
  caption?: string | undefined

  /** Decorators */
  decorators?: string[] | undefined
}

/** Cloudinary references */

export interface ICloudinary extends Entry<ICloudinaryFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'cloudinary'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IEmbedFields {
  /** Title */
  title: string

  /** Embed */
  embed?: string | undefined

  /** Youtube ID */
  youtubeId?: string | undefined

  /** Code */
  code?: string | undefined
}

/** External embeds — HTML or others  */

export interface IEmbed extends Entry<IEmbedFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'embed'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IProjectFields {
  /** date */
  date: string

  /** Title */
  title: string

  /** Slug */
  slug: string

  /** Description */
  description: string

  /** Live URL */
  live?: string | undefined

  /** Repository */
  repository?: string | undefined

  /** Tags */
  tags: ITags[]

  /** Cover image */
  coverImage?: Record<string, any> | undefined

  /** Summary */
  summary?: Document | undefined

  /** Excerpt */
  excerpt?: string | undefined

  /** Content */
  content?: Document | undefined
}

/** Project or Tile Page */

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'project'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface ITagsFields {
  /** Title */
  title: string
}

/** Project tags */

export interface ITags extends Entry<ITagsFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'tags'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface ITileFields {
  /** Title */
  title: string

  /** Slug */
  slug: string

  /** Order */
  order: number

  /** Type */
  type: 'text' | 'projects'

  /** Has "I Do"? */
  hasido: boolean

  /** Content */
  content?: Entry<{ [fieldId: string]: unknown }> | undefined

  /** Internal redirect */
  internalRedirect?: Entry<{ [fieldId: string]: unknown }> | undefined

  /** Redirect link */
  redir?: string | undefined
}

/** Home page tile */

export interface ITile extends Entry<ITileFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'tile'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'cloudinary' | 'embed' | 'project' | 'tags' | 'tile'

export type LOCALE_CODE = 'en-US' | 'pt-BR'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
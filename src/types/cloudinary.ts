/* eslint-disable camelcase */

export interface CloudinaryItem {
  public_id: string
  format: string
  version: number
  resource_type: string
  type: string
  placeholder: boolean
  created_at: string
  bytes: number
  width: number
  height: number
  backup: boolean
  access_mode: string
  url: string
  secure_url: string
  tags: Array<string>
  context: Record<string, unknown>
  next_cursor: string
  derived_next_cursor: string
  exif: Record<string, unknown>
  image_metadata: Record<string, unknown>
  faces: number[][]
  quality_analysis: number
  colors: string[][]
  derived: Array<string>
  moderation: Record<string, unknown>
  phash: string
  predominant: Record<string, unknown>
  coordinates: Record<string, unknown>
  access_control: Array<string>
  pages: number

  [futureKey: string]: any
}

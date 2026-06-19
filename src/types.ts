export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

// ── App Landing Page Types ──

export interface AppTheme {
  color: string
  primary: string
  primaryLight: string
  primaryDark: string
  accent: string
}

export interface AppScreenshot {
  label: string
  image?: string
  alt: string
}

export interface AppFeature {
  name: string
  description: string
  icon: string
}

export interface AppConfig {
  slug: string
  name: string
  tagline: string
  description: string
  keywords: string
  category: string
  os: string
  price: string
  status: string
  emoji: string
  downloadUrl: string
  theme: AppTheme
  screenshots: AppScreenshot[]
  features: AppFeature[]
}
export type LandingLocale = 'es' | 'en'

export interface LandingHome {
  heroTitleLine1: string
  heroTitleLine2: string
  heroParagraphs: string[]
  bookTitleLine1: string
  bookTitleLine2: string
  bookParagraphs: string[]
}

export interface LandingAbout {
  title: string
  paragraphs: string[]
  image?: string
}

export interface LandingReflectionCard {
  id?: string
  title: string
  description: string
  image: string
  route: string
}

export interface LandingReflections {
  title: string
  intro: string
  cards: LandingReflectionCard[]
}

export interface LandingPayload {
  home: LandingHome
  about: LandingAbout
  sessions: Record<string, unknown>
  reflections: LandingReflections
}

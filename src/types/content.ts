export interface ContentHome {
  quote: string
  quoteAuthor: string
  heroTitleLine1: string
  heroTitleLine2: string
  heroParagraphs: string[]
  therapyTitle: string
  therapyParagraphs: string[]
  bookTitleLine1: string
  bookTitleLine2: string
  bookParagraphs: string[]
}

export interface ContentAbout {
  title: string
  paragraphs: string[]
  image?: string
  education?: ContentAboutTimelineItem[]
  experience?: ContentAboutTimelineItem[]
  complementaryEducation?: ContentAboutTimelineItem[]
  artisticTitle?: string
  artisticLead?: string
  artisticParagraphs?: string[]
  poemTitle?: string
  poemLines?: string[]
  paintingsTitle?: string
  paintingsText?: string
  paintingsImage?: string
}

export interface ContentAboutTimelineItem {
  date: string
  title: string
  subtitle?: string
  text: string
}

export interface ContentSessions {
  heroTitle: string
  introTitle: string
  introText: string
  introText2?: string
  focusSubtitle: string
  focusTitle: string
  focusParagraphs: string[]
  focusAreasTitle?: string
  focusAreasText?: string
  focusAreasItems?: string[]
  certificationsTitle?: string
  certificationsText?: string
  certificationsItems?: string[]
  scheduleTitle?: string
  scheduleNote?: string
  scheduleItems?: ContentSessionsScheduleItem[]
  pricingTitle?: string
  pricingItems?: ContentSessionsPriceItem[]
  mapTitle?: string
  mapNote?: string
  mapEmbedUrl?: string
}

export interface ContentSessionsScheduleItem {
  label: string
  value: string
}

export interface ContentSessionsPriceItem {
  label: string
  price: string
  note?: string
}

export interface ContentReflectionCard {
  id?: string
  title: string
  description: string
  image: string
  route: string
}

export interface ContentReflections {
  title: string
  intro: string
  cards: ContentReflectionCard[]
}

export interface ContentReflectionSection {
  title?: string
  paragraphs: string[]
}

export interface ContentReflectionArticle {
  id: string
  title: string
  excerpt?: string
  image?: string
  sections: ContentReflectionSection[]
}

export interface ContentBodies {
  title1: string
  paragraphs1: string[]
  title2: string
  paragraphs2: string[]
}

export interface ContentControl {
  title: string
  paragraphs: string[]
}

export interface ContentCarta {
  title: string
  paragraphs: string[]
}

export interface ContentCarouselItem {
  image: string
  title: string
  description: string
  buttonText: string
  link: string
  external?: boolean
}

export type ContentCarousel = ContentCarouselItem[]

export interface ContentPayload {
  home: ContentHome
  about: ContentAbout
  sessions: ContentSessions
  reflections: ContentReflections
  reflectionArticles: ContentReflectionArticle[]
  bodies: ContentBodies
  control: ContentControl
  carta: ContentCarta
  carousel: ContentCarousel
}

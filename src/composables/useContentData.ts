import { computed, unref } from 'vue'
import type { Ref } from 'vue'
import type { ContentPayload } from '~/types/content'

export const useContentData = (locale: Ref<string>) => {
  const emptyFallback: ContentPayload = {
    home: {
      quote: '',
      quoteAuthor: '',
      heroTitleLine1: '',
      heroTitleLine2: '',
      heroParagraphs: [],
      therapyTitle: '',
      therapyParagraphs: [],
      bookTitleLine1: '',
      bookTitleLine2: '',
      bookParagraphs: []
    },
    about: {
      title: '',
      paragraphs: [],
      image: '',
      education: [],
      experience: [],
      complementaryEducation: [],
      artisticTitle: '',
      artisticLead: '',
      artisticParagraphs: [],
      poemTitle: '',
      poemLines: [],
      paintingsTitle: '',
      paintingsText: '',
      paintingsImage: ''
    },
    sessions: {
      heroTitle: '',
      introTitle: '',
      introText: '',
      focusSubtitle: '',
      focusTitle: '',
      focusParagraphs: [],
      focusAreasTitle: '',
      focusAreasText: '',
      focusAreasItems: [],
      certificationsTitle: '',
      certificationsText: '',
      certificationsItems: [],
      scheduleTitle: '',
      scheduleNote: '',
      scheduleItems: [],
      pricingTitle: '',
      pricingItems: [],
      mapTitle: '',
      mapNote: '',
      mapEmbedUrl: ''
    },
    reflections: {
      title: '',
      intro: '',
      cards: []
    },
    reflectionArticles: [],
    bodies: {
      title1: '',
      paragraphs1: [],
      title2: '',
      paragraphs2: []
    },
    control: {
      title: '',
      paragraphs: []
    },
    carta: {
      title: '',
      paragraphs: []
    },
    carousel: []
  }

  const { data, pending, error, refresh } = useAsyncData<ContentPayload>(
    'content-data',
    // Mock API request. Swap `/api/content` with your real backend when ready.
    () => $fetch('/api/content', { query: { locale: unref(locale) } }),
    {
      // Re-fetch content whenever the active locale changes.
      watch: [locale],
      // Keep an empty fallback so templates don't read undefined values.
      default: () => emptyFallback
    }
  )

  const contentData = computed(() => data.value || emptyFallback)

  return { contentData, pending, error, refresh }
}

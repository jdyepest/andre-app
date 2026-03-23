import { computed, unref } from 'vue'
import type { Ref } from 'vue'
import type { LandingPayload } from '~/types/landing'

export const useLandingData = (locale: Ref<string>) => {
  const emptyFallback: LandingPayload = {
    home: {
      heroTitleLine1: '',
      heroTitleLine2: '',
      heroParagraphs: [],
      bookTitleLine1: '',
      bookTitleLine2: '',
      bookParagraphs: []
    },
    about: {
      title: '',
      paragraphs: []
    },
    sessions: {},
    reflections: {
      title: '',
      intro: '',
      cards: []
    }
  }

  const { data, pending, error, refresh } = useAsyncData<LandingPayload>(
    'landing-data',
    // Mock API request. Swap `/api/landing` with your real backend when ready.
    () => $fetch('/api/landing', { query: { locale: unref(locale) } }),
    {
      // Re-fetch landing data whenever the active locale changes.
      watch: [locale],
      // Provide a lightweight fallback to avoid undefined reads before the fetch resolves.
      default: () => emptyFallback
    }
  )

  const landing = computed(() => data.value || emptyFallback)

  return { landing, pending, error, refresh }
}

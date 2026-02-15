import { computed, unref } from 'vue'
import type { Ref } from 'vue'
import { content } from '~/data/content'
import type { LandingPayload } from '~/types/landing'

export const useLandingData = (locale: Ref<string>) => {
  const getFallback = (): LandingPayload => {
    const current = unref(locale) === 'en' ? 'en' : 'es'
    return {
      home: content.home[current],
      about: content.about[current],
      sessions: content.sessions[current],
      reflections: content.reflections[current]
    }
  }

  const { data, pending, error, refresh } = useAsyncData<LandingPayload>(
    'landing-data',
    () => $fetch('/api/landing', { query: { locale: unref(locale) } }),
    {
      // Re-fetch mock API data when the active locale changes.
      watch: [locale],
      // Provide a synchronous fallback to avoid layout shifts on first paint.
      default: getFallback
    }
  )

  const landing = computed(() => data.value || getFallback())

  return { landing, pending, error, refresh }
}

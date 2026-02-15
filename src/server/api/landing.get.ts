import { getQuery } from 'h3'
import { content } from '~/data/content'
import type { LandingPayload } from '~/types/landing'

// Mock API response for landing data. Replace with real backend integration later.
export default defineEventHandler((event): LandingPayload => {
  const query = getQuery(event)
  const localeParam = Array.isArray(query.locale) ? query.locale[0] : query.locale
  const locale = localeParam === 'en' ? 'en' : 'es'

  return {
    home: content.home[locale],
    about: content.about[locale],
    sessions: content.sessions[locale],
    reflections: content.reflections[locale]
  }
})

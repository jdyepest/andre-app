import { getQuery } from 'h3'
import type { LandingPayload } from '~/types/landing'
import esMessages from '../../../i18n/locales/es.json'
import enMessages from '../../../i18n/locales/en.json'

// Mock API response for landing data. Replace with real backend integration later.
export default defineEventHandler((event): LandingPayload => {
  const query = getQuery(event)
  const localeParam = Array.isArray(query.locale) ? query.locale[0] : query.locale
  const locale = localeParam === 'en' ? 'en' : 'es'
  const messages = locale === 'en' ? enMessages : esMessages
  const content = messages.content as LandingPayload & { [key: string]: unknown }

  return {
    home: content.home,
    about: content.about,
    sessions: content.sessions ?? {},
    reflections: content.reflections
  }
})

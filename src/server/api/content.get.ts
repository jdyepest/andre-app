import { getQuery } from 'h3'
import type { ContentPayload } from '~/types/content'
import esMessages from '../../../i18n/locales/es.json'
import enMessages from '../../../i18n/locales/en.json'

// Mock API endpoint for all localized content. Replace with real backend later.
export default defineEventHandler((event): ContentPayload => {
  const query = getQuery(event)
  const localeParam = Array.isArray(query.locale) ? query.locale[0] : query.locale
  const locale = localeParam === 'en' ? 'en' : 'es'
  const messages = locale === 'en' ? enMessages : esMessages
  const content = messages.content as ContentPayload

  return {
    home: content.home,
    about: content.about,
    sessions: content.sessions,
    reflections: content.reflections,
    reflectionArticles: content.reflectionArticles ?? [],
    bodies: content.bodies,
    control: content.control,
    carta: content.carta,
    carousel: content.carousel
  }
})

<template>
  <div class="landing-page font-body" :class="{ 'is-loading': isLandingLoading }" :aria-busy="isLandingLoading">
    <div v-if="isLandingLoading" class="landing-loader" aria-hidden="true">
      <div class="landing-loader-bar"></div>
    </div>
    <Navbar></Navbar>
    <HeroSection
      image="/assets/therapy.jpg"
      :image-alt="heroImageAlt"
      :kicker="$t('landing.heroKicker')"
      :title-line1="page.heroTitleLine1 || ''"
      :title-line2="page.heroTitleLine2 || ''"
      :intro="heroIntroText"
      :contact-label="$t('buttons.contactCta')"
      :learn-more-label="$t('buttons.learnMore')"
      @contact="scrollTo('#contacto')"
      @about="scrollTo('#acerca')"
    ></HeroSection>
    <AboutSection
      :image="aboutImage"
      :image-alt="aboutImageAlt"
      :kicker="$t('nav.about')"
      :headline-lead="aboutHeadline.lead"
      :headline-accent="aboutHeadline.accent"
      :paragraphs="aboutParagraphs"
      :stats="aboutStats"
    ></AboutSection>
    <TherapySection
      :kicker="$t('nav.sessions')"
      :headline-lead="therapyHeadline.lead"
      :headline-accent="therapyHeadline.accent"
      :intro="therapyIntro"
      :cards="therapyCards"
    ></TherapySection>
    <ReflectionsSection
      :kicker="reflections.title"
      :headline-lead="reflectionsHeadline.lead"
      :headline-accent="reflectionsHeadline.accent"
      :intro="reflections.intro"
      :cards="reflectionCards"
      :read-more-label="$t('buttons.readMore')"
    ></ReflectionsSection>
    <BookSection
      :kicker="page.bookTitleLine1 || ''"
      :headline-lead="bookHeadline.lead"
      :headline-accent="bookHeadline.accent"
      :paragraphs="page.bookParagraphs || []"
      :image="bookImage"
      :image-alt="bookImageAlt"
    ></BookSection>
    <ContactSection
      :kicker="$t('sections.contactTitle')"
      :headline-lead="contactHeadline.lead"
      :headline-accent="contactHeadline.accent"
      :text="$t('sections.contactText')"
      :error-notice="$t('landing.errorNotice')"
      :show-error="hasLandingError"
      :links="contactLinks"
    ></ContactSection>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/landing/HeroSection.vue'
import AboutSection from '~/components/landing/AboutSection.vue'
import TherapySection from '~/components/landing/TherapySection.vue'
import ReflectionsSection from '~/components/landing/ReflectionsSection.vue'
import BookSection from '~/components/landing/BookSection.vue'
import ContactSection from '~/components/landing/ContactSection.vue'
import { useLandingData } from '~/composables/useLandingData'

const { locale, t, tm, rt } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
// Fetch landing data from the mock API and keep it reactive per locale.
const { landing, pending, error } = useLandingData(locale)
const isLandingLoading = computed(() => pending.value)
const hasLandingError = computed(() => Boolean(error.value))

const seoSiteUrl = computed(() => t('seo.siteUrl'))
const seoSiteName = computed(() => t('seo.siteName'))
const seoTitle = computed(() => t('seo.home.title'))
const seoDescription = computed(() => t('seo.home.description'))
const seoKeywords = computed(() => t('seo.home.keywords'))
const ogImagePath = computed(() => t('seo.home.ogImage'))
const canonicalUrl = computed(() => `${seoSiteUrl.value}${route.path}`)
const ogImageUrl = computed(() =>
  ogImagePath.value.startsWith('http') ? ogImagePath.value : `${seoSiteUrl.value}${ogImagePath.value}`
)

useSeoMeta({
  title: () => seoTitle.value,
  description: () => seoDescription.value,
  ogTitle: () => seoTitle.value,
  ogDescription: () => seoDescription.value,
  ogType: () => t('seo.ogType'),
  ogUrl: () => canonicalUrl.value,
  ogImage: () => ogImageUrl.value,
  ogSiteName: () => seoSiteName.value,
  twitterCard: () => t('seo.twitterCard'),
  twitterTitle: () => seoTitle.value,
  twitterDescription: () => seoDescription.value,
  twitterImage: () => ogImageUrl.value
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    { name: 'keywords', content: seoKeywords },
    { name: 'robots', content: () => t('seo.robots') }
  ]
})

const page = computed(() => landing.value?.home || {})
const about = computed(() => landing.value?.about || { paragraphs: [] })
const reflections = computed(() => landing.value?.reflections || { title: '', intro: '', cards: [] })

const heroIntroText = computed(() => {
  const paragraphs = page.value?.heroParagraphs || []
  return paragraphs[0] || ''
})

const heroImageAlt = computed(() => t('alts.landingHero'))
const aboutImageAlt = computed(() => t('alts.landingAbout'))
const bookImageAlt = computed(() => t('alts.landingBook'))

// tm() fetches non-string resources; rt() resolves message ASTs to plain strings.
const aboutHeadline = computed(() => ({
  lead: t('landing.aboutHeadline.lead'),
  accent: t('landing.aboutHeadline.accent')
}))
const therapyHeadline = computed(() => ({
  lead: t('landing.therapyHeadline.lead'),
  accent: t('landing.therapyHeadline.accent')
}))
const reflectionsHeadline = computed(() => ({
  lead: t('landing.reflectionsHeadline.lead'),
  accent: t('landing.reflectionsHeadline.accent')
}))
const bookHeadline = computed(() => ({
  lead: t('landing.bookHeadline.lead'),
  accent: t('landing.bookHeadline.accent')
}))
const contactHeadline = computed(() => ({
  lead: t('landing.contactHeadline.lead'),
  accent: t('landing.contactHeadline.accent')
}))
const therapyIntro = computed(() => t('landing.therapyIntro'))

const therapyIcons = [
  [
    'M3 7h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z',
    'M17 10l5-3v10l-5-3V10z'
  ],
  [
    'M12 2c3.314 0 6 2.686 6 6 0 4.5-6 14-6 14S6 12.5 6 8c0-3.314 2.686-6 6-6z',
    'M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
  ],
  [
    'M12 2c3.866 0 7 3.134 7 7 0 3.866-3.134 7-7 7-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7z',
    'M8 14l-1 6 5-3 5 3-1-6'
  ]
]

const therapyCards = computed(() => {
  const cards = tm('landing.therapyCards')
  if (!Array.isArray(cards)) return []
  return cards.map((card, index) => ({
    title: rt(card?.title || ''),
    text: rt(card?.text || ''),
    icon: therapyIcons[index] || []
  }))
})

const aboutImage = '/assets/andre1.jpg'
const bookImage = '/assets/libros.jpg'

const aboutStats = computed(() => [
  { value: '+5', label: t('landing.aboutStats.experience') },
  { value: '∞', label: t('landing.aboutStats.commitment') }
])

const aboutParagraphs = computed(() => {
  const paragraphs = about.value?.paragraphs || []
  if (!paragraphs.length) return []
  const firstSentences = paragraphs[0].split('. ').filter(Boolean).slice(0, 2).join('. ')
  const firstText = firstSentences ? `${firstSentences}.` : ''
  const secondText = paragraphs[1]
    ? `${paragraphs[1].split('. ').filter(Boolean).slice(0, 1).join('. ')}.`
    : ''
  return [firstText, secondText].filter(Boolean)
})

const reflectionCards = computed(() => {
  const cards = reflections.value?.cards || []
  return cards.map((card) => ({
    ...card,
    to: {
      path: localePath(card.route || '/reflexion'),
      query: card.id ? { id: card.id } : {}
    }
  }))
})

const contactLinks = computed(() => [
  {
    href: 'https://m.facebook.com/101364628375459?wtsid=rdr_0dPxI4AJkH3KylJhn',
    icon: '/assets/facebook.svg',
    alt: t('alts.socialFacebook')
  },
  {
    href: 'https://www.instagram.com/andrecreation_/',
    icon: '/assets/instagram.svg',
    alt: t('alts.socialInstagram')
  },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=crear.emotion.1998@gmail.com',
    icon: '/assets/mail.svg',
    alt: t('alts.socialEmail'),
    target: '_self'
  },
  {
    href: 'https://wa.me/+573187392384',
    icon: '/assets/whatsapp.svg',
    alt: t('alts.socialWhatsApp')
  }
])

const sameAsLinks = computed(() => contactLinks.value.map((link) => link.href))
const personSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: t('seo.person.name'),
  jobTitle: t('seo.person.jobTitle'),
  description: seoDescription.value,
  url: seoSiteUrl.value,
  image: ogImageUrl.value,
  sameAs: sameAsLinks.value
}))
const websiteSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: seoSiteName.value,
  url: seoSiteUrl.value
}))
const webpageSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: seoTitle.value,
  description: seoDescription.value,
  url: canonicalUrl.value,
  inLanguage: locale.value,
  isPartOf: {
    '@type': 'WebSite',
    name: seoSiteName.value,
    url: seoSiteUrl.value
  }
}))
const jsonLd = computed(() =>
  JSON.stringify([personSchema.value, websiteSchema.value, webpageSchema.value])
)

useHead({
  script: [
    {
      key: 'ld-json-home',
      type: 'application/ld+json',
      children: jsonLd
    }
  ]
})

const scrollTo = (href) => {
  if (href === '#inicio') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.querySelector(href)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth' })
}
</script>

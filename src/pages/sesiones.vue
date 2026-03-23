<template>
  <div class="sessions-page font-body">
    <Navbar></Navbar>

    <header class="sessions-hero">
      <div class="sessions-hero-bg" aria-hidden="true">
        <picture>
          <source v-if="heroAvifSrcset" type="image/avif" :srcset="heroAvifSrcset" sizes="100vw">
          <source v-if="heroWebpSrcset" type="image/webp" :srcset="heroWebpSrcset" sizes="100vw">
          <img
            src="/assets/solecito.webp"
            :alt="heroAlt"
            class="sessions-hero-image"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            :width="heroSize.width"
            :height="heroSize.height"
            :srcset="heroSrcset || undefined"
            sizes="100vw"
          >
        </picture>
        <div class="sessions-hero-overlay"></div>
        <div class="sessions-hero-glow"></div>
      </div>
      <div class="sessions-hero-content">
        <p class="hero-kicker">{{ $t('nav.sessions') }}</p>
        <h1 class="sessions-hero-title font-display">{{ page.heroTitle }}</h1>
        <p v-if="page.introText2" class="sessions-hero-text">{{ page.introText2 }}</p>
      </div>
    </header>

    <section class="section sessions-intro">
      <div class="section-shell sessions-intro-grid">
        <div class="sessions-intro-text">
          <p class="section-kicker sessions-kicker">{{ $t('nav.sessions') }}</p>
          <h2 class="section-title">{{ page.introTitle }}</h2>
          <p class="section-text">{{ page.introText }}</p>
          <div class="sessions-cta-row">
            <a href="https://wa.me/+573187392384" target="_blank" class="sessions-cta">
              {{ $t('buttons.contactCta') }}
            </a>
          </div>
        </div>
        <div class="sessions-intro-image">
          <div class="image-frame">
            <picture>
              <source v-if="introAvifSrcset" type="image/avif" :srcset="introAvifSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
              <source v-if="introWebpSrcset" type="image/webp" :srcset="introWebpSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
              <img
                :src="introImage"
                :alt="introAlt"
                class="section-image"
                loading="lazy"
                decoding="async"
                :width="introSize.width"
                :height="introSize.height"
                :srcset="introSrcset || undefined"
                sizes="(min-width: 1024px) 50vw, 90vw"
              >
            </picture>
          </div>
        </div>
      </div>
    </section>

    <section class="section sessions-focus">
      <div class="section-shell sessions-focus-grid">
        <div class="sessions-focus-image">
          <div class="image-frame">
            <picture>
              <source v-if="focusAvifSrcset" type="image/avif" :srcset="focusAvifSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
              <source v-if="focusWebpSrcset" type="image/webp" :srcset="focusWebpSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
              <img
                :src="focusImage"
                :alt="focusAlt"
                class="section-image"
                loading="lazy"
                decoding="async"
                :width="focusSize.width"
                :height="focusSize.height"
                :srcset="focusSrcset || undefined"
                sizes="(min-width: 1024px) 50vw, 90vw"
              >
            </picture>
          </div>
        </div>
        <div class="sessions-focus-text">
          <p class="section-kicker sessions-kicker">{{ page.focusSubtitle }}</p>
          <h2 class="section-title">
            {{ page.focusTitle }}
          </h2>
          <p
            v-for="(paragraph, idx) in page.focusParagraphs"
            :key="`focus-${idx}`"
            class="section-text"
          >
            {{ paragraph }}
          </p>
          <div class="sessions-cta-row">
            <a href="https://wa.me/+573187392384" target="_blank" class="sessions-cta">
              {{ $t('buttons.contactCta') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section sessions-focuslist">
      <div class="section-shell sessions-focuslist-grid">
        <div class="sessions-focuslist-text">
          <p class="section-kicker sessions-kicker">{{ $t('nav.sessions') }}</p>
          <h2 class="section-title">{{ page.focusAreasTitle }}</h2>
          <p class="section-text">{{ page.focusAreasText }}</p>
        </div>
        <ul class="sessions-focuslist-items">
          <li v-for="(item, idx) in page.focusAreasItems" :key="`focus-${idx}`" class="sessions-focuslist-item">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <section class="section sessions-certifications">
      <div class="section-shell sessions-cert-grid">
        <div>
          <p class="section-kicker sessions-kicker">{{ $t('nav.sessions') }}</p>
          <h2 class="section-title">{{ page.certificationsTitle }}</h2>
          <p class="section-text">{{ page.certificationsText }}</p>
        </div>
        <ul class="sessions-cert-list">
          <li v-for="(item, idx) in page.certificationsItems" :key="`cert-${idx}`" class="sessions-cert-item">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <section class="section sessions-info">
      <div class="section-shell sessions-info-grid">
        <div class="sessions-info-card">
          <h3 class="sessions-info-title font-display">{{ page.scheduleTitle }}</h3>
          <ul class="sessions-info-list">
            <li v-for="(item, idx) in page.scheduleItems" :key="`schedule-${idx}`">
              <span class="sessions-info-label">{{ item.label }}</span>
              <span class="sessions-info-value">{{ item.value }}</span>
            </li>
          </ul>
          <p class="sessions-info-note">{{ page.scheduleNote }}</p>
        </div>
        <div class="sessions-info-card">
          <h3 class="sessions-info-title font-display">{{ page.pricingTitle }}</h3>
          <div class="sessions-price-list">
            <div v-for="(item, idx) in page.pricingItems" :key="`price-${idx}`" class="sessions-price-row">
              <span class="sessions-info-label">{{ item.label }}</span>
              <span class="sessions-info-value">{{ item.price }}</span>
              <span v-if="item.note" class="sessions-price-note">{{ item.note }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section sessions-map">
      <div class="section-shell sessions-map-grid">
        <div>
          <p class="section-kicker sessions-kicker">{{ $t('nav.sessions') }}</p>
          <h2 class="section-title">{{ page.mapTitle }}</h2>
          <p class="section-text">{{ page.mapNote }}</p>
        </div>
        <div class="sessions-map-frame">
          <div v-if="page.mapEmbedUrl" class="sessions-map-embed">
            <iframe
              :src="page.mapEmbedUrl"
              :title="mapFrameTitle"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div v-else class="sessions-map-placeholder">
            {{ $t('sections.mapPlaceholder') }}
          </div>
        </div>
      </div>
    </section>

    <ContactSection
      :kicker="$t('sections.contactTitle')"
      :headline-lead="contactHeadline.lead"
      :headline-accent="contactHeadline.accent"
      :text="$t('sections.contactText')"
      :error-notice="$t('landing.errorNotice')"
      :show-error="false"
      :links="contactLinks"
    ></ContactSection>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from '~/components/Navbar.vue'
import ContactSection from '~/components/landing/ContactSection.vue'
import { useContentData } from '~/composables/useContentData'
import { getFormatSrcset, getImageSize, getImageSrcset } from '~/utils/imageSizes'

const { locale, t } = useI18n()
const route = useRoute()
const { contentData } = useContentData(locale)
const page = computed(() => contentData.value.sessions || {})

const seoSiteUrl = computed(() => t('seo.siteUrl'))
const seoSiteName = computed(() => t('seo.siteName'))
const seoTitle = computed(() => t('seo.sessions.title'))
const seoDescription = computed(() => t('seo.sessions.description'))
const seoKeywords = computed(() => t('seo.sessions.keywords'))
const ogImagePath = computed(() => t('seo.sessions.ogImage'))
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

const heroAlt = computed(() => t('alts.sessionsHero'))
const heroSize = computed(() => getImageSize('/assets/solecito.webp'))
const heroSrcset = computed(() => getImageSrcset('/assets/solecito.webp'))
const heroWebpSrcset = computed(() => getFormatSrcset('/assets/solecito.webp', 'webp'))
const heroAvifSrcset = computed(() => getFormatSrcset('/assets/solecito.webp', 'avif'))

const introImage = '/assets/imagen_sesiones_3.jpg'
const focusImage = '/assets/imagen_sesiones_2.jpg'
const introSize = computed(() => getImageSize(introImage))
const focusSize = computed(() => getImageSize(focusImage))
const introSrcset = computed(() => getImageSrcset(introImage))
const focusSrcset = computed(() => getImageSrcset(focusImage))
const introWebpSrcset = computed(() => getFormatSrcset(introImage, 'webp'))
const introAvifSrcset = computed(() => getFormatSrcset(introImage, 'avif'))
const focusWebpSrcset = computed(() => getFormatSrcset(focusImage, 'webp'))
const focusAvifSrcset = computed(() => getFormatSrcset(focusImage, 'avif'))

const introAlt = computed(() => t('alts.sessionsIntro'))
const focusAlt = computed(() => t('alts.sessionsFocus'))
const mapFrameTitle = computed(() => t('alts.mapFrame'))

const contactHeadline = computed(() => ({
  lead: t('landing.contactHeadline.lead'),
  accent: t('landing.contactHeadline.accent')
}))

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
const serviceSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: seoTitle.value,
  serviceType: t('seo.sessions.serviceType'),
  description: seoDescription.value,
  provider: {
    '@type': 'Person',
    name: t('seo.person.name'),
    jobTitle: t('seo.person.jobTitle'),
    url: seoSiteUrl.value
  }
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
  JSON.stringify([personSchema.value, serviceSchema.value, webpageSchema.value])
)

useHead({
  script: [
    {
      key: 'ld-json-sessions',
      type: 'application/ld+json',
      children: jsonLd
    }
  ]
})
</script>

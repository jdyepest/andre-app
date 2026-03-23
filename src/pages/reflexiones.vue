<template>
  <div class="reflections-page font-body">
    <Navbar></Navbar>

    <header class="reflections-hero">
      <div class="reflections-hero-bg" aria-hidden="true">
        <picture>
          <source v-if="heroAvifSrcset" type="image/avif" :srcset="heroAvifSrcset" sizes="100vw">
          <source v-if="heroWebpSrcset" type="image/webp" :srcset="heroWebpSrcset" sizes="100vw">
          <img
            :src="heroImage"
            alt="Collage artistico"
            class="reflections-hero-image"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            :width="heroSize.width"
            :height="heroSize.height"
            :srcset="heroSrcset || undefined"
            sizes="100vw"
          >
        </picture>
        <div class="reflections-hero-overlay"></div>
        <div class="reflections-hero-glow"></div>
      </div>
      <div class="reflections-hero-content">
        <p class="hero-kicker">{{ $t('nav.reflections') }}</p>
        <h1 class="reflections-hero-title font-display">{{ page.title }}</h1>
        <p class="reflections-hero-text">{{ heroIntro }}</p>
      </div>
    </header>

    <section class="section reflections-section">
      <div class="section-shell">
        <div class="section-header reflections-header">
          <p class="section-kicker">{{ $t('nav.reflections') }}</p>
          <h2 class="section-title font-display">
            {{ reflectionsHeadline.lead }}
            <span class="section-title-accent">{{ reflectionsHeadline.accent }}</span>
          </h2>
          <p class="section-lead">{{ page.intro }}</p>
        </div>
        <div class="card-grid reflections-grid">
          <NuxtLink
            v-for="(card, idx) in reflectionCards"
            :key="`reflection-${idx}`"
            :to="card.to"
            class="reflection-card reflections-card"
          >
            <div class="reflection-image">
              <picture>
                <source v-if="getAvif(card.image)" type="image/avif" :srcset="getAvif(card.image)" sizes="(min-width: 1024px) 33vw, 90vw">
                <source v-if="getWebp(card.image)" type="image/webp" :srcset="getWebp(card.image)" sizes="(min-width: 1024px) 33vw, 90vw">
                <img
                  :src="card.image"
                  :alt="card.title"
                  loading="lazy"
                  decoding="async"
                  :width="getSize(card.image).width"
                  :height="getSize(card.image).height"
                  :srcset="getSrcset(card.image) || undefined"
                  sizes="(min-width: 1024px) 33vw, 90vw"
                >
              </picture>
            </div>
            <div class="reflection-body">
              <h3 class="reflection-title">{{ card.title }}</h3>
              <p class="reflection-text">{{ card.description }}</p>
              <span class="reflection-link">{{ $t('buttons.readMore') }}</span>
            </div>
          </NuxtLink>
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
import { useLocalePath } from '#i18n'
import Navbar from '~/components/Navbar.vue'
import ContactSection from '~/components/landing/ContactSection.vue'
import { useContentData } from '~/composables/useContentData'
import { getFormatSrcset, getImageSize, getImageSrcset } from '~/utils/imageSizes'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const { contentData } = useContentData(locale)
const page = computed(() => contentData.value.reflections || { title: '', intro: '', cards: [] })
const heroImage = '/assets/DKS2.jpg'
const heroSize = computed(() => getImageSize(heroImage))
const heroSrcset = computed(() => getImageSrcset(heroImage))
const heroWebpSrcset = computed(() => getFormatSrcset(heroImage, 'webp'))
const heroAvifSrcset = computed(() => getFormatSrcset(heroImage, 'avif'))

const heroIntro = computed(() => {
  const intro = page.value?.intro || ''
  const sentences = intro.split('. ').filter(Boolean).slice(0, 2).join('. ')
  return sentences ? `${sentences}.` : intro
})

const reflectionsHeadline = computed(() => ({
  lead: t('landing.reflectionsHeadline.lead'),
  accent: t('landing.reflectionsHeadline.accent')
}))

const reflectionCards = computed(() => {
  const cards = page.value?.cards || []
  return cards.map((card) => ({
    ...card,
    to: {
      path: localePath(card.route || '/reflexion'),
      query: card.id ? { id: card.id } : {}
    }
  }))
})

const contactHeadline = computed(() => ({
  lead: t('landing.contactHeadline.lead'),
  accent: t('landing.contactHeadline.accent')
}))

const contactLinks = [
  {
    href: 'https://m.facebook.com/101364628375459?wtsid=rdr_0dPxI4AJkH3KylJhn',
    icon: '/assets/facebook.svg',
    alt: 'Facebook'
  },
  {
    href: 'https://www.instagram.com/andrecreation_/',
    icon: '/assets/instagram.svg',
    alt: 'Instagram'
  },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=crear.emotion.1998@gmail.com',
    icon: '/assets/mail.svg',
    alt: 'Email',
    target: '_self'
  },
  {
    href: 'https://wa.me/+573187392384',
    icon: '/assets/whatsapp.svg',
    alt: 'WhatsApp'
  }
]

const getSize = (src) => getImageSize(src)
const getSrcset = (src) => getImageSrcset(src)
const getWebp = (src) => getFormatSrcset(src, 'webp')
const getAvif = (src) => getFormatSrcset(src, 'avif')
</script>

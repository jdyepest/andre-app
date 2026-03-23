<template>
  <div class="about-page">
    <Navbar></Navbar>

    <header class="about-hero">
      <div class="about-hero-bg" aria-hidden="true">
        <picture>
          <source v-if="heroAvifSrcset" type="image/avif" :srcset="heroAvifSrcset" sizes="100vw">
          <source v-if="heroWebpSrcset" type="image/webp" :srcset="heroWebpSrcset" sizes="100vw">
          <img
            :src="heroImage"
            :alt="heroImageAlt"
            class="about-hero-image"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            :width="heroSize.width"
            :height="heroSize.height"
            :srcset="heroSrcset || undefined"
            sizes="100vw"
          >
        </picture>
        <div class="about-hero-overlay"></div>
        <div class="about-hero-fade"></div>
      </div>
      <div class="about-hero-content">
        <p class="hero-kicker">{{ $t('nav.about') }}</p>
        <h1 class="about-hero-title font-display">{{ page.title }}</h1>
        <p class="about-hero-lead">{{ heroIntro }}</p>
      </div>
    </header>

    <section class="section section-soft">
      <div class="section-shell about-story-grid">
        <div class="image-frame about-portrait">
          <picture>
            <source v-if="portraitAvifSrcset" type="image/avif" :srcset="portraitAvifSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
            <source v-if="portraitWebpSrcset" type="image/webp" :srcset="portraitWebpSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
            <img
              :src="page.image"
              :alt="portraitAlt"
              class="section-image"
              loading="lazy"
              decoding="async"
              :width="portraitSize.width"
              :height="portraitSize.height"
              :srcset="portraitSrcset || undefined"
              sizes="(min-width: 1024px) 50vw, 90vw"
            >
          </picture>
        </div>
        <div class="about-story">
          <p class="section-kicker">{{ $t('nav.about') }}</p>
          <h2 class="section-title font-display">
            {{ aboutHeadline.lead }}
            <span class="section-title-accent">{{ aboutHeadline.accent }}</span>
          </h2>
          <p class="section-lead">{{ page.title }}</p>
          <div class="about-copy">
            <p
              v-for="(paragraph, idx) in page.paragraphs"
              :key="`about-${idx}`"
              class="section-text about-text"
            >
              {{ paragraph }}
            </p>
          </div>

        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="section-shell about-art-grid">
        <div class="about-art-content">
          <p class="section-kicker">{{ $t('aboutPage.artisticKicker') }}</p>
          <h2 class="section-title font-display">
            {{ artisticTitle }}
            <span v-if="artisticLead" class="section-title-accent">{{ artisticLead }}</span>
          </h2>
          <p v-for="(paragraph, idx) in artisticParagraphs" :key="`art-${idx}`" class="section-text">
            {{ paragraph }}
          </p>
        </div>
        <div class="about-poem">
          <div class="poem-card">
            <p class="poem-kicker">{{ $t('aboutPage.poemKicker') }}</p>
            <h3 class="poem-title font-display">{{ poemTitle }}</h3>
            <div class="poem-body">
              <p v-for="(line, idx) in poemLines" :key="`poem-${idx}`" class="poem-line">
                {{ line }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="section-shell paintings-grid">
        <div class="paintings-media">
          <div class="image-frame painting-frame">
            <picture>
              <source v-if="paintingsAvifSrcset" type="image/avif" :srcset="paintingsAvifSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
              <source v-if="paintingsWebpSrcset" type="image/webp" :srcset="paintingsWebpSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
              <img
                :src="paintingsImage"
                :alt="paintingsAlt"
                class="section-image"
                loading="lazy"
                decoding="async"
                :width="paintingsSize.width"
                :height="paintingsSize.height"
                :srcset="paintingsSrcset || undefined"
                sizes="(min-width: 1024px) 50vw, 90vw"
              >
            </picture>
          </div>
        </div>
        <div class="paintings-content">
          <p class="section-kicker">{{ $t('aboutPage.paintingsKicker') }}</p>
          <h2 class="section-title font-display">{{ paintingsTitle }}</h2>
          <p class="section-text">{{ paintingsText }}</p>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="section-shell about-lists-section">
        <h2 class="section-title font-display about-title-center">{{ $t('aboutPage.profileTitle') }}</h2>
        <div class="about-simple-lists">
          <div class="about-simple-list">
            <h3 class="about-subtitle font-display">{{ $t('aboutPage.educationTitle') }}</h3>
            <ul class="about-item-list">
              <li v-for="(item, idx) in educationItems" :key="`edu-${idx}`" class="about-item">
                <h4 class="about-item-title font-display">{{ item.title }}</h4>
                <p class="about-item-meta">{{ item.subtitle }} · {{ item.date }}</p>
                <p class="about-item-text">{{ item.text }}</p>
              </li>
            </ul>
          </div>

          <div class="about-simple-list">
            <h3 class="about-subtitle font-display">{{ $t('aboutPage.complementaryTitle') }}</h3>
            <ul class="about-item-list">
              <li v-for="(item, idx) in complementaryEducationItems" :key="`comp-${idx}`" class="about-item">
                <h4 class="about-item-title font-display">{{ item.title }}</h4>
                <p class="about-item-meta">{{ item.subtitle }} · {{ item.date }}</p>
                <p class="about-item-text">{{ item.text }}</p>
              </li>
            </ul>
          </div>

          <div class="about-simple-list">
            <h3 class="about-subtitle font-display">{{ $t('aboutPage.experienceTitle') }}</h3>
            <ul class="about-item-list">
              <li v-for="(item, idx) in experienceItems" :key="`exp-${idx}`" class="about-item">
                <h4 class="about-item-title font-display">{{ item.title }}</h4>
                <p class="about-item-meta">{{ item.subtitle }} · {{ item.date }}</p>
                <p class="about-item-text">{{ item.text }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="section-shell about-timeline-section">
        <div class="timeline-scroller">
          <ol class="horizontal-timeline">
            <li
              v-for="(item, idx) in artTimelineItems"
              :key="`timeline-${idx}`"
              :class="['timeline-event', idx % 2 === 0 ? 'is-top' : 'is-bottom']"
            >
              <div class="timeline-card">
                <p class="timeline-date">{{ item.date }}</p>
                <p class="timeline-category">{{ item.category }}</p>
                <h4 class="timeline-title font-display">{{ item.title }}</h4>
                <p v-if="item.subtitle" class="timeline-subtitle">{{ item.subtitle }}</p>
                <p class="timeline-text">{{ item.text }}</p>
              </div>
            </li>
          </ol>
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
import { computed, nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from '~/components/Navbar.vue'
import ContactSection from '~/components/landing/ContactSection.vue'
import { useContentData } from '~/composables/useContentData'
import { getFormatSrcset, getImageSize, getImageSrcset } from '~/utils/imageSizes'

const { locale, t } = useI18n()
const { contentData } = useContentData(locale)
const page = computed(() => contentData.value.about || { title: '', paragraphs: [], image: '' })

const heroImage = '/assets/campo_lilas.jpg'
const heroSize = computed(() => getImageSize(heroImage))
const heroSrcset = computed(() => getImageSrcset(heroImage))
const heroWebpSrcset = computed(() => getFormatSrcset(heroImage, 'webp'))
const heroAvifSrcset = computed(() => getFormatSrcset(heroImage, 'avif'))

const heroImageAlt = computed(() =>
  locale.value === 'en' ? 'Lavender field' : 'Campo de lilas'
)

const portraitAlt = computed(() =>
  locale.value === 'en' ? 'Professional portrait' : 'Retrato profesional'
)

const portraitSize = computed(() => getImageSize(page.value?.image || ''))
const portraitSrcset = computed(() => getImageSrcset(page.value?.image || ''))
const portraitWebpSrcset = computed(() => getFormatSrcset(page.value?.image || '', 'webp'))
const portraitAvifSrcset = computed(() => getFormatSrcset(page.value?.image || '', 'avif'))

const heroIntro = computed(() => {
  const paragraph = page.value?.paragraphs?.[0] || ''
  if (!paragraph) return ''
  const sentences = paragraph.split('. ').filter(Boolean).slice(0, 2).join('. ')
  return sentences ? `${sentences}.` : paragraph
})

const aboutHeadline = computed(() => ({
  lead: t('landing.aboutHeadline.lead'),
  accent: t('landing.aboutHeadline.accent')
}))

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

const educationItems = computed(() => page.value?.education || [])
const experienceItems = computed(() => page.value?.experience || [])
const complementaryEducationItems = computed(() => page.value?.complementaryEducation || [])
const artisticTitle = computed(() => page.value?.artisticTitle || '')
const artisticLead = computed(() => page.value?.artisticLead || '')
const artisticParagraphs = computed(() => page.value?.artisticParagraphs || [])
const poemTitle = computed(() => page.value?.poemTitle || '')
const poemLines = computed(() => page.value?.poemLines || [])
const paintingsTitle = computed(() => page.value?.paintingsTitle || '')
const paintingsText = computed(() => page.value?.paintingsText || '')
const paintingsImage = computed(() => page.value?.paintingsImage || '/assets/ai_painting_placeholder.svg')
const paintingsSize = computed(() => getImageSize(paintingsImage.value))
const paintingsSrcset = computed(() => getImageSrcset(paintingsImage.value))
const paintingsWebpSrcset = computed(() => getFormatSrcset(paintingsImage.value, 'webp'))
const paintingsAvifSrcset = computed(() => getFormatSrcset(paintingsImage.value, 'avif'))
const paintingsAlt = computed(() =>
  locale.value === 'en' ? 'AI-generated painting' : 'Pintura generada por IA'
)

const artTimelineItems = computed(() => {
  const experience = experienceItems.value.slice(1)
  return [
    ...educationItems.value.map((item) => ({
      ...item,
      category: t('aboutPage.educationTitle')
    })),
    ...experience.map((item) => ({
      ...item,
      category: t('aboutPage.experienceTitle')
    })),
    ...complementaryEducationItems.value.map((item) => ({
      ...item,
      category: t('aboutPage.complementaryTitle')
    }))
  ]
})

let timelineObserver

const setupTimelineObserver = () => {
  if (typeof window === 'undefined') return
  const elements = Array.from(document.querySelectorAll('.timeline-event'))
  if (!elements.length) return
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'))
    return
  }
  if (timelineObserver) {
    timelineObserver.disconnect()
  }
  timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.2 }
  )
  elements.forEach((el) => timelineObserver.observe(el))
}

onMounted(() => {
  setupTimelineObserver()
})

watch(
  () => artTimelineItems.value.length,
  async () => {
    await nextTick()
    setupTimelineObserver()
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  if (timelineObserver) {
    timelineObserver.disconnect()
    timelineObserver = null
  }
})
</script>

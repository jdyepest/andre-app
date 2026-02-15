<template>
  <div class="landing-page font-body" :class="{ 'is-loading': isLandingLoading }" :aria-busy="isLandingLoading">
    <div v-if="isLandingLoading" class="landing-loader" aria-hidden="true">
      <div class="landing-loader-bar"></div>
    </div>
    <Navbar></Navbar>

    <section id="inicio" class="hero-section">
      <div class="hero-bg">
        <img src="/assets/therapy.jpg" alt="Espacio terapéutico" class="hero-image">
        <div class="hero-overlay"></div>
        <div class="hero-fade"></div>
      </div>
      <div class="hero-content">
        <p class="hero-kicker animate-fade-up" style="animation-delay: 0.2s">
          {{ $t('landing.heroKicker') }}
        </p>
        <h1 class="hero-title font-display animate-fade-up" style="animation-delay: 0.4s">
          {{ page.heroTitleLine1 }}
          <span class="hero-title-accent font-vintage-coquete">{{ page.heroTitleLine2 }}</span>
        </h1>
        <p class="hero-text animate-fade-up" style="animation-delay: 0.6s">
          {{ heroIntroText }}
        </p>
        <div class="hero-actions animate-fade-up" style="animation-delay: 0.8s">
          <button class="btn-primary" type="button" @click="scrollTo('#contacto')">
            {{ $t('buttons.contactCta') }}
          </button>
          <button class="btn-ghost" type="button" @click="scrollTo('#acerca')">
            {{ $t('buttons.learnMore') }}
          </button>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-track">
          <div class="scroll-dot"></div>
        </div>
      </div>
    </section>

    <section id="acerca" class="section section-soft">
      <div class="section-shell grid gap-12 md:grid-cols-2 items-center about-grid">
        <div class="image-frame">
          <img :src="aboutImage" alt="Andrea" class="section-image">
        </div>
        <div class="about-content">
          <p class="section-kicker">{{ $t('nav.about') }}</p>
          <h2 class="section-title font-display">
            {{ aboutHeadline.lead }}
            <span class="section-title-accent">{{ aboutHeadline.accent }}</span>
          </h2>
          <p v-for="(paragraph, idx) in aboutParagraphs" :key="`about-${idx}`" class="section-text">
            {{ paragraph }}
          </p>
          <div class="section-stats">
            <div class="stat">
              <span class="stat-value">+5</span>
              <span class="stat-label">{{ $t('landing.aboutStats.experience') }}</span>
            </div>
            <div class="stat">
              <span class="stat-value">∞</span>
              <span class="stat-label">{{ $t('landing.aboutStats.commitment') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="terapia" class="section section-light">
      <div class="section-shell">
        <div class="section-header">
          <p class="section-kicker">{{ $t('nav.sessions') }}</p>
          <h2 class="section-title font-display">
            {{ therapyHeadline.lead }}
            <span class="section-title-accent">{{ therapyHeadline.accent }}</span>
          </h2>
          <p class="section-lead">
            {{ therapyIntro }}
          </p>
        </div>
        <div class="card-grid therapy-grid">
          <div class="therapy-card" v-for="(card, idx) in therapyCards" :key="`therapy-${idx}`">
            <div class="therapy-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path v-for="(path, pIdx) in card.icon" :key="pIdx" :d="path" />
              </svg>
            </div>
            <h3 class="therapy-title">{{ card.title }}</h3>
            <p class="therapy-text">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="reflexiones" class="section section-soft">
      <div class="section-shell">
        <div class="section-header">
          <p class="section-kicker">{{ reflections.title }}</p>
          <h2 class="section-title font-display">
            {{ reflectionsHeadline.lead }}
            <span class="section-title-accent">{{ reflectionsHeadline.accent }}</span>
          </h2>
          <p class="section-lead">{{ reflections.intro }}</p>
        </div>
        <div class="card-grid">
          <NuxtLink
            v-for="(card, idx) in reflections.cards"
            :key="`reflection-${idx}`"
            :to="localePath(card.route)"
            class="reflection-card"
          >
            <div class="reflection-image">
              <img :src="card.image" :alt="card.title">
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

    <section id="libro" class="section section-book">
      <div class="section-shell grid gap-12 md:grid-cols-2 items-center book-grid">
        <div class="book-content">
          <p class="section-kicker">{{ page.bookTitleLine1 }}</p>
          <h2 class="section-title font-display">
            {{ bookHeadline.lead }}
            <span class="section-title-accent">{{ bookHeadline.accent }}</span>
          </h2>
          <p v-for="(paragraph, idx) in page.bookParagraphs" :key="`book-${idx}`" class="section-text">
            {{ paragraph }}
          </p>
        </div>
        <div class="image-frame book-image">
          <img :src="bookImage" alt="Libro El cajon de la noche" class="section-image">
        </div>
      </div>
    </section>

    <section id="contacto" class="section section-contact">
      <div class="section-shell">
        <div class="contact-card">
          <p class="section-kicker">{{ $t('sections.contactTitle') }}</p>
          <h2 class="section-title font-display">
            {{ contactHeadline.lead }}
            <span class="section-title-accent">{{ contactHeadline.accent }}</span>
          </h2>
          <p class="section-lead">{{ $t('sections.contactText') }}</p>
          <p v-if="hasLandingError" class="landing-error">
            {{ $t('landing.errorNotice') }}
          </p>
          <div class="contact-icons">
            <a href="https://m.facebook.com/101364628375459?wtsid=rdr_0dPxI4AJkH3KylJhn" target="_blank" class="contact-icon" rel="noopener">
              <img src="/assets/facebook.svg" alt="Facebook" class="h-6 w-6">
            </a>
            <a href="https://www.instagram.com/andrecreation_/" target="_blank" class="contact-icon" rel="noopener">
              <img src="/assets/instagram.svg" alt="Instagram" class="h-6 w-6">
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=crear.emotion.1998@gmail.com" class="contact-icon" rel="noopener">
              <img src="/assets/mail.svg" alt="Email" class="h-6 w-6">
            </a>
            <a href="https://wa.me/+573187392384" target="_blank" class="contact-icon" rel="noopener">
              <img src="/assets/whatsapp.svg" alt="WhatsApp" class="h-6 w-6">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'
import Navbar from '~/components/Navbar.vue'
import { useLandingData } from '~/composables/useLandingData'

const { locale, t, tm, rt } = useI18n()
const localePath = useLocalePath()
const { landing, pending, error } = useLandingData(locale)
const isLandingLoading = computed(() => pending.value)
const hasLandingError = computed(() => Boolean(error.value))

const page = computed(() => landing.value?.home || {})
const about = computed(() => landing.value?.about || { paragraphs: [] })
const reflections = computed(() => landing.value?.reflections || { title: '', intro: '', cards: [] })

const heroIntroText = computed(() => {
  const paragraphs = page.value?.heroParagraphs || []
  return paragraphs[0] || ''
})

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

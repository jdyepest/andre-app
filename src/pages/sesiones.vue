<template>
  <div class="sessions-page font-body">
    <Navbar></Navbar>

    <header class="sessions-hero">
      <div class="sessions-hero-bg" aria-hidden="true">
        <img src="/assets/solecito.webp" :alt="heroAlt" class="sessions-hero-image">
        <div class="sessions-hero-overlay"></div>
        <div class="sessions-hero-glow"></div>
      </div>
      <div class="sessions-hero-content">
        <p class="hero-kicker">{{ $t('nav.sessions') }}</p>
        <h1 class="sessions-hero-title font-display">{{ page.heroTitle }}</h1>
      </div>
    </header>

    <section class="section sessions-intro">
      <div class="section-shell sessions-intro-grid">
        <div class="sessions-intro-text">
          <p class="section-kicker sessions-kicker">{{ $t('nav.sessions') }}</p>
          <h2 class="section-title font-display">{{ page.introTitle }}</h2>
          <p class="section-text">{{ page.introText }}</p>
          <a href="https://wa.me/+573187392384" target="_blank" class="sessions-cta">
            {{ $t('buttons.contactCta') }}
          </a>
        </div>
        <div class="sessions-intro-image">
          <div class="image-frame">
            <img :src="introImage" :alt="introAlt" class="section-image">
          </div>
        </div>
      </div>
    </section>

    <section class="section sessions-focus">
      <div class="section-shell sessions-focus-grid">
        <div class="sessions-focus-image">
          <div class="image-frame">
            <img :src="focusImage" :alt="focusAlt" class="section-image">
          </div>
        </div>
        <div class="sessions-focus-text">
          <p class="section-kicker sessions-kicker">{{ page.focusSubtitle }}</p>
          <h2 class="section-title font-display">
            {{ page.focusTitle }}
          </h2>
          <p
            v-for="(paragraph, idx) in page.focusParagraphs"
            :key="`focus-${idx}`"
            class="section-text"
          >
            {{ paragraph }}
          </p>
          <a href="https://wa.me/+573187392384" target="_blank" class="sessions-cta">
            {{ $t('buttons.contactCta') }}
          </a>
        </div>
      </div>
    </section>

    <section class="section sessions-focuslist">
      <div class="section-shell sessions-focuslist-grid">
        <div class="sessions-focuslist-text">
          <p class="section-kicker sessions-kicker">{{ $t('nav.sessions') }}</p>
          <h2 class="section-title font-display">{{ page.focusAreasTitle }}</h2>
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
          <h2 class="section-title font-display">{{ page.certificationsTitle }}</h2>
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
          <h2 class="section-title font-display">{{ page.mapTitle }}</h2>
          <p class="section-text">{{ page.mapNote }}</p>
        </div>
        <div class="sessions-map-frame">
          <div v-if="page.mapEmbedUrl" class="sessions-map-embed">
            <iframe
              :src="page.mapEmbedUrl"
              title="Mapa"
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

const { locale, t } = useI18n()
const { contentData } = useContentData(locale)
const page = computed(() => contentData.value.sessions || {})

const heroAlt = computed(() =>
  locale.value === 'en' ? 'Therapy sessions' : 'Sesiones terapeuticas'
)

const introImage = '/assets/imagen_sesiones_3.jpg'
const focusImage = '/assets/imagen_sesiones_2.jpg'

const introAlt = computed(() =>
  locale.value === 'en' ? 'Guided sessions' : 'Acompanamiento terapeutico'
)

const focusAlt = computed(() =>
  locale.value === 'en' ? 'Therapy space' : 'Espacio de terapia'
)

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
</script>

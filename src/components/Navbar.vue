<template>
  <nav :class="navClass" :style="navStyle">
    <div class="nav-shell">
      <NuxtLink :to="localePath('/')" class="nav-brand">
        <span :class="['nav-brand-primary', { 'nav-brand-primary--scrolled': scrolled }]">Crear</span>
        <span :class="['nav-brand-secondary', { 'nav-brand-secondary--scrolled': scrolled }]">Terapia</span>
      </NuxtLink>

      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.href">
          <NuxtLink
            :to="item.href"
            class="nav-link"
            :class="{ 'nav-link--scrolled': scrolled }"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <button
        type="button"
        class="nav-toggle"
        :class="{ 'nav-toggle--scrolled': scrolled }"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <img src="/assets/buerger-46.svg" alt="Menu" class="h-6 w-6">
      </button>
    </div>

    <div v-if="showMenu" class="nav-mobile">
      <ul class="nav-mobile-links">
        <li v-for="item in navItems" :key="`mobile-${item.href}`">
          <NuxtLink :to="item.href" class="nav-mobile-link" @click="showMenu = false">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'

const props = defineProps({
  topBg: { type: String, default: '' }
})

const localePath = useLocalePath()
const { t } = useI18n()

const showMenu = ref(false)
const scrolled = ref(false)

const navItems = computed(() => [
  { label: t('nav.home'), href: localePath('/') },
  { label: t('nav.about'), href: localePath('/acerca-de-mi') },
  { label: t('nav.sessions'), href: localePath('/sesiones') },
  { label: t('nav.reflections'), href: localePath('/reflexiones') }
])

const navClass = computed(() => [
  'nav-root',
  scrolled.value ? 'nav-root--scrolled' : 'nav-root--top'
])

const navStyle = computed(() => {
  if (scrolled.value || !props.topBg) return {}
  return { background: props.topBg }
})

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 400ms ease;
}

.nav-root--top {
  background: transparent;
  padding: 1.25rem 0;
}

.nav-root--scrolled {
  background: rgba(20, 7, 36, 0.78);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 40px rgba(12, 3, 24, 0.35);
  padding: 0.75rem 0;
}

.nav-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  gap: 0.15rem;
  color: #fff;
}

.nav-brand-primary {
  color: rgba(234, 219, 255, 0.95);
}

.nav-brand-primary--scrolled {
  color: #f2e9ff;
}

.nav-brand-secondary {
  font-style: italic;
  color: rgba(234, 219, 255, 0.7);
}

.nav-brand-secondary--scrolled {
  color: rgba(255, 255, 255, 0.8);
}

.nav-links {
  list-style: none;
  display: none;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  transition: color 250ms ease;
}

.nav-link:hover {
  color: #eadbff;
}

.nav-link--scrolled {
  color: #f8f2ff;
}

.nav-toggle {
  background: transparent;
  border: none;
  color: #fff;
  display: inline-flex;
}

.nav-toggle--scrolled {
  color: #f8f2ff;
}

.nav-mobile {
  background: rgba(20, 7, 36, 0.92);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  animation: navFadeIn 300ms ease;
}

.nav-mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 0 2rem;
}

.nav-mobile-link {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }

  .nav-toggle {
    display: none;
  }
}

@keyframes navFadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

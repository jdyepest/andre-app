<template>
  <div class="article-page font-body">
    <Navbar top-bg="rgba(24, 12, 36, 0.92)"></Navbar>

    <section class="article-section">
      <div class="article-shell">
        <div class="article-card">
          <NuxtLink :to="localePath('/reflexiones')" class="article-back">
            ← {{ $t('nav.reflections') }}
          </NuxtLink>
          <header class="article-header">
            <p class="article-kicker">{{ $t('nav.reflections') }}</p>
            <h1 class="article-title font-display">{{ article?.title || '' }}</h1>
          </header>
          <div class="article-body">
            <template v-for="(section, idx) in articleSections" :key="`section-${idx}`">
              <h2 v-if="section.title" class="article-heading font-display">{{ section.title }}</h2>
              <p
                v-for="(paragraph, pIdx) in section.paragraphs"
                :key="`paragraph-${idx}-${pIdx}`"
                class="article-paragraph"
              >
                {{ paragraph }}
              </p>
            </template>
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
import { useContentData } from '~/composables/useContentData'

const { locale, t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const { contentData } = useContentData(locale)

const articles = computed(() => contentData.value.reflectionArticles || [])
const cards = computed(() => contentData.value.reflections?.cards || [])

const articleId = computed(() => {
  const raw = route.query.id
  return typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : ''
})

const article = computed(() => {
  if (!articleId.value) return articles.value[0]
  return articles.value.find((item) => item.id === articleId.value) || articles.value[0]
})

const articleSections = computed(() => {
  const sections = article.value?.sections || []
  if (sections.length) return sections
  return []
})

</script>

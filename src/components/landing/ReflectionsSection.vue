<template>
  <section id="reflexiones" class="section section-soft">
    <div class="section-shell">
      <div class="section-header">
        <p class="section-kicker">{{ kicker }}</p>
        <h2 class="section-title font-display">
          {{ headlineLead }}
          <span class="section-title-accent">{{ headlineAccent }}</span>
        </h2>
        <p class="section-lead">{{ intro }}</p>
      </div>
      <div class="card-grid">
        <NuxtLink
          v-for="(card, idx) in cards"
          :key="`reflection-${idx}`"
          :to="card.to"
          class="reflection-card"
        >
          <div class="reflection-image">
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
          </div>
          <div class="reflection-body">
            <h3 class="reflection-title">{{ card.title }}</h3>
            <p class="reflection-text">{{ card.description }}</p>
            <span class="reflection-link">{{ readMoreLabel }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getImageSize, getImageSrcset } from '~/utils/imageSizes'

defineProps({
  kicker: { type: String, required: true },
  headlineLead: { type: String, required: true },
  headlineAccent: { type: String, required: true },
  intro: { type: String, required: true },
  cards: { type: Array, default: () => [] },
  readMoreLabel: { type: String, required: true }
})

const getSize = (src) => getImageSize(src)
const getSrcset = (src) => getImageSrcset(src)
</script>

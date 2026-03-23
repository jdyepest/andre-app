<template>
  <section id="acerca" class="section section-soft">
    <div class="section-shell grid gap-12 md:grid-cols-2 items-center about-grid">
      <div class="image-frame">
        <img :src="image" :alt="imageAlt" class="section-image" loading="lazy" decoding="async">
      </div>
      <div class="about-content">
        <p class="section-kicker">{{ kicker }}</p>
        <h2 class="section-title font-display">
          {{ headlineLead }}
          <span class="section-title-accent">{{ headlineAccent }}</span>
        </h2>
        <p v-for="(paragraph, idx) in paragraphs" :key="`about-${idx}`" class="section-text">
          {{ paragraph }}
        </p>
        <div class="section-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  imageAlt: { type: String, default: 'Portrait' },
  kicker: { type: String, required: true },
  headlineLead: { type: String, required: true },
  headlineAccent: { type: String, required: true },
  paragraphs: { type: Array, default: () => [] },
  stats: { type: Array, default: () => [] }
})
</script>

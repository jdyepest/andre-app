<template>
  <section id="terapia" class="section section-light">
    <div class="section-shell">
      <div class="section-header">
        <p class="section-kicker">{{ kicker }}</p>
        <h2 class="section-title">
          {{ headlineLead }}
          <span class="section-title-accent">{{ headlineAccent }}</span>
        </h2>
        <p class="section-lead">{{ intro }}</p>
      </div>
      <div class="card-grid therapy-grid">
        <div class="therapy-card" v-for="(card, idx) in cards" :key="`therapy-${idx}`">
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
</template>

<script setup>
defineProps({
  kicker: { type: String, required: true },
  headlineLead: { type: String, required: true },
  headlineAccent: { type: String, required: true },
  intro: { type: String, required: true },
  cards: { type: Array, default: () => [] }
})
</script>

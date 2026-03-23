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
            <img :src="card.image" :alt="card.title">
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
defineProps({
  kicker: { type: String, required: true },
  headlineLead: { type: String, required: true },
  headlineAccent: { type: String, required: true },
  intro: { type: String, required: true },
  cards: { type: Array, default: () => [] },
  readMoreLabel: { type: String, required: true }
})
</script>

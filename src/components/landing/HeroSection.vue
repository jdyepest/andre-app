<template>
  <section id="inicio" class="hero-section">
    <div class="hero-bg">
      <img :src="image" :alt="imageAlt" class="hero-image">
      <div class="hero-overlay"></div>
      <div class="hero-fade"></div>
    </div>
    <div class="hero-content">
      <p class="hero-kicker animate-fade-up" style="animation-delay: 0.2s">
        {{ kicker }}
      </p>
      <h1 class="hero-title font-display animate-fade-up" style="animation-delay: 0.4s">
        {{ titleLine1 }}
        <span class="hero-title-accent font-vintage-coquete">{{ titleLine2 }}</span>
      </h1>
      <p class="hero-text animate-fade-up" style="animation-delay: 0.6s">
        {{ intro }}
      </p>
      <div class="hero-actions animate-fade-up" style="animation-delay: 0.8s">
        <button class="btn-primary" type="button" @click="emit('contact')">
          {{ contactLabel }}
        </button>
        <button class="btn-ghost" type="button" @click="emit('about')">
          {{ learnMoreLabel }}
        </button>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-track">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  imageAlt: { type: String, default: 'Hero image' },
  kicker: { type: String, required: true },
  titleLine1: { type: String, required: true },
  titleLine2: { type: String, required: true },
  intro: { type: String, required: true },
  contactLabel: { type: String, required: true },
  learnMoreLabel: { type: String, required: true }
})

const emit = defineEmits(['contact', 'about'])
</script>

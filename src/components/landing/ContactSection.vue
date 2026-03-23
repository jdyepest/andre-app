<template>
  <section id="contacto" class="section section-contact">
    <div class="section-shell">
      <div class="contact-card">
        <p class="section-kicker">{{ kicker }}</p>
        <h2 class="section-title">
          {{ headlineLead }}
          <span class="section-title-accent">{{ headlineAccent }}</span>
        </h2>
        <p class="section-lead">{{ text }}</p>
        <p v-if="showError" class="landing-error">{{ errorNotice }}</p>
        <div class="contact-icons">
          <a
            v-for="link in links"
            :key="link.alt"
            :href="link.href"
            :target="link.target || '_blank'"
            class="contact-icon"
            rel="noopener"
          >
            <img :src="link.icon" :alt="link.alt" class="h-6 w-6">
          </a>
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
  text: { type: String, required: true },
  errorNotice: { type: String, default: '' },
  showError: { type: Boolean, default: false },
  links: { type: Array, default: () => [] }
})
</script>

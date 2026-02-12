<template>
    <div class="bg-gradient-to-r from-purple-900 to-purple-500 h-full min-h-screen">
        <Navbar bck="pink" ></Navbar>
        <div class="flex flex-col items-center  p-10 ">
          <div class="w-full md:w-3/4 bg-transparent">
            <h1 class="text-5xl font-bold mb-6 text-center text-white">{{ page.title1 }}</h1>
            <p v-for="(paragraph, idx) in page.paragraphs1" :key="`cuerpo-1-${idx}`" class="text-xl text-purple-200 mb-10 text-justify">{{ paragraph }}</p>
            <h2 class="text-4xl font-bold mb-6 text-center text-white">{{ page.title2 }}</h2>
            <p v-for="(paragraph, idx) in page.paragraphs2" :key="`cuerpo-2-${idx}`" class="text-xl text-purple-200 text-justify">{{ paragraph }}</p>
          </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from '~/components/Navbar.vue'
import { content } from '~/data/content'

const { locale } = useI18n()
const page = computed(() => content.bodies[locale.value] || content.bodies.es)
</script>

<style scoped>
  .fondo{
    background-image: linear-gradient(to right, #a855f7, #ec4899);
  }
</style>

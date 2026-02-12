<template>
<div>
  <Navbar bck="blue"></Navbar>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 h-full md:h-full">
  <div class="flex justify-center items-center feminist-purple  h-[60vh] md:h-full "> 
    <div class="h-[90%] md:h-[90%] w-5/6 feminist-puple">
      <img :src="page.image" class="object-fill   w-full absoulute">
    </div>
  </div>

  <div class="h-full w-full feminist-purple ">
    <h1 class="text-center text-white mt-10 mb-10 md:mt-20 md:text-[90px] text-[45px] font-vintage-coquete">{{ page.title }}</h1>
    <p v-for="(paragraph, idx) in page.paragraphs" :key="`about-${idx}`" class="mx-10 text-justify text-white md:text-[20px] mb-5">
      {{ paragraph }}
    </p>
  </div>
</div>

<div class="contact-section bg-[#360269] h-2/5 w-full flex justify-center absolute">
    <div class="my-auto w-4/5">
      <div class="text-center">
        <h2 class="text-[24px] text-white">{{ $t('sections.contactTitle') }}</h2>
        <div class="text-center   text-white" >
          {{ $t('sections.contactText') }}
        </div>
        <div class="flex justify-center mt-4">
          <a href="https://m.facebook.com/101364628375459?wtsid=rdr_0dPxI4AJkH3KylJhn" target="_blank" class="mx-2">
            <img src="/assets/facebook.svg" alt="Facebook" class="h-8 w-8">
          </a>
          <a href="https://www.instagram.com/andrecreation_/" target="_blank" class="mx-2">
            <img src="/assets/instagram.svg" alt="Instagram" class="h-8 w-8">
          </a>
          <a href="mailto:crear.emotion.1998@gmail.com" class="mx-2">
            <img src="/assets/mail.svg" alt="Email" class="h-8 w-8">
          </a>
          <a href="https://wa.me/+573187392384" target="_blank" class="mx-2">
            <img src="/assets/whatsapp.svg" alt="WhatsApp" class="h-8 w-8">
          </a>
        </div>
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
const page = computed(() => content.about[locale.value] || content.about.es)
</script>

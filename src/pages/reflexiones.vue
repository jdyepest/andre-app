<template>
    <div class="h-screen">
      <Navbar bck="pink"></Navbar>

      <div class="md:h-[74%] h-[74%] relative">
          <img src="/assets/DKS2.jpg" alt="Slide image" class="object-fill w-full h-full">
          <div class="absolute bottom-[75%] left-[10%] w-4/5 text-white">
            <h2 class="text-center text-[61px] md:text-[86px] font-vintage-coquete ">{{ page.title }}</h2>
            </div>
            <div class="absolute bottom-[20%] md:bottom-[35%] left-[20%] w-3/5 text-white">
              <p class="mt-4  md:text-[22px] text-[16px] text-justify leading-normal">
                {{ page.intro }}
              </p>
          </div>
      </div>

      <div class="grid md:grid-cols-3 grid-cols-1 mt-10">
    <div v-for="item in page.cards" :key="item.title" class="thumbnail-item px-5">
      <div class="aspect-[0.9]">
        <img :src="item.image" :alt="item.title" class="object-fit w-full h-full" />
      </div>
      <h2 class="text-center text-xl my-5 text-violet-900">{{ item.title }}</h2>
      <p class="text-center mb-2 ">{{ item.description }}</p>
      <div class="flex justify-center items-center mb-10">
        <NuxtLink :to="localePath(item.route)" class="text-center underline hoover:no-underline">{{ $t('buttons.readMore') }}</NuxtLink>
      </div>
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
    </div>
  </template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'
import Navbar from '~/components/Navbar.vue'
import { content } from '~/data/content'

const { locale } = useI18n()
const localePath = useLocalePath()
const page = computed(() => content.reflections[locale.value] || content.reflections.es)
</script>

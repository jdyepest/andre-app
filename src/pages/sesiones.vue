<template>
      <Navbar bck="green"></Navbar>
      <div class="md:aspect-[2.7]  h-[40vh] md:h-full w-full relative">
        <img src='/assets/solecito.webp' alt="Slide image" class="object-fill w-full h-full">
        <div class="absolute bottom-[35%] left-[8%] md:left-[8%] w-4/5 text-white">
          <h1 class="text-center text-[80px] md:text-[144px] font-vintage-coquete ">{{ page.heroTitle }}</h1>
          </div>
    </div>
 <div class="md:h-[70vh] h-[80vh] w-full bg-purple-800">
  <div class="md:py-5 flex flex-col items-center justify-center h-full">
    <h1 class="md:text-[80px] text-[60px] font-bold mb-4 italic  text-white italic text-justify font-normal font-vintage-coquete">{{ page.introTitle }}</h1>
    <p class="w-4/5 text-white text-md text-justify md:text-xl">{{ page.introText }}</p>
    <div class="flex justify-center">
      <a href="https://wa.me/+573187392384" target="_blank" class="mx-2">
        <button class="self-start bg-purple-500 hover:bg-blue-700 text-white font-bold mt-20 md:text-lg py-2 px-4 rounded h-[10vh] md:mt-20 md:h-[10vh] md:w-[20vh] w-[20vh]">
          {{ $t('buttons.contactCta') }}
        </button>
      </a>
      </div>
  </div>
 </div>


    <div class="grid grid-cols-1 md:grid-cols-2 h-full md:h-full">
          <div class="flex justify-center items-center feminist-purple  h-[60vh] md:h-full order-2 md:order-1 "> 
            <div class="h-[90%] md:h-5/6 w-3/4 bg-blue-200">
          <img src="/assets/imagen_sesiones_2.jpg" class="object-fill md:object-cover max-h-full w-full">
    
  </div>
</div>
  
  <div class="feminist-purple font-sans  h-full md:h-full min-h-screen order-1 md:order-2">

      <AnimatedComponent t3="0.1">
        <div class="flex justify-evenly md:h-3/4 h-full flex flex-col mx-8 md:mr-10 mt-5 md:mt-10">
          <h2 class="md:text-[27px] text-[27px] font-bold mb-4 italic  text-white italic font-normal font-vintage-coquete">{{ page.focusSubtitle }}</h2>
          <h1 class="md:text-[78px] text-[52px] font-bold mb-4 italic text-center md:text-left  text-white italic font-normal font-vintage-coquete">{{ page.focusTitle }}</h1>
          <div>
          <p v-for="(paragraph, idx) in page.focusParagraphs" :key="`focus-${idx}`" class="text-md md:text-lg mb-8 text-white  text-justify">
            {{ paragraph }}
          </p>
        </div>
        <div class="flex justify-center mt-10 md:mt-0">
          <a href="https://wa.me/+573187392384" target="_blank" class="mx-2">
        <button class="self-start bg-purple-800 hover:bg-blue-700 text-white font-bold md:text-lg py-2 px-4 rounded md:mt-20 h-[10vh] w-[20vh]">
          {{ $t('buttons.contactCta') }}
        </button>
      </a>
      </div>
      </div>
      </AnimatedComponent>
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
import AnimatedComponent from '~/components/FadeA.vue'
import { content } from '~/data/content'

const { locale } = useI18n()
const page = computed(() => content.sessions[locale.value] || content.sessions.es)
</script>

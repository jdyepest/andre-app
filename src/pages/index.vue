<template>
 <div class="h-screen">
    <Navbar class="md:h-[16%] h-[13%] z-5"></Navbar>
    <Carousel></Carousel>
</div>  
      
<div class="bg-[#360269] h-screen w-full " >
  <div class="text-center px-5 mx-4 ">
    <AnimatedComponent>
      <div class="grid place-items-center justify-center h-screen w-full">
        <div>
          <p class="md:text-[42px] text-[22px] text-white font-vintage-coquete ">{{ page.quote }}</p>
          <p class="md:text-[20px] text-[12px] text-white mt-4">{{ page.quoteAuthor }}</p>
        </div>
      </div>
    </AnimatedComponent>
  </div>
</div>


 <div class="h-92">    
<div class="grid grid-cols-1 md:grid-cols-2 h-full md:h-full">
  <div class="h-full md:h-full flex justify-center items-center relative">
          <img src="/assets/andre1.jpg" class="object-fill max-h-full w-full absoulute">
  </div>
  
  <div class="feminist-purple font-sans  h-full md:h-full ">
      <AnimatedComponent>
        <div class="flex items-center justify-center h-screen">
        <div class=" mx-auto px-4">
          <h2 class="md:text-[78px] text-[52px] font-bold mb-4 italic  text-white italic font-normal font-vintage-coquete text-center">
            {{ page.heroTitleLine1 }} <br> {{ page.heroTitleLine2 }}
          </h2>
          <p v-for="(paragraph, idx) in page.heroParagraphs" :key="`hero-${idx}`" class="text-md md:text-lg mb-2 text-white md:px-5 text-justify">
            {{ paragraph }}
          </p>
        </div>
      </div>
      </AnimatedComponent>
  </div>
 
<div class="feminist-purple font-sans  h-screen md:h-full order-4 order-3 ">
      <AnimatedComponent>
        <div class="flex items-center justify-center h-screen">
        <div class="mx-auto px-4 ">
          <h2 class="md:text-[78px] text-[52px] font-bold mb-4 italic text-center md:text-left text-white italic font-normal font-vintage-coquete">{{ page.therapyTitle }}</h2>
          <p v-for="(paragraph, idx) in page.therapyParagraphs" :key="`therapy-${idx}`" class="text-lg text-white text-justify md:text-left ">
            {{ paragraph }}
          </p>
        </div>
      </div>
      </AnimatedComponent>
  </div>

  <div class="md:h-screen h-full flex justify-center items-center relative order-3 md:order-4">
          <img src="/assets/therapy.jpg" class="object-fill max-h-full w-full absoulute">
  </div>
  <div class="md:aspect-[4/3] md:w-full h-full flex justify-center items-center relative order-5">
          <img src="/assets/andre_con_libro1.jpg" class="object-fill w-full">
  </div>
  
  <div class="feminist-purple font-sans antialiased h-full order-6 grid place-items-center">
      <AnimatedComponent>
        <div class="grid place-items-center h-full">
        <div class=" mx-auto px-4 ">
          <h2 class="md:text-[78px] text-[52px] font-bold mb-4 italic text-center md:text-left text-white italic font-normal font-vintage-coquete">
            {{ page.bookTitleLine1 }} <br> {{ page.bookTitleLine2 }}
          </h2>
          <p v-for="(paragraph, idx) in page.bookParagraphs" :key="`book-${idx}`" class="text-lg mb-2 text-white text-justify md:text-justify">
            {{ paragraph }}
          </p>
        </div>
      </div>
      </AnimatedComponent>
  </div>
  
</div>

</div> 

<div class="contact-section bg-[#360269] h-3/5 w-full flex justify-center absolute">
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
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=crear.emotion.1998@gmail.com" class="mx-2">
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
import Carousel from '~/components/carousel.vue'
import AnimatedComponent from '~/components/FadeA.vue'
import { content } from '~/data/content'

const { locale } = useI18n()
const page = computed(() => content.home[locale.value] || content.home.es)
</script>

<style>
 .feminist-purple { 
            background-color: #9b51e0; /* Example purple color */
        }
</style>

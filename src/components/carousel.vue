<template>
<div class="md:h-[84%] h-[87%] z-4 overflow-hidden" >
  <div class="carousel relative h-full">
    <div class="carousel-inner  h-full">
    <TransitionGroup :name="slideDirection" tag="div">
      <div v-for="(slide, index) in slides" :key="slide.title" class="flex-none w-full h-full carousel-slider" v-show="index === currentSlide">
            <img :src="slide.image" alt="Slide image" class="object-fill w-full h-full">
            <div class="absolute md:bottom-[15%] md:left-[13%] bottom-5 left-[13%] bg-white bg-opacity-50 md:bg-opacity-75 p-5 rounded-lg w-3/4 text-violet-950">
              <h2 class="text-[1.5rem] md:text-[30px] mb-4 text-center font-vintage-coquete font-bold">{{ slide.title }}</h2>
              <p class="mb-4 text-[0.9rem] text-center md:text-xl font-sans">{{ slide.description }}</p>
              <NuxtLink v-if="!slide.external" :to="localePath(slide.link)" class="btn btn-blue text-center  font-sans">
                <div class="text-base md:text-l">
                {{ slide.buttonText }}
                </div>
              </NuxtLink>
              <a v-else :href="slide.link" target="_blank" rel="noopener" class="btn btn-blue text-center  font-sans">
                <div class="text-base md:text-l">
                {{ slide.buttonText }}
                </div>
              </a>
            </div>
      </div>
    </TransitionGroup>
      </div>
  
    <button @click="prevSlide" class="absolute top-1/2 left-0 ml-2 transform -translate-y-1/2 z-10 text-4xl">
      &larr;
    </button>
    <button @click="nextSlide" class="absolute top-1/2 right-0 mr-2 transform -translate-y-1/2 z-10 text-4xl">
      &rarr;
    </button>
  </div>
</div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'
import { content } from '~/data/content'

const { locale } = useI18n()
const localePath = useLocalePath()

const slides = computed(() => content.carousel[locale.value] || content.carousel.es)
const currentSlide = ref(0)
const slideDirection = ref('slide-right')
const touchStartX = ref(0)
const touchEndX = ref(0)

let carousel = null

const nextSlide = () => {
  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value += 1
  } else {
    currentSlide.value = 0
  }
  slideDirection.value = 'slide-right'
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value -= 1
  } else {
    currentSlide.value = slides.value.length - 1
  }
  slideDirection.value = 'slide-left'
}

const handleTouchStart = (event) => {
  touchStartX.value = event.changedTouches[0].clientX
}

const handleTouchMove = (event) => {
  touchEndX.value = event.changedTouches[0].clientX
}

const handleTouchEnd = () => {
  if (touchStartX.value - touchEndX.value > 50) {
    nextSlide()
  } else if (touchEndX.value - touchStartX.value > 50) {
    prevSlide()
  }
}

onMounted(() => {
  carousel = document.querySelector('.carousel-inner')
  if (!carousel) return
  carousel.addEventListener('touchstart', handleTouchStart)
  carousel.addEventListener('touchmove', handleTouchMove)
  carousel.addEventListener('touchend', handleTouchEnd)
})

onBeforeUnmount(() => {
  if (!carousel) return
  carousel.removeEventListener('touchstart', handleTouchStart)
  carousel.removeEventListener('touchmove', handleTouchMove)
  carousel.removeEventListener('touchend', handleTouchEnd)
})

watch(locale, () => {
  currentSlide.value = 0
})
</script>

<style scoped>

.slide-left-enter-active {
        animation: slide-left-in 0.8s ease-in;
    }
    .slide-left-leave-active {
        animation: slide-left-out 0.8s ease-in;
    }

    @keyframes slide-left-in{
        from  { transform: translateX(-100%);}
        to { transform: translateX(0);} 
    }

    @keyframes slide-left-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(100%);} 
    }
    

    .slide-right-enter-active {
        animation: slide-right-in 0.8s ease-in;
    }
    .slide-right-leave-active {
        animation: slide-right-out 0.8s ease-in;
    }
    @keyframes slide-right-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(-100%);} 
    }
    @keyframes slide-right-in{
        from  { transform: translateX(100%);}
        to { transform: translateX(0);} 
    }

.carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
  </style>

<template>
    
    <div class="carousel relative overflow-hidden md:aspect-[2.0] aspect-[1.3]">
      <div
        class="carousel-inner flex transition-transform duration-500 h-full"
        :style="`transform: translateX(-${currentSlide * 100}%)`"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full h-full flex-none relative"
        >
        <img :src="slide.imageSrc" alt="Slide image" class="object-fill  w-full h-full">

          
          <div class="absolute bottom-0 right-0 bg-white bg-opacity-50 p-5 rounded-l-lg">
            <h2 class="text-2xl mb-4">{{ slide.title }}</h2>
            <p class="mb-4">{{ slide.description }}</p>
            <router-link :to="slide.link" class="btn btn-blue">
              {{ slide.buttonText }}
            </router-link>
          </div>
        </div>
      </div>
      <button
      @click="prevSlide"
      class="absolute top-1/2 left-0 ml-2 transform -translate-y-1/2 z-10 text-4xl"
    >
      ←
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-0 mr-2 transform -translate-y-1/2 z-10 text-4xl"
    >
      →
    </button>

    </div>
  </template>
  
  <script>

import image2 from './image2.png'

import image4 from './image4.png'
import image5 from './image5.png'

  export default {
   

data() {
    return {
        currentSlide: 0,
        slides: [
            {
                imageSrc: image4, // <-- Use the imported image here
                title: 'Slide 1',
                description: 'This is the description for slide 1.',
                buttonText: 'Go to link 1',
                link: '/link1'
            },
            {
                imageSrc: image2,
                title: 'Slide 2',
                description: 'This is the description for slide 2.',
                buttonText: 'Go to link 2',
                link: '/link2'
            },
            {
                imageSrc: image5,
                title: 'Slide 3',
                description: 'This is the description for slide 3.',
                buttonText: 'Go to link 3',
                link: '/link3'
            }
        ]
    };
},

    methods: {

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      // Direct transition to the first slide
      
      this.currentSlide = 0;
      
    }
  },
  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      // Direct transition to the last slide
      this.disableTransition();
      this.currentSlide = this.slides.length - 1;
      this.$nextTick(this.enableTransition);
    }
  },
  disableTransition() {
    const carouselInner = this.$el.querySelector('.carousel-inner');
    carouselInner.style.transition = 'none';
  },
  enableTransition() {
    const carouselInner = this.$el.querySelector('.carousel-inner');
    carouselInner.style.transition = '';
  }


    }
  };
  </script>
  
  <style scoped>


  </style>
  
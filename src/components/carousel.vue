<template>
    
    <div class="carousel relative overflow-hidden md:aspect-[2.0] aspect-[1.3]">
      <div
        class="carousel-inner flex transition-transform duration-500 h-full"
        :style="`transform: translateX(-${currentSlide * 100}%)`"
      >
        
        
  <div
    v-for="(slide, index) in slides"
    :key="slide.title" class="flex-none w-full h-full"
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
import image6 from './image2.png'
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
            },
            {
                imageSrc: image6, // <-- Use the imported image here
                title: 'Slide 5',
                description: 'This is the description for slide 1.',
                buttonText: 'Go to link 1',
                link: '/link1'
            },
        ]
    };
},

computed: {
  orderedSlides() {
    let ordered = [];
    let total = this.slides.length;

    // Calculate the previous, current, and next slide indices
    let prev = (this.currentSlide - 1 + total) % total;
    let next = (this.currentSlide + 1) % total;

    // Rearrange slides
    ordered.push(this.slides[prev]);
    ordered.push(this.slides[this.currentSlide]);
    ordered.push(this.slides[next]);

    return ordered;
  }
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
      
      this.currentSlide = this.slides.length - 1;
      
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}


  </style>
  
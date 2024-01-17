<template>
<div >
  <div class="carousel relative overflow-hidden md:aspect-[2.0] lg:aspect-[2.4] aspect-[0.9]">
    <!-- Removed the transform style from the carousel-inner -->
    <div class="carousel-inner  h-full">
      <!-- Use v-show to display the current slide -->
    <TransitionGroup :name="slideDirection" tag="div">
      <div v-for="(slide, index) in slides" :key="slide" class="flex-none w-full h-full carousel-slider" v-show="index === currentSlide">
        <!-- Slide content -->
        
          
            <img :src="slide.imageSrc" alt="Slide image" class="object-fill w-full h-full">
            
          
            <div class="absolute md:bottom-[10%] md:left-[10%] bottom-5 left-10 bg-white bg-opacity-50 p-5 rounded-lg w-3/4 text-violet-950">
              <h2 class="text-base md:text-xl mb-4">{{ slide.title }}</h2>
              <p class="mb-4 text-xs md:text-xl">{{ slide.description }}</p>
              <router-link :to="slide.link" class="btn btn-blue">
                <div class="text-base md:text-l">
                {{ slide.buttonText }}
                </div>
              </router-link>
          
            </div>
          

      
      </div>
    </TransitionGroup>
      </div>
  
  
    <!-- Navigation buttons -->
    <button @click="prevSlide" class="absolute top-1/2 left-0 ml-2 transform -translate-y-1/2 z-10 text-4xl">
      ←
    </button>
    <button @click="nextSlide" class="absolute top-1/2 right-0 mr-2 transform -translate-y-1/2 z-10 text-4xl">
      →
    </button>
  </div>
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
                title: 'Acerca de mi',
                description: 'Psicóloga con formación psicoanalitica, de género y especialista en problemas de la infancia y adolescencia. Graduada de pregrado en la Universitaria del Valle y  posgrado  en la Universidad de Antioquia.',
                buttonText: 'conoce mas',
                link: '/About'
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
        ],
        slideDirection: 'slide-right',
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
    this.slideDirection = 'slide-right';
   
  },
  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      // Direct transition to the last slide
      
      this.currentSlide = this.slides.length - 1;
      
    }
    this.slideDirection = 'slide-left';
  },
  handleTouchStart(e) {
      this.touchStartX = e.changedTouches[0].clientX;
    },
    handleTouchMove(e) {
      this.touchEndX = e.changedTouches[0].clientX;
    },
    handleTouchEnd() {
      if (this.touchStartX - this.touchEndX > 50) {
        // Swiped left
        this.nextSlide();
      } else if (this.touchEndX - this.touchStartX > 50) {
        // Swiped right
        this.prevSlide();
      }
    },
  },
  mounted() {
    const carousel = this.$el.querySelector('.carousel-inner');
    carousel.addEventListener('touchstart', this.handleTouchStart);
    carousel.addEventListener('touchmove', this.handleTouchMove);
    carousel.addEventListener('touchend', this.handleTouchEnd);
  },
  beforeDestroy() {
    const carousel = this.$el.querySelector('.carousel-inner');
    carousel.removeEventListener('touchstart', this.handleTouchStart);
    carousel.removeEventListener('touchmove', this.handleTouchMove);
    carousel.removeEventListener('touchend', this.handleTouchEnd);
  },
};
  



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
  
<template>

  <div class="carousel relative overflow-hidden md:aspect-[2.0] aspect-[1.3]">
    <!-- Removed the transform style from the carousel-inner -->
    <div class="carousel-inner  h-full">
      <!-- Use v-show to display the current slide -->
    <TransitionGroup :name="slideDirection" tag="div">
      <div v-for="(slide, index) in slides" :key="slide" class="flex-none w-full h-full carousel-slider" v-show="index === currentSlide">
        <!-- Slide content -->
        
          <div >
            <img :src="slide.imageSrc" alt="Slide image" class="object-fill w-full h-full">
            
          
            <div class="absolute bottom-0 right-0 bg-white bg-opacity-50 p-5 rounded-l-lg">
              <h2 class="text-2xl mb-4">{{ slide.title }}</h2>
              <p class="mb-4">{{ slide.imageSrc }}</p>
              <router-link :to="slide.link" class="btn btn-blue">
                {{ slide.buttonText }}
              </router-link>
          
            </div>
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
  


    }
  };
  </script>
  
  <style scoped>
  .list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.slide-enter-active, .slide-leave-active {
  transition: opacity 4.5s;
}
.slide-enter, .slide-leave-to /* starting and ending state for leave */ {
  opacity: 0;
}
.slide-left-enter-active {
        animation: slide-left-in 0.5s ease-in;
    }
    .slide-left-leave-active {
        animation: slide-left-out 0.5s ease-in;
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
        animation: slide-right-in 0.5s ease-in;
    }
    .slide-right-leave-active {
        animation: slide-right-out 0.5s ease-in;
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
  
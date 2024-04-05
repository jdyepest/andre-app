<template>
<div class="md:h-[84%] h-[87%] z-4 overflow-hidden" >
  <div class="carousel relative h-full">
    <!-- Removed the transform style from the carousel-inner -->
    <div class="carousel-inner  h-full">
      <!-- Use v-show to display the current slide -->
    <TransitionGroup :name="slideDirection" tag="div">
      <div v-for="(slide, index) in slides" :key="slide" class="flex-none w-full h-full carousel-slider" v-show="index === currentSlide">
        <!-- Slide content -->
        
          
            <img :src="slide.imageSrc" alt="Slide image" class="object-fill w-full h-full">
            
          
            <div class="absolute md:bottom-[15%] md:left-[13%] bottom-5 left-[13%] bg-white bg-opacity-50 md:bg-opacity-75 p-5 rounded-lg w-3/4 text-violet-950">
              <h2 class="text-[1.5rem] md:text-[30px] mb-4 text-center font-vintage-coquete font-bold">{{ slide.title }}</h2>
              <p class="mb-4 text-[0.9rem] text-center md:text-xl font-sans">{{ slide.description }}</p>
              <router-link :to="slide.link" class="btn btn-blue text-center  font-sans">
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
                title: 'Acerca de mí',
                description: 'Psicóloga con formación psicoanalitica, de género y especialista en problemás de la infancia y adolescencia. Graduada de pregrado en la universidad del Valle y  posgrado  en la Universidad de Antioquia. Procuro un espacio de confianza para ir más allá del tratamiento de manera que se ofrezca un acompañamiento y atención singular en cada proceso.',
                buttonText: 'Conoce más',
                link: '/acerca de mi'
            },
            {
                imageSrc: image2,
                title: 'Terapia',
                description: 'Brindo sesiones de terapia psicoanalítica personalizadas, disponibles tanto en remoto para aquellos en distintas partes del mundo, con horarios flexibles que se adaptan a tu ritmo de vida, como presenciales en la ciudad de Cali, Colombia.',
                buttonText: 'Conoce más',
                link: '/sesiones'
            },
            {
                imageSrc: image6,
                title: 'reflexiones',
                description: 'En estas páginas me complace compartir algunos textos a partir de mi experiencia personal como psicóloga con pasión a la poesía, interesada en los diálogos de género, feministas y culturales, y comprometida con brindar espacios seguros en los acompañamientos psicoterapéuticos con enfoque psicoanalitico. Busco poder  trasmitir a través de pensamientos y sensaciones vívidas una proximidad de conocerme en mi labor.',
                buttonText: 'Conoce más',
                link: '/reflexiones'
            },
            {
                imageSrc: image5, // <-- Use the imported image here
                title: 'Contacto',
                description: 'Puedes contactarme a través de cualquiera de mis redes sociales si requieres más información o tienes alguna pregunta al respecto.',
                buttonText: 'Contacto',
                link: 'https://wa.me/+573187392384'
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
  
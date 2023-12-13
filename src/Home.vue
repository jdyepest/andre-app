<template>
    
      
      <carousel ></carousel>
      
<div class="bg-[#360269] h-3/5 w-full flex justify-center" >
  <div class="text-center px-5 my-auto w-4/5">
    <AnimatedComponent>
    <p class="md:text-[40px] text-[24px] text-white ">"{{ aboutText }}"</p>
    <p class="md:text-[20px] text-[12px] text-white mt-4">Jacques Lacan</p>
  </AnimatedComponent>
  </div>
</div>

      
      <div class="grid grid-cols-1 md:grid-cols-2 ">
        <div class="aspect-4/3">
        
          <img src="./assets/andre.jpg" class="w-full h-full">

        
        </div>
        
  
    <div class="feminist-purple font-sans antialiased h-92">
<AnimatedComponent>
<div class="container mx-auto px-4 py-8">
    <h2 class="text-[78px] font-bold mb-4 italic text-right text-white">Andrea Narváez <br> 'Path'</h2>
    
    <p class="text-lg mb-2 text-white text-right md:text-justify">
        Psicoanalista especializada en infancia, adolescencia y género. Egresada de la Universidad del Valle, con un enfoque terapéutico influenciado por las teorías de Jacques Lacan.
    </p>
    
    <p class="text-lg text-white text-right md:text-justify">
        Apasionada por la poesía, la escritura y el arte, integro la creatividad en mi práctica terapéutica para explorar y sanar, ofreciendo un espacio de acogida y comprensión para el bienestar y el autoconocimiento de mis pacientes.
    </p>
</div>
</AnimatedComponent>
    </div>
  </div>




      
    
  </template>
  
  <script>
  import { ref } from 'vue';
  
import carousel from './components/carousel.vue';
import AnimatedComponent from './fadeA.vue'
;
  
  export default {
    name: 'Home',
    setup() {
        const aboutText = ref("Lo que está en juego en el amor es precisamente la diferencia entre el ser y el semblante, entre el ser y la aparición, entre el amor y la imagen.");
        return {
            aboutText
        };
    },
    components: { carousel, AnimatedComponent}
}
  </script>

  <style>
 .feminist-purple { 
            background-color: #9b51e0; /* Example purple color */
        }
</style>
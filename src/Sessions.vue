<template>
    <div>
      
      <carousel></carousel>
      <div class="bg-[#360269] h-92" >
        <div class="text-center mx-auto px-4 w-1/2" >
        <i class="md:text-[56px] text-[24px] text-white static">{{ aboutText }}</i><br>
        <i class="md:text-[56px] text-[24px] text-white static">Jacques Lacan</i>
      </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 ">
        <div class="bg-pink-400 aspect-4/3">
          <img src="./assets/andre.jpeg" class="w-full">


        </div>
        <div class="bg-cyan-200 h-92 text-white">
         h Andre narvaez


        </div>

      </div>
      
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
import carousel from './components/carousel.vue';
  
  export default {
    name: 'Sessions',
    setup() {
        const aboutText = ref("Lo que está en juego en el amor es precisamente la diferencia entre el ser y el semblante, entre el ser y la aparición, entre el amor y la imagen.");
        return {
            aboutText
        };
    },
    components: { carousel }
}
  </script>
  
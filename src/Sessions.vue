<template>
    <div class="h-[74%]">
      
      <carousel></carousel>
      <div class="bg-[#360269] h-92" >
        <div class="text-center mx-auto px-4 w-1/2" >
        <i class="md:text-[56px] text-[24px] text-white static">{{ aboutText }}</i><br>
        <i class="md:text-[56px] text-[24px] text-white static">Jacques Lacan</i>
      </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 ">
        <div class="bg-pink-400 aspect-4/3">
          <img src="./assets/andre.jpg" class="w-full">


        </div>
        <div class="bg-cyan-200 h-92 text-black">
  <div class="max-w-md mx-auto p-4">
    <h2 class="text-[46px] font-bold mb-4 italic text-right md:text-justify">Andrea Narváez - 'Path'</h2>
    <p class="text-lg mb-2 text-right md:text-justify">Psicoanalista especializada en infancia, adolescencia y género. Egresada de la Universidad del Valle, con un enfoque terapéutico influenciado por las teorías de Jacques Lacan.</p>
    <p class="text-lg text-right md:text-justify">Apasionada por la poesía, la escritura y el arte, integro la creatividad en mi práctica terapéutica para explorar y sanar, ofreciendo un espacio de acogida y comprensión para el bienestar y el autoconocimiento de mis pacientes.</p>
  </div>



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
  
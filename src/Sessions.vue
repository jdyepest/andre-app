<template>

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
  
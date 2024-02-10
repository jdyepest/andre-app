<template>
    <div>
      <div class="relative md:aspect-[2.0] lg:aspect-[2.4] aspect-[0.9]">
        <div class="h-3/4 w-full">
          <img src=".\assets\reflection.jpg" alt="Slide image" class="object-fill w-full h-full">
          <div class="absolute bottom-[50%] left-[10%] w-4/5 text-white">
            <h2 class="text-base mb-10 text-center md:text-[72px]">Reflexiones</h2>
              <p class="mb-4 text-xs md:text-[14px] text-center">En estas páginas, me emociona poder compartir contigo reflexiones profundas desde la Psicología, la Filosofía, la Poesía y el Arte, desde un enfoque que abraza nuestras raíces y vivencias latinas, con un compromiso hacia la justicia social y el empoderamiento femenino. A través de un lente psicoanalítico, busco inspirarte y motivarte a encender tu propia chispa de creatividad y curiosidad, fomentando así tu crecimiento y desarrollo personal.</p>

          </div>
        </div>

      </div>



    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'Reflections',
    setup() {
      const reflections = ref([]);
  
      const fetchReflections = () => {
        // Mocking fetch with static data
        const data = [
          { id: 1, quote: "Vue.js is amazing!" },
          { id: 2, quote: "Simplicity is the ultimate sophistication." },
          { id: 3, quote: "Always keep learning." }
        ];
        reflections.value = data;
      };
  
      onMounted(fetchReflections);
  
      return {
        reflections
      };
    }
  }
  </script>
  
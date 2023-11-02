<template>
    <div>
      <h2>Reflections</h2>
      <ul>
        <li v-for="reflection in reflections" :key="reflection.id">{{ reflection.quote }}</li>
      </ul>
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
  
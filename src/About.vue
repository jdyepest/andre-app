<template>
    <div>
      <h2>About the Blog</h2>
      <p>{{ aboutText }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'About',
    setup() {
      const aboutText = ref("This is a blog built with Vue.js and TailwindCSS.");
  
      return {
        aboutText
      };
    }
  }
  </script>
  
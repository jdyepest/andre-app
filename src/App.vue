<script setup>
import navbar from './navbar.vue'

</script>

<template>
  <div class=" sc2">
    
    <RouterView ></RouterView>
  </div>
  

  
</template>

<style scoped>
.sc2::-webkit-scrollbar-track {
background:green;
border-radius: 20px;
}
.sc2::-webkit-scrollbar-thumb {
background-color: red;
border-radius: 20px;
}
</style>

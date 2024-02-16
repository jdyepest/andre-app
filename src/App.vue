<script setup>
import navbar from './navbar.vue'

</script>

<template>
  <div class="h-screen sc2">
    <navbar />
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

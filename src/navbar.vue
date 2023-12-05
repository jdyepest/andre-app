<template>
    <div class="  md:h-[16%] h-1/6">
      <!-- Desktop Navbar -->
      <nav class="bg-purple-700 h-full hidden md:flex">
        <div class="container mx-10">
          <div class="flex justify-between h-full items-center">
            <router-link to="/"  class="block text-white my-1" >
              <h1 class="text-white text-5xl font-normal font-sans italic">Creart Emotion</h1>
            </router-link>
            
            <div class="space-x-10 ml">
              <router-link to="/About" class="text-white text-2xl">Acerca de mi</router-link>
              <router-link to="/sessions" class="text-white text-2xl">Sesiones</router-link>
              <router-link to="/reflections" class="text-white text-2xl">Reflexiones</router-link>
            </div>
          </div>
        </div>
      </nav>
      
      <!-- Mobile Navbar -->
      <nav class="bg-purple-400 h-full md:hidden">
        <div class="container mx-auto flex justify-between h-full items-center">
          <div></div>
          <h1 class="text-white s:text-3xl text-3xl font-bold">Creart Emotion</h1>
          <button @click="toggleMenu" class="text-white  text-5xl">
            ☰
          </button>
        </div>
        
        
      </nav>
      
    </div>
    <div v-if="showMenu" class="flex flex-col mx-auto bg-purple-400  w-full" >
          <router-link to="/" @click="toggleMenu" class="block text-white my-1" >Inicio</router-link>
          <router-link to="/About" @click="toggleMenu" class="block text-white my-1" >Acerca de mi</router-link>
          <router-link to="/sessions" @click="toggleMenu" class="block text-white my-1">Sessions</router-link>
          <router-link to="/reflections" @click="toggleMenu" class="block text-white my-1">Reflections</router-link>
        </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
        
      }
    }
  }
  </script>
  
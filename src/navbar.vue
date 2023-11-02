<template>
    <div>
      <!-- Desktop Navbar -->
      <nav class="bg-purple-400 h-32 hidden md:flex">
        <div class="container mx-auto">
          <div class="flex justify-between h-32 items-center">
            <h1 class="text-white text-5xl font-bold">creart emotion</h1>
            <div class="space-x-4">
              <router-link to="/" class="text-white">acerca de mi</router-link>
              <router-link to="/sessions" class="text-white">Sesiones</router-link>
              <router-link to="/reflections" class="text-white">Reflecciones</router-link>
            </div>
          </div>
        </div>
      </nav>
      
      <!-- Mobile Navbar -->
      <nav class="bg-purple-400 h-32 md:hidden">
        <div class="container mx-auto flex justify-between h-32 items-center">
          <h1 class="text-white text-5xl font-semibold">Vue Blog</h1>
          <button @click="toggleMenu" class="text-white  text-5xl">
            ☰
          </button>
        </div>
        
        
      </nav>
      
    </div>
    <div v-if="showMenu" class="flex flex-col mx-auto bg-purple-400 h-full w-full" >
          <router-link to="/" @click="toggleMenu" class="block text-white my-1" >About</router-link>
          <router-link to="/sessions" @click="toggleMenu" class="block text-white my-1">Sessions</router-link>
          <router-link to="/reflections" @click="toggleMenu" class="block text-white my-1">Reflections</router-link>
        </div>
    <RouterView ></RouterView>
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
        console.log(this.showMenu);
      }
    }
  }
  </script>
  
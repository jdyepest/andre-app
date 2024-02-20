<template>
  
    <div class="md:h-[16%] h-[13%] z-5">
      <!-- Desktop Navbar -->
      <nav class="nav-back h-full hidden md:flex justify-center w-full ">
        <div class="container mx-10 w-full">
          <div class="flex justify-between h-full items-center">
            <router-link to="/"  class="block text-white my-1" >
              <h1 class="text-white text-5xl font-normal font-vintage-coquete italic">Creart Emotion</h1>
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
      <nav class="nav-back h-full md:hidden">
    <div class="container mx-auto flex justify-between h-full items-center">
        <div class="invisible">
            <!-- Invisible duplicate of the burger icon for spacing -->
            <button class="text-white text-5xl opacity-0">
                <img src="./assets/buerger-46.svg" alt="">
            </button>
        </div>
        <h1 class="text-white s:text-3xl text-3xl font-normal font-vintage-coquete italic">Creart Emotion</h1>
        <button @click="toggleMenu" class="text-white text-5xl">
            <img src="./assets/buerger-46.svg" alt="">
        </button>
    </div>
</nav>

        
        

      
    </div>
    <div v-if="showMenu" class="flex flex-col mx-auto nav-back  w-full h-screen items-center justify-normal gap-5" >
          <router-link to="/" @click="toggleMenu" class="block text-white my-1 text-[42px] font-vintage-coquete"  >Inicio</router-link>
          <router-link to="/About" @click="toggleMenu" class="block text-white my-1 text-[42px] font-vintage-coquete" >Acerca de mi</router-link>
          <router-link to="/sessions" @click="toggleMenu" class="block text-white my-1 text-[42px] font-vintage-coquete">Terapia</router-link>
          <router-link to="/reflections" @click="toggleMenu" class="block text-white my-1 text-[42px] font-vintage-coquete">Reflexiones</router-link>
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
    },
   
  }
  </script>
<style scoped>
.nav-back{
  background: rgb(71,7,71);
background: linear-gradient(90deg, rgba(71,7,71,1) 0%, rgba(188,159,200,1) 50%, rgba(71,7,71,1) 100%);

}
</style>
  
<template>
  
    <div class="md:h-[13vh] h-[13vh] z-5">
      
      <!-- Desktop Navbar -->
      <nav :class="computedClass">
        <div class="container mx-10 w-full">
          <div class="flex justify-between h-full items-center">
            <NuxtLink :to="localePath('/')"  class="block text-white my-1" >
              <h1 class="text-white text-5xl font-normal font-vintage-coquete italic">Creart Emotion</h1>
            </NuxtLink>
            
            <div class="space-x-10 ml">
              <NuxtLink :to="localePath('/acerca-de-mi')" class="text-white text-2xl">{{ $t('nav.about') }}</NuxtLink>
              <NuxtLink :to="localePath('/sesiones')" class="text-white text-2xl">{{ $t('nav.sessions') }}</NuxtLink>
              <NuxtLink :to="localePath('/reflexiones')" class="text-white text-2xl">{{ $t('nav.reflections') }}</NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    
      <!-- Mobile Navbar -->
      <nav :class="['h-full', 'md:hidden', computedClass2]">
    <div class="container mx-auto flex justify-between h-full items-center">
        <div class="invisible">
            <!-- Invisible duplicate of the burger icon for spacing -->
            <button class="text-white text-5xl opacity-0">
                <img src="/assets/buerger-46.svg" alt="">
            </button>
        </div>
        <NuxtLink :to="localePath('/')">
        <h1 class="text-white s:text-3xl text-3xl font-normal font-vintage-coquete italic">Creart Emotion</h1>
      </NuxtLink>
        <button @click="toggleMenu" class="text-white text-5xl">
            <img src="/assets/buerger-46.svg" alt="">
        </button>
    </div>
</nav>

    </div>
    <div v-if="showMenu" :class="['flex', 'flex-col', 'mx-auto',  'w-full', 'h-screen', 'items-center', 'justify-normal', 'gap-5', computedClass2]" >
      
          <NuxtLink :to="localePath('/')" @click="toggleMenu" class="block text-white my-1 text-[42px] font-vintage-coquete"  >{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/acerca-de-mi')" @click="toggleMenu" class="block text-white my-1 text-[42px] font-vintage-coquete" >{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink :to="localePath('/sesiones')" @click="toggleMenu" class="block text-white my-1 text-[42px] font-vintage-coquete">{{ $t('nav.sessions') }}</NuxtLink>
          <NuxtLink :to="localePath('/reflexiones')" @click="toggleMenu" class="block text-white my-1 text-[42px] font-vintage-coquete">{{ $t('nav.reflections') }}</NuxtLink>
        
        </div>
    
  </template>
  
  <script>
  import { useLocalePath } from '#i18n'

  export default {
    setup() {
      const localePath = useLocalePath()
      return { localePath }
    },
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
    props: ['bck'], // Define the prop
  computed: {
    computedClass() {
      switch (this.bck) {
  case "pink":
    return "h-full hidden md:flex justify-center w-full bg-gradient-to-r from-purple-900 to-purple-500";
  case "blue": // Replace 'newTheme' with your theme name
    return "h-full hidden md:flex justify-center w-full bg-gradient-to-r from-purple-700 to-emerald-400";
  case "golden":
    return "h-full hidden md:flex justify-center w-full bg-gradient-to-r from-yellow-400 to-purple-700";
  case "green":
    return "h-full hidden md:flex justify-center w-full bg-gradient-to-r from-emerald-500 to-purple-600";
  // add more cases as needed
  default:
    return "nav-back h-full hidden md:flex justify-center w-full";
}


    },
    computedClass2() {
      // You can add logic here if needed

      switch (this.bck) {
  case "pink":
    return "bg-gradient-to-r from-purple-900 to-purple-500";
  case "blue":
    return "bg-gradient-to-r from-blue-500 to-indigo-500";
  case "golden":
    return "bg-gradient-to-r from-yellow-400 to-purple-700";
  case "green":
    return "bg-gradient-to-r from-emerald-500 to-purple-600";
  default:
    return "nav-back";
}

    }

  },

}
   
  
  </script>
<style scoped>
.nav-back{
  background: rgb(71,7,71);
background: linear-gradient(90deg, rgba(71,7,71,1) 0%, rgba(188,159,200,1) 50%, rgba(71,7,71,1) 100%);

}
.nav-back2{
  background-image: linear-gradient(to right, #a855f7, #ec4899);
}
</style>
  

<template>
    <div class="h-screen">
      <navbar bck="pink"></navbar>

      <div class="md:h-[74%] h-[74%] relative">
        
          <img src=".\assets\DKS2.jpg" alt="Slide image" class="object-fill w-full h-full">
          <div class="absolute bottom-[75%] left-[10%] w-4/5 text-white">
            <h2 class="text-center text-[61px] md:text-[86px] font-vintage-coquete ">Reflexiones</h2>
            </div>
            <div class="absolute bottom-[20%] md:bottom-[35%] left-[20%] w-3/5 text-white">
              <p class="mt-4  md:text-[22px] text-[16px] text-justify leading-normal">
                En estas páginas me complace compartir algunos textos a partir de mi experiencia personal como psicóloga con pasión a la poesía, interesada en los diálogos de género, feministas y culturales, y comprometida con brindar espacios seguros en los acompañamientos psicoterapéuticos con enfoque psicoanalitico. Busco poder  trasmitir a través de pensamientos y sensaciones vívidas una proximidad de conocerme en mi labor.</p>

          
          </div>
        

      </div>
      

      <div class="grid md:grid-cols-3 grid-cols-1 mt-10">
    <div v-for="item in items" :key="item.title" class="thumbnail-item px-5">
      <div class="aspect-[0.9]">
        <img :src="item.image" :alt="item.title" class="object-fit w-full h-full" />
      </div>
      

      <h2 class="text-center text-xl my-5 text-violet-900">{{ item.title }}</h2>
      <p class="text-center mb-2 ">{{ item.description }}</p>
      <div class="flex justify-center items-center mb-10">
        <router-link :to="item.route" class="text-center underline hoover:no-underline">Leer...</router-link>
      </div>
      
    </div>
  </div>
  <div class="contact-section bg-[#360269] h-2/5 w-full flex justify-center absolute">
    <div class="my-auto w-4/5">
      <div class="text-center">
        <h2 class="text-[24px] text-white">Contacto</h2>
        <div class="text-center   text-white" >
          Puedes contactarme a través de mis redes sociales, como Facebook, Instagram o WhatsApp, para obtener más información al respecto.
        </div>
        <div class="flex justify-center mt-4">
          <!-- Facebook SVG Link -->
          <a href="https://m.facebook.com/101364628375459?wtsid=rdr_0dPxI4AJkH3KylJhn" target="_blank" class="mx-2">
            <img src="./assets/facebook.svg" alt="Facebook" class="h-8 w-8">
          </a>
          <!-- Instagram SVG Link -->
          <a href="https://www.instagram.com/andrecreation_/" target="_blank" class="mx-2">
            <img src="./assets/instagram.svg" alt="Instagram" class="h-8 w-8">
          </a>
          <!-- Email SVG Link -->
          <a href="mailto:crear.emotion.1998@gmail.com" class="mx-2">
            <img src="./assets/mail.svg" alt="Email" class="h-8 w-8">
          </a>
          <!-- WhatsApp SVG Link -->
          <a href="https://wa.me/+573187392384" target="_blank" class="mx-2">
            <img src="./assets/whatsapp.svg" alt="WhatsApp" class="h-8 w-8">
          </a>
        </div>
      </div>
    </div>
  </div>

    </div>

    

  </template>
  
  <script>
 //require('./assets/reflections.json')
 
  import navbar from './navbar.vue'
  import data from './assets/reflections.json'
 


  export default {
    

    data() {
      return {
        items: [],
        
      }
    },
    mounted() {
      //console.log(data);
      

    this.items=data;
    }, 
    components: {navbar}
  }
  </script>
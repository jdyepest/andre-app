<template>
    
      
<carousel ></carousel>
      
<div class="bg-[#360269] h-3/5 w-full flex justify-center" >
  <div class="text-center px-5 my-auto w-4/5">
    <AnimatedComponent>
    <p class="md:text-[40px] text-[24px] text-white ">"{{ aboutText }}"</p>
    <p class="md:text-[20px] text-[12px] text-white mt-4">Jacques Lacan</p>
  </AnimatedComponent>
  </div>
</div>

 <div class="h-92">    
<div class="grid grid-cols-1 md:grid-cols-2 h-screen md:h-full">
  <div class="feminist-purple h-screen md:h-full flex justify-center items-center relative">
          <img src="./assets/andre.jpg" class="object-fill max-h-full w-full absoulute">
    
  </div>
          

        
        
        
  
  <div class="feminist-purple font-sans antialiased h-screen md:h-full ">

    <div class="flex items-center h-full">
      <AnimatedComponent>
        <div class=" mx-auto px-4 h-full">
          <h2 class="text-[78px] font-bold mb-4 italic text-right text-white italic font-normal font-sans">Andrea Narváez <br> 'Path'</h2>
          
          <p class="text-lg mb-2 text-white text-right md:text-justify">
              Psicoanalista especializada en infancia, adolescencia y género. Egresada de la Universidad del Valle, con un enfoque terapéutico influenciado por las teorías de Jacques Lacan.
          </p>
          
          <p class="text-lg text-white text-right md:text-justify">
              Apasionada por la poesía, la escritura y el arte, integro la creatividad en mi práctica terapéutica para explorar y sanar, ofreciendo un espacio de acogida y comprensión para el bienestar y el autoconocimiento de mis pacientes.
          </p>
        </div>
      </AnimatedComponent>
    </div>


  </div>
 
<div class="feminist-purple font-sans antialiased h-screen order-4 md:order-3 ">

    <div class="flex items-center h-full">
      <AnimatedComponent>
        <div class="mx-auto px-4 h-full">
    <h2 class="text-[78px] font-bold mb-4 italic text-left text-white italic font-normal font-sans">Terapia</h2>


    <p class="text-lg text-white text-right md:text-justify text-center">
        Ofrezco consultas presenciales en Medellín, así como terapia en línea para pacientes de todo el mundo. Mi enfoque se centra en la adaptación del psicoanálisis a la era digital, manteniendo un espacio seguro y empático para el crecimiento personal de mis pacientes.
    </p>

    <p class="text-lg text-white text-right md:text-justify text-center">
        Comprometida con la accesibilidad y la flexibilidad, utilizo herramientas tecnológicas avanzadas para garantizar una experiencia terapéutica profunda y significativa, sin importar la distancia.
    </p>
</div>

      </AnimatedComponent>
      
    </div>



  </div>

  <div class="feminist-purple h-screen flex justify-center items-center relative order-3 md:order-4">
          <img src="./assets/therapy.jpg" class="object-fill max-h-full w-full absoulute">
    
  </div>
  <div class="feminist-purple h-screen flex justify-center items-center relative order-5">
          <img src="./assets/andre_con_libro.jpg" class="object-fill max-h-full w-full absoulute">
    
  </div>
          

        
        
        
  
  <div class="feminist-purple font-sans antialiased h-screen order-6">

    <div class="flex items-center h-screen">
      <AnimatedComponent>
        <div class=" mx-auto px-4 h-full">
          <h2 class="text-[78px] font-bold mb-4 italic text-right text-white italic font-normal font-sans">mi libro <br> 'el cajon de la noche'</h2>
          
          <p class="text-lg mb-2 text-white text-right md:text-justify">
              mi obra mas completa es un poemario que escribi en pandemia en el cual se puede obsever mis vision del mundo atravez de este arte mis impresiones de la poesia el amor el arte
          </p>
          
          <p class="text-lg text-white text-right md:text-justify">
             parthe esta obra signitifico mucho para mi en el contexto que vivia en aquel entonces y espero poderla compartir con el mundo si deseas una saber mas o una copia virtual o fisica hazmelo saber se envia a cualquier parte del mundo
          </p>
        </div>
      </AnimatedComponent>
    </div>


  </div>
  
</div>

</div> 




      
    
  </template>
  
  <script>
  import { ref } from 'vue';
  
import carousel from './components/carousel.vue';
import AnimatedComponent from './fadeA.vue'
;
  
  export default {
    name: 'Home',
    setup() {
        const aboutText = ref("Lo que está en juego en el amor es precisamente la diferencia entre el ser y el semblante, entre el ser y la aparición, entre el amor y la imagen.");
        return {
            aboutText
        };
    },
    components: { carousel, AnimatedComponent}
}
  </script>

  <style>
 .feminist-purple { 
            background-color: #9b51e0; /* Example purple color */
        }
</style>
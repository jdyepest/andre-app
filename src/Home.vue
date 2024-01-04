<template>
    
      
<carousel ></carousel>
      
<div class="bg-[#360269] h-screen w-full flex justify-center" >
  <div class="text-center px-5 my-auto w-4/5">
    <AnimatedComponent>
    <p class="md:text-[40px] text-[22px] text-white ">"{{ aboutText }}"</p>
    <p class="md:text-[20px] text-[12px] text-white mt-4">Melanie Klein</p>
  </AnimatedComponent>
  </div>
</div>

 <div class="h-92">    
<div class="grid grid-cols-1 md:grid-cols-2 h-full md:h-full">
  <div class="feminist-purple h-full md:h-full flex justify-center items-center relative">
          <img src="./assets/andre1.jpg" class="object-fill max-h-full w-full absoulute">
    
  </div>
          

        
        
        
  
  <div class="feminist-purple font-sans antialiased h-screen md:h-full ">

    <div class="flex items-center h-full">
      <AnimatedComponent>
        <div class=" mx-auto px-4 h-full">
          <h2 class="md:text-[78px] text-[52px] font-bold mb-4 italic md:text-right text-center text-white italic font-normal font-sans">Andrea Narváez <br> 'Path'</h2>
          
          <p class="text-md md:text-lg mb-2 text-white md:text-right text-justify">
            Psicóloga con formación psicoanalitica, de género y especialista en problemas de la infancia y adolescencia. Graduada de pregrado en la Universitaria del Valle y  posgrado  en la Universidad de Antioquia. Me desarrollo en el ámbito clínico con sesiones 1:1 a partir de herramientas psicoterapéuticas en el arte y la escritura. Procuro un espacio de confianza para ir más allá del tratamiento de manera que se ofrezca un acompañamiento y atención singular en cada proceso.

          </p>
          
          <p class="text-md md:text-lg text-white text-right md:text-justify">
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
    <h2 class="md:text-[78px] text-[52px] font-bold mb-4 italic md:text-left text-center text-white italic font-normal font-sans">Terapia</h2>


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
          <img src="./assets/andre_con_libro1.jpg" class="object-fill max-h-full w-full absoulute">
    
  </div>
          

        
        
        
  
  <div class="feminist-purple font-sans antialiased h-screen order-6">

    <div class="flex items-center h-screen">
      <AnimatedComponent>
        <div class=" mx-auto px-4 h-full">
          <h2 class="md:text-[78px] text-[52px] font-bold mb-4 italic text-right text-white italic font-normal font-sans">mi libro <br> 'el cajon de la noche'</h2>
          
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

<div class="contact-section bg-[#360269] h-3/5 w-full flex justify-center absolute">
    <div class="my-auto w-4/5">
      <div class="text-center">
        <h2 class="text-[24px] text-white">Contacto</h2>
        <div class="text-center   text-white" >
          puedes contactarme atravez de mis reades sociales como facebook, instagram o whatsapp para obtener mas informacion al respcto
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




      
    
  </template>
  
  <script>
  import { ref } from 'vue';
  
import carousel from './components/carousel.vue';
import AnimatedComponent from './fadeA.vue'
;
  
  export default {
    name: 'Home',
    setup() {
        const aboutText = ref("«El equilibrio no significa evitar conflictos, implica la fuerza para tolerar emociones dolorosas y poder manejarlas. Si disociamos excesivamente las emociones dolorosas restringimos la personalidad y provocamos inhibiciones variadas. De esto se desprende que la salud mental no es compatible con la superficialidad, puesto que ésta se vincula con renegación del conflicto interior y de las dificultades externas. Se utiliza la renegación de manera excesiva porque el Yo no es suficientemente fuerte para tolerar el dolor»");
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
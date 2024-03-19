<template>
    <div>
      <navbar bck="green"></navbar>
      <div class="md:h-[65vh] h-[65vh] relative">
        
        <img src='./assets/sesiones.jpg' alt="Slide image" class="object-fill w-full h-full">
        <div class="absolute bottom-[55%] left-[8%] md:left-[10%] w-4/5 text-white">
          <h1 class="text-center text-[80px] md:text-[144px] font-vintage-coquete ">Terapia</h1>
          </div>
    </div>
 <div class="md:h-[70vh] h-[80vh] w-full bg-purple-800">
  <div class="md:py-5 flex flex-col items-center justify-center h-full">
    <h1 class="md:text-[80px] text-[60px] font-bold mb-4 italic  text-white italic text-justify font-normal">sesiones</h1>
    <p class="w-4/5 text-white text-md text-justify">Brindo sesiones de terapia psicoanalítica personalizadas, disponibles tanto en remoto para aquellos en distintas partes del mundo, con horarios flexibles que se adaptan a tu ritmo de vida, como presenciales en la ciudad de Cali, Colombia. Enfrenta una variedad de desafíos emocionales, desde ansiedad y depresión hasta problemas de relación y transiciones de vida, en un espacio seguro y acogedor. Me esfuerzo por hacer la terapia accesible, ofreciendo precios asequibles y múltiples opciones de pago, incluyendo transferencia bancaria, PayPal y tarjeta de crédito. Empieza con una sesión de evaluación y descubre el camino hacia tu bienestar, sin importar dónde te encuentres.</p>
    <div class="flex justify-center">
          <a href="https://wa.me/+573187392384" target="_blank" class="mx-2">
        <button class="self-start bg-purple-500 hover:bg-blue-700 text-white font-bold mt-20 md:text-lg py-2 px-4 rounded h-[10vh] md:mt-20 md:h-[10vh] md:w-[20vh] w-[20vh]">

          contactar
        </button>
      </a>
      </div>
  </div>
 </div>


    <div class="grid grid-cols-1 md:grid-cols-2 h-full md:h-full">
          <div class="flex justify-center items-center feminist-purple  h-[60vh] md:h-full order-2 md:order-1 "> 
            <div class="h-[90%] md:h-5/6 w-3/4 bg-blue-200">
          <img src="./assets/imagen_sesiones_2.jpg" class="object-fill md:object-cover max-h-full w-full absoulute">
    
  </div>
</div>
        
 
          

        
        
        
  
  <div class="feminist-purple font-sans  h-full md:h-full min-h-screen order-1 md:order-2">


      <AnimatedComponent t3="0.1">
        <div class="flex justify-evenly md:h-3/4 h-full flex flex-col mx-8 md:mr-10 mt-5 md:mt-20">
       
          <h2 class="md:text-[20px] text-[20px] font-bold mb-4 italic  text-white italic font-normal font-sans">mi enfoque terapeutico</h2>
          <h1 class="md:text-[78px] text-[52px] font-bold mb-4 italic text-center md:text-left  text-white italic font-normal font-sans"> Psicoterapia</h1>
          <div>
          <p class="text-md md:text-lg mb-8 text-white  text-justify">
            En mi práctica como psicoterapeuta, me especializo en explorar cómo nuestras experiencias y creencias pasadas pueden afectarnos en el presente, con un enfoque particular en el trauma intergeneracional y su impacto en nuestras vidas y la sociedad. Mi meta es ofrecer un espacio compasivo para que experiencias y emociones difíciles sean procesadas, promoviendo la sanación y el entendimiento personal. Este enfoque se enriquece con la inclusión de la poesía y el feminismo, herramientas clave para la expresión y exploración de nuestras vivencias.
          </p>
          
          <p class="text-md md:text-lg text-white text-left  text-justify">
            Desde Cali, Colombia, y a través de plataformas virtuales, extiendo mi apoyo terapéutico a personas alrededor del mundo. Este es un espacio de acogida y comprensión, donde se fomenta la liberación de creencias limitantes y se abren nuevas formas de conexión con uno mismo, con los demás y con nuestro entorno, celebrando nuestra identidad cultural en el proceso de sanación y crecimiento personal.</p>
        </div>
        <div class="flex justify-center">
          <a href="https://wa.me/+573187392384" target="_blank" class="mx-2">
        <button class="self-start bg-purple-800 hover:bg-blue-700 text-white font-bold md:text-lg py-2 px-4 rounded md:mt-20 h-[10vh] w-[20vh]">

          contactar
        </button>
      </a>
      </div>
      </div>
      </AnimatedComponent>
    


  </div>

      <!-- Text Section -->

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
  import { ref } from 'vue';
import sesionimg from './assets/sesiones.jpg'  
import carousel from './components/carousel.vue';
import navbar from './navbar.vue';
import AnimatedComponent from './fadeA.vue'
  
  export default {
    name: 'Sessions',
    setup() {

    },
    components: { carousel, navbar, AnimatedComponent }
}
  </script>
  
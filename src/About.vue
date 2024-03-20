<template>
<div>
  <navbar bck="blue"></navbar>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 h-full md:h-full">
          <div class="flex justify-center items-center feminist-purple  h-[60vh] md:h-full "> 
            <div class="h-[90%] md:h-[90%] w-5/6 feminist-puple">
          <img src="./assets/andre_pintura.jpg" class="object-fill   w-full absoulute">
    
  </div>
</div>

<div class="h-full w-full feminist-purple ">
  <h1 class="text-center text-white mt-10 mb-10 md:mt-20 md:text-[90px] text-[45px] font-vintage-coquete">Mi Experiencia profesional</h1>
  <p class="mx-10 text-justify text-white md:text-[20px] mb-5">Desde mi adolescencia, la psicología capturó mi interés, llevándome a estudiar esta apasionante carrera en la Universidad del Valle. Paralelamente me interesó otra pasión literarioa que me encamino a la escritura de un poemario llamado El Cajón de La noche donde buscaba capturar experiencias estéticas y creativas que encontraba en la cotidianidad</p>

<p class="mx-10 text-justify text-white md:text-[20px] mb-5">Mis primeros pasos en la psicología clínica los di en el centro de atención de la universidad, donde tuve el honor de recibir reconocimientos por los resultados y evaluaciones positivas de mis pacientes durante mis prácticas. Esta experiencia temprana fue fundamental, pero mi camino no se detuvo ahí.</p>


<p class="mx-10 text-justify text-white md:text-[20px] mb-5">Decidida a profundizar en mi especialización, cursé estudios de posgrado en Psicología de la Infancia y Adolescencia en la Universidad de Antioquia, donde adopté una óptica psicoanalítica para comprender mejor estas etapas vitales.</p>

<p class="mx-10 text-justify text-white md:text-[20px] mb-5">Mi experiencia se expandió al trabajar como psicóloga clínica para Delamano, una oportunidad que me permitió conocer de cerca diversas problemáticas sociales en Medellín. A lo largo de mi carrera, he mantenido un firme compromiso con el trabajo independiente, ofreciendo apoyo tanto virtual como presencial a quienes lo necesitan, siempre con el objetivo de brindar un espacio seguro y comprensivo para el crecimiento personal y emocional.</p>

 
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
  </template>
  
  <script>
  import { ref } from 'vue';
  

import navbar from './navbar.vue';
  
  export default {
    name: 'About',
    setup() {

    },
    components: {  navbar }
}
  </script>
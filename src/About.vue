<template>
<div>
  <navbar></navbar>
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
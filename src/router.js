import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import Sessions from './Sessions.vue'
import Reflections from './Reflections.vue'
import cuerpos from './cuerpos.vue'
import carta from './cartaPsico.vue'
import control from './control.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/acerca de mi', component: About },
  { path: '/cuerpos', component: cuerpos },
  { path: '/carta_al_psicoanalisis', component: carta},
  { path: '/sesiones', component: Sessions },
  { path: '/control', component: control },
  { path: '/reflexiones', component: Reflections }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router

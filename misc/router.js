import Home from './Home.vue'
import About from './About.vue'
import Sessions from './Sessions.vue'
import Reflections from './Reflections.vue'
import cuerpos from './cuerpos.vue'
import carta from './cartaPsico.vue'
import control from './control.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/acerca-de-mi', component: About },
  { path: '/cuerpos', component: cuerpos },
  { path: '/carta_al_psicoanalisis', component: carta},
  { path: '/sesiones', component: Sessions },
  { path: '/control', component: control },
  { path: '/reflexiones', component: Reflections }
]

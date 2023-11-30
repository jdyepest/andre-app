import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import Sessions from './Sessions.vue'
import Reflections from './Reflections.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },

  { path: '/sessions', component: Sessions },
  { path: '/reflections', component: Reflections }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

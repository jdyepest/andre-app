import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router.js'
import './style.css'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})


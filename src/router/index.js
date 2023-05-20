import { createRouter, createWebHistory } from 'vue-router'
import Feature from '../views/Feature.vue'

const routes = [
  {
    path: '/',
    name: 'feature',
    component: Feature
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

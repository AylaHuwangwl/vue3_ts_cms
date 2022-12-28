import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/login.vue'
import Main from '@/views/main/main.vue'
import NotFound from '@/views/not-found/not-found.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    }
  ]
})
export default router

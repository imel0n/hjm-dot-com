import { createRouter, createWebHistory } from 'vue-router'
import WorkInProgress from '../pages/public/WorkInProgress.vue'
import TheLogin from '../pages/auth/TheLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'work-in-progress',
      component: WorkInProgress,
    },

    {
      path: '/login',
      name: 'login',
      component: TheLogin,
    },
  ],
})

export default router

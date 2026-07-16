import { createRouter, createWebHistory } from 'vue-router'
import WorkInProgress from '../pages/public/WorkInProgress.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'work-in-progress',
      component: WorkInProgress,
    },
  ],
})

export default router

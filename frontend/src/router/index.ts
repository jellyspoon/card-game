import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/MainMenu.vue')
    },
    {
      path: '/testpage',
      component: () => import('../views/TestPage.vue')
    }
  ]
})

export default router

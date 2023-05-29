import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/Error.vue')
    },
    {
      path: '/detail/:url',
      name: 'detail',
      component: () => import("../views/Detail.vue")
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import MainView from "./../views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      children: [
        {
          path: '/register',
          name: 'register',
          component: () => import('../components/Register.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../components/Login.vue')
        },
      ]
    },
  ]
})

export default router

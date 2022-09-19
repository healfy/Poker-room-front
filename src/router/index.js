import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      children: [
        {
          path: '/tables',
          name: 'tables',
          component: () => import('../components/Tables.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../components/Register.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../components/Login.vue')
        },
      ]
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  await store.dispatch('auth/check_auth')
  next()
});

export default router

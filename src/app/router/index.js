import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../../pages/HomePage.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../../pages/AuthorizationPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../../pages/RegistrationPage.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/pages/CatalogPage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/CartPage.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/pages/OrderPage.vue')
    }
  ]
})

export default router

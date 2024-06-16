import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tentang-kami',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/layanan',
      name: 'service',
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/layanan/digital-marketing',
      name: 'digital-marketing',
      component: () => import('../views/service/DigitalMarketingView.vue')
    },
    {
      path: '/layanan/product-manager',
      name: 'product-manager',
      component: () => import('../views//service/ProductManagerView.vue')
    },
    {
      path: '/daftar',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/masuk',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/pembayaran/daftar/digital-marketing',
      name: 'payment-register-digital-marketing',
      component: () => import('../views/payment/RegisterDigitalMarketingView.vue')
    },
    {
      path: '/pembayaran/daftar/product-manager',
      name: 'payment-register-product-manager',
      component: () => import('../views/payment/RegisterProductManagerView.vue')
    },
    {
      path: '/pembayaran/pilih-pembayaran',
      name: 'payment-select',
      component: () => import('../views/payment/SelectView.vue')
    },
    {
      path: '/pembayaran/detail',
      name: 'payment-detail',
      component: () => import('../views/payment/DetailView.vue')
    },
    {
      path: '/pembayaran/berhasil',
      name: 'payment-success',
      component: () => import('../views/payment/SuccessView.vue')
    },
    {
      path: '/pembayaran/rincian-transaksi',
      name: 'payment-transaction-detail',
      component: () => import('../views/payment/TransactionDetailView.vue')
    }

    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('../views/NotFoundView.vue')
    // }
  ]
})

export default router

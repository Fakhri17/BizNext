<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

// Get the current route
const route = useRoute()

// Define the routes where you don't want to show the Navbar and Footer
const hideNavbarRoutes = [
  '/daftar',
  '/masuk',
  '/pembayaran',
  '/pembayaran/daftar',
  '/pembayaran/pilih-pembayaran',
  '/pembayaran/detail',
  '/pembayaran/berhasil',
  '/pembayaran/rincian-transaksi',

]

const hideFooterRoutes = [
  '/daftar',
  '/masuk',
  // '/pembayaran/pilih-pembayaran',
  // '/pembayaran/detail',
  // '/pembayaran/berhasil',
  // '/pembayaran/rincian-transaksi',
]
</script>

<template>
  <div>
    <!-- Conditionally render Navbar and Footer -->
    <div v-if="!hideNavbarRoutes.includes(route.path)">
      <Navbar />
    </div>
    <RouterView />
    <div v-if="!hideFooterRoutes.includes(route.path)">
      <Footer />
    </div>
  </div>
</template>

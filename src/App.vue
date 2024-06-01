<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

// Get the current route
const route = useRoute()

// Define the routes where you don't want to show the Navbar and Footer
const hideNavbarAndFooterRoutes = ['/daftar', '/masuk']
</script>

<template>
  <div>
    <!-- Conditionally render Navbar and Footer -->
    <div v-if="!hideNavbarAndFooterRoutes.includes(route.path)">
      <Navbar />
    </div>
    <RouterView />
    <div v-if="!hideNavbarAndFooterRoutes.includes(route.path)">
      <Footer />
    </div>
  </div>
</template>

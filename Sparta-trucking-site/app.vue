<template>
  <div>
    <Navbar />
    <NuxtPage />
     <Footer />

  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

import { useHead } from '#imports'

useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    // optionally add png for better browser support
    
  ]
})
</script>
<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="pt-8">
      <Comparison />
    </div>
    <DownloadCTA />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Comparison from '~/components/landing/Comparison.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'

useHead({
  title: 'Compare — Dibiku vs Other Database Clients',
  meta: [
    { name: 'description', content: 'See how Dibiku compares to other database clients in memory usage, startup time, and scroll performance.' },
  ],
})
</script>

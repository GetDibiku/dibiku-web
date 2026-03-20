<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="pt-8">
      <DownloadCTA />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'

useHead({
  title: 'Download — Dibiku',
  meta: [
    { name: 'description', content: 'Download Dibiku for macOS, Windows, and Linux. Free, fast, lightweight database client.' },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="pt-8">
      <Pricing />
    </div>
    <DownloadCTA />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Pricing from '~/components/landing/Pricing.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'

useHead({
  title: 'Pricing — Dibiku',
  meta: [
    { name: 'description', content: 'Dibiku is free forever — all features included. SSH terminal & tunnels, multi-tab SQL editor, metrics board, and more. No account required.' },
  ],
})
</script>

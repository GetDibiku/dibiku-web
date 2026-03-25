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
    { name: 'description', content: 'Dibiku pricing — free forever for personal use, Pro at $8/month for teams. SSH terminal & tunnels, unlimited query tabs, connections, and more.' },
  ],
})
</script>

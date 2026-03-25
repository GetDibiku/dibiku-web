<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="pt-8">
      <Features />
    </div>
    <DownloadCTA />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Features from '~/components/landing/Features.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'

useHead({
  title: 'Features — Dibiku',
  meta: [
    { name: 'description', content: 'All Dibiku features — multi-tab SQL editor, built-in SSH terminal & tunnels, virtual data grid, inline editing, metrics board, data masking, and 36+ keyboard shortcuts.' },
  ],
})
</script>

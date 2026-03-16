<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <StatsBar />
    <Features />
    <Comparison />
    <Pricing />
    <DownloadCTA />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Hero from '~/components/landing/Hero.vue'
import StatsBar from '~/components/landing/StatsBar.vue'
import Features from '~/components/landing/Features.vue'
import Comparison from '~/components/landing/Comparison.vue'
import Pricing from '~/components/landing/Pricing.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'
</script>

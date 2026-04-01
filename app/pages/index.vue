<template>
  <main class="min-h-screen">
    <Navbar />
    <Hero />
    <WhatsNew />
    <StatsBar />
    <Features />
    <Comparison />
    <Pricing />
    <DownloadCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Hero from '~/components/landing/Hero.vue'
import WhatsNew from '~/components/landing/WhatsNew.vue'
import StatsBar from '~/components/landing/StatsBar.vue'
import Features from '~/components/landing/Features.vue'
import Comparison from '~/components/landing/Comparison.vue'
import Pricing from '~/components/landing/Pricing.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'

const { locale } = useI18n()
const baseUrl = 'https://dibiku.com'
const canonicalUrl = computed(() => locale.value === 'en' ? baseUrl : `${baseUrl}/id`)

useHead({
  meta: [
    { property: 'og:title', content: 'Dibiku - Fast database client with SSH terminal & SQL editor' },
    { property: 'og:description', content: 'Connect to MySQL, PostgreSQL, Redis, and SQLite from one blazing fast desktop app. Built-in SSH terminal & tunnels, multi-tab SQL editor, and 36+ shortcuts.' },
    { property: 'og:url', content: canonicalUrl },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dibiku',
        description: 'Fast, lightweight database client with built-in SSH terminal, SSH tunnels, and multi-tab SQL editor. Supports MySQL, PostgreSQL, Redis, and SQLite.',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'macOS, Windows, Linux',
        featureList: 'SSH Terminal, SSH Tunnel, Multi-tab SQL Editor, Virtual Scroll Data Grid, Query Variables, EXPLAIN Visualizer, Metrics Board, Data Masking, Schema Diff, 36+ Keyboard Shortcuts',
        offers: [
          { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free' },
        ],
        screenshot: 'https://dibiku.com/og-image.png',
        url: 'https://dibiku.com',
      }),
    },
  ],
})
</script>

<template>
  <main class="min-h-screen">
    <Navbar />
    <div class="pt-8">
      <Features />
    </div>
    <DownloadCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Features from '~/components/landing/Features.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'

const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: computed(() => t('seo.featuresTitle')),
  meta: [
    { name: 'description', content: computed(() => t('seo.featuresDesc')) },
  ],
})
</script>

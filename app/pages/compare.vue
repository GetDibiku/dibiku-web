<template>
  <main class="min-h-screen">
    <Navbar />
    <div class="pt-8">
      <Comparison />
    </div>
    <DownloadCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Comparison from '~/components/landing/Comparison.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'

const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: computed(() => t('seo.compareTitle')),
  meta: [
    { name: 'description', content: computed(() => t('seo.compareDesc')) },
  ],
})
</script>

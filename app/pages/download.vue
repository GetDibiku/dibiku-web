<template>
  <main class="min-h-screen">
    <Navbar />
    <div class="pt-8">
      <DownloadCTA />
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'

const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: computed(() => t('seo.downloadTitle')),
  meta: [
    { name: 'description', content: computed(() => t('seo.downloadDesc')) },
  ],
})
</script>

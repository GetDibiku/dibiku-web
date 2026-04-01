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

const { t, locale } = useI18n()
const localePath = useLocalePath()
const baseUrl = 'https://dibiku.com'
const canonicalUrl = computed(() => locale.value === 'en' ? `${baseUrl}/download` : `${baseUrl}/id/download`)

useHead({
  title: computed(() => t('seo.downloadTitle')),
  meta: [
    { name: 'description', content: computed(() => t('seo.downloadDesc')) },
    { property: 'og:title', content: computed(() => t('seo.downloadTitle')) },
    { property: 'og:description', content: computed(() => t('seo.downloadDesc')) },
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
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dibiku.com' },
          { '@type': 'ListItem', position: 2, name: 'Download', item: 'https://dibiku.com/download' },
        ],
      }),
    },
  ],
})
</script>

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

const { t, locale } = useI18n()
const localePath = useLocalePath()
const baseUrl = 'https://dibiku.com'
const canonicalUrl = computed(() => locale.value === 'en' ? `${baseUrl}/features` : `${baseUrl}/id/features`)

useHead({
  title: computed(() => t('seo.featuresTitle')),
  meta: [
    { name: 'description', content: computed(() => t('seo.featuresDesc')) },
    { property: 'og:title', content: computed(() => t('seo.featuresTitle')) },
    { property: 'og:description', content: computed(() => t('seo.featuresDesc')) },
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
          { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://dibiku.com/features' },
        ],
      }),
    },
  ],
})
</script>

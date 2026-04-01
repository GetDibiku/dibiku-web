<template>
  <main class="min-h-screen">
    <Navbar />
    <div class="pt-8">
      <Pricing />
    </div>
    <DownloadCTA />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Pricing from '~/components/landing/Pricing.vue'
import DownloadCTA from '~/components/landing/DownloadCTA.vue'
import Footer from '~/components/landing/Footer.vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const baseUrl = 'https://dibiku.com'
const canonicalUrl = computed(() => locale.value === 'en' ? `${baseUrl}/pricing` : `${baseUrl}/id/pricing`)

useHead({
  title: computed(() => t('seo.pricingTitle')),
  meta: [
    { name: 'description', content: computed(() => t('seo.pricingDesc')) },
    { property: 'og:title', content: computed(() => t('seo.pricingTitle')) },
    { property: 'og:description', content: computed(() => t('seo.pricingDesc')) },
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
          { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://dibiku.com/pricing' },
        ],
      }),
    },
  ],
})
</script>

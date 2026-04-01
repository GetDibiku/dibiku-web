<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { inject as injectAnalytics } from '@vercel/analytics'

const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale,
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Dibiku',
        url: 'https://dibiku.com',
        logo: 'https://dibiku.com/logo-icon.png',
        sameAs: [],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'maulanayusupp@gmail.com',
          contactType: 'customer support',
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Dibiku',
        url: 'https://dibiku.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://dibiku.com/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  ],
})

// Initialize Vercel Analytics
onMounted(() => {
  injectAnalytics()
})
</script>

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
})

// Initialize Vercel Analytics
onMounted(() => {
  injectAnalytics()
})
</script>

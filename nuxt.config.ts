import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],

  site: {
    url: 'https://dibiku.com',
    name: 'Dibiku',
  },

  sitemap: {
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', width: '25%' },
    ],
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'id', language: 'id-ID', name: 'Bahasa Indonesia', file: 'id.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: '../i18n/locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      redirectOn: 'root',
    },
    baseUrl: 'https://dibiku.com',
  },

  app: {
    head: {
      title: 'Dibiku - Fast database client with SSH terminal & SQL editor',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Connect to MySQL, PostgreSQL, Redis, and SQLite from one blazing fast desktop app. Built-in SSH terminal & tunnels, multi-tab SQL editor, and 36+ shortcuts. Free download.' },
        { name: 'keywords', content: 'database client, MySQL client, PostgreSQL client, Redis client, SQLite client, database GUI, SQL editor, SSH tunnel, SSH terminal, database management, free database tool, query tabs' },
        { name: 'author', content: 'Dibiku' },
        { name: 'theme-color', content: '#0a0a0b' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Dibiku' },
        { property: 'og:image', content: 'https://dibiku.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://dibiku.com/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  routeRules: {
    '/': { prerender: true },
    '/features': { prerender: true },
    '/compare': { prerender: true },
    '/pricing': { prerender: true },
    '/download': { prerender: true },
    '/changelog': { prerender: true },
    '/shortcuts': { prerender: true },
    '/about': { prerender: true },
    '/id': { prerender: true },
    '/id/features': { prerender: true },
    '/id/compare': { prerender: true },
    '/id/pricing': { prerender: true },
    '/id/download': { prerender: true },
    '/id/changelog': { prerender: true },
    '/id/shortcuts': { prerender: true },
    '/id/about': { prerender: true },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})

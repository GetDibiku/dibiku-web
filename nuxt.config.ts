import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Dibiku — Fast, lightweight database client',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Connect to MySQL, PostgreSQL, Redis, and SQLite from one blazing fast desktop app. Starts in under 2 seconds. Free download for macOS, Windows, and Linux.' },
        { name: 'keywords', content: 'database client, MySQL client, PostgreSQL client, Redis client, SQLite client, database GUI, database management, SQL editor, free database tool' },
        { name: 'author', content: 'Dibiku' },
        { name: 'theme-color', content: '#0a0a0b' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Dibiku' },
        { property: 'og:title', content: 'Dibiku — The database client that respects your time' },
        { property: 'og:description', content: 'Fast, lightweight, keyboard-first. Connect to MySQL, PostgreSQL, Redis, and SQLite from one app. Free download.' },
        { property: 'og:image', content: 'https://dibiku.id/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://dibiku.id' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Dibiku — Fast, lightweight database client' },
        { name: 'twitter:description', content: 'Connect to MySQL, PostgreSQL, Redis, and SQLite from one blazing fast desktop app. Free download.' },
        { name: 'twitter:image', content: 'https://dibiku.id/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://dibiku.id' },
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
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})

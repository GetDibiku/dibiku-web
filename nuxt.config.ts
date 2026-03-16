import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  app: {
    head: {
      title: 'Dibiku — Fast, lightweight database client',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Connect to MySQL, PostgreSQL, Redis, and SQLite from a 15MB app built with Rust. Free download.' },
        { property: 'og:title', content: 'Dibiku — The database client that respects your time' },
        { property: 'og:description', content: 'Fast, lightweight, keyboard-first. Built with Rust.' },
        { property: 'og:image', content: 'https://dibiku.id/og-image.png' },
        { property: 'og:url', content: 'https://dibiku.id' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  routeRules: {
    '/': { prerender: true },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})

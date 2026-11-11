import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/plausible', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  alias: {
    docs: fileURLToPath(new URL('./', import.meta.url)),
  },
  vite: {
    resolve: {
      dedupe: ['vue', '@vue/runtime-core', '@vue/runtime-dom', '@vue/server-renderer'],
      alias: [
        {
          find: /^\/?docs\/(.*)/,
          replacement: `${fileURLToPath(new URL('./', import.meta.url))}$1`,
        },
      ],
    },
  },
  site: {
    name: 'HavanoZimra Cloud API',
  },
  robots: {
    robotsTxt: false,
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  compatibilityDate: '2025-07-18',
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }],
  },
  llms: {
    domain: 'https://erpfiscal.havano.co.zw',
    title: 'HavanoZimra Cloud API Documentation',
    description: 'Complete API documentation and integration guide for HavanoZimra Cloud fiscalization with ZIMRA.',
    full: {
      title: 'HavanoZimra Cloud API Documentation',
      description: 'Complete API documentation and integration guide for HavanoZimra Cloud fiscalization with ZIMRA.',
    },
  },
})

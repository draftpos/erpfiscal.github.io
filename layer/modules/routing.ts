import { defineNuxtModule, extendPages, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'routing',
  },
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const isI18nEnabled = !!(nuxt.options.i18n && nuxt.options.i18n.locales)

    // Ensure useDocusI18n is available in the app
    nuxt.hook('imports:extend', (imports) => {
      if (imports.some(i => i.name === 'useDocusI18n')) return

      imports.push({
        name: 'useDocusI18n',
        from: resolve('../app/composables/useDocusI18n'),
      })
    })

    // Native Nuxt file-based routing in pages/ handles [[lang]]/index.vue and [[lang]]/[...slug].vue
  },
})

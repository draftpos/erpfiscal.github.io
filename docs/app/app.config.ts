export default defineAppConfig({
  toc: {
    bottom: {
      links: [{
        icon: 'i-lucide-book-open',
        label: 'API Reference',
        to: '/en/api-reference/overview',
      }, {
        icon: 'i-lucide-shield-check',
        label: 'ZIMRA Compliance Guide',
        to: '/en/getting-started/overview',
      }],
    },
  },
  ui: {
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        container: '!pb-0',
      },
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none',
      },
    },
  },
})

<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, isEnabled } = useDocusI18n()

// Dynamic collection name based on i18n status
const collectionName = computed(() => isEnabled.value ? `landing_${locale.value}` : 'landing')

const targetPath = computed(() => {
  if (isEnabled.value && (route.path === '/' || !route.path.startsWith(`/${locale.value}`))) {
    return `/${locale.value}`
  }
  return route.path
})

const { data: page } = await useAsyncData(collectionName.value, () => queryCollection(collectionName.value as keyof Collections).path(targetPath.value).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})

if (page.value?.seo?.ogImage) {
  useSeoMeta({
    ogImage: page.value.seo.ogImage,
    twitterImage: page.value.seo.ogImage,
  })
}
else if (import.meta.server) {
  try {
    defineOgImageComponent('Landing', {
      title,
      description,
    })
  }
  catch {
    // Graceful fallback for client or non-OG contexts
  }
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>

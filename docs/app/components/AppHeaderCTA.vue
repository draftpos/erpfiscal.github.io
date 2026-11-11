<template>
  <UButton
    v-if="$route.path == '/' || $route.path == '/en'"
    to="/en/getting-started/overview"
    color="neutral"
    size="sm"
    class="hidden lg:inline-flex"
  >
    API Documentation
  </UButton>
</template>

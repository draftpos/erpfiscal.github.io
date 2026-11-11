<script setup lang="ts">
const props = defineProps<{
  white?: boolean
}>()

const color = computed(() => props.white ? 'text-white' : 'text-neutral-900 dark:text-white')
</script>

<template>
  <div class="flex items-center gap-2.5">
    <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400 font-black text-sm border border-emerald-500/20">
      HZ
    </div>
    <div class="flex flex-col">
      <span :class="color" class="font-bold text-base leading-none tracking-tight">
        HavanoZimra <span class="text-emerald-600 dark:text-emerald-400">Cloud</span>
      </span>
      <span class="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">
        Fiscal API
      </span>
    </div>
  </div>
</template>

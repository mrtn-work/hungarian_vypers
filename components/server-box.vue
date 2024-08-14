<template>
  <div class="bg-gray-200 dark:bg-gray-900 px-5 py-1.5 w-max rounded-lg space-x-3 flex items-center justify-center">
    <p class="roboto">{{ title }}</p>
    <button class="px-4 py-0.5 rounded-lg border dark:border-purple-500 text-sm dark:text-purple-500">
      IP Másolása
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  ip: string
}>()
</script>
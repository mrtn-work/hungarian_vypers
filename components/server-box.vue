<template>
  <div class="blur-bg px-5 py-1.5 w-max rounded-lg space-x-3 flex items-center justify-center">
    <p class="roboto">{{ title }}</p>
    <copy-button :copy-text="ip">IP Másolása</copy-button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  ip: string
}>()
</script>
<template>
  <div class="max-w-full mx-auto md:mx-0 text-white bg-gray-900 px-5 py-1.5 w-max rounded-lg space-x-3 md:flex items-center justify-center">
    <p class="roboto text-sm md:text-md">
      <span>{{ title }}</span>
      <br/>
      <span class="text-gray-400">IP: {{ ip }}</span>
    </p>
    <copy-button class="hidden md:block" :copy-text="ip">{{ $t('IP Másolása') }}</copy-button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  ip: string
}>()
</script>
<template>
  <button @click="copy" class="px-4 py-0.5 rounded-lg border dark:border-purple-500 text-sm dark:text-purple-500 flex items-center space-x-1">
    <span>
      <slot/>
    </span>
    <copy v-if="!processing" />
  </button>
</template>

<script setup lang="ts">
import Copy from "~/components/icons/copy.vue";

const props = defineProps<{
  copyText: string
}>()

const processing = ref(false)
</script>
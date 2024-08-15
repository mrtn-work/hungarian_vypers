<template>
  <button @click="handleCopy" class="px-4 py-0.5 rounded-lg border border-purple-400 text-purple-400 dark:border-purple-500 text-xs md:text-sm dark:text-purple-500 flex items-center space-x-1">
    <span>
      <slot/>
    </span>
    <copy />
  </button>
</template>

<script setup lang="ts">
import Copy from "~/components/icons/copy.vue";

const props = defineProps<{
  copyText: string
}>()

const handleCopy = async () => {
  if(navigator) await navigator.clipboard.writeText(props.copyText)
}

</script>
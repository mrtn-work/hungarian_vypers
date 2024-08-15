<template>
  <h2 @click="handleScroll" class="inter text-2xl md:text-4xl mt-5 group cursor-pointer" :id="sectionId">
    <span v-if="sectionId" class="transition dark:text-gray-500 absolute -ml-10 hidden group-hover:block">#</span>
    <slot/>
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  sectionId?: string
}>()

const handleScroll = () => {
  if(props.sectionId) window.location.hash = props.sectionId
}
</script>
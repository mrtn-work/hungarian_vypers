<template>
  <navbar/>
  <div class="max-w-screen-lg mx-auto">
    <main class="container px-5 text-black dark:text-white">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/main.css'
import {useCookie} from "#imports"

const theme = useCookie('theme', {
  default: () => 'dark'
})

useHead({
  htmlAttrs: {
    class: [theme.value, 'bg-[#08090a]'].join(' ')
  }
})
</script>
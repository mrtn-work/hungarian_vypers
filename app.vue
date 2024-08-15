<template>
  <navbar/>
  <div class="px-5 md:max-w-screen-lg md:mx-auto">
    <main class="md:px-5 text-black dark:text-white max-w-full">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/main.css'
import {useCookie, useI18n} from "#imports"
import {onMounted} from "vue";

const { setLocale } = useI18n()

const theme = useCookie('theme', {
  default: () => 'dark'
})

onMounted(() => {
  const lang = useCookie('lang', {
    default: () => navigator.language.substring(0, 2).toLowerCase(),
  })

  setLocale(lang.value)
})

useHead({
  htmlAttrs: {
    class: [theme.value, 'bg-[]'].join(' ')
  },
  bodyAttrs: {
    class: 'overflow-x-hidden overflow-y-scroll'
  }
})
</script>
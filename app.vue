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
import 'vue-toastification/dist/index.css'
import {useCookie, useI18n} from "#imports"
import {onMounted} from "vue";
import Snowflakes from "magic-snowflakes";

const { setLocale } = useI18n()

const theme = useCookie('theme', {
  default: () => 'dark'
})

onMounted(() => {
  const lang = useCookie('lang', {
    default: () => navigator.language.substring(0, 2).toLowerCase(),
  })

  setLocale(lang.value)
  snow()
})

const snow = () => {
  const now = new Date()
  const month = now.getMonth() + 1
  if([12, 1].includes(month)) new Snowflakes()
}

useHead({
  htmlAttrs: {
    class: [theme.value, 'bg-[]'].join(' ')
  },
  bodyAttrs: {
    class: 'overflow-x-hidden overflow-y-scroll'
  },
  script: [
    { src: 'https://mrtn.vip/badge.js' }
  ],
})


useSeoMeta({
  ogSiteName: 'Vypers',
  ogTitle: 'Hungarian Vypers Gaming',
  ogType: 'website',
  ogUrl: 'https://vypers.hu',
  themeColor: '#73177b',
  robots: 'index, follow'
})
</script>
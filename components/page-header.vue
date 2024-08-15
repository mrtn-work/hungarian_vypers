<script setup lang="ts">
defineProps<{
  serverName: string
  serverIp: string
}>()
</script>

<template>
  <header class="md:grid md:grid-cols-2 md:gap-4 items-center max-w-full">
    <div>
      <h1 class="text-4xl text-center md:text-left md:text-5xl inter drop-shadow mb-4">
        <span>Hungarian</span>&nbsp;<span class="text-gradient gaming-gradient">Vypers Gaming</span>
      </h1>
      <div class="w-full text-center md:text-left">
        <p class="dark:text-gray-400 mb-2 md:mb-0">{{ $t('Szerverek') }}</p>
        <server-box :title="serverName" :ip="serverIp" />
        <a href="#servers-and-staffs" class="block w-max mt-2 mx-auto md:mx-0 bg-gray-900 text-gray-400 rounded-lg text-sm text-center px-3 py-1">
          {{ $t('Továbbiak megtekintése') }}
        </a>
      </div>
    </div>
    <div class="hidden md:block">
      <img
          alt="Header"
          src="~/assets/images/header.png"
          class="w-1/2 m-auto md:w-full"
      />
    </div>
  </header>
  <bottom-scroll/>
</template>

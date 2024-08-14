<script setup lang="ts">
defineProps<{
  serverName: string
  serverIp: string
}>()
</script>

<template>
  <header class="md:grid md:grid-cols-2 md:gap-4 items-center">
    <div>
      <h1 class="text-5xl inter drop-shadow-lg mb-4">
        <span class="hu-gradient">Hungarian</span>&nbsp;<span class="text-gradient gaming-gradient">Vypers Gaming</span>
      </h1>
      <p class="dark:text-gray-400">Szerverek</p>
      <server-box :title="serverName" :ip="serverIp" />
      <button class="mt-2 dark:bg-gray-900 dark:text-gray-400 rounded-lg text-sm text-center px-3 py-1 mx-auto">
        Továbbiak megtekintése
      </button>
    </div>
    <div>
      <img
          alt="Header"
          src="~/assets/images/header.png"
          class="w-full"
      />
      <div></div>
    </div>
  </header>
</template>

<style scoped>
.hu-gradient {
  background: linear-gradient(to right, #ef4444, white, #22c55e);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gaming-gradient {
  background: linear-gradient(to top right, #8e4dcd, #cb3e87);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<script setup lang="ts">
import Logo from "~/components/icons/logo.vue";
import Steam from "~/components/icons/steam.vue";
import Discord from "~/components/icons/discord.vue";

const socials = ref([
  {icon: Discord, url: 'https://dc.vypers.hu'},
  {icon: Steam, url: 'https://steam.vypers.hu'},
])
</script>

<template>
  <footer class="md:flex items-center justify-between bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 px-10 py-5 w-full rounded-2xl mb-10 mt-20 shadow-glow">
    <div>
      <h2 class="text-xl roboto uppercase flex items-center space-x-2">
        <logo/>
        <span>Vypers</span>
      </h2>
      <p class="dark:text-gray-500 text-xs mt-2">
        Copyright © 2024 · Vypers ·<br/>
        {{ $t('Minden jog fenntartva') }}
      </p>
    </div>
    <hr class="md:hidden my-3 border-none bg-gray-700 h-0.5 rounded-lg" />
    <div class="text-sm dark:text-gray-500">
      <ul>
        <li>
          <a target="_blank" href="https://bans.vypers.hu">Bans</a>
        </li>
      </ul>
      <div class="mt-2 flex items-center space-x-2">
        <template v-for="{icon, url} in socials" :key="url">
          <a :href="url" target="_blank">
            <component :is="icon" />
          </a>
        </template>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.shadow-glow {
  --tw-shadow: 0px 0px 100px 40px rgba(135, 124, 255, .18);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
}
</style>
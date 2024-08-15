<template>
  <section class="md:grid md:grid-cols-2 md:gap-4 items-start my-5 overflow-x-hidden">
    <div data-aos="flip-up">
      <h3 class="inter text-2xl mb-3">{{ $t('Szerverek') }}</h3>
      <ul>
        <li v-for="server in servers" :key="server.id" class="blur-bg item">
          <p>
            <span class="dark:text-white">{{ server.hostname }}</span><br/>
            IP: {{ server.address }}
          </p>
          <copy-button :copy-text="server.address">{{ $t('IP Másolása') }}</copy-button>
        </li>
      </ul>
    </div>
    <div class="mt-4 md:mt-0" data-aos="zoom-in-up">
      <h3 class="inter text-2xl mb-3">{{ $t('Személyzet') }}</h3>
      <ul>
        <li v-for="admin in admins" :key="admin.id" class="blur-bg item">
          <div class="flex items-center space-x-2">
            <img v-if="admin.avatar" class="w-8 h-8 rounded-lg" :src="admin.avatar" alt="Avatar">
            <p>{{ admin.player_name }}</p>
          </div>
          <a
              :href="`https://steamcommunity.com/profiles/${admin.player_steamid}/`"
              target="_blank"
              class="px-4 py-0.5 rounded-lg border border-purple-400 text-purple-400 dark:border-purple-500 text-xs md:text-sm dark:text-purple-500 flex items-center space-x-1"
          >
            {{ $t('Steam profil') }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {Server} from "~/types/server";
import type {Admin} from "~/types/admin";

defineProps<{
  servers: Server[]
  admins: Admin[]
}>()
</script>

<style>
.item {
  @apply px-5 py-2 text-sm bg-gray-100 border border-gray-200 dark:border-0 dark:text-gray-400 w-full rounded-sm first:rounded-t-xl last:rounded-b-xl my-1.5 flex items-center space-x-2 justify-between
}
</style>
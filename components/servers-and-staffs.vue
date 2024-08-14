<template>
  <div class="md:grid md:grid-cols-2 md:gap-4 items-start my-5">
    <div>
      <h3 class="inter text-2xl mb-3">Szerverek</h3>
      <ul>
        <li v-for="server in servers" :key="server.id" class="blur-bg item">
          <p>
            <span class="dark:text-white">{{ server.hostname }}</span><br/>
            IP: {{ server.address }}
          </p>
          <copy-button :copy-text="server.address">IP Másolása</copy-button>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="inter text-2xl mb-3">Adminok</h3>
      <ul>
        <li v-for="admin in admins" :key="admin.id" class="blur-bg item">
          <p>{{ admin.player_name }}</p>
          <copy-button :copy-text="admin.player_steamid">Steam ID Másolása</copy-button>
        </li>
      </ul>
    </div>
  </div>
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
  @apply px-5 py-2 text-sm text-gray-400 w-full rounded-sm first:rounded-t-xl last:rounded-b-xl my-1.5 flex items-center space-x-2 justify-between
}
</style>
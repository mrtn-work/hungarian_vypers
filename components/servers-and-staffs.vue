<template>
  <div class="md:grid md:grid-cols-2 md:gap-4 items-start my-5">
    <div>
      <h2 class="inter text-2xl mb-3">Szerverek</h2>
      <ul>
        <li
            v-for="server in servers"
            :key="server.id"
            class="bg-gray-200 dark:bg-gray-900 px-5 py-1.5 w-max rounded-lg space-x-3 flex items-center justify-center my-1"
        >
          {{ server.hostname }}
        </li>
      </ul>
    </div>
    <div>
      <h2 class="inter text-2xl mb-3">Adminok</h2>
      <ul>
        <li v-for="admin in admins" :key="admin.id" class="bg-gray-200 dark:bg-gray-900 px-5 py-1.5 w-max rounded-lg space-x-3 flex items-center justify-center my-1">
          {{ admin.player_name }}
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
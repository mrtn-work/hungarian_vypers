<script setup lang="ts">
import type {Server} from "~/types/server";
import type {Admin} from "~/types/admin";
import {computed} from "vue";

const { data } = useFetch<{servers: Server[]; admins: Admin[]}>('/api/main')

const firstServer = computed((): Server => {
  if(!data.value || data.value.servers.length == 0) {
    return {
      id: 0,
      hostname: '',
      address: ''
    }
  }
  return data.value.servers[0]
})

const servers = computed(() => data.value?.servers || [])
const admins = computed(() => data.value?.admins || [])
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <page-header :server-name="firstServer.hostname" :server-ip="firstServer.address" />
  </div>
  <servers-and-staffs :servers="servers" :admins="admins" />
</template>

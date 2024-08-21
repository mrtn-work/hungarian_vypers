<script setup lang="ts">
import type {Server} from "~/types/server";
import type {Admin} from "~/types/admin";
import {computed} from "vue";
import type {AppEvent} from "~/types/event";

const { data } = await useFetch<{servers: Server[]; admins: Admin[]; event: AppEvent|null}>('/api/main')

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
const event = computed(() => data.value?.event || null)
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <page-header :server-name="firstServer.hostname" :server-ip="firstServer.address" />
  </div>
  <stats/>
  <br/>
  <section-title section-id="servers-and-staffs" data-aos="fade-right">
    <span class="gaming-gradient">{{ $t('Szerverek') }}</span>&nbsp;{{ $t('és') }}&nbsp;<span class="gaming-gradient">{{ $t('Személyzet') }}</span>
  </section-title>
  <servers-and-staffs :servers="servers" :admins="admins" />
  <section-title section-id="computer-needs" data-aos="fade-right">
    <span class="gaming-gradient">{{ $t('Gépigény') }}</span>
  </section-title>
  <pc-requirements />
  <section-title v-if="event != null" section-id="events" data-aos="fade-right">
    <span class="gaming-gradient">{{ $t('Események') }}</span>
  </section-title>
  <events v-if="event != null" :event="event as AppEvent" />
  <floating-footer/>
</template>

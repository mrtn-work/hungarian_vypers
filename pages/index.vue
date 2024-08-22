<script setup lang="ts">
import type {Server} from "~/types/server";
import type {Admin} from "~/types/admin";
import {computed, onMounted} from "vue";
import type {AppEvent} from "~/types/event";

const { data } = await useFetch<{servers: Server[]; admins: Admin[]; events: AppEvent[]}>('/api/main')

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
const eventsData = computed((): AppEvent[] => data.value?.events || [])

const pubData = useRuntimeConfig()

const widgetBot = ref(pubData.public.widgetBot)
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
  <div v-if="widgetBot">
    <iframe class="w-full h-[600px] rounded-xl my-10" :src="widgetBot" allow="clipboard-write; fullscreen"></iframe>
  </div>
  <section-title section-id="computer-needs" data-aos="fade-right">
    <span class="gaming-gradient">{{ $t('Gépigény') }}</span>
  </section-title>
  <pc-requirements />
  <section-title section-id="events" data-aos="fade-right">
    <span class="gaming-gradient">{{ $t('Események') }}</span>
  </section-title>
  <events :events="eventsData" />
  <floating-footer/>
</template>

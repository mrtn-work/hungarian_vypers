<script setup lang="ts">
import type {AppEvent} from "~/types/event";

const props = defineProps<{
  event: AppEvent
}>()

const countDown = computed(() => props.event.end_date != undefined)
</script>

<template>
  <div class="my-5 relative rounded-lg overflow-x-hidden" :class="{'md:grid grid-cols-2 gap-4': countDown}" data-aos="fade-up">
    <div>
      <p class="text-xl md:text-2xl my-2">
        <span class="gaming-gradient inter">{{ $t('Típus') }}</span>:
        {{ event.type }}
      </p>
      <p class="text-xl md:text-2xl my-2" v-if="event.prize">
        <span class="gaming-gradient inter">{{ $t('Nyeremény') }}</span>:
        {{ event.prize }}
      </p>
      <p class="text-xl md:text-2xl my-2">
        <span class="gaming-gradient inter">{{ $t('Itt') }}</span>:
        {{ event.visit }}
      </p>
    </div>
    <div v-if="countDown" class="p-4 text-center">
      <h3 class="text-2xl md:text-3xl mb-3 inter">{{ $t('Hátralévő idő') }}</h3>
      <p class="text-4xl inter px-2 py-1">
      <VueCountdown :time="(new Date(event.end_date as string).getTime()) - (new Date()).getTime()" v-slot="data">
          <template v-if="data" v-for="(time, inx) in [data.days, data.hours, data.minutes, data.seconds]" :key="inx">
            <span class="gaming-gradient">
              <template v-if="time.toString().length == 1">0</template>{{ time }}
            </span>
            <span v-if="inx != 3">&nbsp;:&nbsp;</span>
          </template>
      </VueCountdown>
      </p>
    </div>
  </div>
</template>
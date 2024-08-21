<script setup lang="ts">
import type {AppEvent} from "~/types/event";

const props = defineProps<{
  event: AppEvent
}>()

const countDown = computed(() => props.event.end_date != undefined)
</script>

<template>
  <div class="my-5 relative shadow-md rounded-lg overflow-x-scroll" data-aos="fade-up">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            {{ $t('Típus') }}
          </th>
          <th scope="col" class="px-6 py-3" v-if="event.prize">
            {{ $t('Nyeremény') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('Szerver') }}
          </th>
          <th scope="col" class="px-6 py-3" v-if="event.end_date">
            {{ $t('Hátralévő idő') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white dark:bg-darkBg hover:opacity-75 hover:cursor-pointer">
          <td class="px-6 py-4">
            {{ event.type }}
          </td>
          <td class="px-6 py-4" v-if="event.prize">
            {{ event.prize }}
          </td>
          <td class="px-6 py-4">
            {{ event.visit }}
          </td>
          <td class="px-6 py-4" v-if="event.end_date">
            <VueCountdown :time="(new Date(event.end_date as string).getTime()) - (new Date()).getTime()" v-slot="data">
              <template v-if="data">
                <span v-if="data.days > 0">{{ data.days }} {{ $t('Nap') }}&nbsp;</span>
                <span>{{ data.hours }} {{ $t('Óra') }}&nbsp;</span>
                <span>{{ data.minutes }} {{ $t('Perc') }}&nbsp;</span>
                <span>{{ data.seconds }} {{ $t('Másodperc') }}</span>
              </template>
            </VueCountdown>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
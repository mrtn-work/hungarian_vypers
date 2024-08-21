<script setup lang="ts">
import Spinner from "~/components/icons/spinner.vue";
import type {Boxes} from "~/types/boxes";
import humanNumber from 'human-number';

const { data } = await useFetch<{boxes: Boxes}>('/api/box')

const players = computed(() => data.value?.boxes.players)
const customPlayers = computed(() => data.value?.boxes.customPlayers)
const servers = computed(() => data.value?.boxes.servers)
</script>

<template>
  <section class="grid grid-cols-3 gap-3 -mt-20 mb-10 z-10 overflow-x-hidden" id="stats">
    <div data-aos="fade-right">
      <h3 class="text-lg text-center text-gray-700 dark:text-gray-300">{{ $t('Elérhető játékosok') }}</h3>
      <div class="box fira-code">
        <p v-if="players !== undefined">{{ humanNumber(players) }}</p>
        <spinner v-else />
      </div>
    </div>
    <div data-aos="zoom-in">
      <h3 class="text-lg text-center text-gray-700 dark:text-gray-300">{{ $t('Egyedi játékosok') }}</h3>
      <div class="box fira-code">
        <p v-if="customPlayers !== undefined">{{ humanNumber((customPlayers)) }}</p>
        <spinner v-else />
      </div>
    </div>
    <div data-aos="fade-left">
      <h3 class="text-lg text-center text-gray-700 dark:text-gray-300">{{ $t('Elérhető szerverek') }}</h3>
      <div class="box fira-code">
        <p v-if="servers !== undefined">{{ humanNumber(servers) }}</p>
        <spinner v-else />
      </div>
    </div>
  </section>
</template>

<style scoped>
.box {
  @apply w-24 h-24 mx-auto flex items-center justify-center text-3xl rounded-lg mt-2 bg-gray-200 text-gray-700 dark:text-gray-400 dark:bg-gray-900
}
</style>

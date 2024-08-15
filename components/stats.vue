<template>
  <section class="grid grid-cols-3 gap-3 -mt-20 mb-10 z-10 overflow-x-hidden" id="stats">
    <div data-aos="fade-right">
      <h3 class="text-lg text-center text-gray-700 dark:text-gray-300">{{ $t('Elérhető játékosok') }}</h3>
      <div class="box fira-code">
        <p>8</p>
      </div>
    </div>
    <div data-aos="zoom-in">
      <h3 class="text-lg text-center text-gray-700 dark:text-gray-300">{{ $t('Egyedi játékosok') }}</h3>
      <div class="box fira-code">
        <p>3</p>
      </div>
    </div>
    <div data-aos="fade-left">
      <h3 class="text-lg text-center text-gray-700 dark:text-gray-300">{{ $t('Elérhető szerverek') }}</h3>
      <div class="box fira-code">
        <p>1</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.box {
  @apply w-24 h-24 mx-auto flex items-center justify-center text-3xl rounded-lg mt-2 bg-gray-200 text-gray-700 dark:text-gray-400 dark:bg-gray-900
}
</style>

<script setup lang="ts">
defineProps<{

}>()
</script>
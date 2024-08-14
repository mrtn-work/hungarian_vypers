<template>
  <section class="grid grid-cols-3 gap-3 -mt-20 mb-10 z-10">
    <div>
      <h3 class="text-lg text-center dark:text-gray-300">Elérhető játékosok</h3>
      <div class="blur-bg box roboto">
        0
      </div>
    </div>
    <div>
      <h3 class="text-lg text-center dark:text-gray-300">Egyedi játékosok</h3>
      <div class="blur-bg box roboto">
        0
      </div>
    </div>
    <div>
      <h3 class="text-lg text-center dark:text-gray-300">Elérhető szerverek</h3>
      <div class="blur-bg box roboto">
        0
      </div>
    </div>
  </section>
</template>

<style scoped>
.box {
  @apply w-24 h-24 mx-auto flex items-center justify-center text-3xl rounded-lg mt-2
}
</style>
<script setup lang="ts">
</script>
<template>
  <div class="fixed bottom-0 w-full text-center z-10" v-if="showScroll">
    <a href="#stats"
       class="px-4 mb-5 transition duration-200 block text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 focus:text-green-500 dark:focus:text-green-400"
    >
      <scroll/>
    </a>
  </div>
</template>

<script setup lang="ts">
import Scroll from "~/components/icons/scroll.vue";
import {onMounted, onUnmounted} from "vue";

const showScroll = ref(true)

const handleScroll = () => {
  const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }

  showScroll.value = currentScrollPosition <= 15;
}

onMounted(() => document.addEventListener('scroll', handleScroll))
onUnmounted(() => document.removeEventListener('scroll', handleScroll))
</script>
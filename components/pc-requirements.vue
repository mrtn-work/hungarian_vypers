<template>
  <section class="my-5 relative overflow-x-auto shadow-md rounded-lg" data-aos="fade-up">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <tbody>
        <template v-for="(val, title) in data" :key="title">
          <tr class="bg-gray-100 dark:bg-darkBg" :class="{'border-b dark:border-gray-800': Object.keys(data).pop() != title}">
            <th scope="row" class="px-6 py-4 text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400">{{ title }}</th>
            <td class="px-6 py-4">{{ $t(val) }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
const data = ref({
  CPU: '4 hardware CPU threads - Intel® Core™ i5-750 or higher',
  RAM: '8 GB RAM',
  GPU: 'Video card must be 1 GB or more and should be a DirectX 11-compatible with support for Shader Model 5.0',
  DX: 'Version 11',
  OS: 'Windows® 10 (64-bit)',
  STO: '85 GB available space'
})
</script>
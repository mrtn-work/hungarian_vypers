<template>
  <nav class="fixed top-0 left-0 px-2 md:px-5 py-5 w-full z-50">
    <div class="nav-blur rounded-2xl max-w-screen-lg mx-auto">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 py-2.5">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <logo class="dark:text-white" />
        <span class="self-center text-xl whitespace-nowrap dark:text-white roboto">Vypers</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button @click="toggleTheme" type="button" class="text-black dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 bg-opacity-70 flex items-center justify-center">
          <sun class="hidden dark:inline-block" />
          <moon class="dark:hidden" />
        </button>
        <button @click="toggleMenu" data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <toggler/>
        </button>
      </div>
      <div :class="{'hidden': !menuOpen}" class="items-center justify-between w-full md:flex md:w-auto md:order-1 text-sm" id="navbar-cta">
        <ul class="flex flex-col font-medium py-4 px-2 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
          <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-purple-700 md:dark:text-purple-500" aria-current="page">Főoldal</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Szerverek, Személyzet</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gépigény</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Események</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from "~/components/icons/logo.vue";
import Toggler from "~/components/icons/toggler.vue";
import Sun from "~/components/icons/sun.vue";
import Moon from "~/components/icons/moon.vue";

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const toggleTheme = () => {
  const html = document.querySelector('html')
  if(!html) return

  const theme = useCookie('theme', {
    default: () => 'dark'
  })

  const isDark = html.classList.contains('dark')

  if(isDark) {
    html.classList.remove('dark')
    theme.value = 'light'
    return
  }

  html.classList.add('dark')
  theme.value = 'dark'
}
</script>
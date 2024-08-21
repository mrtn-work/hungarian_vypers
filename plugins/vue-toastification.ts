import {defineNuxtPlugin} from "#app";
import Toast from "vue-toastification";

export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.use(Toast, {})
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-aos", "@vesp/nuxt-fontawesome"],
  plugins: [
    {src: '~/plugins/vue-countdown.ts', mode: 'client'},
    {src: '~/plugins/vue-toastification.ts', mode: 'client'}
  ],
  runtimeConfig: {
    public: {
      widgetBot: process.env.WIDGETBOT_URL
    }
  },
  fontawesome: {
    icons: {
      solid: ['house', 'server', 'user-secret', 'computer', 'calendar'],
      regular: ['calendar']
    }
  }
})
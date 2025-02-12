// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/nuxt", '@nuxthub/core'],
  compatibilityDate: "2025-02-09",
  css: ['~/assets/css/main.css'],
  hub: {
    database: true
  },
  nitro: {
    routeRules: {
      '/discord': {
        redirect: 'https://discord.com/invite/UggVzyv3An'
      },
    },
    experimental: {
      tasks: true
    }
  }
})

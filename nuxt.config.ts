// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/nuxt"],
  compatibilityDate: "2025-02-09",
  css: ['~/assets/css/main.css'],
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[ '@nuxt/devtools','nuxt-icon','@nuxtjs/supabase','@nuxtjs/tailwindcss','@nuxt/image-edge','nuxt-swiper','@pinia/nuxt'],
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ["vue-toastification"],
  },
})

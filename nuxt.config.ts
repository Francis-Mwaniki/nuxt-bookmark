// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[ '@nuxt/devtools','nuxt-icon','@nuxtjs/tailwindcss','@nuxt/image-edge','nuxt-swiper'],
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
  css: ['~/assets/css/main.css'],
  buildModules:[
    '@nuxt/image',
  ]

})

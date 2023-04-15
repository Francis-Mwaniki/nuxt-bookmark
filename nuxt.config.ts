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
  router: {
    routes: [
      {
        name: 'Privacy Policy',
        path: '/privacy-policy',
        component: '~/pages/privacy-policy.vue'
      },
      {
        name: 'Terms & Conditions',
        path: '/terms-and-conditions',
        component: '~/pages/terms-and-conditions.vue'
      },
      {
        name: 'Refund Policy',
        path: '/refund-policy',
        component: '~/pages/refund-policy.vue'
      },
      {
        name: 'Support Center',
        path: '/support-center',
        component: '~/pages/support-center.vue'
      },
      {
        name: 'FAQs',
        path: '/faqs',
        component: '~/pages/faqs.vue'
      },
      {
        name: 'Our Mission',
        path: '/our-mission',
        component: '~/pages/our-mission.vue'
      },
      {
        name: 'Our Story',
        path: '/our-story',
        component: '~/pages/our-story.vue'
      },
      {
        name: 'Our Team',
        path: '/our-team',
        component: '~/pages/our-team.vue'
      }
    ]
  },
})

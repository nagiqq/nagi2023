import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: [
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    define: {
      false: false
    }
  },
  modules: ['nuxt-windicss', '@nuxt/content']
  // content: {
  // https://content.nuxtjs.org/api/configuration
  // },
})

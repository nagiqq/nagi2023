import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: 'nagiliu | blog',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'nagi liu | blog'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/myicon.ico' }]
    }
  },
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

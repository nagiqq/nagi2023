import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import * as components from 'vuetify/components'

import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,

    directives
  })

  nuxtApp.vueApp.use(vuetify)
})

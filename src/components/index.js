import i18nBox from './i18nBox/index.vue'
import myButton from './myButton/index.vue'

import 'virtual:svg-icons-register' // Loading icon resources from ../assets/svg
import svgIcon from './svgIcon/index.vue'

export default {
  install(app) {
    app.component('i18nBox', i18nBox)
    app.component('svgIcon', svgIcon)
    app.component('myButton', myButton)
  },
}

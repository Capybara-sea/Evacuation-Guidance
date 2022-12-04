import i18nBox from './i18nBox/index.vue'
import iconfont from './iconfont/index.vue'
import myButton from './myButton/index.vue'

export default {
  install(app) {
    app.component('i18nBox', i18nBox)
    app.component('iconfont', iconfont)
    app.component('myButton', myButton)
  },
}

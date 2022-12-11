import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'
import App from './App.vue'
import utils from './utils'
import router from './router'
import components from './components'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

const app = createApp(App)
const pinia = createPinia()

app.use(i18n)
app.use(utils)
app.use(pinia)
app.use(router)
app.use(components)
app.use(VueViewer) // image previewer
app.mount('#app')

const viewerConfig = {
  title: [true, (image) => image.alt],
  className: 'imagePreviewer',
}
if (app.config.globalProperties.$isMobile()) {
  viewerConfig.button = false
  viewerConfig.navbar = 2 // px>768
  viewerConfig.toolbar = false
}
VueViewer.setDefaults(viewerConfig)

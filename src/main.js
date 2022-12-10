import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'
import App from './App.vue'
import components from './components'
import router from './router'
import directive from './directive'
import '@vant/touch-emulator'

const app = createApp(App)
const pinia = createPinia()

app.use(i18n) // 国际化
app.use(pinia) // 状态管理
app.use(router) // 路由
app.use(directive) // 自定义指令
app.use(components) // 自定义组件
app.mount('#app')

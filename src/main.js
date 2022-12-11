import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'
import App from './App.vue'
import router from './router'
import components from './components'

const app = createApp(App)
const pinia = createPinia()

app.use(i18n) // 国际化
app.use(pinia) // 状态管理
app.use(router) // 路由
app.use(components) // 自定义组件
app.mount('#app')

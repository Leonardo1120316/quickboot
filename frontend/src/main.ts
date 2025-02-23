import { createApp } from 'vue'
import '@/styles/style.css'
import App from './App.vue'
import { pinia } from '@/store'
import { router } from '@/router'
import { loadPlugins } from './plugins'
import { loadSvg } from './icons'

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)
/** 加载Svg */
loadSvg(app)

app.use(pinia)
app.use(router)
app.mount('#app')
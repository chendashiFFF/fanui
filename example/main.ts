import { createApp } from 'vue'
import App from './App.vue'
import FanUI from '../packages'
// 确保导入了样式文件
import '../packages/styles/index.scss'

const app = createApp(App)
app.use(FanUI)
app.mount('#app') 
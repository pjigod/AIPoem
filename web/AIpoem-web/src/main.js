import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Menu from '../components/common/Menu.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'swiper/css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('Menu',Menu)

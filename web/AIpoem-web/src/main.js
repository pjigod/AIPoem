import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Menu from '../components/common/Menu.vue'

import 'swiper/css';
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
app.component('Menu',Menu)

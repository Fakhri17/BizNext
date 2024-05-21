import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/app.css'
import 'preline/preline'
import { Icon } from '@iconify/vue'

const app = createApp(App)

app.use(router)
app.component('Icon', Icon)
app.mount('#app')

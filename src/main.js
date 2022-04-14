import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
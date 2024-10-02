import './assets/main.css'
// import 'leafle
// import 'leaflet/dist/leaflet.css'
// import 'leaflet/dist/leaflet'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

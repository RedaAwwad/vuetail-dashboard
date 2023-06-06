
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/css/tailwindcss.css'
import '@/assets/scss/main.scss'

// plugins
import PerfectScrollbar from "@/plugins/perfect-scrollbar";


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PerfectScrollbar)

app.mount('#app')

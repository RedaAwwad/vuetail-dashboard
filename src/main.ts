import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/tailwindcss.css'
import '@/assets/scss/main.scss'

import { createPinia } from 'pinia'
import perfectScrollbar from "@/plugins/perfect-scrollbar";
import i18n from "@/plugins/i18n";

const app = createApp(App)
app.use(router)

// plugins
app.use(createPinia())
app.use(perfectScrollbar)
app.use(i18n)

app.mount('#app')

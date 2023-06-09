import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/css/tailwindcss.css';
import '@/assets/scss/main.scss';

import { createPinia } from 'pinia';
import { iconsSet as icons } from '@/assets/icons';
import perfectScrollbar from '@/plugins/perfect-scrollbar';
import i18n from '@/plugins/i18n';

const app = createApp(App);
app.use(router);

// plugins
app.use(createPinia());
app.provide('icons', icons);
app.use(perfectScrollbar, {
    watchOptions: true,
    options: {
        suppressScrollX: true,
        wheelSpeed: 1000
    }
});
app.use(i18n);

app.mount('#app');

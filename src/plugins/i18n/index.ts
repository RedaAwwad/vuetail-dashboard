import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ar from './locales/ar.json';
import axios from 'axios';

// default app locale & layout direction
const locale: string = 'en';
const direction: string = locale === 'ar' ? 'rtl' : 'ltr';

const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    globalInjection: true,
    messages: { en, ar },
});

const setDefaultLocale = async (dir: string) => {
    try {
        // Get user locale's settings if authenticated
        // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log(res.data);

        document.querySelector('html')?.setAttribute('dir', dir);
        document.querySelector('html')?.setAttribute('lang', locale);
    } catch (error) {
        console.error(error);
        document.querySelector('html')?.setAttribute('dir', 'ltr');
        document.querySelector('html')?.setAttribute('lang', 'en');
    }
};

setDefaultLocale(direction);

export default i18n;


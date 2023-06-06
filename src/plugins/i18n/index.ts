import { createI18n } from "vue-i18n";
import ar from './lang/ar.json'
import en from './lang/en.json'

const i18n = createI18n({
    legacy: false,
    locale: "en",
    globalInjection: true,
    messages: { ar, en },
});

export default i18n;
interface I18nOptions {
    legacy: boolean;
    locale: string;
    fallbackLocale: string;
    globalInjection: boolean;
    messages: object;
}

declare module 'vue-i18n' {
    export function createI18n(options: I18nOptions);
    export function useI18n();
}

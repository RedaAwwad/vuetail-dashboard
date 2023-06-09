export interface I18nOptions {
    legacy: boolean;
    locale: string;
    fallbackLocale: string;
    globalInjection: boolean;
    messages: object;
}

export interface Language {
    id: number;
    name: string;
    code: string;
    flag: string;
}

declare module 'vue-i18n' {
    export function createI18n(options: I18nOptions);
    export function useI18n();
}

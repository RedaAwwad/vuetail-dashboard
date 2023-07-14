import type { LocationAsRelativeRaw } from 'vue-router';

export interface I18nLocale {
    id: number;
    name: string;
    code: string;
    flag: string;
}

export interface IBreadcrumb {
    name: string;
    to?: string | LocationAsRelativeRaw | null;
}

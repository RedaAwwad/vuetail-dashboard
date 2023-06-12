import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export function useDirection() {
    const { locale } = useI18n();
    const dir = ref(locale.value === 'ar' ? 'rtl' : 'ltr');
    const textAlignment = ref(locale.value === 'ar' ? 'right' : 'left');

    return {
        dir,
        textAlignment,
    };
}
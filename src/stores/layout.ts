import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', () => {
    const isMobileSidebarActive = ref<boolean>(false);

    const updateMobileSidebarStatus = (status?: boolean) => {
        if (typeof status === 'boolean') {
            return (isMobileSidebarActive.value = status);
        }

        isMobileSidebarActive.value = !isMobileSidebarActive.value;
    };

    return {
        isMobileSidebarActive,
        updateMobileSidebarStatus,
    };
});

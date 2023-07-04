import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref<boolean>(true);
    const user = ref(null);


    const checkUserAuthentication = () => {

    };


    return {
        isAuthenticated,
        user,
        checkUserAuthentication,
    };
});
import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useNProgress } from '@vueuse/integrations/useNProgress';
import moment from "moment";

interface IUser {
    id?: number;
    name: string;
    email: string;
    role: string;
}

const _TOKEN = 'vuetail_token';
const _USER = 'vuetail_user';

export const useAuthStore = defineStore('auth', () => {
    const cookies = useCookies();
    const router = useRouter();
    const { isLoading } = useNProgress();

    const isAuthenticated = toRef<boolean>(!!cookies.get(_TOKEN));
    const user = toRef<IUser | null>(cookies.get(_USER));

    const setAuth = (token: string, userInfo: IUser) => {
        const cookiesConfig = {
            expires: new Date(moment().add(7, 'days').format('L hh:mm:ss')),
            path: '/'
        };

        cookies.set(_TOKEN, token, cookiesConfig);
        cookies.set(_USER, userInfo, cookiesConfig);
        isAuthenticated.value = true;
        user.value = userInfo;
    };

    const checkUserAuthentication = () => { };

    const logout = () => {
        isLoading.value = true;
        user.value = null;
        cookies.remove(_TOKEN);
        cookies.remove(_USER);
        isAuthenticated.value = false;

        setTimeout(() => {
            router.push({ name: 'auth.login' });
            isLoading.value = false;
        }, 1000);
    };


    return {
        isAuthenticated,
        user,
        setAuth,
        checkUserAuthentication,
        logout,
    };
});
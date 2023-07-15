import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// Routes Guards
router.beforeEach((to, from, next) => {
    const { isAuthenticated } = useAuthStore();
    console.log({ authRoute: isAuthenticated });


    if (to.meta.requiresAuth && to.name !== 'auth.login' && !isAuthenticated) {
        return next({ name: 'auth.login' });
    }
    else if (to.meta.guest && to.name !== 'dashboard' && isAuthenticated) {
        return next({ name: 'dashboard' });
    } else {
        return next();
    }
});

export default router;

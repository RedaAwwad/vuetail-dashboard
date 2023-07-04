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

    if (to.name !== 'auth.login' && !isAuthenticated) next({ name: 'auth.login' });
    else next();
});

export default router;

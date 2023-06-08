// Auth Views
const AuthLayout = () => import('@/layouts/auth/AuthLayout.vue');
const LoginPage = () => import('@/views/auth/Login.vue');
const RegisterPage = () => import('@/views/auth/Register.vue');
const ForgotPasswordPage = () => import('@/views/auth/ForgotPassword.vue');

// Dashboard Views
const DashboardLayout = () => import('@/layouts/dashboard/DashboardLayout.vue');
const DashboardIndexPage = () => import('@/views/dashboard/index.vue');
const DashboardPages = () => import('@/views/dashboard/pages/index.vue');
const DashboardComponentsPage = () => import('@/views/dashboard/pages/components/index.vue');
const DashboardUtilsPage = () => import('@/views/dashboard/pages/utils/index.vue');
const DashboardFormsPage = () => import('@/views/dashboard/forms/index.vue');

// General Views
const AboutPage = () => import('@/views/About.vue');

export const routes = [
    /* Start Auth Routes */
    {
        path: '/auth',
        name: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                name: 'auth.login',
                component: LoginPage,
            },
            {
                path: 'register',
                name: 'auth.register',
                component: RegisterPage,
            },
            {
                path: 'forgot-password',
                name: 'auth.forgot-password',
                component: ForgotPasswordPage,
            },
        ],
    },
    /* End Auth Routes */

    /* Start Dashboard Routes */
    {
        path: '/',
        component: DashboardLayout,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: DashboardIndexPage,
            },
            {
                path: '/pages',
                name: 'dashboard.pages',
                component: DashboardPages,
                children: [
                    {
                        path: '/pages',
                        name: 'dashboard.components',
                        component: DashboardComponentsPage,
                    },
                    {
                        path: '/pages/utils',
                        name: 'dashboard.utils',
                        component: DashboardUtilsPage,
                    },
                ],
            },
            {
                path: '/forms',
                name: 'dashboard.forms',
                component: DashboardFormsPage,
            },
        ],
    },
    /* End Dashboard Routes */

    /* Start General Routes */
    {
        path: '/about',
        name: 'about',
        component: AboutPage,
    },
    /* End General Routes */
];

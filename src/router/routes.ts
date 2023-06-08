// Auth Views
const AuthLayout = () => import('@/layouts/auth/AuthLayout.vue');
const LoginPage = () => import('@/views/auth/Login.vue');
const RegisterPage = () => import('@/views/auth/Register.vue');
const ForgotPasswordPage = () => import('@/views/auth/ForgotPassword.vue');

// Dashboard Views
const DashboardLayout = () => import('@/layouts/dashboard/DashboardLayout.vue');
const DashboardIndexPage = () => import('@/views/dashboard/index.vue');
const DashboardPages = () => import('@/views/dashboard/components/index.vue');
const DashboardButtonsPage = () => import('@/views/dashboard/components/buttons/index.vue');
const DashboardUtilsPage = () => import('@/views/dashboard/components/utils/index.vue');
const DashboardFormsPage = () => import('@/views/dashboard/components/forms/index.vue');
const DashboardUsersPage = () => import('@/views/dashboard/users/index.vue');

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
                path: 'dashboard/components',
                component: DashboardPages,
                children: [
                    {
                        path: '/dashboard/components',
                        name: 'components.buttons',
                        component: DashboardButtonsPage,
                    },
                    {
                        path: '/dashboard/components/utils',
                        name: 'components.utils',
                        component: DashboardUtilsPage,
                    },
                    {
                        path: '/dashboard/components/forms',
                        name: 'components.forms',
                        component: DashboardFormsPage,
                    },
                ],
            },
            {
                path: '/dashboard/users',
                name: 'dashboard.users',
                component: DashboardUsersPage,
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

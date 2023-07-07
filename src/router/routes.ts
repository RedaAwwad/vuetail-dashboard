/* General Views */
const AboutPage = () => import('@/views/About.vue');

/* Auth Views */
const AuthLayout = () => import('@/layouts/AuthLayout.vue');
const LoginPage = () => import('@/views/auth/Login.vue');
const RegisterPage = () => import('@/views/auth/Register.vue');
const ForgotPasswordPage = () => import('@/views/auth/ForgotPassword.vue');

/* Dashboard Views */
const DashboardLayout = () => import('@/layouts/DashboardLayout.vue');
const DashboardIndexPage = () => import('@/views/dashboard/index.vue');

/* Products Routes */
const ProductsPages = () => import('@/views/dashboard/products/index.vue');
const ProductsHomePage = () => import('@/views/dashboard/products/Products.vue');
const CreateProductPage = () => import('@/views/dashboard/products/Create.vue');
const ProductDetailsPage = () => import('@/views/dashboard/products/_id.vue');

/* Orders Routes */
const OrdersPages = () => import('@/views/dashboard/orders/index.vue');
const OrdersHomePage = () => import('@/views/dashboard/orders/Orders.vue');
const CreateOrderPage = () => import('@/views/dashboard/orders/Create.vue');
const OrderDetailsPage = () => import('@/views/dashboard/orders/_id.vue');

const DashboardPages = () => import('@/views/dashboard/components/index.vue');
const DashboardButtonsPage = () => import('@/views/dashboard/components/buttons/index.vue');
const DashboardUtilsPage = () => import('@/views/dashboard/components/utils/index.vue');
const DashboardFormsPage = () => import('@/views/dashboard/components/forms/index.vue');
const DashboardUsersPage = () => import('@/views/dashboard/users/index.vue');

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
            /* Start Products Routes */
            {
                path: 'dashboard/products',
                component: ProductsPages,
                children: [
                    {
                        path: '/dashboard/products',
                        name: 'products.home',
                        component: ProductsHomePage,
                    },
                    {
                        path: '/dashboard/products/create',
                        name: 'products.create',
                        component: CreateProductPage,
                    },
                    {
                        path: '/dashboard/products/:id',
                        name: 'products.show',
                        component: ProductDetailsPage,
                    },
                ],
            },
            /* Start Orders Routes */
            {
                path: 'dashboard/orders',
                component: OrdersPages,
                children: [
                    {
                        path: '/dashboard/orders',
                        name: 'orders.home',
                        component: OrdersHomePage,
                    },
                    {
                        path: '/dashboard/orders/create',
                        name: 'orders.create',
                        component: CreateOrderPage,
                    },
                    {
                        path: '/dashboard/orders/:id',
                        name: 'orders.show',
                        component: OrderDetailsPage,
                    },
                ],
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

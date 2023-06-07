// Auth layouts
const AuthLayout = () => import('@/layouts/auth/AuthLayout.vue');
const LoginPage = () => import('@/views/auth/Login.vue');
const RegisterPage = () => import('@/views/auth/Register.vue');
const ForgotPasswordPage = () => import('@/views/auth/ForgotPassword.vue');

// Dashboard layouts
const DashboardLayout = () => import('@/layouts/dashboard/DashboardLayout.vue');

export const routes = [
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
  {
    path: '/',
    name: 'dashboard',
    component: DashboardLayout,
    children: [
      // {
      //     path: 'login',
      //     name: 'auth.login',
      //     component: LoginPage
      // }
    ],
  },
];

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const dashboardRoutes = [
        {
            path: '/',
            name: 'dashboard',
            label: 'Dashboard',
            icon: 'cilApps',
            count: 0,
            children: [],
        },
        {
            path: '',
            name: 'components.buttons',
            label: 'Components',
            icon: 'cilColumns',
            count: 0,
            children: [
                {
                    path: '/components/buttons',
                    name: 'components.buttons',
                    label: 'Components',
                    icon: 'cilChartPie',
                },
                {
                    path: '/components/utils',
                    name: 'components.utils',
                    label: 'Utils',
                    icon: 'cilChartPie',
                },
                {
                    path: '/components/forms',
                    name: 'components.forms',
                    label: 'Forms',
                    icon: 'cilChartPie',
                    children: [],
                },
            ],
        },
        {
            path: '',
            name: 'dashboard',
            label: 'Kanban',
            icon: 'cilClone',
            count: 0,
            children: [],
        },
        {
            path: '',
            name: 'dashboard',
            label: 'Inbox',
            icon: 'cilEnvelopeClosed',
            count: 3,
            children: [],
        },
        {
            path: '/dashboard/users',
            name: 'dashboard.users',
            label: 'Users',
            icon: 'cilUser',
            count: 0,
            children: [],
        },
        {
            path: '',
            name: 'dashboard',
            label: 'Products',
            icon: 'cilCart',
            count: 0,
            children: [],
        },
        {
            path: '',
            name: 'dashboard',
            label: 'Bookings',
            icon: 'cilCalendar',
            count: 0,
            children: [],
        },
    ];

    const logout = () => {};
</script>

<template>
    <aside
        class="w-[350px] h-screen flex flex-col justify-between border-r-[0.5px] border-gray-200 dark:border-gray-900 bg-white dark:bg-gray-800"
    >
        <!-- bg-white dark:bg-gray-800 -->
        <div class="h-[80px] flex items-center px-4 py-6 border-b-[0.5px] border-gray-300 dark:border-gray-600">
            <RouterLink :to="{ name: 'dashboard' }" title="Go to the Dashboard">
                <img width="125" class="max-h-full" src="@/assets/imgs/logo.png" alt="logo" />
            </RouterLink>
        </div>

        <!-- Start Sidebar Routes -->
        <PerfectScrollbar class="px-3">
            <ul class="py-6 space-y-2 font-medium h-[calc(100vh-(80px+65px))]">
                <li v-for="(route, index) in dashboardRoutes" :key="index">
                    <RouterLink
                        :to="{ name: route.name }"
                        class="w-full flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <div class="flex items-center">
                            <CIcon :icon="route.icon" width="1.3rem" height="1.3rem" />
                            <span class="ml-3">{{ route.label }}</span>
                        </div>
                        <span
                            v-if="route.count"
                            class="inline-flex items-center justify-center h-2.5 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-primary dark:text-gray-100"
                            >{{ route.count }}</span
                        >
                    </RouterLink>
                </li>
                <li>
                    <button
                        @click="logout"
                        class="w-full flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <div class="flex items-center">
                            <CIcon icon="cilAccountLogout" width="1.2rem" height="1.2rem" />
                            <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
                        </div>
                    </button>
                </li>
            </ul>
        </PerfectScrollbar>
        <!-- End Sidebar Routes -->

        <p
            class="h-[65px] flex items-center justify-between px-4 py-2 border-t-[0.5px] border-gray-300 dark:border-gray-600 text-sm"
        >
            <span class="dark:text-white">Vuetail &copy; 2023</span>
            <a
                href="https://www.linkedin.com/in/redaawwad/"
                target="_blank"
                class="text-primary hover:text-blue-500"
            >
                Need Help?
            </a>
        </p>
    </aside>
</template>

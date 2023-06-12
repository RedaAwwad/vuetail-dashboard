<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';
    import { useLayoutStore } from '@/stores/layout';
    import type { SidebarRoute } from '@/types/sidebar';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const layoutStore = useLayoutStore();

    const dashboardRoutes = ref<SidebarRoute[]>([
        {
            path: '/',
            name: 'dashboard',
            label: 'Dashboard',
            icon: 'cilApps',
            count: 0,
            active: false,
            children: [],
        },
        {
            path: '/dashboard/components',
            name: 'components.buttons',
            label: 'Components',
            icon: 'cilColumns',
            count: 0,
            active: false,
            children: [
                {
                    path: '/dashboard/components/buttons',
                    name: 'components.buttons',
                    label: 'Buttons',
                },
                {
                    path: '/dashboard/components/forms',
                    name: 'components.forms',
                    label: 'Forms',
                },
                {
                    path: '/dashboard/components/forms',
                    name: 'components.forms',
                    label: 'Modals',
                },
                {
                    path: '/dashboard/components/utils',
                    name: 'components.utils',
                    label: 'Utils',
                },
            ],
        },
        {
            path: '/dashboard/kanban',
            name: 'about',
            label: 'Kanban',
            icon: 'cilClone',
            count: 0,
            active: false,
            children: [],
        },
        {
            path: '/dashboard/inbox',
            name: 'about',
            label: 'Inbox',
            icon: 'cilEnvelopeClosed',
            count: 3,
            active: false,
            children: [],
        },
        {
            path: '/dashboard/users',
            name: 'dashboard.users',
            label: 'Users',
            icon: 'cilUser',
            count: 0,
            active: false,
            children: [
                {
                    path: '/components/buttons',
                    name: 'components.buttons',
                    label: 'Create User',
                },
                {
                    path: '/components/forms',
                    name: 'components.forms',
                    label: 'Edit User',
                },
            ],
        },
        {
            path: '/dashboard/products',
            name: 'about',
            label: 'Products',
            icon: 'cilCart',
            count: 0,
            active: false,
            children: [],
        },
        {
            path: '/dashboard/bookings',
            name: 'about',
            label: 'Bookings',
            icon: 'cilCalendar',
            count: 0,
            active: false,
            children: [],
        },
    ]);

    const closeMobileSidebar = () => layoutStore.updateMobileSidebarStatus(false);

    const openDropdownLinks = (targetRoute: SidebarRoute): void => {
        dashboardRoutes.value = dashboardRoutes.value.map((route) => {
            if (targetRoute.children.length && targetRoute.path === route.path) {
                route.active = !route.active;
            } else {
                route.active = false;
            }

            return route;
        });
    };

    const checkActiveRouteParent = (): void => {
        let currentRoutePath = useRoute().path;

        dashboardRoutes.value = dashboardRoutes.value.map((route) => {
            if (route.children.length && currentRoutePath.includes(route.path)) {
                route.active = true;
            }

            return route;
        });
    };

    const logout = (): void => { };

    onMounted(() => checkActiveRouteParent());
</script>

<template>
    <div
        v-if="layoutStore.isMobileSidebarActive"
        @click="closeMobileSidebar()"
        class="fixed inset-0 z-40 bg-black bg-opacity-20 transition-opacity duration-300"
    ></div>
    <aside
        class="w-[275px] lg:w-[350px] h-screen flex flex-col justify-between fixed lg:relative left-0 z-50 transition-transform border-r-[0.5px] border-gray-200 dark:border-gray-900 bg-white dark:bg-gray-800"
        :class="[layoutStore.isMobileSidebarActive ? 'translate-x-0' : '-translate-x-full lg:translate-x-0']"
    >
        <!-- bg-white dark:bg-gray-800 -->
        <div class="h-[75px] flex items-center p-4 border-b-[0.5px] border-gray-300 dark:border-gray-600">
            <RouterLink
                :to="{ name: 'dashboard' }"
                title="Go to the Dashboard"
            >
                <img
                    width="125"
                    class="max-h-full"
                    src="@/assets/imgs/logo.png"
                    alt="logo"
                />
            </RouterLink>
        </div>

        <!-- Start Sidebar Routes -->
        <PerfectScrollbar class="h-[calc(100vh-(75px+65px))] py-6 px-3 font-medium">
            <ul class="space-y-2">
                <li
                    v-for="(route, index) in dashboardRoutes"
                    :key="index"
                >
                    <RouterLink
                        exact
                        :to="{ name: route.name }"
                        @click="openDropdownLinks(route)"
                        class="sidebar-link w-full flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        :class="{ 'router-link-exact-active': route.children.length && route.active }"
                    >
                        <div class="flex items-center">
                            <CIcon
                                :icon="route.icon"
                                width="1.3rem"
                                height="1.3rem"
                            />
                            <span class="ms-3">{{ route.label }}</span>
                        </div>
                        <span
                            v-if="route.count"
                            class="inline-flex items-center justify-center h-2.5 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-primary dark:text-gray-100"
                        >{{ route.count }}</span>
                        <span
                            v-if="route.children.length"
                            class="inline-block transition-shadow"
                            :class="{ 'rotate-180': route.active }"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="0.8rem"
                                height="0.8rem"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                                />
                            </svg>
                        </span>
                    </RouterLink>
                    <ul
                        class="subroutes space-y-2 overflow-hidden transition-all duration-600 ease-in-out"
                        :class="[route.active ? 'h-auto py-2' : 'h-0']"
                    >
                        <li
                            v-for="(subRoute, k) in route.children"
                            :key="k"
                        >
                            <RouterLink
                                exact
                                :to="{ name: subRoute.name }"
                                @click="closeMobileSidebar()"
                                class="sidebar-link w-full flex items-center justify-between p-2 ps-10 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <div class="flex items-center">
                                    <CIcon
                                        icon="cilCircle"
                                        width="0.5rem"
                                        height="0.5rem"
                                    />
                                    <span class="ms-3">{{ subRoute.label }}</span>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <button
                        @click="logout"
                        class="w-full flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <div class="flex items-center">
                            <CIcon
                                icon="cilAccountLogout"
                                width="1.2rem"
                                height="1.2rem"
                            />
                            <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
                        </div>
                    </button>
                </li>
            </ul>
        </PerfectScrollbar>
        <!-- End Sidebar Routes -->

        <p
            class="h-[65px] flex items-center justify-between px-4 py-2 border-t-[0.5px] border-gray-300 dark:border-gray-600 text-sm">
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

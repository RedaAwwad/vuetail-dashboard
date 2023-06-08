<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    const dashboardRoutes = [
        {
            path: '/',
            name: 'dashboard',
            label: 'Dashboard',
            children: [],
        },
        {
            path: '',
            name: '',
            label: 'Pages',
            children: [
                {
                    path: '/dashboard/components',
                    name: 'dashboard.components',
                    label: 'Components',
                },
                {
                    path: '/dashboard/utils',
                    name: 'dashboard.utils',
                    label: 'Utils',
                },
            ],
        },
        {
            path: '/dashboard/forms',
            name: 'dashboard.forms',
            label: 'Forms',
            children: [],
        },
    ];
</script>

<template>
    <aside
        class="w-[350px] h-screen flex flex-col justify-between border-r-[0.5px] border-gray-200 dark:border-gray-900 bg-white dark:text-sky-400 dark:bg-gray-800"
    >
        <!-- bg-white dark:bg-gray-800 -->
        <div class="h-[80px] flex items-center px-4 py-6 border-b-[0.5px] border-gray-300 dark:border-gray-600">
            <RouterLink :to="{ name: 'dashboard' }" title="Go to the Dashboard">
                <img width="125" class="max-h-full" src="@/assets/imgs/logo.png" alt="logo" />
            </RouterLink>
        </div>
        <!-- <ul class="px-4 py-6" style="height: calc(100vh - (80px + 70px));">
            <li v-for="(route, index) in dashboardRoutes" :key="index">
                <RouterLink :to="{ name: route.name }" class="py-2 px-3">
                    {{ route.label }}
                </RouterLink>
            </li>
        </ul> -->
        <div class="px-3 overflow-y-auto">
            <ul class="px-3 py-6 space-y-2 font-medium h-[calc(100vh-(80px+70px))]">
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            ></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                            ></path>
                            <path
                                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                            ></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        <span
                            class="inline-flex items-center justify-center h-2.5 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-primary dark:text-gray-100"
                            >3</span
                        >
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                    </a>
                </li>
            </ul>
        </div>
        <p
            class="h-[70px] flex items-center justify-between px-4 py-6 border-t-[0.5px] border-gray-300 dark:border-gray-600 text-sm"
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

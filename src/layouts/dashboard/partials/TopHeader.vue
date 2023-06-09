<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { useLayoutStore } from '@/stores/layout';
    import type { Language } from '@/types/vue-i18n';
    import { useI18n } from 'vue-i18n';

    import BtnIcon from '@/components/buttons/BtnIcon.vue';
    import Breadcrumb from '@/components/helpers/Breadcrumb.vue';
    import DropdownMenu from '@/components/ui/DropdownMenu.vue';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const { updateMobileSidebarStatus } = useLayoutStore();
    const { locale } = useI18n();

    const languages: Language[] = [
        {
            id: 1,
            name: 'Arabic (SA)',
            code: 'ar',
            flag: 'cifSa',
        },
        {
            id: 2,
            name: 'English (US)',
            code: 'en',
            flag: 'cifUs',
        },
    ];

    const updateAppLanguage = (lang: Language) => {};
</script>

<template>
    <nav
        class="bg-white border-b lg:border-none border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
    >
        <div class="max-w-screen-xl flex items-center justify-between h-[75px] p-4">
            <div class="items-center justify-between w-full flex md:w-auto text-sm font-semibold">
                <div class="flex items-center gap-2 lg:hidden">
                    <RouterLink :to="{ name: 'dashboard' }" title="Go to the Dashboard">
                        <img width="125" class="max-h-full" src="@/assets/imgs/logo.png" alt="logo" />
                    </RouterLink>

                    <BtnIcon
                        @click="updateMobileSidebarStatus()"
                        icon="cilHamburgerMenu"
                        icon-width="1.4rem"
                        icon-height="1.4rem"
                    />
                </div>
                <ul
                    class="hidden lg:flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-2 md:mt-0 md:border-0"
                >
                    <li>
                        <RouterLink
                            :to="{ name: 'dashboard' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Dashboard
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'about' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            About</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'about' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Services</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'about' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Pricing</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'about' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Contact</RouterLink
                        >
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-x-3">
                <DropdownMenu>
                    <template #control>
                        <svg
                            class="w-5 h-5 me-2 rounded-full"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 3900 3900"
                        >
                            <path fill="#b22234" d="M0 0h7410v3900H0z" />
                            <path
                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                stroke="#fff"
                                stroke-width="300"
                            />
                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                            <g fill="#fff">
                                <g id="d">
                                    <g id="c">
                                        <g id="e">
                                            <g id="b">
                                                <path
                                                    id="a"
                                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                                />
                                                <use xlink:href="#a" y="420" />
                                                <use xlink:href="#a" y="840" />
                                                <use xlink:href="#a" y="1260" />
                                            </g>
                                            <use xlink:href="#a" y="1680" />
                                        </g>
                                        <use xlink:href="#b" x="247" y="210" />
                                    </g>
                                    <use xlink:href="#c" x="494" />
                                </g>
                                <use xlink:href="#d" x="988" />
                                <use xlink:href="#c" x="1976" />
                                <use xlink:href="#e" x="2470" />
                            </g>
                        </svg>
                        <span class="hidden sm:inline-block whitespace-nowrap">English (US)</span>
                    </template>
                    <ul v-esle>
                        <li v-for="(lang, index) in languages" :key="index">
                            <button
                                @click="updateAppLanguage(lang)"
                                class="w-full flex items-center gap-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                :class="{
                                    'bg-gray-100 text-gray-400 dark:bg-gray-600 dark:text-white':
                                        lang.code === locale,
                                }"
                            >
                                <CIcon :icon="lang.flag" width="1.2rem" height="1.2rem" />
                                <span>{{ lang.name }}</span>
                            </button>
                        </li>
                    </ul>
                </DropdownMenu>
                <div class="flex items-center w-8">
                    <button
                        type="button"
                        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    >
                        <img
                            class="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                            alt="user photo"
                        />
                    </button>
                    <!-- Dropdown menu -->
                    <div
                        class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="user-dropdown"
                    >
                        <div class="px-4 py-3">
                            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span class="block text-sm text-gray-500 truncate dark:text-gray-400"
                                >name@flowbite.com</span
                            >
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >Dashboard</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >Settings</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >Earnings</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >Sign out</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <nav class="lg:hidden bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Breadcrumb />
            <BtnIcon icon="cilHamburgerMenu" icon-width="1.4rem" icon-height="1.4rem" />
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useLayoutStore } from '@/stores/layout';
    import { useI18n } from 'vue-i18n';
    import type { I18nLocale } from '@/types';
    import { useDirection } from '@/composables/page-direction';

    import BtnIcon from '@/components/buttons/BtnIcon.vue';
    import Breadcrumb from '@/components/helpers/Breadcrumb.vue';
    import DropdownMenu from '@/components/ui/DropdownMenu.vue';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const { updateMobileSidebarStatus } = useLayoutStore();
    const { dir } = useDirection();
    const { locale, t } = useI18n();

    const languages: I18nLocale[] = [
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

    const selectedLang = computed<I18nLocale>(() => {
        let lang = languages.find((lang) => lang.code === locale.value);
        return lang ? lang : languages[1];
    });

    const updateAppLanguage = (lang: I18nLocale) => { };
</script>

<template>
    <nav
        class="bg-white border-b lg:border-none border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <div class="max-w-screen-xl flex items-center justify-between h-[75px] p-4">
            <div class="items-center justify-between w-full flex md:w-auto text-sm font-semibold">
                <div class="flex items-center gap-2 lg:hidden">
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

                    <BtnIcon
                        @click="updateMobileSidebarStatus()"
                        icon="cilHamburgerMenu"
                        icon-width="1.4rem"
                        icon-height="1.4rem"
                    />
                </div>
                <ul
                    class="hidden lg:flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-2 md:mt-0 md:border-0">
                    <li>
                        <RouterLink
                            :to="{ name: 'dashboard' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            {{ t('dashboard') }}
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'about' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            {{ t('about') }}
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'about' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            {{ t('services') }}
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'about' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            {{ t('pricing') }}
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'about' }"
                            exact
                            class="header-link block px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            {{ t('contact') }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-x-3">
                <!-- Languages dropdown menu -->
                <DropdownMenu>
                    <template #control>
                        <button
                            type="button"
                            class="inline-flex items-center gap-x-2 font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <CIcon
                                :icon="selectedLang.flag"
                                width="1.2rem"
                                height="1.2rem"
                            />
                            <span class="text-xs md:text-sm whitespace-nowrap">{{ selectedLang.name }}</span>
                        </button>
                    </template>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li
                            v-for="(lang, index) in languages"
                            :key="index"
                        >
                            <button
                                @click="updateAppLanguage(lang)"
                                class="w-full flex items-center gap-x-2 px-4 py-2 whitespace-nowrap text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                :class="{
                                    'bg-gray-100 text-gray-400 dark:bg-gray-600 dark:text-white':
                                        lang.code === locale,
                                }"
                            >
                                <CIcon
                                    :icon="lang.flag"
                                    width="1.2rem"
                                    height="1.2rem"
                                />
                                <span class="text-xs md:text-sm whitespace-nowrap">{{ lang.name }}</span>
                            </button>
                        </li>
                    </ul>
                </DropdownMenu>

                <!-- user profile dropdown menu -->
                <DropdownMenu :position="`${dir === 'rtl' ? 'left' : 'right'}-1/2`">
                    <template #control>
                        <label
                            tabindex="0"
                            class="btn btn-ghost btn-circle avatar"
                        >
                            <div class="w-10 rounded-full">
                                <img
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" />
                            </div>
                        </label>

                    </template>

                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li class="pt-3 mb-4">
                            <span
                                class="block hover:bg-transparent cursor-default text-sm text-gray-900 dark:text-white"
                            >Bonnie
                                Green</span>
                            <span
                                class="block hover:bg-transparent cursor-default text-sm text-gray-500 truncate dark:text-gray-400"
                            >name@flowbite.com</span>
                        </li>
                        <li>
                            <RouterLink
                                :to="{ name: 'dashboard' }"
                                title="Go to the Dashboard"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Dashboard
                            </RouterLink>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >Settings</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >Sign out</a>
                        </li>
                    </ul>
                </DropdownMenu>
            </div>
        </div>
    </nav>
    <nav class="lg:hidden bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Breadcrumb />
            <DropdownMenu min-width="min-width[200px]">
                <template #control>
                    <BtnIcon
                        icon="cilHamburgerMenu"
                        icon-width="1.4rem"
                        icon-height="1.4rem"
                    />
                </template>
                <ul class="list-none">
                    <li>
                        <RouterLink
                            :to="{ name: 'dashboard' }"
                            title="Go to the Dashboard"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Dashboard
                        </RouterLink>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >Settings</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >Sign out</a>
                    </li>
                </ul>
            </DropdownMenu>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { useI18n } from 'vue-i18n';

    const currentYear = new Date().getFullYear();
    const { t } = useI18n();
</script>

<template>
    <footer
        class="flex items-center justify-between h-[65px] px-4 px-sm-6 py-6 text-sm bg-white dark:bg-gray-800 dark:text-white"
    >
        <span>Vuetail &copy; {{ currentYear }}</span>
        <ul class="flex items-center gap-x-2">
            <li>
                <RouterLink
                    :to="{ name: 'about' }"
                    class="p-1 hover:text-primary"
                >
                    {{ t('about') }}
                </RouterLink>
            </li>
            <li>
                <RouterLink
                    :to="{ name: 'about' }"
                    class="p-1 hover:text-primary"
                >
                    {{ t('services') }}
                </RouterLink>
            </li>
            <li>
                <RouterLink
                    :to="{ name: 'about' }"
                    class="p-1 hover:text-primary"
                >
                    {{ t('pricing') }}
                </RouterLink>
            </li>
            <li>
            <RouterLink
                :to="{ name: 'about' }"
                class="p-1 hover:text-primary"
            >
                {{ t('contact') }}
            </RouterLink>
        </li>
    </ul>
</footer></template>

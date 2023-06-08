<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    const currentYear = new Date().getFullYear();
</script>

<template>
    <footer
        class="flex items-center justify-between h-[65px] px-4 px-sm-6 py-6 text-sm border-t-[0.5px] border-s-[0.5px] border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white"
    >
        <span>Vuetail &copy; {{ currentYear }}</span>
        <ul>
            <li>
                <RouterLink :to="{ name: 'about' }" class="p-1 hover:text-primary"> About </RouterLink>
            </li>
        </ul>
    </footer>
</template>

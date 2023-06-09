<script setup lang="ts">
import { RouterLink } from 'vue-router';

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer
        class="flex items-center justify-between h-[65px] px-4 px-sm-6 py-6 text-sm bg-white dark:bg-gray-800 dark:text-white">
        <span>Vuetail &copy; {{ currentYear }}</span>
        <ul class="flex items-center gap-x-2">
            <li>
                <RouterLink :to="{ name: 'about' }" class="p-1 hover:text-primary"> About </RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'about' }" class="p-1 hover:text-primary"> Services </RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'about' }" class="p-1 hover:text-primary"> Pricing </RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'about' }" class="p-1 hover:text-primary"> Contact </RouterLink>
            </li>
        </ul>
    </footer>
</template>

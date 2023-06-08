<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="flex items-center justify-between p-6 text-sm bg-white dark:text-white">
        <span>Vuetail &copy; 2023</span>
        <ul>
            <li>
                <RouterLink :to="{ name: 'about' }"> About </RouterLink>
            </li>
        </ul>
    </footer>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import type { IBreadcrumb } from '@/types';

    interface BreadcrumbProps {
        routes: IBreadcrumb[];
    }

    defineProps<BreadcrumbProps>();
</script>

<template>
    <div class="text-sm breadcrumbs">
        <ul>
            <li
                v-for="(route, index) in routes"
                :key="index"
            >
                <RouterLink
                    v-if="route.to"
                    :to="route.to"
                >
                    {{ route.name }}
                </RouterLink>
                <span v-else>
                    {{ route.name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    interface BreadcrumbProps {
        routes: {
            name: string;
            to?: string | null;
        }[];
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

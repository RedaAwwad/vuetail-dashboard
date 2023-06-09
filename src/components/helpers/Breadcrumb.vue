<script setup lang="ts">
    import { ref, computed, onMounted, watch } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const routes = ref<string[]>([]);
    const currentPath = computed((): string => useRoute().path);

    const getBreadcrumbRoutes = (path: string): void => {
        let pathRoutes = path.split('/').slice(1);
        routes.value = pathRoutes;
    };

    watch(
        () => currentPath,
        (path) => {
            console.log('adadad000....');
            console.log(typeof path);

            getBreadcrumbRoutes(path.value);
        },
    );

    onMounted(() => getBreadcrumbRoutes(currentPath.value));
</script>

<template>
    <ol class="inline-flex items-center space-x-1 md:space-x-2 text-sm">
        <template v-if="routes.length > 1">
            <li v-for="(route, index) in routes" class="inline-flex items-center">
                <span
                    v-if="index === routes.length - 1 || routes.length === 1"
                    class="inline-flex items-center capitalize text-sm font-medium text-primary dark:text-gray-400"
                >
                    <svg
                        v-if="index > 0 && index !== routes.length"
                        class="w-4 h-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    {{ route }}
                </span>
                <RouterLink
                    v-else
                    :to="`${index === 0 ? '' : '/' + routes[index]}${route === 'dashboard' ? '' : route}`"
                    class="inline-flex items-center gap-x-1 capitalize text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                >
                    <svg
                        v-if="index > 0 && index !== routes.length - 1"
                        class="w-4 h-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <CIcon v-if="index === 0" icon="cilHome" />
                    {{ route }}
                </RouterLink>
            </li>
        </template>
    </ol>
</template>

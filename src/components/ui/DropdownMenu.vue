<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import type { DropdownMenuItem } from '@/types/ui-components';

    interface MenuProps {
        menuItems: DropdownMenuItem[];
        minWidth: string;
        position: string;
    }

    withDefaults(defineProps<MenuProps>(), {
        menuItems: () => [],
        minWidth: 'min-width[160px]',
        position: 'right-1/2',
    });

    const isMenuOpen = ref<boolean>(false);
    const menuControl = ref<HTMLElement | null>(null);
    const menu = ref<HTMLElement | null>(null);
</script>

<template>
    <div
        ref="menuControl"
        class="relative"
    >
        <div class="dropdown dropdown-end">
            <slot name="control" />
            <slot />
        </div>

        <!-- Dropdown -->
        <Transition name="fade">
            <div
                v-show="isMenuOpen"
                ref="menu"
                class="absolute z-50 my-2 py-2 font-medium list-none bg-white divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700"
                :class="(minWidth, position)"
            >
                <ul v-if="menuItems && menuItems.length">
                    <li
                        v-for="(item, index) in menuItems"
                        :key="index"
                    >
                        <RouterLink
                            :to="item.to"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <div class="inline-flex items-center">
                                <span>{{ item.label }}</span>
                            </div>
                            {{ item.id }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

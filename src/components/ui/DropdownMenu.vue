<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import type { DropdownMenuItem } from '@/types/ui-components';

    interface MenuProps {
        menuItems?: DropdownMenuItem[];
        minWidth?: string;
        position?: string;
    }

    withDefaults(defineProps<MenuProps>(), {
        menuItems: () => [],
        minWidth: 'min-width[160px]',
        position: 'right-1/2',
    });

</script>

<template>
    <div class="dropdown dropdown-end">
        <slot name="control" />

        <ul
            v-if="$slots.default"
            tabindex="0"
            class="menu menu-sm dropdown-content rtl:right-auto rtl:left-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
            <slot />
        </ul>

        <ul
            v-else
            tabindex="0"
            class="menu menu-sm dropdown-content rtl:right-auto rtl:left-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
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
</template>

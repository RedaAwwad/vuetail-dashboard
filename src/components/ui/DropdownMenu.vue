<script setup lang="ts">
    import { ref } from 'vue';
    import type { PropType } from 'vue';
    import { RouterLink } from 'vue-router';
    import { onClickOutside } from '@vueuse/core';
    import type { DropdownMenuItem } from '@/types/ui-components';

    defineProps({
        menuItems: {
            type: Array as PropType<DropdownMenuItem[]>,
            default: () => [],
        },
        minWidth: {
            type: String,
            default: '160px',
        },
    });

    const isMenuOpen = ref<boolean>(false);
    const menu = ref<HTMLElement | null>(null);

    const updateMenuStatus = (status: boolean) => {
        isMenuOpen.value = status;
    };

    onClickOutside(menu, () => updateMenuStatus(false));
</script>

<template>
    <div class="relative">
        <button
            @click="updateMenuStatus(true)"
            type="button"
            class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
            <slot name="control" />
        </button>
        <!-- Dropdown -->
        <Transition name="fade">
            <div
                v-show="isMenuOpen"
                ref="menu"
                class="absolute z-50 my-2 py-2 font-medium list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                :class="`min-w-[${minWidth}]`"
            >
                <div>
                    <slot />
                </div>
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
</div></template>

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
            default: 'min-width[160px]',
        },
        position: {
            type: String,
            default: 'right-1/2',
        },
    });

    const isMenuOpen = ref<boolean>(false);
    const menuControl = ref<HTMLElement | null>(null);
    const menu = ref<HTMLElement | null>(null);

    const updateMenuStatus = (status: boolean) => {
        isMenuOpen.value = status;
    };

    onClickOutside(menu, () => updateMenuStatus(false));
</script>

<template>
    <div ref="menuControl" class="relative">
        <div @click="updateMenuStatus(true)">
            <slot name="control" />
        </div>

        <!-- Dropdown -->
        <Transition name="fade">
            <div
                v-show="isMenuOpen"
                ref="menu"
                class="absolute z-50 my-2 py-2 font-medium list-none bg-white divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700"
                :class="(minWidth, position)"
            >
                <!-- :style="`left: ${menuDir};`" -->
                <div>
                    <slot />
                </div>
                <ul v-if="menuItems && menuItems.length">
                    <li v-for="(item, index) in menuItems" :key="index">
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

<script setup lang="ts">
    import { computed } from 'vue';
    import type { PropType } from 'vue';
    import type { IconProp } from '@/types/ui-components';
    import { RouterLink } from 'vue-router';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const props = defineProps({
        block: {
            type: Boolean,
            default: false,
        },
        to: {
            type: String,
        },
        href: {
            type: String,
        },
        exact: {
            type: Boolean,
            default: false,
        },
        target: {
            type: String,
            default: '',
        },
        title: {
            type: String,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        sm: {
            type: Boolean,
            default: false,
        },
        lg: {
            type: Boolean,
            default: false,
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        text: {
            type: Boolean,
            default: false,
        },
        outline: {
            type: Boolean,
            default: false,
        },
        noFocus: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: Object as PropType<IconProp>,
            default: () => ({
                icon: '',
                width: '1rem',
                height: '1rem',
                order: 1,
            }),
        },
    });
    const emit = defineEmits(['click']);

    const btnSize = computed(() => {
        if (props.isLoading) return 'py-3';
        if (props.sm) return 'py-1 px-4 text-sm';
        if (props.lg) return 'py-4 px-10';

        return 'font-medium rounded-lg text-sm px-5 py-2.5';
    });
    const isText = computed(() => {
        if (props.text) {
            return 'bg-transparent text-primary shadow-none';
        }

        return '';
    });
    const isOutlined = computed(() => {
        if (props.outline) {
            return 'bg-transparent text-primary shadow-none border border-primary dark:border-gray-600';
        }

        return '';
    });

    const onClickButton = () => {
        emit('click');
    };
</script>

<template>
    <!-- router link -->
    <RouterLink
        v-if="to"
        :to="to"
        :exact="exact"
        class="btn"
        :disabled="isLoading"
        :class="[
            btnSize,
            isText,
            isOutlined,
            { 'block w-full': block, 'rounded-full': rounded, 'focus:ring-transparent': noFocus },
        ]"
    >
        <div v-if="isLoading" class="px-2 h-full flex items-center justify-center">
            <div class="lds-dual-ring"></div>
        </div>
        <template v-else>
            <CIcon v-if="icon && icon.icon" v-bind="icon" :style="`order: ${icon.order};`" />
            <span :style="`order: ${icon.order && icon.order <= 1 ? 2 : 1};`">
                <slot />
            </span>
        </template>
    </RouterLink>

    <!-- native a tag -->
    <a
        v-else-if="href"
        :href="href"
        class="btn"
        :disabled="isLoading"
        :target="target"
        :class="[
            btnSize,
            isText,
            isOutlined,
            { 'block w-full': block, 'rounded-full': rounded, 'focus:ring-transparent': noFocus },
        ]"
    >
        <div v-if="isLoading" class="px-2 h-full flex items-center justify-center">
            <div class="lds-dual-ring"></div>
        </div>
        <template v-else>
            <CIcon v-if="icon && icon.icon" v-bind="icon" :style="`order: ${icon.order};`" />
            <span :style="`order: ${icon.order == 1 ? 2 : 1};`">
                <slot />
            </span>
        </template>
    </a>

    <!-- native button -->
    <button
        v-else
        @click="onClickButton"
        class="btn"
        :disabled="isLoading"
        :class="[
            btnSize,
            isText,
            isOutlined,
            { 'block w-full': block, 'rounded-full': rounded, 'focus:ring-transparent': noFocus },
        ]"
    >
        <div v-if="isLoading" class="px-2 h-full flex items-center justify-center">
            <div class="lds-dual-ring"></div>
        </div>
        <template v-else>
            <CIcon v-if="icon && icon.icon" v-bind="icon" :style="`order: ${icon.order};`" />
            <span :style="`order: ${icon.order == 1 ? 2 : 1};`">
                <slot />
            </span>
        </template>
    </button>
</template>

<style scoped>
    .lds-dual-ring {
        display: inline-block;
    }
    .lds-dual-ring:after {
        content: ' ';
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 3px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    defineProps({
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
        externalLink: {
            type: Boolean,
            default: false,
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
        icon: {
            type: Object,
            default: () => ({
                icon: null,
                width: '1rem',
                height: '1rem',
                order: '1',
            }),
        },
    });
    const emit = defineEmits(['click']);

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
        :class="{
            'block w-full': block,
            'py-2': sm,
            'py-3': isLoading && !sm,
            'py-4': !isLoading && !sm,
        }"
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
    </RouterLink>

    <!-- native a tag -->
    <a
        v-else-if="href"
        :href="href"
        class="btn"
        :disabled="isLoading"
        :class="{
            'block w-full': block,
            'py-2': sm,
            'py-3': isLoading && !sm,
            'py-4': !isLoading && !sm,
        }"
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
        :class="{
            'block w-full': block,
            'py-2': sm,
            'py-3': isLoading && !sm,
            'py-4': !isLoading && !sm,
        }"
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

<script setup lang="ts">
    import type { PropType } from 'vue';
    import { RouterLink } from 'vue-router';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    defineProps({
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
        icon: {
            type: [String, Array] as PropType<string | string[]>,
            default: '',
        },
        iconWidth: {
            type: String,
        },
        iconHeight: {
            type: String,
        },
    });
    const emit = defineEmits(['click']);

    const onClickButton = () => {
        emit('click');
    };
</script>

<template>
    <RouterLink
        v-if="to"
        :to="to"
        :exact="exact"
        :disabled="isLoading"
        :title="title"
        class="inline-flex items-center justify-center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto dark:hover:bg-gray-600 dark:hover:text-white"
    >
        <div v-if="isLoading" class="h-full flex items-center justify-center">
            <div class="lds-dual-ring"></div>
        </div>
        <template v-else>
            <CIcon :icon="icon" :width="iconWidth" :height="iconHeight" />
        </template>
    </RouterLink>

    <a
        v-else-if="href"
        :href="href"
        :disabled="isLoading"
        :target="target"
        :title="title"
        class="inline-flex items-center justify-center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto dark:hover:bg-gray-600 dark:hover:text-white"
    >
        <div v-if="isLoading" class="h-full flex items-center justify-center">
            <div class="lds-dual-ring"></div>
        </div>
        <template v-else>
            <CIcon :icon="icon" :width="iconWidth" :height="iconHeight" />
        </template>
    </a>

    <button
        v-else
        @click="onClickButton"
        :disabled="isLoading"
        :title="title"
        class="inline-flex items-center justify-center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto dark:hover:bg-gray-600 dark:hover:text-white"
    >
        <div v-if="isLoading" class="h-full flex items-center justify-center">
            <div class="lds-dual-ring"></div>
        </div>
        <template v-else>
            <CIcon :icon="icon" :width="iconWidth" :height="iconHeight" />
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
        width: 15px;
        height: 15px;
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

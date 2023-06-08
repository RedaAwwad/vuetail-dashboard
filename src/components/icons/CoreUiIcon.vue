<script setup lang="ts">
    import type { PropType } from 'vue';
    // Reference: https://coreui.io/vue/docs/components/icon.html#cicon
    import { CIcon } from '@coreui/icons-vue';

    defineProps({
        icon: {
            type: [String, Array] as PropType<string | string[]>,
            default: () => 'cilList',
            required: true,
        },
        width: {
            type: String,
            default: '1rem',
        },
        height: {
            type: String,
            default: '1rem',
        },
    });
</script>

<template>
    <CIcon :icon="icon" :width="width" :height="height" custom-class-name="icon text-inherit fill-current" />
</template>

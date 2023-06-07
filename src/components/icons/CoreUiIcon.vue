<script setup lang="ts">
    // Reference: https://coreui.io/vue/docs/components/icon.html#cicon
    import { CIcon } from '@coreui/icons-vue';

    defineProps({
        icon: {
            default: () => 'cilList',
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
    <CIcon :icon="icon" :width="width" :height="height" custom-class-name="icon" />
</template>

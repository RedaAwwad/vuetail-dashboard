<script setup lang="ts">
    import { onMounted } from 'vue';
    import { RouterView, useRouter } from 'vue-router';

    onMounted(() => {
        useRouter().replace({ name: 'dashboard' });
    });
</script>

<template>
    <RouterView />
</template>

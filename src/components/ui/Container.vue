<script setup lang="ts">
    defineProps({
        fluid: {
            type: Boolean,
            defualt: false,
        },
    });
</script>

<template>
    <div class="container p-2 p-sm-4 mx-auto" :class="{ 'w-full': fluid }">
        <slot />
    </div>
</template>

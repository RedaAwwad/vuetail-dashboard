<script lang="ts" setup>
    import { RouterView } from "vue-router";
    import Container from "@/components/ui/Container.vue";
</script>

<template>
    <main class="min-h-screen">
        <Container>
            <RouterView />
        </Container>
    </main>
</template>

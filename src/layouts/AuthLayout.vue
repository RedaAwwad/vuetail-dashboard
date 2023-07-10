<script lang="ts" setup>
    import { RouterView } from 'vue-router';
    import Container from '@/components/ui/Container.vue';
</script>

<template>
    <main class="min-h-screen overflow-x-hidden">
        <Container>
            <RouterView v-slot="{ Component }">
                <Transition name="route">
                    <component :is="Component"></component>
                </Transition>
            </RouterView>
        </Container>
    </main>
</template>

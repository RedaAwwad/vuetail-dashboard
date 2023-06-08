<script lang="ts" setup>
    import { RouterView } from 'vue-router';
    import Sidebar from './partials/Sidebar.vue';
    import TopHeader from './partials/TopHeader.vue';
    import Footer from './partials/Footer.vue';
    import Container from '@/components/ui/Container.vue';
</script>

<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full h-screen overflow-y-auto">
            <TopHeader />

            <main>
                <Container>
                    <RouterView />
                </Container>
            </main>

            <Footer />
        </div>
    </div>
</template>

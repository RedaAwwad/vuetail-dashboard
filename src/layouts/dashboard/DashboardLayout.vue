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
        <PerfectScrollbar class="w-full h-screen flex flex-col justify-between">
            <div>
                <TopHeader />

                <main class="h-full">
                    <Container>
                        <RouterView />
                    </Container>
                </main>

                <Footer />
            </div>
        </PerfectScrollbar>
    </div>
</template>

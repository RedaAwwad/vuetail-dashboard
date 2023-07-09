<script lang="ts" setup>
    import { RouterView } from 'vue-router';
    import Sidebar from '@/components/app/Sidebar.vue';
    import TopHeader from '@/components/app/TopHeader.vue';
    import Footer from '@/components/app/Footer.vue';
    import Container from '@/components/ui/Container.vue';
</script>

<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full h-screen flex flex-col justify-between overflow-y-auto">
            <div>
                <TopHeader />

                <main class="h-full">
                    <Container>
                        <RouterView />
                    </Container>
                </main>

                <Footer />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, watch } from 'vue';
    import { useRoute, RouterView } from 'vue-router';
    import Sidebar from '@/components/app/Sidebar.vue';
    import TopHeader from '@/components/app/TopHeader.vue';
    import Footer from '@/components/app/Footer.vue';
    import Container from '@/components/ui/Container.vue';

    const transitionName = ref<string>('slide-left');
    const route = useRoute();

    watch(() => route, (to, from) => {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName.value = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },);
</script>

<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full h-screen flex flex-col justify-between overflow-y-auto">
            <TopHeader />

            <main class="h-full overflow-x-hidden">
                <Container>
                    <RouterView v-slot="{ Component }">
                        <Transition :name="transitionName">
                            <component :is="Component" />
                        </Transition>
                    </RouterView>
                </Container>
            </main>

            <Footer />
        </div>
    </div>
</template>

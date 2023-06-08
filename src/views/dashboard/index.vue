<script setup lang="ts">
    import { ref } from 'vue';
    // import Skeleton from '@/components/helpers/Skeleton.vue'
    import Modal from '@/components/modal/Modal.vue';
    import Btn from '@/components/buttons/Btn.vue';

    const isModalOpen = ref<boolean>(false);
    const openModal = () => (isModalOpen.value = true);
    const closeModal = () => (isModalOpen.value = false);
</script>

<template>
    <Modal persistent title="Accept terms and conditions" :open="isModalOpen" @close="closeModal"></Modal>
    <Btn @click="openModal">Open</Btn>
    <!-- <Skeleton></Skeleton> -->
</template>

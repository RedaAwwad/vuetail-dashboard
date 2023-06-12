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
    <Modal
        @close="closeModal"
        :open="isModalOpen"
        persistent
        title="Accept terms and conditions"
    >
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum magni delectus accusamus optio fuga
            porro quae quia nulla quaerat in adipisci, consequatur modi praesentium recusandae nisi facilis
            explicabo minus.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum magni delectus accusamus optio fuga
            porro quae quia nulla quaerat in adipisci, consequatur modi praesentium recusandae nisi facilis
            explicabo minus.
        </p>
    </Modal>
    <Btn @click="openModal">Open Modal</Btn>
    <!-- <Skeleton></Skeleton> -->
</template>

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
    <Modal persistent title="Accept terms and conditions" :open="isModalOpen" @close="closeModal">
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
    <Btn @click="openModal">Open</Btn>
    <!-- <Skeleton></Skeleton> -->
</template>

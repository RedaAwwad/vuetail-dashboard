<script setup lang="ts">
    import { ref } from 'vue';
    // import Skeleton from '@/components/helpers/Skeleton.vue'
    import Modal from '@/components/modal/Modal.vue';
    import Btn from '@/components/buttons/Btn.vue';

</script>

<template>
    <div class="p-5">
        <button class="btn">Button</button>
        <button class="btn btn-neutral">Neutral</button>
        <button class="btn btn-primary">Button</button>
        <button class="btn btn-secondary">Button</button>
        <button class="btn btn-accent">Button</button>
        <button class="btn btn-ghost">Button</button>
        <button class="btn btn-link">Button</button>
    </div>
    <Modal
        id="custom_modal"
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
    <!-- <Skeleton></Skeleton> -->
</template>

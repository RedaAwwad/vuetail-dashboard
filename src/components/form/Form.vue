<script setup lang="ts">
    import { Form } from 'vee-validate';
    import Btn from '@/components/buttons/Btn.vue';

    defineProps({
        submitting: {
            type: Boolean,
            default: false,
        },
        validationSchema: {
            type: Object,
        },
    });
    const emit = defineEmits(['submit']);

    const submitForm = () => {
        emit('submit');
    };
</script>

<template>
    <Form @submit="submitForm" :validation-schema="validationSchema">
        <slot />

        <Btn block lg :is-loading="submitting"> Submit </Btn>
    </Form>
</template>

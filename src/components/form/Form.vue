<script setup lang="ts">
    import { Form } from 'vee-validate';
    import { useI18n } from 'vue-i18n';
    import Btn from '@/components/buttons/Btn.vue';

    const { t } = useI18n();

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
    <Form
        @submit="submitForm"
        :validation-schema="validationSchema"
    >
        <slot />

        <Btn
            block
            size="md"
            :loading="submitting"
        > {{ t('submit') }} </Btn>
    </Form>
</template>

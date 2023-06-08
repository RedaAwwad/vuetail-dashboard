<script setup lang="ts">
    import { ref } from 'vue';
    import Card from '@/components/ui/Card.vue';
    import Form from '@/components/form/Form.vue';
    import Input from '@/components/form/partials/Input.vue';
    import forgotPassFormValidation from '@/validations/forgotPassFormValidation';

    const isSubmitting = ref<boolean>(false);
    const form = ref({
        email: '',
    });

    const submitForm = () => {
        console.log('clicked!!');
        isSubmitting.value = true;

        setTimeout(() => {
            isSubmitting.value = false;
        }, 3000);
    };
</script>

<template>
    <div class="min-h-screen flex justify-center items-center">
        <Card class="w-[580px] py-8 sm:px-8 xl:py-16 max-w-full rounded-lg border dark:border-none shadow-lg">
            <div class="mb-16 text-center">
                <h1 class="mb-4 text-4xl font-bold dark:text-white">Forgot Password</h1>
                <p class="text-lg">Enter your email address to reset your password</p>
            </div>
            <Form @submit="submitForm" :submitting="isSubmitting" :validation-schema="forgotPassFormValidation">
                <div class="mb-4">
                    <Input
                        v-model="form.email"
                        required
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                    />
                </div>
            </Form>
            <div class="flex items-center gap-1 pt-4">
                <span>Remember your password?</span>
                <RouterLink :to="{ name: 'auth.login' }" class="py-1 text-sm text-primary hover:text-blue-500">
                    Login
                </RouterLink>
            </div>
        </Card>
    </div>
</template>

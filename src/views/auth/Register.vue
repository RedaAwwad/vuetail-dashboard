<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import Card from '@/components/ui/Card.vue';
    import Form from '@/components/form/Form.vue';
    import Input from '@/components/form/partials/Input.vue';
    import Select from '@/components/form/partials/Select.vue';
    import countries from '@/data/countries';
    import registerFormValidation from '@/validations/registerFormValidation';

    const isSubmitting = ref<boolean>(false);
    const form = ref({
        first_name: '',
        last_name: '',
        email: '',
        country: '',
        password: '',
        confirm_password: '',
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
    <div class="min-h-screen flex justify-center items-center py-4">
        <Card class="w-[580px] py-8 sm:px-8 max-w-full rounded-lg border dark:border-none shadow-lg">
            <div class="mb-16 text-center">
                <div class="flex justify-center mb-6">
                    <img width="280" class="w-[225px] sm:w-[280px]" src="@/assets/imgs/logo.png" alt="logo" />
                </div>
                <h1 class="mb-4 text-4xl font-bold dark:text-white">Create new account</h1>
                <p class="text-lg">Provide us your information to create your account</p>
            </div>
            <Form @submit="submitForm" :submitting="isSubmitting" :validation-schema="registerFormValidation">
                <div class="grid sm:grid-cols-2 gap-3 mb-4">
                    <div class="sm:col-span-1">
                        <Input
                            v-model="form.first_name"
                            required
                            label="First Name"
                            name="first_name"
                            placeholder="First Name"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <Input
                            v-model="form.last_name"
                            label="Last Name"
                            name="last_name"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
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
                <div class="mb-4">
                    <Select v-model="form.country" :items="countries" required label="Country" name="country" />
                </div>
                <div class="mb-4">
                    <Input
                        v-model="form.password"
                        required
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div class="mb-6">
                    <Input
                        v-model="form.confirm_password"
                        required
                        label="Confirm Password"
                        name="confirm_password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </Form>
            <div class="flex items-center gap-1 pt-4">
                <span>You have an account?</span>
                <RouterLink :to="{ name: 'auth.login' }" class="py-1 text-sm text-primary hover:text-blue-500">
                    Login
                </RouterLink>
            </div>
        </Card>
    </div>
</template>

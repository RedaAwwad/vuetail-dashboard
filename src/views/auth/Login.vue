<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Card from '@/components/ui/Card.vue'
import Form from '@/components/form/Form.vue'
import Input from '@/components/form/partials/Input.vue'
import Checkbox from '@/components/form/partials/Checkbox.vue'
import loginFormValidation from '@/validations/loginFormValidation'


const isSubmitting = ref<boolean>(false)
const rememberToLater = ref<boolean>(false)
const form = ref({
    email: "",
    password: "",
})

const submitForm = () => {
    console.log('clicked!!');
    isSubmitting.value = true

    setTimeout(() => {
        isSubmitting.value = false
    }, 3000)
}
</script>

<template>
    <div class="min-h-screen flex justify-center items-center py-4">
        <Card class="w-[580px] py-8 max-w-full rounded-lg border shadow-lg">
            <div class="mb-16 text-center">
                <div class="flex justify-center mb-6">
                    <img width="280" class="w-[225px] sm:w-[280px]" src="@/assets/imgs/logo.png" alt="logo">
                </div>
                <h1 class="mb-4 text-4xl font-bold">Login to your account</h1>
                <p class="text-lg text-content">Provide us your credentials to access the dashboard</p>
            </div>
            <Form @submit="submitForm" :submitting="isSubmitting" :validation-schema="loginFormValidation">
                <div class="mb-4">
                    <Input v-model="form.email" required label="Email Address" name="email" type="email"
                        placeholder="Email Address" />
                </div>
                <div class="mb-4">
                    <Input v-model="form.password" required label="Password" name="password" type="password"
                        placeholder="Password" />
                    <div class="w-full flex justify-end -mt-2">
                        <RouterLink :to="{ name: 'auth.forgot-password' }"
                            class="py-1 text-sm text-primary hover:text-blue-500">
                            Forgot your password?
                        </RouterLink>
                    </div>
                </div>
                <div class="mb-6 flex items-center">
                    <Checkbox v-model="rememberToLater" label="Remember credentials to use later" />
                </div>
            </Form>
            <div class="flex items-center gap-1 pt-4">
                <span>Not a Member yet?</span>
                <RouterLink :to="{ name: 'auth.register' }" class="py-1 text-sm text-primary hover:text-blue-500">
                    Create new account
                </RouterLink>
            </div>
        </Card>
    </div>
</template>



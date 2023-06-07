<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { Field, ErrorMessage } from 'vee-validate';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const isVisiblePassword = ref<boolean>(false);
    const emit = defineEmits(['update:modelValue']);

    const props = defineProps({
        modelValue: {
            type: [String, Number],
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        label: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: 'field',
        },
        required: {
            type: Boolean,
            default: false,
        },
    });

    const inputType = computed(() => {
        if (props.type === 'password') {
            return isVisiblePassword.value ? 'text' : 'password';
        }

        return props.type;
    });

    const togglePasswordVisibility = () => {
        isVisiblePassword.value = !isVisiblePassword.value;
    };
</script>

<template>
    <div class="mb-2">
        <label class="flex align-center justify-between mb-2">
            <span class="flex">
                <span>{{ label }}</span>
                <span v-if="required" class="text-xs text-red-600">*</span>
            </span>
            <div v-if="type === 'password'" class="p-1 cursor-pointer" @click="togglePasswordVisibility">
                <span v-if="isVisiblePassword">
                    <CIcon icon="cilLockLocked" />
                </span>
                <span v-else>
                    <CIcon icon="cilLockUnlocked" />
                </span>
            </div>
        </label>

        <Field
            :type="inputType"
            :name="name"
            @input="emit('update:modelValue')"
            :value="modelValue"
            class="w-full p-3 mb-1 border rounded"
        />

        <ErrorMessage :name="name" class="text-xs text-red-400" />
    </div>
</template>

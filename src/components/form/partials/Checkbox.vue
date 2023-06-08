<script setup lang="ts">
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    defineProps({
        modelValue: {
            type: [Boolean, String, Number],
            default: false,
        },
        type: {
            type: String,
            default: 'checkbox',
            validator: (value: string) => {
                return ['checkbox', 'radio'].includes(value);
            },
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
    const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <label class="flex align-center justify-start gap-1 mb-2 cursor-pointer">
        <input
            :type="type"
            :name="name"
            @input="emit('update:modelValue')"
            :value="modelValue"
            :checked="modelValue ? true : false"
            class="hidden peer"
            :required="required"
        />
        <span
            class="w-5 h-5 flex justify-center items-center border dark:border-gray-600 relative peer-checked:bg-primary peer-checked:border-primary"
            :class="[type === 'checkbox' ? 'rounded' : 'rounded-full']"
        >
            <CIcon v-if="type === 'checkbox'" icon="cilCheckAlt" class="text-white dark:text-gray-800" />
            <CIcon v-else icon="cilCircle" class="text-white dark:text-gray-800" />
        </span>
        <span class="whitespace-nowrap">{{ label }}</span>
    </label>
</template>

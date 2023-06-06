<script setup lang="ts">
    import CIcon from '@/components/icons/CoreUiIcon.vue'
    import { cilCheckAlt, cilCircle } from "@coreui/icons";

    const emit = defineEmits(['update:modelValue'])

    defineProps({
        modelValue: {
            type: [Boolean, String, Number],
            default: false
        },
        type: {
            type: String,
            default: 'checkbox',
            validator: (value: string) => {
                return ['checkbox', 'radio'].includes(value)
            }
        },
        label: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: 'field'
        },
        required: {
            type: Boolean,
            default: false
        },
    })

</script>

<template>
    <label class="flex align-center justify-start gap-1 mb-2 cursor-pointer">
        <input :type="type" :name="name" @input="emit('update:modelValue')"
        :value="modelValue" :checked="modelValue ? true : false"
        class="hidden peer" :required="required">
        <span class="w-5 h-5 flex justify-center items-center border relative peer-checked:bg-primary peer-checked:border-primary" :class="[ type === 'checkbox' ? 'rounded' : 'rounded-full']">
            <CIcon v-if="type === 'checkbox'" :icon="cilCheckAlt" color="white" />
            <CIcon v-else :icon="cilCircle" color="white" />
        </span>
        <span class="whitespace-nowrap">{{ label }}</span>
    </label>
</template>

<script setup lang="ts">
    import { ref, watch, onMounted } from 'vue';
    import type { PropType } from 'vue';
    import { Field, ErrorMessage } from 'vee-validate';
    import vSelect from 'vue-select';
    import 'vue-select/dist/vue-select.css';
    import type { DropdownMenuItem } from '@/types/ui-components';

    const props = defineProps({
        modelValue: {
            type: [String, Number],
            default: '',
        },
        items: {
            type: Array as PropType<DropdownMenuItem[]>,
            default: () => [],
        },
        label: {
            type: String,
            default: '',
        },
        itemText: {
            type: String,
            default: 'name',
        },
        itemValue: {
            type: String,
            default: 'id',
        },
        name: {
            type: String,
            default: 'field',
        },
        required: {
            type: Boolean,
            default: false,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: '',
        },
    });

    const emit = defineEmits(['update:modelValue']);

    const selectedOption = ref<string | number | null>(null);

    const reduceOptions = (option: object) => option[props.itemValue as keyof object];

    watch(selectedOption, (selected) => {
        emit('update:modelValue', selected);
    });

    onMounted(() => {
        if (props.modelValue) {
            selectedOption.value = props.modelValue;
        }
    });
</script>

<template>
    <div class="mb-2">
        <label class="flex align-center justify-between mb-2">
            <span class="flex">
                <span>{{ label }}</span>
                <span v-if="required" class="text-xs text-red-600">*</span>
            </span>
        </label>

        <Field :value="modelValue" :name="name" v-slot="{ field }">
            <v-select
                v-model="selectedOption"
                v-bind="field"
                :options="items"
                :label="itemText"
                :loading="loading"
                :placeholder="placeholder"
                :value="modelValue"
                :multiple="multiple"
                :reduce="reduceOptions"
            >
                <template #open-indicator="{ attributes }">
                    <span v-bind="attributes">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1rem"
                            height="1rem"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                            />
                        </svg>
                    </span>
                </template>
            </v-select>
        </Field>

        <ErrorMessage :name="name" class="text-xs text-red-400" />
    </div>
</template>

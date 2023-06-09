<script setup lang="ts">
    import { ref } from 'vue';
    import { onClickOutside } from '@vueuse/core';
    import Card from '@/components/ui/Card.vue';
    import Btn from '@/components/buttons/Btn.vue';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const tryingToClose = ref<boolean>(false);
    const modal = ref<HTMLElement | null>(null);

    const emit = defineEmits(['close', 'accept']);
    const props = defineProps({
        open: {
            type: Boolean,
            default: false,
        },
        persistent: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
    });

    const closeModal = (isPersistentCheck: boolean = false) => {
        if (isPersistentCheck && props.persistent) {
            tryingToClose.value = true;

            setTimeout(() => {
                tryingToClose.value = false;
            }, 100);
            return;
        }

        emit('close');
    };

    const accept = () => {
        emit('accept');
    };

    onClickOutside(modal, () => closeModal(true));
</script>

<template>
    <Transition name="fade">
        <div
            v-show="open"
            class="fixed inset-0 z-50 w-full h-full max-h-full flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-20"
        >
            <div
                ref="modal"
                class="relative w-full max-w-2xl max-h-full transition ease-in-out"
                :class="{ 'scale-95': tryingToClose }"
            >
                <Card>
                    <template #header>
                        <!-- Modal header -->
                        <div v-if="$slots.header">
                            <slot name="header" />
                        </div>
                        <div
                            v-else
                            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
                        >
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                {{ title }}
                            </h3>
                            <button
                                type="button"
                                @click="closeModal()"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal"
                            >
                                <CIcon icon="cilX" />
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                    </template>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <slot />
                    </div>
                    <template #footer>
                        <!-- Modal footer -->
                        <div v-if="$slots.footer">
                            <slot name="footer" />
                        </div>
                        <div
                            v-else
                            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                        >
                            <Btn @click="accept()"> Accept </Btn>
                            <Btn outline @click="closeModal()"> Cancel </Btn>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    import Btn from '@/components/buttons/Btn.vue';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const { t } = useI18n();
    const emit = defineEmits(['accept']);

    interface ModalProps {
        id: string;
        open?: boolean;
        persistent?: boolean;
        title?: string;
    }

    withDefaults(defineProps<ModalProps>(), {
        open: false,
        persistent: false,
    });

    const accept = () => {
        emit('accept');
    };

</script>

<template>
    <div>
        <button
            class="btn"
            :onclick="`${id}.showModal()`"
        >open modal</button>
        <dialog
            :id="id"
            class="modal modal-bottom sm:modal-middle"
        >
            <form
                method="dialog"
                class="modal-box bg-white dark:bg-gray-800"
            >
                <!-- Modal header -->
                <div v-if="$slots.header">
                    <slot name="header" />
                </div>
                <div
                    v-else
                    class="w-full flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
                >
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        {{ title }}
                    </h3>
                    <button
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <CIcon icon="cilX" />
                    </button>
                </div>
                <div class="p-4 lg:p-6 dark:text-white">
                    <slot />
                </div>
                <div class="modal-action">
                    <!-- Modal footer -->
                    <div v-if="$slots.footer">
                        <slot name="footer" />
                    </div>
                    <div
                        v-else
                        class="w-full flex items-center gap-x-2 p-6 border-t border-gray-200 rounded-b dark:border-gray-600"
                    >
                        <Btn
                            type="button"
                            @click="accept()"
                            class="w-32"
                        >
                            <CIcon icon="cilApps" />
                            {{ t('accept') }}
                        </Btn>
                        <Btn
                            outline
                            variant="neutral"
                        >
                            {{ t('cancel') }}
                        </Btn>
                    </div>
                </div>
            </form>
            <form
                v-if="!persistent"
                method="dialog"
                class="modal-backdrop"
            >
                <button>close</button>
            </form>

        </dialog>

    </div>
</template>

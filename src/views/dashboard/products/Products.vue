<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    import type { IBreadcrumb } from '@/types';
    import Breadcrumb from '@/components/helpers/Breadcrumb.vue';
    import VTable from '@/components/table/VTable.vue';
    import Btn from '@/components/buttons/Btn.vue';
    import CIcon from '@/components/icons/CoreUiIcon.vue';

    const { t } = useI18n();

    const routes: IBreadcrumb[] = [
        {
            name: t('dashboard'),
            to: { name: 'dashboard' },
        },
        {
            name: t('products.label'),
            to: null
        },
    ];
</script>

<template>
    <div class="sm:p-4">
        <div class="flex items-start justify-between mb-4">
            <div>
                <h1 class="text-lg font-semibold text-black">
                    {{ t('products.label') }}
                </h1>
                <Breadcrumb :routes="routes" />
            </div>
            <Btn :to="{ name: 'products.create' }">
                <CIcon icon="cilPlus" />
                {{ t('products.create') }}
            </Btn>
        </div>

        <VTable />
    </div>
</template>

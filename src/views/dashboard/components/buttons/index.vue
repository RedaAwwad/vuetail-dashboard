<script setup lang="ts">
    import Btn from '@/components/buttons/Btn.vue';
</script>

<template>
    <div class="px-4">
        <h1 class="mb-6 text-xl sm:text-2xl text-primary font-semibold">Button Components</h1>

        <div class="mb-6">
            <h3>Variants:</h3>
            <div class="p-5 flex flex-wrap items-start gap-4">
                <Btn>Button</Btn>
                <Btn variant="neutral">Neutral</Btn>
                <Btn variant="primary">primary</Btn>
                <Btn variant="secondary">secondary</Btn>
                <Btn variant="accent">accent</Btn>
                <Btn variant="ghost">ghost</Btn>
                <Btn variant="link">link</Btn>
            </div>
        </div>

        <div class="mb-6">
            <h3>Sizes:</h3>
            <div class="p-5 flex flex-wrap items-start gap-4">
                <Btn
                    variant="primary"
                    size="sm"
                >Small Button</Btn>
                <Btn
                    variant="primary"
                    size="base"
                >Base Button</Btn>
                <Btn
                    variant="primary"
                    size="md"
                >Medium Button</Btn>
                <Btn
                    variant="primary"
                    size="lg"
                >Large Button</Btn>
            </div>
        </div>

        <div class="mb-6">
            <h3>Rounded:</h3>
            <div class="p-5 flex flex-wrap items-start gap-4">
                <Btn
                    variant="primary"
                    rounded
                >Rounded Button</Btn>
                <Btn
                    variant="primary"
                    size="base"
                >Base Button</Btn>
                <Btn
                    variant="primary"
                    outline
                    rounded
                >Rounded Outline</Btn>
            </div>
        </div>

        <div class="mb-6">
            <h3>Outline:</h3>
            <div class="p-5 flex flex-wrap items-start gap-4">
                <Btn
                    variant="primary"
                    outline
                >Outline Button</Btn>
                <Btn
                    variant="primary"
                    size="base"
                >Base Button</Btn>
                <Btn
                    variant="primary"
                    outline
                    rounded
                >Rounded Outline</Btn>
            </div>
        </div>

        <div class="mb-6">
            <h3>Loading:</h3>
            <div class="p-5 flex flex-wrap items-start gap-4">
                <Btn
                    variant="primary"
                    lodading
                >Loading Button</Btn>
                <Btn
                    variant="primary"
                    size="base"
                >Base Button</Btn>
                <Btn
                    variant="primary"
                    outline
                    rounded
                    lodading
                >Rounded Outlined</Btn>
            </div>
        </div>

        <div class="mb-6">
            <h3>Disabled:</h3>
            <div class="p-5 flex flex-wrap items-start gap-4">
                <Btn disabled>Button</Btn>
                <Btn
                    disabled
                    variant="neutral"
                >Neutral</Btn>
                <Btn
                    disabled
                    variant="primary"
                >primary</Btn>
                <Btn
                    disabled
                    variant="secondary"
                >secondary</Btn>
                <Btn
                    disabled
                    variant="accent"
                >accent</Btn>
                <Btn
                    disabled
                    variant="ghost"
                >ghost</Btn>
                <Btn
                    disabled
                    variant="link"
                >link</Btn>
            </div>
        </div>
    </div>
</template>

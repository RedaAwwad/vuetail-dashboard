<script setup lang="ts">
    import Btn from '@/components/buttons/Btn.vue';
    import CIcon from '@/components/icons/CoreUiIcon.vue';
</script>

<template>
    <div class="px-4 pt-4">
        <h1 class="mb-6 flex gap-x-2 text-xl sm:text-2xl">
            <span class="first-letter:text-primary text-black font-semibold">Button</span>
            <span class="first-letter:text-primary text-black font-semibold">Component</span>
        </h1>

        <div class="mockup-code mb-6">
            <pre data-prefix="$"><code>Btn</code></pre>
            <pre data-prefix=">"></pre>
            <pre
                data-prefix=">">type Variants = 'none' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link';</pre>
            <pre data-prefix=">">type Sizes = 'base' | 'sm' | 'md' | 'lg';</pre>
            <pre data-prefix=">"><code>interface BtnProps {
            block?: boolean;
            variant?: Variants;
            size?: Sizes;
            title?: string;
            rounded?: boolean;
            outline?: boolean;
            lodading?: boolean;
            to?: string;
            exact?: boolean;
            href?: string;
            target?: string;
            noFocus?: boolean;
        }</code></pre>
        </div>

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
            <h3>Button with an icon:</h3>
            <div class="p-5 flex flex-wrap items-start gap-4">
                <Btn>
                    <CIcon icon="cilLink" />
                    Button
                </Btn>
                <Btn variant="neutral">
                    <CIcon icon="cilLink" />
                    Neutral
                </Btn>
                <Btn variant="primary">
                    <CIcon icon="cilLink" />
                    primary
                </Btn>
                <Btn variant="secondary">
                    <CIcon icon="cilLink" />
                    secondary
                </Btn>
                <Btn variant="accent">
                    <CIcon icon="cilLink" />
                    accent
                </Btn>
                <Btn variant="ghost">
                    <CIcon icon="cilLink" />
                    ghost
                </Btn>
                <Btn variant="link">
                    <CIcon icon="cilLink" />
                    link
                </Btn>
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

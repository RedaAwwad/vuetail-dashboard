<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    type Variants = 'none' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link';
    type Sizes = 'base' | 'sm' | 'md' | 'lg';

    interface BtnProps {
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
    }

    const props = withDefaults(defineProps<BtnProps>(), {
        variant: 'primary',
        size: 'base',
    });

    const btnSizes: Record<Sizes, string> = {
        sm: `px-4 py-2 text-sm ${props.rounded ? 'rounded-full' : 'rounded'}`,
        md: `px-6 py-2 text-base ${props.rounded ? 'rounded-full' : 'rounded-md'}`,
        lg: `px-8 py-3 text-lg ${props.rounded ? 'rounded-full' : 'rounded-lg'}`,
        base: `font-medium text-sm px-6 py-3 ${props.rounded ? 'rounded-full' : 'rounded-lg'}`
    };

    const btnVariants: Record<Variants, string> = {
        none: '',
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        neutral: 'btn-neutral',
        accent: 'btn-accent',
        ghost: 'btn-ghost',
        link: 'btn-link',
    };

    const emit = defineEmits(['click']);

    const onClickButton = () => {
        emit('click');
    };

</script>

<template>
    <RouterLink
        v-if="to"
        :to="to"
        :exact="exact"
        :disabled="lodading"
        :title="title"
        :class="[
            {
                'block w-full': block,
                'focus:ring-transparent': noFocus,
                'btn-outline': outline
            },
            btnVariants[variant],
            btnSizes[size],
        ]"
    >
        <div
            v-if="lodading"
            class="px-3 h-full flex items-center justify-center"
        >
            <span class="loading loading-spinner loading-md"></span>
        </div>
        <div
            v-else
            class="h-full flex items-center gap-x-2 justify-center"
        >
            <slot />
        </div>
    </RouterLink>

    <a
        v-else-if="href"
        :href="href"
        :disabled="lodading"
        :target="target"
        :title="title"
        :class="[
            {
                'block w-full': block,
                'focus:ring-transparent': noFocus,
                'btn-outline': outline
            },
            btnVariants[variant],
            btnSizes[size],
        ]"
    >
        <div
            v-if="lodading"
            class="px-3 h-full flex items-center justify-center"
        >
            <span class="loading loading-spinner loading-md"></span>
        </div>
        <div
            v-else
            class="h-full flex items-center gap-x-2 justify-center"
        >
            <slot />
        </div>
    </a>

    <button
        v-else
        @click="onClickButton"
        :disabled="lodading"
        :title="title"
        :class="[
            {
                'block w-full': block,
                'focus:ring-transparent': noFocus,
                'btn-outline': outline
            },
            btnVariants[variant],
            btnSizes[size],
        ]"
    >
        <div
            v-if="lodading"
            class="px-3 h-full flex items-center justify-center"
        >
            <span class="loading loading-spinner loading-md"></span>
        </div>
        <div
            v-else
            class="h-full flex items-center gap-x-2 justify-center"
        >
            <slot />
        </div>
    </button>
</template>
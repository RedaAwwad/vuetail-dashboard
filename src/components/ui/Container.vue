<script setup lang="ts">
defineProps({
  fluid: {
    type: Boolean,
    defualt: false,
  },
});
</script>

<template>
  <div
    class="px-2 px-sm-4 mx-auto"
    :class="{ 'max-w-[1600px] md:max-w-[991px] lg:max-w-[1279px] xl:max-w-[1400px]': !fluid }"
  >
    <slot />
  </div>
</template>

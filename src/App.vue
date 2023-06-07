<script setup lang="ts">
  import { provide } from 'vue'
  import { RouterView } from 'vue-router'
  import { iconsSet as icons } from '@/assets/icons';

  provide('icons', icons);
</script>

<template>
  <RouterView />
</template>

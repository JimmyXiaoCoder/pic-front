

<template>

<div>
  <BasicLayout />
</div>

</template>

<script setup lang="ts">
import BasicLayout from './components/layouts/BasicLayout.vue';
import { testUsingGet } from '@/api/testController';

testUsingGet().then((res) => {
  console.log('API Response:', res);
}).catch((error) => {
  console.error('API Error:', error);
});

</script>

<style scoped>
</style>

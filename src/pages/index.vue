<template>
  <RouterView />
</template>

<script setup>
const route = useRoute();
console.log('🚀 ~ router:', route);
</script>

<route lang="yaml">
name: 'Home'
meta:
  title: '首页'
</route>

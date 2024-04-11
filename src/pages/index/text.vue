<template>
  <div class="text-red-600">{{ $t('message.hello') }}</div>
</template>

<script setup>
const route = useRoute();
console.log('🚀 ~ router:', route);
</script>

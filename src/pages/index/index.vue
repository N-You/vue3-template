<template>
  <div class="text-red-600">{{ $t('message.hello') }}</div>
</template>

<script setup>
import Test from '@/api/test';

onMounted(async () => {
  const res = await Test.Test();
  console.log('🚀 ~ onMounted ~ res:', res);
});
</script>

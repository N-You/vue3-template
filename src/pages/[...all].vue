<template>
  <div>
    <button type="primary" @click="back">回到首页</button>
  </div>
</template>

<script setup>
const router = useRouter();

const back = () => {
  router.replace('/');
};
</script>

<style scoped lang="scss"></style>

<template>
  <div class="box">
    <div class="login_model"></div>
  </div>
</template>

<script setup>
const route = useRoute();
console.log('🚀 ~ router:', route);
</script>

<style lang="scss" scoped>
.box {
  @apply w-full h-screen;
  background: url(../assets/images/login_background.jpg) no-repeat;
  background-size: 100% 100%;
}
</style>

<route lang="yaml">
name: 'Login'
meta:
  title: '登录'
</route>

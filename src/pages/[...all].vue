<template>
  <div class="container">
    <img src="@/assets/images/404.png" class="bg" />
    <div class="btn">
      <a href="/" class="goindex">回到首页</a>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const back = () => {
  router.replace('/');
};
</script>

<style scoped lang="scss">
img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container {
  max-width: 90%;
  margin: 10vh auto;
  padding-top: 80px;
}

.bg {
  display: block;
  max-width: 100%;
  margin: 0px auto;
}

.btn {
  width: 400px;
  margin: 0 auto;
  max-width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.btn a {
  float: left;
  text-decoration: none;
  width: 46.5%;
  border: 1px solid #5298ff;
  background: #5298ff;
  color: #fff;
  display: block;
  height: 46px;
  line-height: 44px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
  overflow: hidden;
}

@media screen and (max-width: 500px) {
  .btn {
    width: 85%;
  }

  .btn a {
    width: 100%;
    font-size: 15px;
    height: 42px;
    line-height: 42px;
  }
}
</style>

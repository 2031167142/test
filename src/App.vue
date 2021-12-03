<template>
  <div class="main">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item  to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item  to="/user" icon="user-o">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.main {
  width: 100vw;
}
</style>

<template>
  <div class="main">
    <div class="router-con">
      <router-view> </router-view>
    </div>
    <van-tabbar route placeholder>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <!-- <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item> -->
      <van-tabbar-item to="/user" icon="user-o">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'App',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.main {
  width: 100vw;
  /* box-sizing: border-box; */
}
</style>

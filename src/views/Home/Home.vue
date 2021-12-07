<template>
  <div class="box">
    <!-- 主页头部标题 -->
    <van-nav-bar title="牛马头条" />

    <!-- 频道列表的标签页 -->
    <van-tabs>
      <van-tab title="标签 1">内容 1</van-tab>
    </van-tabs>

    <!-- 文章列表插槽 -->
    <slot> </slot>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from 'vant'
export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
}
</style>

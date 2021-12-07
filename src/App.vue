<template>
  <div class="main">
    <div class="router-con">
      <router-view>
        <Article></Article>
      </router-view>
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
import request from './utils/request'
// import { getChannelList } from './api/homeAPI'
import Article from './components/Article/Article'
export default {
  name: 'App',
  components: {
    Article,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      ChannelList: null,
    }
  },
  created() {
    this.initChannelList()
    // this.initArticleList()
  },
  methods: {
    // 获取文章列表数据
    // async initArticleList() {
    //   const { data: res } = await request.get()
    //   console.log(res)
    // },

    // 获取所有标签列表数据
    async initChannelList() {
      const { data: res } = await request.get('/v1_0/channels')
      console.log(res)
      this.ChannelList = res.data.channels
    },
  },
}
</script>

<style scoped>
.main {
  width: 100vw;
}
</style>

<template>
  <div class="box">
    <!-- 主页头部标题 -->
    <van-nav-bar title="牛马头条" placeholder />

    <!-- 频道列表的标签页 -->
    <van-tabs>
      <van-tab
        v-for="(item, index) in ChannelList"
        :title="ChannelList[index].name"
        :key="index"
      >
        <!-- 文章列表 -->
        <keep-alive>
          <ArticleList
            :Channel_id="ChannelList[index].id"
          ></ArticleList> </keep-alive
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from 'vant'
import request from '../../utils/request'
import ArticleList from '../../components/ArticleList/ArticleList'

export default {
  name: 'Home',
  components: {
    ArticleList,
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      ChannelList: [],
    }
  },
  created() {
    this.initChannelList()
  },
  methods: {
    // 获取所有频道列表数据
    async initChannelList() {
      const { data: res } = await request.get('/v1_0/channels')
      // console.log(res)
      this.ChannelList = res.data.channels
      // console.log(this.ChannelList)
    },
  },
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
}
</style>

<template>
  <div class="box">
    <!-- 主页头部标题 -->
    <van-nav-bar title="牛马头条" />

    <!-- 频道列表的标签页 -->
    <van-tabs sticky>
      <van-tab
        fixed
        :title="ChannelList[index].name"
        v-for="(item, index) in ChannelList"
        :key="index"
      ></van-tab>
    </van-tabs>

    <!-- 文章列表 -->
    <Articleinfo
      v-for="(item, index) in ArticleList"
      :key="index"
      :aut_name="ArticleList[index].aut_name"
      :title="ArticleList[index].title"
      :comm_count="ArticleList[index].comm_count"
      :pubdate="ArticleList[index].pubdate"
      :images="ArticleList[index].cover.images"
      :type="ArticleList[index].cover.type"
    ></Articleinfo>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from 'vant'
import request from '../../utils/request'
import { getArticleListAPI } from '../../api/articleAPI'
import Articleinfo from '../../components/articleinfo/Articleinfo.vue'

export default {
  name: 'Home',
  components: {
    Articleinfo,
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      ChannelList: null,
      ArticleList: null,
    }
  },
  created() {
    this.initChannelList()
    this.initArticleList()
  },
  methods: {
    // 获取文章列表数据
    async initArticleList() {
      const { data: res } = await getArticleListAPI(1, new Date())
      // console.log(res)
      this.ArticleList = res.data.results
      console.log(this.ArticleList)
    },

    // 获取所有标签列表数据
    async initChannelList() {
      const { data: res } = await request.get('/v1_0/channels')
      // console.log(res)
      this.ChannelList = res.data.channels
    },
  },
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
}
</style>

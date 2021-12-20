<template>
  <div>
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
      :disabled="finished"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我是无底线的"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
        :immediate-check="false"
      >
        <ArticleItem
          v-for="(item, index) in ArticleList"
          :key="index"
          :title="ArticleList[index].title"
          :art_id="ArticleList[index].art_id"
          :aut_name="ArticleList[index].aut_name"
          :comm_count="ArticleList[index].comm_count"
          :pubdate="ArticleList[index].pubdate"
          :images="ArticleList[index].cover.images"
          :type="ArticleList[index].cover.type"
          @remove-article="removeArticle"
        ></ArticleItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI'

import ArticleItem from '@/components/ArticleItem/ArticleItem'
import { List, PullRefresh } from 'vant'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
  },
  props: {
    // 频道ID
    Channel_id: {
      type: Number,
      required: true, // 必填项
    },
  },
  data() {
    return {
      ArticleList: [],
      timestamp: Date.now(),
      loading: false,
      finished: false,
      error: false,
      isLoading: false,
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 获取文章列表数据
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(
        this.Channel_id,
        this.timestamp
      )
      // 成功时
      if (res.message === 'OK') {
        // 为时间戳重新赋值
        this.timestamp = res.data.pre_timestamp
        if (isRefresh) {
          // 下拉加载  更多时，应该是“新数据”在前，“旧数据”在后
          this.ArticleList = [...res.data.results, ...this.ArticleList]

          // 重置 isloading 为 false
          this.isLoading = false
        } else {
          // 上拉加载  更多时，应该是“旧数据”在前，“新数据”在后
          this.ArticleList = [...this.ArticleList, ...res.data.results]

          // 重置 loading 为 false
          this.loading = false
        }

        // 判断所有的数据是否已加载完毕
        if (res.data.pre_timestamp === null) {
          this.finished = true
        }
      }
    },
    onLoad() {
      // 上拉加载
      this.initArticleList()
    },
    onRefresh() {
      // 下拉加载
      this.initArticleList(true)
    },
    // 从文章列表中移除指定 id 的文章
    removeArticle(id) {
      // 对原数组进行 filter 方法的过滤
      this.ArticleList = this.ArticleList.filter(
        (item) => item.art_id.toString() !== id
      )
    },
  },
}
</script>

<style scoped>
</style>

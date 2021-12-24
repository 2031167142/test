<template>
  <div class="search-box">
    <!-- Header 头部区域 搜索栏 -->
    <div class="search-header">
      <!-- 后退图标 -->
      <van-icon name="arrow-left" color="white" size="18" class="goback" />
      <!-- 搜索组件 -->
      <van-search
        v-model.trim="kw"
        placeholder="请输入搜索关键词"
        background="#007BFF"
        shape="round"
      />
    </div>
    <!-- 搜索历史 -->
    <div class="search-history">
      <van-cell-group>
        <van-cell title="搜索历史">
          <template #right-icon>
            <van-icon name="delete" />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- 历史列表 -->
    <div class="history-list">
      <van-button
        class="history-item"
        v-for="(tag, i) in history"
        :key="i"
        round
        size="small"
        >{{ tag }}</van-button
      >
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Search, Icon, Button, Cell, CellGroup } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Search)
Vue.use(NavBar)
export default {
  name: 'Search',
  components: {},
  data() {
    return {
      // 搜索关键词
      kw: '',
      // 搜索历史
      history: ['API', 'java', 'css', '前端', '后台接口', 'python'],
    }
  },
}
</script>

<style lang="less" scoped>
.search-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: white;
  .search-header {
    height: 46px;
    display: flex;
    align-items: center;
    background-color: #007bff;
    overflow: hidden;
    // 后退按钮
    .goback {
      margin-left: 14px;
    }
    // 搜索组件
    .van-search {
      flex: 1;
    }
  }
  .history-list {
    .history-item {
      margin: 8px 4px;
      padding: 10px;
    }
  }
}
</style>

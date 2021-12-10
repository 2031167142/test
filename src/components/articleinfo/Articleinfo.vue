<template>
  <!-- 文章列表 -->
  <div class="article-con">
    <h4>{{ title }}</h4>
    <div class="img-con">
      <img v-for="(item, index) in type" :key="index" :src="images[0]" alt="" />
    </div>
    <h5>
      <span> 作者：{{ aut_name }} </span>
      <span> {{ comm_count }}评论 </span>
      <span> 发布日期：{{ pubdate }} </span>
      <span> × </span>
    </h5>
  </div>
</template>

<script>
export default {
  name: 'Articleinfo',
  props: {
    // 标题
    title: {
      type: String,
      default: null,
    },
    // 作者名
    aut_name: {
      type: String,
      default: null,
    },
    // 评论数量
    comm_count: {
      type: [Number, String],
      default: null,
    },
    // 发表时间
    pubdate: {
      type: String,
      default: null,
    },
    // 文章封面URL
    images: {
      type: Array,
      default: null,
    },
    type: {
      type: Number,
      default: null,
    },
  },
}
</script>

<style lang="less" scoped>
.article-con {
  width: 95vw;
  margin-top: 5px;
  // 让盒子居中
  margin-left: 2.5vw;
  h3,
  h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 100;
  }
  h5 {
    margin: 0;
    color: #969799;
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-weight: 100;
  }
  .img-con {
    display: flex;
    img {
      flex: 1;
      height: 50px;
      padding: 7px;
    }
  }
}
</style>

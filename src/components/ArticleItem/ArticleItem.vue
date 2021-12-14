<template>
  <!-- 文章列表 -->
  <div class="article-con">
    <div :class="isflex + ' ' + 'article-head'">
      <h4>{{ title }}</h4>
      <div :class="isflex + ' ' + 'img-con'">
        <img
          v-for="(item, index) in images"
          :key="index"
          v-lazy="images[index]"
        />
      </div>
    </div>

    <div class="article-foot">
      <h5>
        <span> 作者：{{ aut_name }} </span>
        <span> {{ comm_count }}评论 </span>
        <span> 发布日期：{{ pubdate | dateFormat }} </span>
        <span> × </span>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
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
  data() {
    return {
      imgflex: 'isflex',
      imgblock: 'isblock',
    }
  },

  computed: {
    // 判断图片如果大于1张图片时 改为flex布局
    isflex() {
      var flex = this.imgblock
      if (this.type < 3) {
        flex = this.imgflex
      }
      return flex
    },
  },
}
</script>

<style lang="less" scoped>
.article-con {
  width: 95vw;
  // 让盒子居中
  margin: 10px 2.5vw;
  min-height: 8vh;

  .article-head {
    display: flex;
    justify-content: space-between;
    h4 {
      margin-bottom: 10px !important;
      margin: 0;
      font-size: 14px;
      font-weight: 100;
    }

    .img-con {
      display: flex;
      justify-content: center;
      img {
        // flex: 1;
        height: 70px;
        padding: 3px;
        min-width: 30vw;
        max-width: 30vw;
      }
    }
  }
  .article-foot {
    h5 {
      margin: 0;
      color: #969799;
      display: flex;
      justify-content: space-between;
      text-align: center;
      font-weight: 100;
    }
  }
}
.isflex {
  display: flex !important;
}
.isblock {
  display: block !important;
}
</style>

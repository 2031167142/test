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
        <span>
          <van-cell value="×" @click="show = true" class="padding-0"></van-cell>
          <!-- 反馈面板 -->
          <van-action-sheet
            class="textCenter"
            v-model="show"
            :cancel-text="cancelText"
            :closeable="false"
            @cancel="onCancel"
            get-container="body"
          >
            <!-- 一级反馈面板 -->
            <div v-if="isFirst">
              <van-cell
                v-for="item in actions"
                :key="item.name"
                :title="item.name"
                @click="onCellClick(item.name)"
                clickable
              />
            </div>
            <!-- 二级反馈面板 -->
            <div v-else>
              <van-cell
                v-for="item in reports"
                :key="item.type"
                :title="item.label"
                clickable
                title-class="center-title"
              />
              <van-cell
                title="返回"
                clickable
                title-class="center-title"
                @click="
                  isFirst = true
                  cancelText = '取消'
                "
              />
            </div>
          </van-action-sheet>
        </span>
      </h5>
    </div>
  </div>
</template>

<script>
import { ActionSheet, Cell, Toast } from 'vant'
import reports from '@/api/reports'
import { dislikeArticleAPI } from '@/api/homeAPI.js'

export default {
  name: 'ArticleItem',
  components: {
    [ActionSheet.name]: ActionSheet,
    [Toast.name]: Toast,
    [Cell.name]: Cell,
  },
  props: {
    // 标题
    title: {
      type: String,
      required: true,
    },
    // 文章ID
    art_id: {
      type: [Number, String],
      required: true,
    },
    // 作者名
    aut_name: {
      type: String,
      required: true,
    },
    // 评论数量
    comm_count: {
      type: [Number, String],
      required: true,
    },
    // 发表时间
    pubdate: {
      type: String,
      required: true,
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
      // 是否展示反馈面板
      show: false,
      cancelText: '取消',
      // 一级面板的可选项列表
      actions: [
        { name: '不感兴趣' },
        { name: '反馈垃圾内容' },
        { name: '拉黑作者' },
      ],
      // 二级面板的可选项列表
      reports: reports,
      // 是否展示第一个反馈面板
      isFirst: true,
    }
  },
  methods: {
    onCancel() {
      Toast('取消')
    },
    async onCellClick(name) {
      // 判断是否登录
      if (this.$store.state.tokenInfo.token) {
        if (name === '不感兴趣') {
          const { data: res } = await dislikeArticleAPI(this.artId)

          if (res.message === 'OK') {
            // TODO：炸楼的操作，触发自定义的事件，将文章 id 发送给父组件
            this.$emit('remove-article', this.artId)
          }
          this.show = false
        } else if (name === '拉黑作者') {
          console.log('拉黑作者')
          this.show = false
        } else if (name === '反馈垃圾内容') {
          this.cancelText = ''
          // TODO：展示二级反馈面板
          this.isFirst = false
        }
      } else {
        // 未登录跳转到登录界面
        this.$router.push('/login')
      }
    },
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
    // 文章 Id 的计算属性
    artId() {
      // 注意：文章对象的 art_id 是大数对象，需要调用 .toString() 方法转换为字符串形式
      return this.art_id.toString()
    },
  },
}
</script>

<style lang="less" scoped>
.padding-0 {
  padding: 0;
}
.textCenter {
  text-align: center;
}
.article-con {
  width: 95vw;
  // 让盒子居中
  margin: 0.625rem 2.5vw;
  min-height: 8vh;

  .article-head {
    display: flex;
    justify-content: space-between;
    h4 {
      margin-bottom: 0.625rem !important;
      margin: 0;
      font-size: 0.875rem;
      font-weight: 100;
    }

    .img-con {
      display: flex;
      justify-content: center;
      img {
        // flex: 1;
        height: 4.375rem;
        padding: 0.1875rem;
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
      // text-align: center;
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

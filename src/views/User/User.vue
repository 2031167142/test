<template>
  <div class="user-box">
    <div class="user-head">
      <div class="user-info">
        <van-cell center class="padding-top">
          <template #icon>
            <van-image
              width="70"
              height="65"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
              round
              cover
            />
          </template>
          <template #title>
            <span class="username">用户名</span>
          </template>
          <template #label>
            <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
          </template>
        </van-cell>
      </div>
      <div class="user-data">
        <div class="user-data-item">
          <span>0</span>
          <span>动态</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>关注</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="编辑资料" value="内容" />
      <van-cell title="萨比同学" value="内容" />
      <van-cell title="退出登录" value="内容" @click="signOut" />
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup, Image as VanImage, Tag } from 'vant'
import { mapMutations } from 'vuex'

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [VanImage.name]: VanImage,
    [Tag.name]: Tag,
  },
  methods: {
    ...mapMutations(['removeToken']),
    signOut() {
      console.log('退出登录')
      this.removeToken()
    },
  },
}
</script>

<style lang="less" scoped>
.user-box {
  .user-head {
    height: 28vh;
    background-color: #007bff;
    .user-info {
      height: 50%;
      .padding-top {
        padding-top: 20px;
      }
      div {
        background-color: #007bff;
        .username {
          font-size: 14px;
          font-weight: bold;
          color: white;
        }
        .van-cell__title {
          margin-left: 10px;
        }
      }
    }
  }
  .user-data {
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .user-data-item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span {
        color: white;
        font-size: 12px;
      }
    }
  }
}
</style>

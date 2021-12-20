<template>
  <div class="use-box">
    <div class="use-head"></div>
    <van-cell-group>
      <van-cell title="编辑资料" value="内容" />
      <van-cell title="萨比同学" value="内容" />
      <van-cell title="退出登录" value="内容" @click="this.removeToken" />
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant'
import { mapMutations } from 'vuex'

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
  methods: {
    ...mapMutations(['removeToken']),
  },
}
</script>

<style lang="less" scoped>
.use-box {
  .use-head {
    height: 30vh;
    background-color: #007bff;
  }
}
</style>

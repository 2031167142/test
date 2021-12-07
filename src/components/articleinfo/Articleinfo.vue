<template>
  <!-- 文章列表 -->
  <div class="article-con">
    <h3>13123</h3>
    <div class="img-con">
      <img src="./logo.png" alt="" />
      <img src="./logo.png" alt="" />
      <img src="./logo.png" alt="" />
    </div>
    <h5>
      <span> 作者：{{}} </span>
      <span> {{ 1 }}评论 </span>
      <span> 发布日期：{{ 122200005555 }} </span>
      <span> × </span>
    </h5>
  </div>
</template>

<script>
export default {
  name: 'Articleinfo',
}
</script>

<style lang="less" scoped>
.article-con {
  width: 95vw;
  margin-top: 5px;
  // 让盒子居中
  margin-left: 2.5vw;
  h3 {
    margin: 0;
  }
  h5 {
    margin: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
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

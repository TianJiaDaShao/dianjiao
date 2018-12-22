<template>
  <div class="meetingRoom">
    <div class="titleBox">
      <h2>美式复古新国际博览中心</h2>
      <a href="###" class="collectionBox">
        <img src="@/assets/images/collection.png" alt="">
        <span>收藏</span>
      </a>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">点教</el-breadcrumb-item>
      <el-breadcrumb-item>南京</el-breadcrumb-item>
      <el-breadcrumb-item>南京教点</el-breadcrumb-item>
    </el-breadcrumb>
    <p class="label">#活动教室  #全天优惠  #实拍</p>
  </div>
</template>

<script>
  export default {
    name: 'meetingRoom',
    data() {
      return {}
    },
    created() {}
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/meetingRoom.scss";
</style>

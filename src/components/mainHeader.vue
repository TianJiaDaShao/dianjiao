<template>
  <header>
    <div class="headerLeft">
      <h1>点教网</h1>
      <a href="###">24<span>dianjiao</span>.com</a>
    </div>
    <div class="headerRight">
      <ul>
        <li><a href="###">联系我们</a></li>
        <li><a href="###">加盟入口</a></li>
        <li><a href="###">平台简介</a></li>
        <li><a href="###">帮助中心</a></li>
      </ul>
      <div class="border"></div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="" alt="">
          {{userName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的订单</el-dropdown-item>
          <el-dropdown-item>个人资料</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'mainHeader',
    data() {
      return {
        value6: '',
        userName: '可爱的小土豆'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/mainHeader.scss";
</style>

<template>
  <header>
    <div class="headerLeft" @click="goIndex">
      <h1>点教网</h1>
      <a href="###">24<span>dianjiao</span>.com</a>
    </div>
    <div class="headerRight">
      <ul>
        <li @click="goFree"><a href="###">免费发布教点</a></li>
        <li @click="goHelp"><a href="###">帮助中心</a></li>
      </ul>
      <div class="border"></div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="" alt="">
          {{userName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="goMyOrder">我的订单</el-dropdown-item>
          <el-dropdown-item command="goSet">个人资料</el-dropdown-item>
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
    },
    methods: {
      goFree() {
        this.$router.push({
          path: '/mainPage/free'
        })
      },
      goHelp() {
        this.$router.push({
          path: '/mainPage/helpCenter'
        })
      },
      handleCommand(command) {
        switch (command) {
          case 'goMyOrder':
            this.$router.push({
              path: '/mainPage/myOrder'
            })
            break;
          case 'goSet':
            this.$router.push({
              path: '/mainPage/set'
            })
            break;
          default:

        }
      },
      goIndex(){
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/mainHeader.scss";
</style>

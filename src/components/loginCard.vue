<template>
  <div class="loginCard">
    <div class="closeBox">
      <a href="###" @click="_close"><i class="el-icon-close"></i></a>
    </div>
    <img src="@/assets/images/Group21.png" alt="">
    <input type="text" placeholder="请输入手机号／邮箱">
    <div class="pwdBox">
      <input type="text" placeholder="请输入登录密码">
      <a href="###" @click="_reset">忘记密码？</a>
    </div>
    <a href="###" class="login">登 陆</a>
    <a href="###" class="wchat">微信扫码登录</a>
  </div>
</template>

<script>
  export default {
    name: 'loginCard',
    data() {
      return {}
    },
    methods: {
      _close() {
        this.$emit('close', '')
      },
      _reset() {
        this.$emit('reset', '2')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/loginCard.scss";
</style>

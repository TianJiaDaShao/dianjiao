<template>
  <div class="registerCard">
    <div class="closeBox">
      <a href="###" @click="_close"><i class="el-icon-close"></i></a>
    </div>
    <img src="@/assets/images/Group21.png" alt="">
    <input type="text" placeholder="请输入手机号／邮箱">
    <input type="text" placeholder="请输入登录密码">
    <div class="identifyingCodeBox">
      <input type="text" placeholder="输入验证码">
      <a href="###">重发验证码（59)</a>
    </div>
    <a href="###" class="resetBtn">注  册</a>
  </div>
</template>

<script>
  export default {
    name: 'registerCard',
    data() {
      return {
        activeTab: 0
      }
    },
    methods: {
      _close() {
        this.$emit('close', '')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/registerCard.scss";
</style>

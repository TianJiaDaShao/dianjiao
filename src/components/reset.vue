<template>
  <div class="reset">
    <div class="closeBox">
      <a href="###" @click="_close"><i class="el-icon-close"></i></a>
    </div>
    <img src="@/assets/images/Group26.png" alt="">
    <div class="tabBox">
      <a href="###" :class="activeTab ? '' : 'active'" @click="activeTab = 0">手机账号</a>
      <a href="###" :class="activeTab ? 'active' : ''" @click="activeTab = 1">邮箱账号</a>
    </div>
    <input v-if="!activeTab" type="text" placeholder="请输入手机号">
    <input v-else type="text" placeholder="请输入邮箱账号">
    <div class="identifyingCodeBox">
      <input type="text" placeholder="输入验证码">
      <a href="###">重发验证码（59)</a>
    </div>
    <input class="newPwd" type="text" placeholder="请输入新密码">
    <input class="newPwd" type="text" placeholder="请输入新密码">
    <a href="###" class="resetBtn">重置密码</a>
  </div>
</template>

<script>
  export default {
    name: 'reset',
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
  @import "@/assets/css/reset.scss";
</style>

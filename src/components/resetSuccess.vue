<template>
  <div class="resetSuccess">
    <div class="closeBox">
      <a href="###" @click="_close"><i class="el-icon-close"></i></a>
    </div>
    <img src="@/assets/images/Group21.png" alt="">
    <div class="iconBox">
      <i class="el-icon-circle-check"></i>
      <span>密码重置已成功，</span>
    </div>
    <p>请使用新密码登录账号（{{goBack}}s）</p>
  </div>
</template>

<script>
  var timer;
  export default {
    name: 'resetSuccess',
    data() {
      return {
        goBack: 5
      }
    },
    created() {
      timer = setInterval(() => {
        if (this.goBack === 1) {
          this._close()
        } else {
          this.goBack--;
        }
      }, 1000);
    },
    methods: {
      _close() {
        clearInterval(timer)
        this.$emit('close', '')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/resetSuccess.scss";
</style>

<template>
  <div class="indexHeader">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <img class="swiper-slide" src="@/assets/images/banner1.jpg">
        <img class="swiper-slide" src="@/assets/images/banner1.jpg">
      </div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <!--左箭头-->
      <div class="swiper-button-next swiper-button-white"></div>
      <!--右箭头-->
    </div>
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
        <a href="###" v-if="!userName" class="login" @click="_login">登 录</a>
        <a href="###" v-if="!userName" class="register">注 册</a>
        <el-dropdown v-else>
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
    <div class="searchCard">
      <img src="@/assets/images/clock.png" alt="">
      <el-date-picker v-model="value6" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00']">
      </el-date-picker>
      <input class="personNumber" type="text" placeholder="可容人数">
      <input class="address" type="text" placeholder="地址">
      <a href="###">搜索点教网</a>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: 'indexHeader',
    data() {
      return {
        value6: '',
        userName: '可爱的小土豆'
      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: true, //可选选项，自动滑动
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      })
    },
    methods: {
      _login() {
        this.$emit('login', 1)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/indexHeader.scss";

  .personNumber {
    background: #fff url('../assets/images/personNub.png') no-repeat center left 20px;
  }

  .address {
    background: #fff url('../assets/images/address.png') no-repeat center left 20px;
  }
</style>

<template>
  <div class="index">
    <indexHeader @login="changeCard"></indexHeader>
    <div class="cardBox">
      <a href="###">
        <img src="@/assets/images/pic1.png" alt="">
        <span>文化教育</span>
      </a>
      <a href="###">
        <img src="@/assets/images/pic2.png" alt="">
        <span>兴趣培养</span>
      </a>
      <a href="###">
        <img src="@/assets/images/pic3.png" alt="">
        <span>老年生活</span>
      </a>
      <a href="###">
        <img src="@/assets/images/pic4.png" alt="">
        <span>会议</span>
      </a>
    </div>
    <h2>时段分类</h2>
    <section class="timeBox">
      <a href="###" class="timeCard1">
        <h3>黄金时段</h3>
        <p>周六 09:00-19:00</p>
        <p>周日 09:00-19:00</p>
      </a>
      <a href="###" class="timeCard2">
        <h3>夕阳红时段</h3>
        <p>每日 06:00-09:00</p>
      </a>
      <a href="###" class="timeCard3">
        <h3>夜间集训</h3>
        <p>每日 19:00-24:00</p>
      </a>
    </section>
    <h2>教室分类</h2>
    <section class="classRoomBox">
      <a href="###">
        <img src="@/assets/images/pic1.png" alt="">
        <span>文化教育</span>
        <p>120m 20-40人</p>
      </a>
      <a href="###">
        <img src="@/assets/images/pic2.png" alt="">
        <span>兴趣培养</span>
        <p>30m 10-15人</p>
      </a>
      <a href="###">
        <img src="@/assets/images/pic3.png" alt="">
        <span>老年生活</span>
        <p>10m 2-5人</p>
      </a>
      <a href="###">
        <img src="@/assets/images/pic4.png" alt="">
        <span>会议</span>
        <p>20m 5-10人</p>
      </a>
    </section>
    <!-- <h2>限时优惠</h2> -->
    <h2>名师推荐</h2>
    <section class="teacherBox">
      <a href="###">
        <img src="@/assets/images/teacher1.png" alt="">
        <span>老年生活</span>
        <p>10m 2-5人</p>
      </a>
      <a href="###">
        <img src="@/assets/images/teacher2.png" alt="">
        <span>老年生活</span>
        <p>10m 2-5人</p>
      </a>
      <a href="###">
        <img src="@/assets/images/teacher3.png" alt="">
        <span>老年生活</span>
        <p>10m 2-5人</p>
      </a>
      <a href="###">
        <img src="@/assets/images/teacher4.png" alt="">
        <span>老年生活</span>
        <p>10m 2-5人</p>
      </a>
    </section>
    <indexFooter></indexFooter>
    <section class="Mongolia" v-if="card!==''">
      <loginCard v-if="card==1" @close="changeCard" @reset="changeCard"></loginCard>
      <reset v-if="card==2" @close="changeCard"></reset>
      <resetSuccess v-if="card==3" @close="changeCard"></resetSuccess>
      <registerCard v-if="card==4" @close="changeCard"></registerCard>
    </section>
  </div>
</template>

<script>
  // import {
  //   getVisitorDetailById,
  //   transformToBase64
  // } from "../service/getData";
  import indexHeader from '@/components/indexHeader'
  import indexFooter from '@/components/indexFooter'
  import loginCard from '@/components/loginCard'
  import reset from '@/components/reset'
  import resetSuccess from '@/components/resetSuccess'
  import registerCard from '@/components/registerCard'

  export default {
    name: 'detail',
    data() {
      return {
        card: '' //1登陆2重置//3重置成功//4注册
      }
    },
    created() {},
    methods: {
      changeCard(res) {
        this.card = res
      }
    },
    components: {
      indexHeader,
      indexFooter,
      loginCard,
      reset,
      resetSuccess,
      registerCard
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/index.scss";

  .timeCard1 {
    background: url('../assets/images/Group1.png') no-repeat center center;
  }

  .timeCard2 {
    background: url('../assets/images/Group2.png') no-repeat center center;
  }

  .timeCard3 {
    background: url('../assets/images/Group3.png') no-repeat center center;
  }
</style>

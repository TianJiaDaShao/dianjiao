<template>
  <div class="detail">
    <img :src="QRCode" alt="">
    <h2>{{details.reserveNo}}</h2>
    <p>门禁需要使用二维码，请妥善保管您的二维码</p>
    <ul class="card">
      <li>
        <i>拜访公司</i>
        <span>{{details.visitorCompany}}</span>
      </li>
      <li>
        <i>拜访地址</i>
        <span>{{details.visitorFloor}}</span>
      </li>
      <li>
        <i>拜访日期</i>
        <span>{{details.visitorDate}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    getVisitorDetailById,
    transformToBase64
  } from "../service/getData";

  export default {
    name: 'detail',
    data() {
      return {
        details: '',
        QRCode: ''
      }
    },
    created() {
      this.getVisitorDetailById()
    },
    methods: {
      getVisitorDetailById: function() {
        getVisitorDetailById(this.$route.params.id).then(res => {
          if (res.res.code === 10000) {
            this.details = res.body.visitorOutput
            this.transformToBase64()
          }
        })
      },
      transformToBase64: function() {
        transformToBase64({
          "orderNo": this.details.reserveNo,
          "orderType": 2
        }).then(res => {
          this.QRCode = res.body.encodeBase64
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .detail {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 4.27rem;
      height: 4.27rem;
      margin-top: 2.13rem;
    }
    h2 {
      font-family: Gotham-Bold;
      font-size: .67rem;
      color: #333333;
      margin-top: .37rem;
    }
    p {
      font-family: PingFangSC-Medium;
      font-size: .32rem;
      color: #bec0c8;
      margin-top: .53rem;
    }
    .card {
      width: 9.09rem;
      height: 3.29rem;
      background-color: #ffffff;
      box-shadow: 0 .19rem .29rem 0 #ededed;
      border-radius: .13rem;
      border: solid 1px #e5e5e5;
      margin-top: .53rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      li {
        display: flex;
        padding: .17rem 0;
        min-width: 4.43rem + .39rem + 1.44rem;
        i {
          font-family: PingFangSC-Medium;
          font-size: .37rem;
          color: #333333;
          opacity: 0.7;
          padding: 0 .2rem;
        }
        span {
          font-family: PingFangSC-Medium;
          font-size: .37rem;
          color: #333333;
          padding: 0 .2rem;
        }
      }
    }
  }
</style>

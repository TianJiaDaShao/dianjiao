<template>
  <div class="filterPage">
    <div class="conditionBox">
      <div class="inputBox">
        <input class="address" type="text" placeholder="地址">
        <el-date-picker v-model="value6" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00']">
        </el-date-picker>
        <input class="personNumber" type="text" placeholder="可容人数">
      </div>
      <div class="checkBoxCard">
        <div class="checkBoxCardLeft">
          <h3>设施：</h3>
          <el-checkbox>网络</el-checkbox>
          <el-checkbox>投影</el-checkbox>
          <el-checkbox>白板</el-checkbox>
          <el-checkbox>音响</el-checkbox>
          <el-checkbox>水池</el-checkbox>
        </div>
        <div class="checkBoxCardRight">
          <h3>出租类型：</h3>
          <a href="###" class="active">教室</a>
          <a href="###">会议室</a>
          <a href="###">画室</a>
        </div>
      </div>
    </div>
    <div class="activeConditionBox">
      <div class="activeConditionLeft">
        <h3>清除全部条件</h3>
        <img src="@/assets/images/Group 3.png" alt="">
        <img src="@/assets/images/Group4.png" alt="">
      </div>
      <div class="activeConditionRight">
        <h3>默认排序</h3>
        <a href="###">
          <span>价格</span>
          <img src="@/assets/images/Group5.png" alt="">
        </a>
        <a href="###">
          <span>面积</span>
          <img src="@/assets/images/Group5.png" alt="">
        </a>
      </div>
    </div>
    <div class="cardBox">
      <a href="###">
        <img src="@/assets/images/Group6.png" alt="">
        <p>¥50/小时</p>
        <h4>xxxxxxx教室</h4>
        <div class="msgBox">
          <span>xxx教学地点-202</span>
          <i>200-5000人</i>
          <i>1500m</i>
        </div>
      </a>
      <a href="###">
        <img src="@/assets/images/Group6.png" alt="">
        <p>¥50/小时</p>
        <h4>xxxxxxx教室</h4>
        <div class="msgBox">
          <span>xxx教学地点-202</span>
          <i>200-5000人</i>
          <i>1500m</i>
        </div>
      </a>
      <a href="###">
        <img src="@/assets/images/Group6.png" alt="">
        <p>¥50/小时</p>
        <h4>xxxxxxx教室</h4>
        <div class="msgBox">
          <span>xxx教学地点-202</span>
          <i>200-5000人</i>
          <i>1500m</i>
        </div>
      </a>
      <a href="###">
        <img src="@/assets/images/Group6.png" alt="">
        <p>¥50/小时</p>
        <h4>xxxxxxx教室</h4>
        <div class="msgBox">
          <span>xxx教学地点-202</span>
          <i>200-5000人</i>
          <i>1500m</i>
        </div>
      </a>
      <a href="###">
        <img src="@/assets/images/Group6.png" alt="">
        <p>¥50/小时</p>
        <h4>xxxxxxx教室</h4>
        <div class="msgBox">
          <span>xxx教学地点-202</span>
          <i>200-5000人</i>
          <i>1500m</i>
        </div>
      </a>
      <a href="###">
        <img src="@/assets/images/Group6.png" alt="">
        <p>¥50/小时</p>
        <h4>xxxxxxx教室</h4>
        <div class="msgBox">
          <span>xxx教学地点-202</span>
          <i>200-5000人</i>
          <i>1500m</i>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'filterPage',
    data() {
      return {
        value6: ''
      }
    },
    created() {}
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/filter.scss";

  .personNumber {
    background: #fff url('../assets/images/personNub.png') no-repeat center left 20px;
  }

  .address {
    background: #fff url('../assets/images/address.png') no-repeat center left 20px;
  }
</style>

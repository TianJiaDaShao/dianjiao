<template>
	<div class="orderPage">
		<div class="messageBox">
			<h2>预订信息</h2>
			<div class="msgbox">
				<img src="../assets/images/pic1.png" alt="">
				<div class="msgconbox">
					<p>地址：南京市鼓楼教点 202</p>
					<p>场地信息：美式复古新国际博览中心</p>
					<div v-if="screenWidth > 750">
						<p>
							<label for="">预定日期：</label>
							<el-date-picker
								v-model="value1"
								type="date"
								placeholder="选择日期">
							</el-date-picker>
						</p>
						<p>
							<label for="">预定时段：</label>
							<el-time-picker
								is-range
								v-model="value4"
								range-separator="至"
								start-placeholder="开始时间"
								end-placeholder="结束时间"
								placeholder="选择时间范围">
							</el-time-picker>
						</p>
					</div>
					<div v-if="screenWidth <= 750">
						<p>开始日期：<span @click="show_">请选择时间</span></p>
						<p>结束日期：<span @click="show_">请选择时间</span></p>
						<van-popup v-model="show" position="bottom" :overlay="false">
							<van-datetime-picker v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate" />
						</van-popup>
					</div>
					
				</div>
			</div>
		</div>
		<div class="personBox">
			<h2>预订人信息</h2>
			<div class="msgbox">
				<div class="msgconbox">
					<p>地址：南京市鼓楼教点 202</p>
					<p>场地信息：美式复古新国际博览中心</p>
				</div>
			</div>
		</div>
		<div class="priceBox">
			<h2>订单费用</h2>
			<div class="msgbox">
				<div class="msgconbox">
					<p>预订小时：1</p>
					<p>单位小时价格：¥<span>200.00</span></p>
				</div>
			</div>
			<span class="all">共计：¥200.00</span>
		</div>
		<div class="buttonbox">
			<el-button>提交订单</el-button>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'order',
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        show: true,
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				screenWidth: document.body.clientWidth,
        minDate: new Date(),
        maxDate: new Date(2019, 10, 1),
        currentDate: new Date(),
        show: false,
				timeSelect: true
      }
    },
		methods:{
			show_(){
        this.show=true
			}
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/order.scss";
 
  .personNumber {
    background: #fff url('../assets/images/personNub.png') no-repeat center left 20px;
  }

  .address {
    background: #fff url('../assets/images/address.png') no-repeat center left 20px;
  }
</style>

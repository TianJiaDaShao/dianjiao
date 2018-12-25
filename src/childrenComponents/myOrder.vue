<template>
	<div>
		<div class="headImg">
			<img src="../assets/images/teacher3.png">
			<span>可爱的小土豆</span>
			<span>LV.1</span>
		</div>
		<ul class="nav">
			<router-link tag="li" to="/mainPage/myOrder">
				我的订单
			</router-link>
			<router-link tag="li" to="/mainPage/favorite">
				收藏夹
			</router-link>
			<router-link tag="li" to="/mainPage/set">
				个人资料
			</router-link>
		</ul>
		<ul class="orderList">
			<li v-for="item,index in orderList">
				<img :src="item.imgUrl">
				<div class="left">
					<p>地址：{{item.address}}</p>
					<p>场地信息：{{item.place}}</p>
					<p>单位小时价：￥{{item.price}}/小时</p>
					<p>预定日期：{{item.data}}</p>
					<p>预定时段：{{item.timeFrame}}</p>
				</div>
				<div class="right">
					<p>预定时间：{{item.time}}小时</p>
					<p>共计：￥{{item.total}}</p>
					<p>
						<span :class="[item.state=='未过期'?'notOut':'out']">{{item.state=='未过期'?'订单未过期':'订单已过期'}}</span>
						<span class="cancelOrder" v-if="item.cancel" @click="cancelOrder(item,index)">取消订单</span>
						<span class="again" v-if="!item.cancel">再次预定</span>
					</p>
				</div>
			</li>
		</ul>
		<el-dialog class="cDialog" title="" :visible.sync="cancelVisible">
			<div class="cancelDialog">
				<img src="../assets/images/warn.png">
				<p>取消订单将退款至您的账户</p>
				<p>是否确认取消订单</p>
				<div @click="confirm">确定取消</div>
			</div>
		</el-dialog>
		<el-dialog class="cDialog" title="" :visible.sync="confirmVisible">
			<div class="confirmDialog">
				<img src="../assets/images/right.png">
				<p>订单已取消</p>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[
					{
						imgUrl:require('../assets/images/pic1.png'),
						address:'南京市鼓楼',
						place:'博览中心',
						price:'200',
						data:'2018-09-01',
						timeFrame:'14:00-15:00',
						time:'2',
						total:'200.00',
						state:'未过期',
						cancel:true,
					},
					{
						imgUrl:require('../assets/images/pic1.png'),
						address:'南京市鼓楼',
						place:'博览中心',
						price:'200',
						data:'2018-09-01',
						timeFrame:'14:00-15:00',
						time:'2',
						total:'200.00',
						state:'已过期',
						cancel:false,
					}
				],
				cancelVisible:false,
				confirmVisible:false,
				saveState:{},
				saveIndex:0
			};
		},
		methods: {
			cancelOrder(item,index) {
				this.cancelVisible=true
				this.saveState = item
				this.saveIndex = index
				console.log(this.saveState,this.saveIndex)
			},
			confirm(){
				this.confirmVisible=true
				this.cancelVisible=false
				this.orderList[this.saveIndex].state='已过期'
				this.orderList[this.saveIndex].cancel=false
			}
		},
	}
</script>
 
<style lang="scss">
	@import "@/assets/css/myOrder.scss";

</style>

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
		<ul class="list">
			<li v-for="item,index in list">
				<div>
					<img :src="item.imgUrl">
					<span>￥{{item.price}}/小时</span>
				</div>
				<p>{{item.classroom}}</p>
				<p>
					<span>{{item.place}}</span>
					<span>{{item.square}}m</span>
					<span>{{item.people}}人</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						imgUrl:require('../assets/images/pic1.png'),
						price:'200',
						classroom:'xxxxxxxxxxxxx教室',
						place:'博览中心',
						people:'200-5000',
						square:'1500'
					},
					{
						imgUrl:require('../assets/images/pic1.png'),
						price:'200',
						classroom:'xxxxxxxxxxxxx教室',
						place:'博览中心',
						people:'200-5000',
						square:'1500'
					},
					{
						imgUrl:require('../assets/images/pic1.png'),
						price:'200',
						classroom:'xxxxxxxxxxxxx教室',
						place:'博览中心',
						people:'200-5000',
						square:'1500'
					},
					{
						imgUrl:require('../assets/images/pic1.png'),
						price:'200',
						classroom:'xxxxxxxxxxxxx教室',
						place:'博览中心',
						people:'200-5000',
						square:'1500'
					},
					{
						imgUrl:require('../assets/images/pic1.png'),
						price:'200',
						classroom:'xxxxxxxxxxxxx教室',
						place:'博览中心',
						people:'200-5000',
						square:'1500'
					},
					{
						imgUrl:require('../assets/images/pic1.png'),
						price:'200',
						classroom:'xxxxxxxxxxxxx教室',
						place:'博览中心',
						people:'200-5000',
						square:'1500'
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/css/favorite.scss";
</style>

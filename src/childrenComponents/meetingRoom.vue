<template>
  <div class="meetingRoom">
    <div class="titleBox">
      <h2>美式复古新国际博览中心</h2>
      <a href="###" class="collectionBox">
        <img src="@/assets/images/collection.png" alt="">
        <span>收藏</span>
      </a>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">点教</el-breadcrumb-item>
      <el-breadcrumb-item>南京</el-breadcrumb-item>
      <el-breadcrumb-item>南京教点</el-breadcrumb-item>
    </el-breadcrumb>
    <p class="label">#活动教室  #全天优惠  #实拍</p>
		<div class="left">
			<div class="photoBox">
				<img :src="titleImg" class="bigphoto">
				<div class="smallphotobox">
					<div class="up">
						<img src="../assets/images/roomDetail/downicon.png" alt="" @click="topphoto">
					</div>
					<ul class="smallphoto" :style="{top:(-imgHeight*movenum) + 'px'}">
						<li class="smallphoto-item" v-for="(item,index) in photoList" @click="smallTobig(index)" :key="index">
							<img :src="item.src" >
						</li>
					</ul>
					<div class="down">
						<img src="../assets/images/roomDetail/downicon.png" alt="" @click="downphoto">
					</div>
				</div>
			</div>
			<ul class="total">
				<li>
					<p><img src="../assets/images/roomDetail/roomicon.png" alt=""><span>活动教室</span></p>
					<p>教室面积：55平米</p>
				</li>
				<li>
					<p><img src="../assets/images/roomDetail/personicon.png" alt=""><span>容纳人数</span></p>
					<p>可容纳10～40人</p>
				</li>
				<li>
					<p><img src="../assets/images/roomDetail/timeicon.png" alt=""><span>开放时段</span></p>
					<p>全天开放</p>
				</li>
			</ul>
			<ul class="detailMsg">
				<li>
					<div class="title">
						<img src="../assets/images/roomDetail/houseicon.png" alt="">
						<span>房源介绍</span>
					</div>
					<div class="msg">
						<p>遇一座城，恋一处家，赏一方景</p>
						<p>这里是我独一无二的家。有缘来住下的朋友，希望它为你带来一段独一无二的旅途体验</p>
					</div>
				</li>
				<li class="f8">
					<div class="title">
						<img src="../assets/images/roomDetail/pagehome.png" alt="">
						<span>内部情况</span>
					</div>
					<div class="msg">
						<p>遇一座城，恋一处家，赏一方景</p>
						<p>这里是我独一无二的家。有缘来住下的朋友，希望它为你带来一段独一无二的旅途体验</p>
					</div>
				</li>
				<li>
					<div class="title">
						<img src="../assets/images/roomDetail/facilityicon.png" alt="">
						<span>配套设施</span>
					</div>
					<div class="msg">
						<p>遇一座城，恋一处家，赏一方景</p>
						<p>这里是我独一无二的家。有缘来住下的朋友，希望它为你带来一段独一无二的旅途体验</p>
					</div>
				</li>
			</ul>
			<div class="occupiedBox">
				<div class="occupiedTitle">
					<h2>预订当天时段占用详情</h2>
					<p class="green"></p>
					<span>可预订</span>
					<i class="hui"></i>
					<span>已占用</span>
				</div>
				<div class="occupiedCon">
					<ul>
						<li>AM</li>
						<li>0:00</li>
						<li>3:00</li>
						<li>6:00</li>
						<li>9:00</li>
						<li>12:00</li>
					</ul>
					<div class="occupiedChart">
						<div class="occupiedChart-item" v-for="item in AMtimeList">
							<div class="item1" v-if="item"></div>
							<div class="item2" v-if="!item"></div>
						</div>
					</div>
					<div class="occupiedChart">
						<div class="occupiedChart-item" v-for="item in PMtimeList">
							<div class="item1" v-if="item"></div>
							<div class="item2" v-if="!item"></div>
						</div>
					</div>
					<ul>
						<li>PM</li>
						<li>12:00</li>
						<li>15:00</li>
						<li>18:00</li>
						<li>21:00</li>
						<li>24:00</li>
					</ul>
				</div>
			</div>
			<div class="mapBox"> 
				
			</div>
		</div>
		<div class="right">
			<div class="priceBox">
				<h2>¥<span>200</span>/小时</h2>
				<p>类型：商务楼</p>
				<p>功能：钢琴教学</p>
				<p>卫生间：公用</p>
				<p>楼层：G3</p>
				
				<div v-if="clientWidth > 750">
					<p><el-date-picker
						v-model="value1"
						type="date"
						placeholder="选择日期">
					</el-date-picker></p>
					
					<p><el-time-picker
						is-range
						v-model="value4"
						range-separator="至"
						start-placeholder="开始时间"
						end-placeholder="结束时间"
						placeholder="选择时间范围">
					</el-time-picker></p>
				</div>
				
				<div v-if="clientWidth <= 750">
					<p>开始日期：<span @click="show_">请选择时间</span></p>
					<p>结束日期：<span @click="show_">请选择时间</span></p>
					<van-popup v-model="show2" position="bottom" :overlay="false">
						<van-datetime-picker v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate" />
					</van-popup>
				</div>
				<p class="prompt">
					公益助残  周三  13:00-15:00
				</p>
				<p class="prompt">
					累计用时间超过20小时8折  买四送一
				</p>
				<el-button>立即预定</el-button>
			</div>
			<div class="another">
				<h2>相似时段的空闲教室</h2>
				<div class="roomClass" v-for="item in roomList" :key="item.name">
					<div class="roomPhoto">
						<span>¥{{item.price}}/小时</span>
					</div>
					<h3>{{item.name}}</h3>
					<div class="msg">
						<span>{{item.address}}</span>
						<span>{{item.pingmi}}</span>
						<span>{{item.personnum}}</span>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	import defaultImg from '../assets/images/roomDetail/bg1.png';
	import defaultImg2 from '../assets/images/roomDetail/bg2.png';
  export default {
    name: 'meetingRoom',
    data() {
      return {
				roomList:[
					{
						price:'50',
						name:'相似时段的空闲教室1',
						address:'xxx教学地点-201',
						pingmi:'15m',
						personnum:'2-5人'
					},{
						price:'50',
						name:'相似时段的空闲教室2',
						address:'xxx教学地点-201',
						pingmi:'15m',
						personnum:'2-5人'
					},
				],
				titleImg:'',
				top:0,
				positionindex:0,
				positionindex2:0,
				clientWidth: document.body.clientWidth,
				show2: false,
				movenum:0,
				imgHeight: 0,
				movenum_:0,
				photoList:[
					{
						src:defaultImg
					},{
						src:defaultImg2
					},{
						src:defaultImg
					},{
						src:defaultImg2
					},{
						src:defaultImg
					},{
						src:defaultImg2
					},{
						src:defaultImg
					}
				],
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
				clientWidth: document.body.clientWidth,
				minDate: new Date(),
				maxDate: new Date(2019, 10, 1),
				currentDate: new Date(),
				show: false,
				timeSelect: true,
				AMtimeList:[false,true,true,true,true,true,true,false,false,true,true,true],
				PMtimeList:[true,false,false,true,false,true,true,true,false,true,false,true]
			}
    },
		methods: {
			topphoto(){
				this.imgHeight = document.getElementsByClassName('smallphoto-item')[0].offsetHeight
				console.log(this.imgHeight)
				if(this.movenum>=0&&this.movenum<this.photoList.length-5){
					this.movenum = this.movenum+1
				}
			},
			downphoto(){
				if(this.movenum<this.photoList.length&&this.movenum>0){
					this.movenum = this.movenum-1
				}
			},
			smallTobig(index){
				let src_ = this.photoList[index].src;
				this.titleImg = src_;
			},
			show_(){
        this.show2=true
			}
		}
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/meetingRoom.scss";
</style>

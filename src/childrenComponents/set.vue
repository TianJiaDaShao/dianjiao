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
		<div class="setPage">
			<!-- <img src="../assets/images/free.png" alt=""> -->
			<div class="namebox">
				<span>昵称：</span>
				<span>可爱的小土豆</span>
				<span @click="editname" v-if="editnameshow">修改</span>
				<input type="text" v-if="!editnameshow" placeholder="请输入新昵称">
				<span class="namefail">昵称不合规范或已被占用</span>
				<p>ID:7777777</p>
			</div>
			<div class="emailphone">
				<div class="emailbox">
					<img src="../assets/images/email.png" alt="">
					<p v-if="emailshow"><span>邮箱</span><span>未绑定</span></p>
					<p class="high" v-if="!emailshow"><span>邮箱</span><span>已绑定</span></p>
					<el-button class="bind" type="text" v-if="emailshow">去绑定</el-button>
				</div>
				<div class="phonebox">
					<img src="../assets/images/phone.png" alt="">
					<p v-if="telshow"><span>手机</span><span>未绑定</span></p>
					<p v-if="!telshow" class="high"><span>手机</span><span>已绑定</span></p>
					<el-button class="bind" type="text" @click="teldialogVisible = true" v-if="telshow">去绑定</el-button>
				</div>
			</div>
			<p class="editpw" @click="pwdialogVisible = true">修改密码</p>
			<div class="yue">
				<h3>我的余额</h3>
				<span class="icon">¥</span><span class="num">100.00</span><span class="chong">充值</span>
			</div>
			<el-dialog class="bindtel" :visible.sync="teldialogVisible" :before-close="handleClose">
				<h2>绑定手机</h2>
				<div class="inputbox" v-if="inputboxshow">
					<i class="slide"></i>
					<input type="text" placeholder="请输入手机号" class="tel">
					<div class="pw">
						<span class="pwfail">验证码不正确</span>
						<input type="text" placeholder="请输入验证码">
						<el-button class="sendpw" type="text" v-if="!sendpwbtnshow" @click="sendpw">发送验证码</el-button>
						<span class="againpw" v-if="sendpwbtnshow">重发验证码({{timing_}})</span>
					</div>
					<el-button :class="telsubmitshow==true?'submit high':'submit'" type="text" @click="bindsuccess">确认绑定</el-button>
				</div>
				<div class="successBox" v-if="!inputboxshow">
					<img src="../assets/images/successicon.png">
					<span>绑定成功</span>
				</div>
			</el-dialog>
			<el-dialog class="pwedittel" :visible.sync="pwdialogVisible" :before-close="pwhandleClose">
				<h2>修改密码</h2>
				<div class="inputbox" v-if="pwinputboxshow">
					<i class="slide"></i>
					<div class="inputbox-item">
						<input type="text" placeholder="请输入旧密码">
						<span class="no">密码输入不正确</span>
						<span class="yes">密码输入正确</span>
					</div>
					<div class="inputbox-item">
						<input type="text" placeholder="请输入新密码">
						<span class="no">密码输入不正确</span>
						<span class="yes">密码输入正确</span>
					</div>
					<div class="inputbox-item">
						<input type="text" placeholder="请再次输入新密码">
						<span class="no">两次输入不一致</span>
						<span class="yes">两次输入一致</span>
					</div>
					<el-button :class="telsubmitshow==true?'submit high':'submit'" type="text" @click="pwsuccess">修改密码</el-button>
				</div>
				<div class="successBox" v-if="!pwinputboxshow">
					<span>密码已修改完成</span>
					<span>请<span style="color: #25be70;">重新登录</span></span>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				emailshow:false,
				telshow:true,
				dialogVisible: false,
				telsubmitshow:true,
				inputboxshow:true,
				pwinputboxshow:true,
				editnameshow:true,
				teldialogVisible:false,
				pwdialogVisible:false,
				sendpwbtnshow:false,
				timing_:60
			};
		},
		methods: {
		  handleClose(done) {
				this.teldialogVisible = false
			},
			pwhandleClose(done) {
				this.pwdialogVisible = false
			},
			bindsuccess(){
				this.inputboxshow = !this.inputboxshow;
				this.telshow = !this.telshow;
			},
			editname(){
				this.editnameshow = false
			},
			pwsuccess(){
				this.pwinputboxshow = !this.pwinputboxshow
			},
			sendpw(){
				this.sendpwbtnshow = true
				let timing_ = this.timing_;
				var that = this;
				var interval = setInterval(() => {
					timing_ = timing_ - 1;
					if (timing_ < 0) {
						clearInterval(interval);
						that.timing_ = 60;
						that.sendpwbtnshow = false;
					} else {
						that.timing_ = timing_;
						that.sendpwbtnshow = true;
					}
				}, 1000)
			}
		}
	}
</script>

<style lang="scss">
	@import "@/assets/css/set.scss";
</style>

<template>
	<div class="signup-form">
		<div class="group-inputs">
			<div class="input-wrapper">
				<input type="text" v-model='registerForm.mobile' placeholder='手机号' maxlength='11' />
			</div>
			<div class="input-wrapper two-6-4">
				<input type="text" cloumn='6' v-model="registerForm.captcha" placeholder='短信验证码' maxlength='6' />
				<button class='verification-code' cloumn='4' :class="{'disabled': isSendCaptcha}" @click="sendCaptcha()">获取验证码</button>
			</div>
			<div class="input-wrapper">
				<input type="password" v-model="registerForm.password" placeholder='密码' />
			</div>
			<div class="input-wrapper">
				<input type="password" v-model="registerForm.rePassword" placeholder='重复密码' />
			</div>
		</div>
		<button class="group-btn" @click="register()">注册</button>
		<tips :is-toast-tips="isTips" :toast-tips-text="tipsText"></tips>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tips from '../../common/Tips.vue';

let timer = null;

export default {
	data () {
		return {
			registerForm: {
				mobile: '',
				captcha: '',
				password: '',
				rePassword: ''
			},
			isTips: false,
			tipsText: '',
			isSendCaptcha: false
		}
	},
	created () {

	},
	methods: {
		sendTips (msg, cb) {
			if(timer)
				clearTimeout(timer);

			this.tipsText = msg;
			this.isTips = true;

			timer = setTimeout(_ => {
				this.isTips = false;
				cb && cb();
			}, 2000);
		},
		register () {
			if(!(/^(1[3|4|5|7|8]\d{9})|(166\d{8})|(19[8|9]\d{8})$/.test(this.registerForm.mobile))) {
				this.sendTips('请输入有效的手机号码');
			}else if (this.registerForm.captcha.length !== 6) {
				this.sendTips('请输入正确的短信验证码');
			}else if (this.registerForm.password.length < 6) {
				this.sendTips('密码不能少于6位');
			}else if(this.registerForm.password !== this.registerForm.rePassword) {
				this.sendTips('两次输入的密码需要保持一致');
			}else {
				this.$store.dispatch('register', this.registerForm).then(ret => {
					if(ret.status) {
						this.sendTips('注册成功', () => {
							this.$router.push('/');
						});
					}else {
						this.sendTips(`${ret.errMsg}`);
					}
				});
			}
		},
		sendCaptcha () {
			if(!this.isSendCaptcha) {
				if(!(/^(1[3|4|5|7|8]\d{9})|(166\d{8})|(19[8|9]\d{8})$/.test(this.registerForm.mobile))) {
					this.sendTips('请输入有效的手机号码');
				}else {
					this.$store.dispatch('sendCaptcha', this.registerForm).then(ret => {
						if(ret.status) {
							this.isSendCaptcha = true;
							this.sendTips('请查收短信验证码');
						}else {
							this.sendTips(ret.errMsg);
						}
					});
				}
			}
		}
	},
	components: {
		Tips
	},
	
}


</script>

<style src='../../assets/style/scss/passportForm.scss' lang='scss' scoped>
</style>

<style lang='scss' scoped>
.input-wrapper .verification-code {
	&.disabled {
		opacity: .35!important;
		cursor: not-allowed;
	}
}
</style>
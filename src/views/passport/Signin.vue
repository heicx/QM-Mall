<template>
	<div class="signin-form">
		<div class="group-inputs">
			<div class="input-wrapper">
				<input type="text" v-model="loginForm.mobile" placeholder='手机号码' />
			</div>
			<div class="input-wrapper">
				<input type="password" v-model="loginForm.password" placeholder='密码' autocomplete='off' />
			</div>
		</div>
		<button class="group-btn" @click="login()">登录</button>
		<tips :is-toast-tips="isTips" :toast-tips-text="tipsText"></tips>
	</div>
</template>

<script>
import Tips from '../../common/Tips.vue';

export default {
	data () {
		return {
			loginForm: {
				mobile: '',
				password: ''
			},
			isTips: false,
			tipsText: ''
		}
	},
	created() {
	},
	mounted() {
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
		login () {
			if(!(/^(1[3|4|5|7|8]\d{9})|(166\d{8})|(19[8|9]\d{8})$/.test(this.loginForm.mobile))) {
				this.sendTips('请输入有效的手机号码');
			}else {
				this.$store.dispatch('login', this.loginForm).then(ret => {
					if(ret.status) {
						this.$router.push('/');
					}else {
						this.sendTips(ret.errMsg);
					}
				});
			}
		}
	},
	components: {
		Tips
	}
}
</script>

<style src='../../assets/style/scss/passportForm.scss' lang='scss' scoped></style>
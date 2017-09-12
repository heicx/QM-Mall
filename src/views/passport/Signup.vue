<template>
	<div class="signup-form">
		<div class="group-inputs">
			<div class="input-wrapper">
				<input type="text" placeholder='手机号' maxlength='11' />
			</div>
			<div class="input-wrapper two-6-4">
				<input type="text" cloumn='6' placeholder='短信验证码' maxlength='6' />
				<button class='verification-code' cloumn='4'>获取验证码</button>
			</div>
			<div class="input-wrapper">
				<input type="password" placeholder='密码' />
			</div>
			<div class="input-wrapper">
				<input type="password" placeholder='重复密码' />
			</div>
		</div>
		<button class="group-btn">登录</button>
	</div>
</template>

<script>
</script>

<style src='../../assets/style/scss/passportForm.scss' lang='scss'></style>
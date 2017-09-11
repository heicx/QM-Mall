<template>
	<div class="signin-form">
		<div class="group-inputs">
			<div class="input-wrapper">
				<input type="text" placeholder='手机号码或邮箱' />
			</div>
			<div class="input-wrapper">
				<input type="password" placeholder='密码' />
			</div>
		</div>
		<button class="group-btn">登录</button>
	</div>
</template>

<script>

export default {
	created() {
		
	},
	mounted() {
	},
	methods: {
	}
}
</script>

<style lang="scss">
.signin-form {
	width: 300px;
	margin: 0 auto;
}

.group-inputs {
	padding: 1px 0;
	border: 1px solid #d5d5d5;
	border-radius: 3px;
	margin-top: 40px;
	.input-wrapper {
		font-size: 14px;
		overflow: hidden;
		input {
			width: 100%;
			border: 0;
			border-radius: 0;
			box-shadow: none;
			background: #fff;
			box-sizing: border-box;
			padding: 1em .8em;
			color: #555;
		}
		&+.input-wrapper {
			border-top: 1px solid #d5d5d5;
		}
	}
}

.group-btn {
	color: #fff;
	background: #10afca;
	width: 300px;
	height: 40px;
	line-height: 1;
	border: 1px solid #6299b3;
	border-radius: 6px;
	font-size: 16px;
	margin-bottom: 42px;
	opacity: 0.75;
	transition: opacity .15s ease-out;
	&:hover {
		opacity: 1;
	}
}
</style>
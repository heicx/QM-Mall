<template>
	<div class="header-topbar">
		<div class="container clearfix">
			<div class="topbar-logo"></div>
			<div class="topbar-info" v-if="isLogin == false">
				<router-link to='/signin' class='link'>登录</router-link>
				<span class="sep">|</span>
				<router-link to='/signup' class='link'>注册</router-link>
			</div>
			<div class="topbar-info" v-if="isLogin">
				<div class="nav-user">
					<router-link to='/signin' class='user-icon'></router-link>
					<div class="user-wrapper">
						<div class="user-list">
							<ul>
								<li class="order">
									<router-link to='/account/order'>我的订单</router-link>
								</li>
								<li class="support">
									<router-link to='/service/sale'>售后服务</router-link>
								</li>
								<li class="information">
									<router-link to='/account/information'>账户资料</router-link>
								</li>
								<li class="address">
									<router-link to='/account/address'>收货地址</router-link>
								</li>
								<li class="logout">
									<a @click="logout()">退出</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    methods: {
		logout () {
			this.$store.dispatch('logout');
		}
	},
    computed: {
        isLogin () {
			return this.$store.getters.isLogin;
		}
    },
    created () {
		this.$store.dispatch('isLogin');
    }
}
</script>
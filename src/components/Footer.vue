<template>
	<div class="footer">
		<div class="container clearfix">
			<ul class="footer-nav">
				<li class="nav-group">
					<h3>订单服务</h3>
					<ul class="items">
						<li>
							<router-link to='/order/guide'>购买指南</router-link>
						</li>
						<li>
							<router-link to='/order/payment'>支付方式</router-link>
						</li>
						<li>
							<router-link to='/order/delivery'>送货政策</router-link>
						</li>
					</ul>
				</li>
				<li class="nav-group">
					<h3>服务支持</h3>
					<ul class="items">
						<li>
							<router-link to='/service/sale'>售后服务</router-link>
						</li>
						<li>
							<router-link to='/service/policy'>售后政策</router-link>
						</li>
					</ul>
				</li>
				<li class="nav-group">
					<h3>媒体中心</h3>
					<ul class="items">
						<li>
							<router-link to='/service/policy'>新闻动态</router-link>
						</li>
						<li>
							<router-link to='/service/policy'>图片资源</router-link>
						</li>
					</ul>
				</li>
				<li class="nav-group">
					<h3>关于公司</h3>
					<ul class="items">
						<li>
							<router-link to='/about'>公司简介</router-link>
						</li>
						<li>
							<router-link to='/contact'>联系我们</router-link>
						</li>
					</ul>
				</li>
				<li class="nav-group">
					<h3>关注我们</h3>
					<ul class="items">
						<li>
							<a href="http://weibo.com/u/5640265005" target='_blank'>新浪微博</a>
						</li>
						<li>官方微信</li>
					</ul>
				</li>
			</ul>
			<ul class="footer-service">
				<li class="tel">
					<a href="tel:4008761033">400-876-1033</a>
				</li>
				<li class="time">
					周一至周日 9:00-18:00（仅收市话费）
				</li>
			</ul>
			<div class="copyright">
				<h3 class="company">Copyright © 2017, QM Digital Co., Ltd. All Rights Reserved.  东莞市轻麦电子科技有限公司</h3>
				<ul class="privacy">
					<li>
						<router-link to='/copyright/agreement'>法律声明</router-link>
					</li>
					<li>
						<router-link to='/copyright/privacy'>隐私条款</router-link>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>
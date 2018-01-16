<template>
	<div class="header-nav">
    <div class="container clearfix">
      <h2 class="nav-series">P R O 1</h2>
      <ul class="nav-list">
        <li v-for='(item, index) in list' :key='index' :class='{"active": item.link == $route.path}'>
          <router-link :to='item.link'>{{item.name}}</router-link>
        </li>
      </ul>
      <button class="nav-btn" @click="checkout()">现在购买</button>
    </div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '概览',
          link: '/overview'
        },
        // {
        //   name: '设计',
        //   link: '/design'
        // },
        // {
        //   name: '科技',
        //   link: '/tech'
        // },
        // {
        //   name: '参数',
        //   link: '/specs'
        // },
        // {
        //   name: '视频',
        //   link: '/pr/video'
        // },
        // {
        //   name: '用户评价',
        //   link: '/pr/comment'
        // },
        // {
        //   name: '壁纸下载',
        //   link: '/pr/wallpaper'
        // }
      ]
    }
  },
  methods: {
    checkout () {
      let goods_info = {};
      let orderId = 'eo' + (new Date()).getTime();
      
      goods_info = {
        id: orderId,
        goods_id: '10001001:1',
        price: 2499
      }

      sessionStorage.setItem('gs', encodeURIComponent(goods_info));
      this.$router.push(`/checkout/${orderId}`);
    }
  }
}
</script>

<style lang="sass"></style>
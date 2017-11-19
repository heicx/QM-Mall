<template>
	<div class="header-nav">
    <div class="container clearfix">
      <h2 class="nav-series">P R O 1</h2>
      <ul class="nav-list">
        <li v-for='item in list' :class='{"active": item.link == $route.path}'>
          <router-link :to='item.link'>{{item.name}}</router-link>
        </li>
      </ul>
      <button class="nav-btn">现在购买</button>
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
        {
          name: '设计',
          link: '/desgin'
        },
        {
          name: '科技',
          link: '/tech'
        },
        {
          name: '参数',
          link: '/specs'
        },
        {
          name: '视频',
          link: '/pr/video'
        },
        {
          name: '用户评价',
          link: '/comment'
        },
        {
          name: '壁纸下载',
          link: '/pr/wallpaper'
        }
      ]
    }
  },
  mounted() {
    // console.log(this.$route)
  }
}
</script>

<style lang="sass"></style>
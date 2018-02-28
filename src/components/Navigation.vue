<template>
	<div class="header-nav">
    <div class="container clearfix">
      <h2 class="nav-series">SWAN</h2>
      <ul class="nav-list">
        <li v-for='(item, index) in list' :key='index' :class='{"active": item.link == $route.path}'>
          <router-link :to='item.link'>{{item.name}}</router-link>
        </li>
      </ul>
      <button v-if="!hideBtn" class="nav-btn" @click="openDialog()">现在购买</button>
      <item-dialog :isOpen="isOpenDialog" @closeDialogEvent="closeDialog" @goodsItemEvent="checkoutOrder"></item-dialog>
    </div>
	</div>
</template>

<script>
import ItemDialog from '../common/ItemDialog.vue';

export default {
  props: ['hideBtn'],
  data() {
    return {
      isOpenDialog: false,
      list: [
        // {
        //   name: '概览',
        //   link: '/overview'
        // },
        {
          name: '设计',
          link: '/design'
        },
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
    closeDialog (status) {
      this.isOpenDialog = status;
    },
    openDialog () {
      this.isOpenDialog = true;
    },
    checkoutOrder (arrGoods) {
      let oOrder = {};
      let orderId = (new Date()).getTime();

      oOrder = {
        id: orderId,
        g: arrGoods
      }

      sessionStorage.setItem('gs', encodeURIComponent(JSON.stringify(oOrder)));
      this.$router.push(`/checkout/${orderId}`);
    }
  },
  components: {
    ItemDialog
  }
}
</script>

<style lang="sass"></style>
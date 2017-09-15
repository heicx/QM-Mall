<template>
	<div class='guide-wrap'>
    <side-bar :sideBarName='sideBarName'>
      <component :is='currSideBarTempl' :currPath='currPath' slot='sidebar-list'></component>
    </side-bar>
    <side-content :sideBarItemName='sideBarItemName'>
      <component :is='currSideContentTempl' slot='sidebar-content'></component>
    </side-content>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue';
import SideContent from '../../components/SideContent.vue';

import AccountSideBarTempl from './side-bar/Account.vue';

import AddressListTempl from './side-content/AddressList.vue';
import OrderListTempl from './side-content/OrderList.vue';
import OrderDetailTempl from './side-content/OrderDetail.vue';
import InformationTempl from './side-content/Information.vue';

export default {
    data() {
      return {
        currPath: '',
        sideBarName: '',
        sideBarItemName: '',
        sideContentName: '',
        currSideBarTempl: '',
        currSideContentTempl: ''
      }
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      next(vm=> {
        vm.$data.currPath = to.path;

        if(to.name === 'account') {
          vm.$data.currSideBarTempl = AccountSideBarTempl;
          vm.$data.sideBarName = '账户中心';
        }

        console.log(to)
        if(to.path === '/account/order') {
          vm.$data.currSideContentTempl = OrderListTempl;
          vm.$data.sideBarItemName = '我的订单';
        }else if(to.path.match(/account\/order\/\d+/g)) {
          vm.$data.currSideContentTempl = OrderDetailTempl;
          vm.$data.sideBarItemName = '订单详情';
          vm.$data.currPath = '/account/order';
        }else if(to.path === '/account/address') {
          vm.$data.currSideContentTempl = AddressListTempl;
          vm.$data.sideBarItemName = '收货地址';
        }else if(to.path === '/account/information') {
          vm.$data.currSideContentTempl = InformationTempl;
          vm.$data.sideBarItemName = '账户资料';
        }
      });
    },
    beforeRouteUpdate(to, from, next) {
      this.currPath = to.path;

      if(to.name === 'account') {
        this.currSideBarTempl = AccountSideBarTempl;
        this.sideBarName = '账户中心';
      }

      if(to.path === '/account/order') {
        this.currSideContentTempl = OrderListTempl;
        this.sideBarItemName = '我的订单';
      }else if(to.path.match(/account\/order\/\d+/g)) {
        this.currSideContentTempl = OrderDetailTempl;
        this.sideBarItemName = '订单详情';
        this.currPath = '/account/order';
      }else if(to.path === '/account/address') {
        this.currSideContentTempl = AddressListTempl;
        this.sideBarItemName = '收货地址';
      }else if(to.path === '/account/information') {
        this.currSideContentTempl = InformationTempl;
        this.sideBarItemName = '账户资料';
      }

      next();
    },
    created() {
    },
    mounted() {
      
    },
    destroyed() {
    },
    components: {
      SideBar,
      SideContent
    }
}
</script>

<style lang="scss">
@import '~styles/scss/sideBar.scss';
@import '~styles/scss/sideContent.scss';

.guide-wrap {
  width: 1220px;
  margin: 0 auto;
  padding-top: 40px;
}
</style>
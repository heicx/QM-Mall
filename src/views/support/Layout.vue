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

import OrderSideBarTempl from './side-bar/Order.vue';
import ServiceSideBarTempl from './side-bar/Service.vue';
import CopyRightSideBarTempl from './side-bar/CopyRight.vue';

import OrderGuideTempl from './side-content/OrderGuide.vue';
import OrderDeliveryTempl from './side-content/OrderDelivery.vue';
import OrderPaymentTempl from './side-content/OrderPayment.vue';
import ServicePolicyTempl from './side-content/ServicePolicy.vue';
import ServiceSaleTempl from './side-content/ServiceSale.vue';
import CopyRightAgreementTempl from './side-content/CopyRightAgreement.vue';
import CopyRightPrivacyTempl from './side-content/CopyRightPrivacy.vue';

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

        if(to.name === 'support-order') {
          vm.$data.currSideBarTempl = OrderSideBarTempl;
          vm.$data.sideBarName = '订单服务';
        }else if(to.name === 'support-service') {
          vm.$data.currSideBarTempl = ServiceSideBarTempl;
          vm.$data.sideBarName = '服务支持';
        }else if(to.name === 'support-copyright') {
          vm.$data.currSideBarTempl = CopyRightSideBarTempl;
          vm.$data.sideBarName = '条款声明';
        }

        if(to.path === '/order/guide') {
          vm.$data.currSideContentTempl = OrderGuideTempl;
          vm.$data.sideBarItemName = '购买指南';
        }else if(to.path === '/order/payment') {
          vm.$data.currSideContentTempl = OrderPaymentTempl;
          vm.$data.sideBarItemName = '支付方式';
        }else if(to.path === '/order/delivery') {
          vm.$data.currSideContentTempl = OrderDeliveryTempl;
          vm.$data.sideBarItemName = '送货政策';
        }else if(to.path === '/service/sale') {
          vm.$data.currSideContentTempl = ServiceSaleTempl;
          vm.$data.sideBarItemName = '售后服务';
        }else if(to.path === '/service/policy') {
          vm.$data.currSideContentTempl = ServicePolicyTempl;
          vm.$data.sideBarItemName = '售后政策';
        }else if(to.path === '/copyright/agreement') {
          vm.$data.currSideContentTempl = CopyRightPrivacyTempl;
          vm.$data.sideBarItemName = '法律声明';
        }else if(to.path === '/copyright/privacy') {
          vm.$data.currSideContentTempl = CopyRightAgreementTempl;
          vm.$data.sideBarItemName = '隐私条款';
        }
      });
    },
    beforeRouteUpdate(to, from, next) {
      this.currPath = to.path;

      if(to.name === 'support-order') {
        this.currSideBarComponent = OrderSideBarTempl;
        this.sideBarName = '订单服务';
      }else if(to.name === 'support-service') {
        this.currSideBarComponent = ServiceSideBarTempl;
        this.sideBarName = '服务支持';
      }else if(to.name === 'support-copyright') {
        this.currSideBarTempl = CopyRightSideBarTempl;
        this.sideBarName = '条款声明';
      }

      if(to.path === '/order/guide') {
        this.currSideContentTempl = OrderGuideTempl;
        this.sideBarItemName = '购买指南';
      }else if(to.path === '/order/payment') {
        this.currSideContentTempl = OrderPaymentTempl;
        this.sideBarItemName = '支付方式';
      }else if(to.path === '/order/delivery') {
        this.currSideContentTempl = OrderDeliveryTempl;
        this.sideBarItemName = '送货政策';
      }else if(to.path === '/service/sale') {
        this.currSideContentTempl = ServiceSaleTempl;
        this.sideBarItemName = '售后服务';
      }else if(to.path === '/service/policy') {
        this.currSideContentTempl = ServicePolicyTempl;
        this.sideBarItemName = '售后政策';
      }else if(to.path === '/copyright/agreement') {
        this.currSideContentTempl = CopyRightAgreementTempl;
        this.sideBarItemName = '法律声明';
      }else if(to.path === '/copyright/privacy') {
        this.currSideContentTempl = CopyRightAgreementTempl;
        this.sideBarItemName = '隐私条款';
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
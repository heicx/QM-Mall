<template>
	<div class='guide-wrap'>
    <side-bar :sidebarName='sidebarName'>
      <component :is='currSideBarComponent' :currPath='currPath' slot='sidebar-list'></component>
    </side-bar>
    <side-content itemName='购买指南'>
      <div slot='sidebar-content' class='sidebar-content'>
        <p>尊敬的用户您好，感谢您选择我们的产品，如您在购买的过程中遇到任何疑问，请及时联系。</p>
        <h3>购买渠道</h3>
        <p>尊敬的用户您好，感谢您选择我们的产品，如您在购买的过程中遇到任何疑问，请及时联系。</p>
        <h3>使用说明</h3>
        <dl>
          <dt>问：什么是电子优惠券？</dt>
          <dd>
            答：电子发票是指在购销商品、提供或者接受服务以及从事其他经营活动中，开具、收取的以电子方式存储的发票凭证，开具的电子发票均为真实有效的合法发票，与传统纸质发票具有同等法律效力，可作为用户报销、保修的有效凭证。
          </dd>
        </dl>
        <dl>
          <dt>问：什么是电子优惠券？</dt>
          <dd>
            答：电子发票是指在购销商品、提供或者接受服务以及从事其他经营活动中，开具、收取的以电子方式存储的发票凭证，开具的电子发票均为真实有效的合法发票，与传统纸质发票具有同等法律效力，可作为用户报销、保修的有效凭证。
          </dd>
        </dl>
        <dl>
          <dt>问：什么是电子优惠券？</dt>
          <dd>
            答：电子发票是指在购销商品、提供或者接受服务以及从事其他经营活动中，开具、收取的以电子方式存储的发票凭证，开具的电子发票均为真实有效的合法发票，与传统纸质发票具有同等法律效力，可作为用户报销、保修的有效凭证。
          </dd>
        </dl>
        <h3>购买渠道</h3>
        <p>尊敬的用户您好，感谢您选择我们的产品，如您在购买的过程中遇到任何疑问，请及时联系。</p>
      </div>
    </side-content>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue';
import SideContent from '../../components/SideContent.vue';
import OrderComponent from './side-bar/Order.vue';

export default {
    data() {
      return {
        currPath: '',
        sidebarName: '',
        currSideBarComponent: ''
      }
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      next(vm=> {
        if(to.path === '/support/guide') {
          vm.$data.currSideBarComponent = OrderComponent;
          vm.$data.sidebarName = '购买指南';
          vm.$data.currPath = to.path;
        }
      });
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
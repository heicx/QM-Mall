<template>
  <div class="payment-wrap">
    <div class="payment-card">
      <div class="header">
        <span class="title">支付订单</span>
      </div>
      <div class="payment-info">
        <h3>提交订单成功</h3>
        <p class="payment-note">
          请在
          <span> 24 小时内</span>
          完成支付，超时订单将自动取消。
        </p>
        <p class="payment-note">
          我们将在您完成支付后的 72 小时内发货
        </p>
      </div>
      <div class="payment-mode-wrap">
        <div class="payment-mode">
          <ul class="payment-list">
            <li class="wechat" @click="wechatPay()">
              <img v-if="wechatQRShow" :src="wechatQRImg">
            </li>
            <!-- <li class="ali">
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let timer = null;

export default {
  props: ['id'],
  data () {
    return {
      wechatQRReady: false,
      wechatQRShow: false,
      wechatQRImg: 'http://api.qmy.cx/mall/payment/qr'
    }
  },
  beforeRouteLeave: (to, from, next) => {
    if(/checkout/.test(to.path)) {
      next(false);
    }else {
      window.location.replace('#' + to.path);
      next();
    }
  },
  methods: {
    wechatPay () {
      if(this.wechatQRReady) {
        this.wechatQRShow = !this.wechatQRShow;

        timer = setInterval( _ => {
          this.$store.dispatch('checkWechatOrder').then(res => {
            if(res.status) {
              clearInterval(timer);
              this.$router.push(`/account/order/${this.id}`);
            }
          });
        }, 2000);
      }
    }
  },
  created () {
    this.$store.dispatch('checkOrder', {orderId: this.id}).then(res => {
      if(res.status) {
        if(res.data['order_status'] === 0 && res.data['pay_status'] === 0) {
          this.$store.dispatch('payOrder', {
            orderId: this.id,
            orderTitle: '轻麦 SWAN 电动平衡车',
            totalPrice: res.data.price
          }).then(res => {
            if(res.status) {
              this.wechatQRReady = true;
            }
          });
        }
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.payment-wrap {
  width: 1220px;
  height: 100%;
  margin: 0 auto;
  background: #ededed;
  margin-top: 40px;
  border-radius: 8px 8px 0 0;
  padding-bottom: 40px;
}
.payment-card {
  background: #fff;
  border-radius: 8px;
  .header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px 8px 0 0;
    box-shadow: rgba(0,0,0,.06) 0 1px 7px;
    background: #f3f3f3;
    background: linear-gradient(#fbfbfb,#ececec);
    .title {
      line-height: 60px;
      font-size: 18px;
      font-weight: 400;
      color: #626262;
      padding-left: 30px;
    }
  }
  .payment-info {
    padding: 60px 0 35px;
    h3 {
      padding-bottom: 14px;
      line-height: 36px;
      text-align: center;
      font-size: 36px;
      color: #212121;
    }
    .payment-note {
      text-align: center;
      line-height: 24px;
      font-size: 14px;
      color: #999;
      span {
        font-weight: bolder;
        color: #d44d44;
      }
    }
  }
  .payment-mode-wrap {
    padding-bottom: 100px;
  }
  .payment-mode {
    width: 400px;
    margin: 0 auto;
    .payment-list {
      padding-top: 35px;
      border-top: 1px solid #EFEFEF;
      opacity: .85;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      position: relative;
      width: 144px;
      height: 34px;
      background: #FAFAFA;
      border: 1px solid #E5E5E5;
      border-radius: 6px;
      padding: 10px 14px;
      cursor: pointer;
      img {
        position: absolute;
        width: 200px;
        height: 200px;
        top: 56px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        box-shadow: 0px 1px 10px -1px #737070;
      }
      &.wechat {
        float: left;
        background: url(~images/weixinpay@2x.png) no-repeat 50%;
        background-size: contain;
      }
      &.ali {
        float: right;
        background: url(~images/alipay@2x.png) no-repeat 50%;
        background-size: contain;
      }
    }
  }
}
</style>
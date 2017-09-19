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
            <li class="wechat">
            </li>
            <li class="ali">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteLeave: (to, from, next) => {
    if(/checkout/.test(to.path)) {
      next(false);
    }else {
      window.location.replace('#' + to.path);
      next();
    }
  }
}
</script>

<style lang="scss" scoped>
.payment-wrap {
  width: 1220px;
  height: 100%;
  overflow: hidden;
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
    padding-bottom: 60px;
  }
  .payment-mode {
    width: 400px;
    margin: 0 auto;
    .payment-list {
      overflow: hidden;
      padding-top: 35px;
      border-top: 1px solid #EFEFEF;
      opacity: .85;
    }
    li {
      width: 144px;
      height: 34px;
      background: #FAFAFA;
      border: 1px solid #E5E5E5;
      border-radius: 6px;
      padding: 10px 14px;
      cursor: pointer;
      img {
        width: 100%;
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
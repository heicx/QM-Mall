<template>
  <div class="payment-wrap">
    <div class="payment-card">
      <div class="header">
        <span class="title">支付订单</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteLeave: (to, from, next) => {
    // console.log(this.$route)
    // ...
    // next(false);
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
}
</style>
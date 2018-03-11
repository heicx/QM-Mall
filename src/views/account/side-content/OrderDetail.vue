<template>
  <div class='side-content'>
    <div class="order-detail">
      <div class="order-status">
        <h2 v-if="order.pay_status == 0 && order.order_status != -1">订单状态：待付款</h2>
        <h2 v-if="order.pay_status == 1 && order.order_status == 0">订单状态：待发货</h2>
        <h2 v-if="order.pay_status == 1 && order.order_status == 1">订单状态：已发货</h2>
        <h2 v-if="order.pay_status == 1 && order.order_status == 2">订单状态：已完成</h2>
        <h2 v-if="order.pay_status == 2 && order.order_status == -1">订单状态：已退款</h2>
        <h2 v-if="order.order_status == -1">订单状态：已取消</h2>
        <h4>订单号：{{order.id}}</h4>
        <!-- <h4>您的付款时间还有 <span class='time'>21 小时 41 分钟 9 秒</span>，超时后订单将自动取消。</h4> -->
      </div>
      <div class="order-card order-goods">
        <div class="order-header clearfix">
          <h2 class='title'>商品名称</h2>
          <ul class='column-name'>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
          </ul>
        </div>
        <ul class="goods-list">
          <li v-for="(item, index) in order.goods_info" :key="index">
            <div class="img" :class="item.color"></div>
            <div class="goods-name">
              {{item.title}}
            </div>
            <span class="price">{{item.price}}</span>
            <span class="num">{{item.num}}</span>
            <span class="sub-total">{{item.num * item.price}}</span>
          </li>
        </ul>
        <div class="summary">
          <h2 class="total">
            商品总计：
            <span class="price">{{order.price}}</span>
          </h2>
          <!-- <h2 class="postage">
            运费：+
            <span class="price">15</span>
          </h2> -->
          <div class="sub-total">
            应付总额：
            <span class='price'>{{order.price}}</span>
          </div>
        </div>
      </div>
      <div class="order-card order-address">
        <h2 class="order-header title">收货信息</h2>
        <ul class="content">
          <li>姓名：{{order.user_name}}</li>
          <li>联系电话：{{order.mobile}}</li>
          <li>详细地址：{{order.province_name}}{{order.city_name}}{{order.district_name}} {{order.address_name}}</li>
        </ul>
      </div>
      <div class="order-card order-invoice">
        <h2 class="order-header title">发票信息</h2>
        <ul class="content">
          <li>发票类型：电子发票</li>
          <li v-if="order.invoice_type === 1">发票抬头：个人</li>
          <li v-else>发票抬头：{{order.invoice_title}}</li>
          <li>发票内容：购买商品明细</li>
          <li v-if="order.invoice_type === 2">纳税人识别码：{{order.invoice_code}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['orderId'],
  data () {
    return {
      order: {}
    }
  },
  created () {
    this.$store.dispatch('checkOrder', {orderId: this.orderId}).then(res => {
      if(res.status) {
        this.order = res.data;
      }else {
        this.$router.push('/account/order');
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.order-status {
  padding: 20px 30px 40px;
  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    padding-bottom: 10px;
    border-bottom: 1px solid #EFEFEF;
  }
  h4 {
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    .time {
      color: #d44d44;
    }
  }
}
.order-card {
  .order-header {
    background: #EEE;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    height: 38px;
    line-height: 38px;
    padding-left: 30px;
    font-size: 12px;
    color: #666;
  }
  .content {
    padding: 30px 0;
    li {
      line-height: 2.5;
    }
  }
}
.order-goods {
  h2.title {
    float: left;
  }
  .column-name {
    float: right;
    li {
      display: inline-block;
    }
  }
  .goods-list {
    li {
      display: table;
      padding: 12px 20px;
      line-height: 1;
      border-bottom: 1px dashed #e6e6e6;
      &:last-child {
        border-bottom: none;
      }
    }
    .img,
    .goods-name,
    .price,
    .num,
    .sub-total {
      display: table-cell;
      vertical-align: middle;
    }
    .img {
      border: 1px solid #EBEBEB;
      width: 78px;
      height: 78px;
      border-radius: 4px;
      &.white {
          background: url(~images/goods-white.png) no-repeat center;
          background-size: contain;
      }
      &.blue {
          background: url(~images/goods-blue.png) no-repeat center;
          background-size: contain;
      }
      &.grey {
          background: url(~images/goods-grey.png) no-repeat center;
          background-size: contain;
      }
    }
    .goods-name {
      padding-left: 30px;
      padding-right: 93px;
      width: 500px;
    }
    .price {
      width: 60px;
      text-align: right;
    }
    .num {
      padding-left: 62px;
      width: 20px;
      text-align: center;
    }
    .sub-total {
      padding-left: 32px;
      width: 60px;
      text-align: right;
    }
  }
  .summary {
    padding: 20px 30px;
    border-top: 1px solid #EFEFEF;
    .total,
    .postage,
    .sub-total {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      text-align: right;
      .price {
        position: relative;
        font-weight: bolder;
        margin-left: 14px;
        display: inline-block;
        &:before {
          position: absolute;
          content: '￥';
          display: inline-block;
          font-size: 12px;
          left: -14px;
          bottom: -1px;
        }
      }
    }
    .sub-total {
      font-size: 18px;
      margin-left: 16px;
      .price {
        font-size: 20px;
        color: #d44d44;
        &:before {
          position: absolute;
          content: '￥';
          display: inline-block;
          font-size: 14px;
          left: -16px;
          bottom: -1px;
        }
      }
    }
  }
}
</style>
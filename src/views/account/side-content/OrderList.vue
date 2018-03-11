<template>
  <div class='side-content'>
    <div class="order-groups" v-for="group in orderGroup" :key="group.id">
      <div class="order-header">
        <span class='date'>{{group.create_time}}</span>
        <span class='order-id'>
          订单号：<a :href="'#/account/order/' + group.id">{{group.id}}</a>
        </span>
        <span class='order-detail'>
          <router-link :to="'order/' + group.id">查看详情</router-link>
        </span>
        <span class='sub-total'>应付总额</span>
        <span class='operation'>商品操作</span>
        <span class='num'>数量</span>
        <span class='price'>单价</span>
      </div>
      <div class="order-goods" v-for="(item, index) in group.goods_info" :key="index">
        <div class="goods-img">
          <div class="img" :class="item.color"></div>
        </div>
        <div class="goods-title">{{item.title}}</div>
        <div class='goods-status' v-if="group.order_status == -1">已取消</div>
        <div class='goods-status' v-if="group.pay_status === 0 && group.order_status != -1">待支付</div>
        <div class='goods-status' v-if="group.pay_status === 1  && group.order_status == 0">已支付</div>
        <div class='goods-status' v-if="group.pay_status === 1 && group.order_status == 1">已发货</div>
        <div class='goods-status' v-if="group.pay_status === 1 && group.order_status == 2">已完成</div>
        <div class='goods-status' v-if="group.pay_status === 2 && group.order_status != -1">已退款</div>
        <div class='goods-total'>¥ {{item.num * item.price}}</div>
        <div class="goods-operation">
          <button class='cancel-btn' v-if="group.order_status === 0 && group.pay_status === 0" @click="canncelOrder(group.id)">取消订单</button>
          <span class='none' v-else>--</span>
        </div>
        <div class='goods-num'>{{item.num}}</div>
        <div class='goods-price'>¥ {{item.price}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        orderGroup: []
      }
    },
    methods: {
      canncelOrder (orderId) {
        this.$store.dispatch('cancelOrder', {orderId: orderId}).then(res => {
          if(res.status) {
            debugger;
            this.orderGroup.forEach(group => {
              if(group.id == res.data.orderId) {
                group['order_status'] = -1;
              }
            });
          }
        });
      }
    },
    created () {
      this.$store.dispatch('getOrderList').then(res => {
        if(res.status) {
          this.orderGroup = res.data;
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  .side-content-wrap {
    padding-bottom: 6px;
  }
  .side-content {
    margin-top: 0;
  }
  .order-groups {
    padding-bottom: 10px;
  }

  .order-header {
    height: 38px;
    padding: 0 24px;
    background: #EEE;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    line-height: 38px;
    font-size: 12px;
    color: #666;
    &:first-child {
      border-top: none;
    }
    span {
      float: left;
      text-align: left;
      &.sub-total,
      &.operation,
      &.num,
      &.price,
      &.order-detail {
        float: right;
        text-align: center;
      }
      &.date {
        width: 108px;
        padding-left: 6px;
      }
      &.sub-total {
        width: 102px;
        padding-right: 18px;
        border-left: 1px solid #DBDBDB;
      }
      &.operation {
        width: 95px;
        height: 38px;
        padding-right: 23px;
      }
      &.num {
        width: 70px;
      }
      &.price {
        width: 85px;
        padding-right: 27px;
      }
      &.order-detail {
        width: 82px;
        padding-left: 24px;
      }
      a {
        transition: opacity 0.15s ease-out;
        color: #3399ff;
        opacity: 1;
      }
      a:hover {
        opacity: 0.85;
      }
    }
  }

  .order-goods {
    margin-top: 10px;
    padding-top: 10px;
    padding-left: 26px;
    overflow: hidden;
    border-top: 1px dashed #e6e6e6;
    &:nth-child(2) {
      padding-top: 0;
      border-top: none;
    }
    a {
      transition: opacity 0.15s ease-out;
      color: #3399ff;
      opacity: 1;
      cursor: pointer;
    }
    a:hover {
      opacity: 0.85;
    }
    .goods-img,
    .goods-title {
      float: left;
      line-height: 80px;
    }
    .goods-price,
    .goods-num,
    .goods-total,
    .goods-status,
    .goods-operation {
      float: right;
      line-height: 80px;
      text-align: center;
    }
    .goods-img {
      left: 30px;
      top: 15px;
      width: 78px;
      height: 78px;
      border: 1px solid #EBEBEB;
      border-radius: 3px;
      .img {
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
    }
    .goods-title {
      width: 220px;
      height: auto;
      margin-left: 36px;
      border-bottom: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .goods-price {
      width: 85px;
      padding-right: 27px;
      font-weight: 700;
    }
    .goods-num {
      width: 70px;
      padding-right: 14px;
    }
    .goods-operation {
      display: flex;
      align-items: center;
      width: 95px;
      height: 80px;
      padding-right: 23px;
      line-height: 25px;
      padding-right: 35px;
      .cancel-btn {
        width: 70px;
        height: 30px;
        background: #3399ff;
        opacity: 1;
        border: 0;
        color: #fff;
        font-size: 12px;
        transition: opacity 0.15s ease-out;
        border-radius: 4px;
        &:hover {
          opacity: 0.85;
        }
      }
      .none {
        margin-right: -30px;
        padding-left: 30px;
      }
    }
    .goods-total {
      position: relative;
      text-align: left;
      padding-right: 18px;
      width: 100px;
      &:before {
        position: absolute;
        content: '';
        border-left: 1px solid #DBDBDB;
        height: 40%;
        left: -26px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .goods-status {
      width: 80px;
      padding-right: 26px;
    }
  }
</style>
<template>
  <div class='side-content'>
    <div class="order-groups">
      <div class="order-header">
        <span class='date'>2017-09-11</span>
        <span class='order-id'>
          订单号：<a>170911543271119</a>
        </span>
        <span class='order-detail'>
          <router-link to='/account/order/12'>查看详情</router-link>
        </span>
        <span class='sub-total'>应付总额</span>
        <span class='operation'>商品操作</span>
        <span class='num'>数量</span>
        <span class='price'>单价</span>
      </div>
      <div class="order-goods">
        <div class="goods-img">
          <a href="" target="_blank">
            <img src="http://c1.mifile.cn/f/i/15/scooter/overall-battery-video-poster.jpg" alt="">
          </a>
        </div>
        <div class="goods-title">九号平衡车 Pro</div>
        <div class='goods-status'>已完成</div>
        <div class='goods-total'>¥ 99.00</div>
        <div class="goods-operation">
          <button class='canncel-btn'>取消订单</button>
        </div>
        <div class='goods-num'>1</div>
        <div class='goods-price'>¥ 99.00</div>
      </div>
    </div>
    <div class="order-groups">
      <div class="order-header">
        <span class='date'>2017-09-11</span>
        <span class='order-id'>
          订单号：<a>170911543271119</a>
        </span>
        <span class='order-detail'>
          <router-link to='/account/order/13'>查看详情</router-link>
        </span>
        <span class='sub-total'>应付总额</span>
        <span class='operation'>商品操作</span>
        <span class='num'>数量</span>
        <span class='price'>单价</span>
      </div>
      <div class="order-goods">
        <div class="goods-img">
          <a href="" target="_blank">
            <img src="http://c1.mifile.cn/f/i/15/scooter/overall-battery-video-poster.jpg" alt="">
          </a>
        </div>
        <div class="goods-title">九号平衡车 Pro</div>
        <div class='goods-status'>已完成</div>
        <div class='goods-total'>¥ 99.00</div>
        <div class="goods-operation">
          <button class='canncel-btn'>取消订单</button>
        </div>
        <div class='goods-num'>1</div>
        <div class='goods-price'>¥ 99.00</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .side-content-wrap {
    padding-bottom: 6px;
  }
  .side-content-wrap .module-name {
    margin-bottom: 0;
  }
  .order-groups {
    padding-bottom: 15px;
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
        color: #02bbda;
        opacity: 1;
      }
      a:hover {
        opacity: 0.85;
      }
    }
  }

  .order-goods {
    margin-top: 15px;
    padding-left: 26px;
    overflow: hidden;
    a {
      transition: opacity 0.15s ease-out;
      color: #02bbda;
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
      img {
        width: 78px;
        height: 78px;
        border: 0;
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
      .canncel-btn {
        width: 70px;
        height: 30px;
        background: #02bbda;
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
        height: 80%;
        left: -26px;
        top: 10px;
      }
    }
    .goods-status {
      width: 80px;
      padding-right: 26px;
    }
  }
</style>
<template>
  <div class='side-content'>
    <div class="order-detail">
      <div class="order-status">
        <h2>订单状态：待付款</h2>
        <h4>订单号：170915547677742</h4>
        <h4>您的付款时间还有 <span class='time'>21 小时 41 分钟 9 秒</span>，超时后订单将自动取消。</h4>
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
          <li>
            <div class="img">
              <a href="">
                <img src="http://i8.mifile.cn/a1/pms_1505401464.03824312!560x560.jpg" alt="">
              </a>
            </div>
            <div class="goods-name">
              小米 MIX 2
            </div>
            <span class="price">3299</span>
            <span class="num">1</span>
            <span class="sub-total">3299</span>
          </li>
        </ul>
        <div class="summary">
          <h2 class="total">
            商品总计：
            <span class="price">3299</span>
          </h2>
          <h2 class="postage">
            运费：+
            <span class="price">15</span>
          </h2>
          <div class="sub-total">
            应付总额：
            <span class='price'>3314</span>
          </div>
        </div>
      </div>
      <div class="order-card order-address">
        <h2 class="order-header title">收货信息</h2>
        <ul class="content">
          <li>姓名：张三</li>
          <li>联系电话：18001011111</li>
          <li>详细地址：北京市朝阳区望京宏泰东街绿地中心 A 座 A 区</li>
        </ul>
      </div>
      <div class="order-card order-invoice">
        <h2 class="order-header title">发票信息</h2>
        <ul class="content">
          <li>发票类型：电子发票</li>
          <li>发票抬头：个人</li>
          <li>发票内容：购买商品明细</li>
        </ul>
      </div>
    </div>
  </div>
</template>

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
    }
    .img,
    .goods-name,
    .price,
    .num,
    .sub-total {
      display: table-cell;
      vertical-align: middle;
    }
    img {
      width: 78px;
      height: 78px;
      border: 0;
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
.order-invoice {
  .content {
    padding-bottom: 0;
  }
}
</style>
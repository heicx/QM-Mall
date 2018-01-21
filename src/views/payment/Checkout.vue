<template>
  <div class="payment-wrap">
    <div class="payment-card adress clearfix">
      <div class="header">
        <span class="title">收货信息</span>
      </div>
      <div class="address-list">
        <ul class="items">
          <!-- <li class='active'>
            <div class="name">
              悟空sudo
              <span class="default">（默认地址）</span>
            </div>
            <p class="tel">13910789088</p>
            <p class="address">北京市朝阳区望京绿地中心 A 座 A 区</p>
          </li> -->
          <li class="address-add" @click="addAddress()">
            + 添加新地址
          </li>
        </ul>
      </div>
    </div>
    <div class="payment-card invoice">
      <div class="header">
        <span class="title">发票信息</span>
      </div>
      <div class="invoice-info">
        <p class="invoice-name">发票类型：电子发票</p>
        <p class="invoice-type">
          发票抬头：
          <label @click="invoiceType = 1">
            <span class='blue-radio' :class='{"on": invoiceType == 1}'><i></i></span>
            个人
          </label>
          <label @click="invoiceType = 2">
            <span class='blue-radio' :class='{"on": invoiceType == 2}'><i></i></span>
            单位
          </label>
        </p>
        <div class="invoice-text" v-if="invoiceType == 2">
          <div class="title">
            <input type="text" maxlength='26' placeholder='请填写公司发票抬头'>
          </div>
          <div class="number">
            <input type="text" maxlength='24' placeholder='请填写纳税人识别码'>
          </div>
        </div>
        <p class="invoice-detail">
          发票内容：购买商品明细
        </p>
      </div>
    </div>
    <div class="payment-card goods-group">
      <div class="header">
        <span class="title">购物清单</span>
      </div>
      <div class="group-column">
        <span class="column-name title">
          商品名称
        </span>
        <span class="column-name total">
          小计
        </span>
        <span class="column-name num">
          数量
        </span>
        <span class="column-name price">
          单价
        </span>
      </div>
      <ul class="goods-list">
        <li>
          <div class="img">
            <a href="">
              <img src="http://i8.mifile.cn/a1/pms_1505401464.03824312!560x560.jpg">
            </a>
          </div>
          <span class="title">手机</span>
          <span class="price">￥ 1999</span>
          <span class="num">2</span>
          <span class="sub-total">￥ 3998</span>
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
      </div>
      <div class="payment">
        <a tag='button' class='commit-btn' :class="{'disabled': !isCanBuy}">提交订单</a>
        <span class="total-price">
          应付总额：
          <em>¥ 3299</em>
        </span>
      </div>
    </div>
    <user-address :isOpen="isOpenDialog" :formData='adddressData' @closeDialogEvent="closeDialog()"></user-address>
  </div>
</template>

<script>
  import UserAddress from '../../components/UserAddress.vue';

  export default {
    data () {
      return {
        isCanBuy: false,
        invoiceType: 1,
        addressList: [],
        isOpenDialog: false,
        adddressData: {
          userName: '',
          telphone: '',
          areaCode: '',
          phoneNumber: '',
          provinceId: -1,
          cityId: -1,
          districtId: -1,
          address: '',
          isDefault: false
        }
      }
    },
    methods: {
      addAddress () {
        this.isOpenDialog = true;
      },
      closeDialog (status) {
        this.isOpenDialog = status;
      }
    },
    components: {
      UserAddress
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
  .address-list {
    overflow: hidden;
    padding: 30px;
    li {
      float: left;
      width: 256px;
      height: 138px;
      margin-right: 16px;
      padding: 20px;
      border: 1px solid #E5E5E5;
      border-radius: 3px;
      background: #FAFAFA;
      line-height: 14px;
      text-align: left;
      word-wrap: break-word;
      word-break: normal;
      color: #626262;
      cursor: pointer;
      &.active {
        border-color: #6A8FE5;
        background: #FFF;
      }
      .tel,
      .address {
        font-size: 14px;
        padding-top: 6px;
        line-height: 24px;
        color: #999;
        word-wrap: break-word;
        word-break: normal;
      }
      .name {
        height: 16px;
        line-height: 16px;
        font-size: 16px;
        color: #666;
        margin-top: 18px;
      }
      .tel {
        padding-top: 18px;
      }
      &.address-add {
        font-size: 14px;
        line-height: 138px;
        text-align: center;
        transition: all 0.15s ease-out;
        &:hover {
          background: #F2F2F2;
        }
      }
    }
  }
}
.invoice {
  margin-top: 20px;
  .invoice-info {
    padding: 30px;
    color: #666;
  }
  .invoice-name,
  .invoice-type,
  .invoice-detail {
    font-size:14px;
    height: 36px;
    line-height: 36px;
  }
  .invoice-type {
    label {
      margin-right: 15px;
      span.blue-radio {
        overflow: hidden;
        display: inline-block;
        position: relative;
        top: 2px;
        width: 10px;
        height: 10px;
        padding: 4px;
        background: #F9F9F9;
        background: linear-gradient(#F5F6F6,#FDFDFD);
        border: 1px solid #E6E6E6;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0,0,0,.05) inset;
        cursor: pointer;
        top: 4px;
        margin: 0 3px 0 -5px;
        &.on {
          i {
            overflow: hidden;
            display: block;
            width: 8px;
            height: 8px;
            background: #02bbda;
            border: 1px solid #0f97ad;
            border-radius: 10px;
            box-shadow: 0 1px 2px rgba(0,0,0,.2);
          }
        }
      }
    }
  }
  .invoice-text {
    margin: 10px 0 0 70px;
    .title,
    .number {
      display: block;
      position: relative;
      width: 372px;
      height: 46px;
      background-color: #FFF;
      box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
      border: 1px solid #CCC;
      border-radius: 6px;
      line-height: 46px;
      font-size: 16px;
      opacity: .618;
      transition: opacity .3s ease-in;
      width: 338px;
      height: 34px;
      line-height: 34px;
      font-size: 14px;
      margin-bottom: 10px;
      border-radius: 4px;
      input {
        width: 310px;
        padding-left: 11px;
        font-size: 12px;
        margin: 0;
        position: relative;
        z-index: 3;
        padding: 0 13px 0 15px;
        background: 0 0;
        border: none;
        color: #333;
      }
      &.error {
        border: 1px solid #E66157;
        opacity: 1;
      }
    }
  }
}
.goods-group {
  margin-top: 20px;
  .group-column {
    padding: 0 0 0 29px;
    border-top: none;
    font-size: 12px;
    height: 38px;
    padding: 0 24px;
    background: #EEE;
    border-bottom: 1px solid #DBDBDB;
    line-height: 38px;
    color: #666;
  }
  .column-name {
    &:first-child {
      float: left;
    }
    float: right;
    &.price {
      margin-right: 146px;
    }
    &.num {
      margin-right: 138px;
    }
    &.total {
      margin-right: 12px;
    }
  }
  .goods-list {
    overflow: hidden;
    padding: 30px;
    .img,
    .title,
    .price,
    .num,
    .sub-total {
      font-size: 14px;
      display: inline-block;
      vertical-align: middle;
    }
    .img {
      border: 1px solid #EBEBEB;
      width: 78px;
      height: 78px;
      border-radius: 4px;
      img {
        width: 78px;
        height: 78px;
        border-radius: 4px;
      }
    }
    .price,
    .num,
    .sub-total {
      width: 60px;
      margin-left: 100px;
      text-align: right;
    }
    .title {
      width: 440px;
      margin-left: 30px;
    }
    .price,
    .sub-total {
      font-weight: bold;
    }
    .price {
      margin-left: 200px;
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
        margin-left: 20px;
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
  }
  .payment {
    overflow: hidden;
    padding: 22px 29px 19px 30px;
    background: #F5F5F5;
    border-top: 1px solid #DADADA;
    border-radius: 0 0 6px 6px;
    box-shadow: -3px 0 8px rgba(0,0,0,.04);
    color: #626262;
    .commit-btn,
    .total-price {
      float: right;
    }
    .commit-btn {
      width: 136px;
      height: 46px;
      line-height: 46px;
      display: block;
      padding: 1px;
      border-radius: 6px;
      border: none;
      background: #02bbda;
      text-align: center;
      text-shadow: rgba(255,255,255,.496094) 0 1px 0;
      cursor: pointer;
      color: #FFF;
      opacity: .85;
      transition: opacity 0.15s ease-out;
      &.disabled {
        cursor: not-allowed;
        opacity: .45;
        &:hover {
          opacity: .45;
        }
      }
      &:hover {
        opacity: 1;
      }
    }
    .total-price {
      padding: 0 40px;
      line-height: 50px;
      font-size: 14px;
      em {
        display: inline-block;
        position: relative;
        top: 3px;
        margin-top: -4px;
        font-size: 24px;
        color: #d44d44;
        font-weight: bold;
      }
    }
  }
}
</style>
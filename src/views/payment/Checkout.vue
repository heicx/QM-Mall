<template>
  <div class="payment-wrap">
    <div class="payment-card adress clearfix">
      <div class="header">
        <span class="title">收货信息</span>
      </div>
      <div class="address-list">
        <ul class="items">
          <li class='active'>
            <div class="name">
              悟空sudo
              <span class="default">（默认地址）</span>
            </div>
            <p class="tel">13910789088</p>
            <p class="address">北京市朝阳区望京绿地中心 A 座 A 区</p>
          </li>
          <li class="address-add">
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
          <label>
            <span class='blue-radio'><i></i></span>
            个人
          </label>
          <label>
            <span class='blue-radio on'><i></i></span>
            单位
          </label>
        </p>
        <div class="invoice-text">
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
  </div>
</template>

<style lang="scss">
.payment-wrap {
  width: 1220px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  background: #ededed;
  margin-top: 40px;
  margin-bottom: 40px;
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
    height: 36px;
    line-height: 36px;
  }
  .invoice-type {
    label {
      margin-right: 5px;
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
        margin: 0 3px 0 6px;
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
        color: inherit;
        font: inherit;
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
</style>
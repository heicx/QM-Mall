<template>
  <div class='side-content'>
    <div class="address-group">
      <div class="address-header">
        <span class="column-name">姓名</span>
        <span class="column-address">详细地址</span>
        <span class="column-tel">电话</span>
      </div>
      <ul class="address-list">
        <li class='list-item'>
          <span class="name">张三</span>
          <span class="address">北京市朝阳区宏泰东街绿地中心 A 座 A 区</span>
          <span class="tel">
            139****9088
            <span class="default">(默认地址)</span>
          </span>
          <div class="operation">
            <button class='edit'>编辑</button>
            <button class='del'>删除</button>
          </div>
        </li>
        <li class='list-item'>
          <span class="name">李四</span>
          <span class="address">北京市东城区东四十条佳汇中心 A 座</span>
          <span class="tel">
            186****2360
          </span>
          <div class="operation">
            <button class='edit'>编辑</button>
            <button class='del'>删除</button>
          </div>
        </li>
      </ul>
      <div class="address-add">
        <button>添加收货地址</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-content {
  margin-top: 0;
}
.address-header {
  height: 38px;
  line-height: 38px;
  background: #EEE;
  border-bottom: 1px solid #DBDBDB;
  span {
    display: inline-block;
    font-size: 12px;
    text-align: center;
    color: #666;
  }
  .column-name {
    padding-left: 27px;
    width: 106px;
    text-align: left;
  }
  .column-address {
    width: 440px;
    text-align: left;
  }
}
.side-content-wrap .side-content li.list-item {
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #EEE;
}
.list-item {
  .name {
    display: inline-block;
    width: 106px;
    text-align: left;
  }
  .address {
    display: inline-block;
    width: 440px;
    text-align: left;
  }
  .tel {
    display: inline-block;
    width: 240px;
    text-align: left;
    .default {
      padding-left: 34px;
    }
  }
  .operation {
    width: 120px;
    display: inline-block;
    vertical-align: middle;
    text-align: right;
    button {
      width: 80px;
      height: 30px;
      border: 0;
      border-radius: 4px;
      background: #02bbda;
      color: #fff;
      font-size: 12px;
      transition: opacity 0.15s ease-out;
      opacity: .85;
      &:hover {
        opacity: 1;
      }
    }
    .del {
      margin-top: 12px;
    }
  }
}
.address-add {
  margin: 40px 0 10px;
  text-align: center;
  button {
    width: 180px;
    height: 48px;
    border: 0;
    border-radius: 6px;
    background: #02bbda;
    color: #fff;
    font-size: 14px;
    transition: opacity 0.15s ease-out;
    opacity: .85;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
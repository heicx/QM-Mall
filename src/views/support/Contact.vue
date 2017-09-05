<template>
  <div class='contact-wrap'>
    <div class="contact-list">
      <div class='contact-left'>
        <h2 class='title'>合作方式</h2>
        <dl class='items'>
          <dt>商务合作：</dt>
          <dd>
            <a href="mailto:bd@qmy.cx">bd@qmy.cx</a>
          </dd>
          <dt>销售合作：</dt>
          <dd>
            <a href="mailto:yhx@qmy.cx">yhx@qmy.cx</a>
          </dd>
        </dl>
      </div>
      <div class='contact-right'>
        <h2 class='title'>联系方式</h2>
        <dl class='items'>
          <dt>地址：</dt>
          <dd>东莞市虎门镇大宁社区进港路南园大厦 2 号电梯 5 楼</dd>
          <dt>销售合作：</dt>
          <dd>
            <a href="tel:0769-89304976">0769-89304976</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .contact-wrap {
    width: 1220px;
    margin: 0 auto;
    font-size: 14px;
  }
  .contact-list {
    overflow: hidden;
    padding: 80px 10px 80px 10px;
    h2.title {
      line-height: 32px;
      font-size: 22px;
      font-weight: 600;
      color: #4d4d4d;
      &:after {
        content: '';
        display: block;
        width: 120px;
        margin-top: 12px;
        margin-bottom: 16px;
        border-bottom: 1px solid #e2e2e2;
      }
    }
    .items {
      line-height: 22px;
      color: #999;
      dt {
        clear: left;
      }
      dt, dd {
        float: left;
        margin-bottom: 2px;
      }
      a {
        color: #5079d9;
        cursor: pointer;
      }
    }
  }
  .contact-left {
    float: left;
    width: 50%;
    padding-left: 28px;
    padding-right: 18px;
    box-sizing: border-box;
  }
  .contact-right {
    float: right;
    width: 50%;
  }
</style>
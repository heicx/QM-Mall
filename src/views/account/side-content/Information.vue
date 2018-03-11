<template>
  <div class='side-content'>
    <div class="information-group">
      <div class="group-item clearfix">
        <div class="item-info">
          <span class="title">账户昵称</span>
          <span class="name">{{userInfo.mobile}}</span>
        </div>
        <div class="update">
          <!-- <a href="" class="">修改</a> -->
        </div>
      </div>
      <!-- <div class="group-item clearfix">
        <div class="item-info">
          <span class="title">登录密码</span>
          <span class="name">互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。</span>
        </div>
        <div class="update">
          <a href="" class="">修改</a>
        </div>
      </div> -->
      <div class="group-item clearfix">
        <div class="item-info">
          <span class="title">手机号码</span>
          <span class="name">您验证的手机：{{userInfo.mobile}}</span>
        </div>
      </div>
      <!-- <div class="group-item clearfix">
        <div class="item-info">
          <span class="title">邮箱验证</span>
          <span class="name">您验证的邮箱：he******do@163.com</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.$store.dispatch('getUserInfo').then(res => {
      if(res.status) {
        this.userInfo = res.data;
      }else {
        this.$router.push('/');
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.information-group {
  padding: 0 20px;
}
.side-content {
  margin-top: 20px;
}
.group-item {
  font-size: 0;
  padding-bottom: 15px;
  border-bottom: 1px dashed #EFEFEF;
  &+.group-item {
    padding-top: 15px;
  }
  &:last-child {
    border-bottom: none;
  }
  .item-info {
    width: 50%;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    .title {
      display: block;
      font-size: 16px;
      font-weight: 400;
      color: #333;
    }
    .name {
      display: block;
      margin-top: 6px;
      font-size: 14px;
      color: #999;
    }
  }
  .update {
    width: 50%;
    font-size: 14px;
    text-align: right;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
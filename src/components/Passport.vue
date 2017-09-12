<template>
	<div class="passport-wrap">
    <div class="passport-form">
      <h2 class='logo'></h2>
      <ul class='tabs clearfix'>
        <li>
          <router-link :class='{"active": isLogin}' to='/signin' replace>登录</router-link>
        </li>
        <li>
          <router-link :class='{"active": !isLogin}' to='/signup' replace>注册</router-link>
        </li>
      </ul>
      <component :is="passportTempl"></component>
    </div>
  </div>
</template>

<script>
import Bus from '../bus';
import Signin from '../views/passport/Signin.vue';
import Signup from '../views/passport/Signup.vue';

export default {
  data(){
    return {
      isLogin: null,
      passportTempl: null
    }
  },
  beforeCreate() {
    Bus.$emit('changeLayout', false);
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm=> {
      if(to.path === '/signin') {
        vm.$data.passportTempl = Signin;
        vm.$data.isLogin = true;
      }else {
        vm.$data.passportTempl = Signup;
        vm.$data.isLogin = false;
      }
    })
  },
  mounted() {
  }
}
</script>

<style lang="scss">
body {
  background: #f7fafc;
}

.passport-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  background: #f7fafc;
  min-height: 850px;
  min-width: 630px;
}

.passport-form {
  display: block;
  margin-top: -235px;
  position: absolute;
  width: 400px;
  border: 1px solid #dadada;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  background: #fff;
  box-shadow: 0 9px 30px -6px rgba(0,0,0,.2), 0 18px 20px -10px rgba(0,0,0,.04), 0 18px 20px -10px rgba(0,0,0,.04), 0 10px 20px -10px rgba(0,0,0,.04);
  .logo {
    position: relative;
    background-image: url(~images/logo.png);
    background-size: 160px;
    background-position: top center;
    background-repeat: no-repeat;
    height: 30px;
    margin: 42px 0 25px;
  }
  .tabs {
    text-align: center;
    li {
      display: inline-block;
    }
    li:first-child {
      margin-right: 20px;
    }
    a {
      position: relative;
      width: 80px;
      opacity: .7;
      transition: opacity .15s,color .15s;
    }
    a.active {
      opacity: 1;
      color: #02bbda;
      &:after {
        content: '';
        position: absolute;
        border-bottom: 1px solid #02bbda;
        bottom: -6px;
        left: 1px;
        width: 100%;
      }
    }
    a:hover {
      opacity: 1;
      text-decoration: none;
    }
  }
}
</style>
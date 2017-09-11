<template>
	<div class="passport-wrap">
    <div class="passport-form">
      <h2 class='logo'></h2>
      <ul class='tabs clearfix'>
        <li>
          <router-link :class='{"active": isLogin}' to='/signin'>登录</router-link>
        </li>
        <li>
          <router-link :class='{"active": isRegister}' to='/signup'>注册</router-link>
        </li>
      </ul>
      <component :is="passportTempl"></component>
    </div>
  </div>
</template>

<script>
import Bus from '../bus';
import Signin from '../views/account/Signin.vue';
import Signup from '../views/account/Signup.vue';

const PATH_NAME = ['signin', 'signup'];

export default {
  data(){
    return {
      isLogin: null,
      isRegister: null,
      passportTempl: null
    }
  },
  beforeCreate() {
    // Bus.$emit('changeLayout', false);
    console.log('123');
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm=> {
      if(to.path === '/signin') {
        vm.$data.passportTempl = Signin;
        vm.$data.isLogin = true;
        vm.$data.isRegister = false;
      }else if(to.path === '/signup') {
        vm.$data.passportTempl = Signin;
        vm.$data.isRegister = true;
        vm.$data.isLogin = false;
      }

      console.log(vm.$data.isLogin);

      
    });
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.passport-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  background: #e3e3e3;
  min-height: 800px;
  min-width: 630px;
}

.passport-form {
  display: block;
  margin-top: -324px;
  position: absolute;
  width: 450px;
  border: 1px solid #dadada;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  margin-left: -225px;
  .logo {
    position: relative;
    background-image: url(~images/logo.png);
    background-size: 160px;
    background-position: top center;
    background-repeat: no-repeat;
    height: 30px;
    margin: 25px 0 25px;
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
        left: 0;
      }
    }
    a:hover {
      opacity: 1;
      text-decoration: none;
    }
  }
}
</style>
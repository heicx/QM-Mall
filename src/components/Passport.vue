<template>
	<div class="passport-wrap">
    <div class="passport-form">
      <h2 class='logo'></h2>
      <ul class='tabs clearfix'>
        <li>注册</li>
        <li>登录</li>
      </ul>
      <component :is="passportTempl"></component>
    </div>
  </div>
</template>

<script>
import Bus from '../bus';
import Signin from '../views/account/Signin.vue';

export default {
  data(){
    return {
      passportTempl: null
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(to);
    if(to.name === 'signin') {
      
    }

    next(vm=> {
      vm.$data.passportTempl = Signin;
    });
  }
}
</script>

<style lang="scss" scoped>
</style>
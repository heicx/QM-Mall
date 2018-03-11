<template>
  <div id="app" class="app-wrap">
		<app-header v-if='isShow'></app-header>
    <app-navigation v-if='isShow' :hideBtn="navHide"></app-navigation>
    <router-view></router-view>
		<app-footer v-if='isShow'></app-footer>
	</div>
</template>

<script>
import appHeader from './components/Header.vue';
import appNavigation from './components/Navigation.vue';
import appFooter from './components/Footer.vue';
import Bus from './bus';

export default {
  name: 'app',
  data() {
    return {
      isShow: this.$route.name != 'passport',
      navHide: (this.$route.name == 'checkout' || this.$route.name == 'payment' || this.$route.name == 'account')
    }
  },
  created() {
    Bus.$on('changeLayout', (status)=> {
      this.isShow = status;
    });

    Bus.$on('navHideBtnEvent', (status)=> {
      this.navHide = status;
    });
  },
  components: {
      appHeader,
      appNavigation,
      appFooter
  },
  methods: {
  }
}
</script>

<style src='./assets/style/scss/common.scss' lang='scss'></style>
<style lang='scss' scoped>
.app-wrap {
  min-width: 1220px;
}
</style>
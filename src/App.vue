<template>
  <div id="app" class="app-wrap">
		<app-header></app-header>
    <app-navigation></app-navigation>
    <router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from './components/Header.vue';
import appNavigation from './components/Navigation.vue';
import appFooter from './components/Footer.vue';

export default {
  name: 'app',
  components: {
      appHeader,
      appNavigation,
      appFooter
  },
  mounted() {
  }
}
</script>

<style src='./assets/style/scss/common.scss' lang='scss'></style>
<style lang='scss' scoped>
.app-wrap {
  min-width: 1220px;
}
</style>
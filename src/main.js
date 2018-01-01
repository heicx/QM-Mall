import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store';
import router from './router-config'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  store: store,
  render: h => {
    return h(App);
  }
})

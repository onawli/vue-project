// 整个前端项目
import Vue from 'vue';
import router from './router';
import App from './App'; // ./App.vue

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  // 局部组件
  components: { App },
  template: '<App/>'
})

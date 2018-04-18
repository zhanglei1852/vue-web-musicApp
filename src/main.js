// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入babel-polyfill 转化es6 API
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// 解决手机端点击300毫秒延迟 
import FastClick from 'fastclick'
import router from './router'
// 图片的懒加载
import lazyLoad from 'vue-lazyload'
Vue.use(lazyLoad, {
	error: require('@/img/loading.gif'),
	loading: require('@/img/loading.gif')
})
Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

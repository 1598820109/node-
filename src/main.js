import Vue from 'vue'
import App from './App'
import router from './router'
//引入懒加载模块
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

/* eslint-disable no-new */

 
Vue.use(VueLazyload, {
  preLoad: 3,
  error: require('../static/imgs/QQ.jpg'),
  loading: require('../static/imgs/loading3.gif'),
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

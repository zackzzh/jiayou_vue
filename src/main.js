// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import store from '@/store'
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.css';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import './config/animate-css/animate.min.css'
import 'lib-flexible/flexible'
import './config/methods'

Vue.config.productionTip = false

Vue.use(iView, {
  transfer: true,
  size: 'large'
});
// Vue.use(Swiper)
// Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

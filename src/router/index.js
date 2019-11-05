import Vue from 'vue'
import vueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import routers from './routers'
import { routerInterceptor } from './interceptor'

Vue.use(vueRouter)

// mode: 'history',
//   srcollBehavior(to, from, savedPosition){
//   if (to.hash) {
//     return {
//       selector: to.hash
//     }
//   }

// }

export const router = new vueRouter({
  routes: routers,
  // scrollBehavior (to, from, savedPosition) {
  // 以路由为准，路由没有改变，检测不了
  //   console.log("滚动位置",to, from, savedPosition)
  //   // return 期望滚动到哪个的位置
  // }
})

routerInterceptor(router)

import Vue from 'vue'
import Vuex from 'vuex'
import testModule from './test/index'

import homeModule from './home/index'
import casesModule from './cases/index'
import aboutModule from './about/index'
import trendsModule from './trends/index'
import productModule from './product/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test: testModule,
    home: homeModule,
    cases: casesModule,
    aboutUs: aboutModule,
    trends: trendsModule,
    product: productModule
  }
})

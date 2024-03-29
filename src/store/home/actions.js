import * as types from './mutation-types'
import {
  api
} from '@/api'
// import { UserValidate } from '@/validate'
// import session from '@/libs/session'

export const actions = {
  // 获取新闻动态
  async getNews({
    commit
  }, o = {}) {
    // console.log("oooooo", o)
    const res = await api.trendsApi.newsList(o)

    // console.log("访问后端数据", res);
    if (res.code === 200) {
      commit(types.GETNEWS, res)
      return res;
      // console.log('操作访问成功')
    } else {
      console.log('操作访问失败')
    }
  },

  // 产品服务
  async getProduct({
    commit
  }, o = {}) {
    // console.log("oooooo", o)
    const res = await api.homeApi.getProduct()

    // console.log("访问后端数据", res);
    if (res.code === 200) {
      commit(types.PRODUCTDATA, res)
      // console.log('操作访问成功')
    } else {
      console.log('操作访问失败')
    }
  },
  async getHome({
    commit
  }, o = {}) {
    const res = await api.homeApi.homePage()
    if (res.code === 200) {
      commit(types.HOMEPAGEDATA, res)
      console.log('操作访问成功')
      console.log('res', res);
      return res;
    } else {
      console.log('操作访问失败')
    }
  }
}

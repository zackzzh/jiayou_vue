import * as types from './mutation-types'
import { api } from '@/api'
// import { UserValidate } from '@/validate'
// import session from '@/libs/session'

export const actions = {
  // 精品案例列表
  async getCasesData({ commit }, o = {}) {
    // console.log("oooooo", o)
    let res = await api.casesApi.getCases(o)
    // console.log("访问后端数据", res);
    if (res.code === 200) {
      commit(types.CASESDATA, res)
      // console.log('操作访问成功')
    } else {
      console.log('操作访问失败')
    }
  },
  // // 案例类型
  async getInfo({ commit }, o) {
    // console.log("oooooo", o)
    let res = await api.casesApi.getCasesInfo(o)
    // console.log("访问后端数据", res);
    if (res.code === 200) {
      commit(types.CASESINFO, res.tCase)
      // console.log('操作访问成功')
    } else {
      console.log('操作访问失败')
    }
  },
}

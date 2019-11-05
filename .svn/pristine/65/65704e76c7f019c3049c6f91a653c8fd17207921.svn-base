import * as types from './mutation-types'
import {Message} from 'iview'
import {
  api
} from '@/api'
// import { UserValidate } from '@/validate'
// import session from '@/libs/session'

export const actions = {

  // 产品服务
  async getProduct({
    commit
  }, o = {}) {
    // console.log("oooooo", o)
    const res = await api.productApi.getProduct()

    // console.log("getProduct访问后端数据", res);
    if (res.code === 200) {
      commit(types.PRODUCTDATA, res.serviceCategoryList)
      // console.log('操作访问成功')
    } else {
      console.log('操作访问失败')
    }
  },
  async addCustDemand({
    commit
  }, data) {
    const res = await api.productApi.addCustDemand(data);
    if (res.code === 200) {
      return res;
    } else {
      console.log('操作访问失败')
    }
  }
}

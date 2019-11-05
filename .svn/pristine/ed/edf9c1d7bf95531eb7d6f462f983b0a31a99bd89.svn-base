import * as types from './mutation-types'
import { api } from '@/api/test'
// import { UserValidate } from '@/validate'
// import session from '@/libs/session'

export const actions = {
    // 测试
    async test({ commit }, o) {
      console.log("oooooo", o)
      const val = o + "我是来自Actions"
      commit(types.TEST, val)
      let res = await api.test.testApi()
      console.log("访问后端数据",res);
      // if (res.success) {
      //   commit(types.TEST, res)
      //   console.log('操作访问成功')
      // } else {
      //   console.log('操作访问失败')
      // }
    }
  }
  
import * as types from './mutation-types'
import { api } from '@/api'

export const actions = {
    // 获取关于我们页面数据
    async trecruitList({ commit }, o={}) {
      // console.log("oooooo", o)
      // const value = {
      // }
      let res = await api.aboutApi.trecruitList(o)
      // console.log("访问后端数据",res);
      if (res.code === 200 ) {
        commit(types.TRECRUITLIST, res)
        // console.log('操作访问成功')
      } else {
        console.log('操作访问失败')
      }
    },
    // 获取底部数据
    async getFooterList({ commit }, o={}) {
      // console.log("oooooo", o)
      // const value = {
      // }
      let res = await api.aboutApi.getFooterList()
      // console.log("访问后端数据",res);
      if (res.code === 200 ) {
        commit(types.FOOTERLIST, res)
        // console.log('操作访问成功')
      } else {
        console.log('操作访问失败')
      }
    },
  }
  
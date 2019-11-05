import * as types from './mutation-types'

export const mutations = {
  [types.TRECRUITLIST](state, o) {
    // console.log("TRECRUITLIST",o)
    state.trecruitListData = o
  },
  [types.FOOTERLIST](state, o) {
    // console.log("底部数据", o)
    // const caseList = o.caseList.map(item => {
    //   return item.title
    // })
    // const newsList = o.newsList.map(item => {
    //   return item.title
    // })
    const recruitList = o.recruitList.map(item => {
      item.title = item.position
      return item
    })
    const listArr = [o.caseList, o.newsList, recruitList]
    // console.log("底部数据listArr", listArr)
    state.footerList = listArr
  }
}

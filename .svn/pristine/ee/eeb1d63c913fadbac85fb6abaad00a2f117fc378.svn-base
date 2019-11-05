import axios from '../api.request'
export const aboutApi = {
  // 获取关于我们数据
  trecruitList: (params) => {
    // console.log("发送的数据", params)
    return axios.request({
      // baseURL: '/test/jyweb/',
      url: 'trecruit/list',
      data: params,
      method: 'get'
    })
  },
  // 获取底部数据
  getFooterList: (params) => {
    // console.log("发送的数据", params)
    return axios.request({
      // baseURL: '/test/jyweb/',
      url: 'trecruit/footer',
      data: params,
      method: 'get'
    })
  }
}

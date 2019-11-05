import axios from '../api.request'
export const casesApi = {
  getCases: (params) => {
    // console.log("发送的数据", params)
    return axios.request({
      url: 'tcase/list',
      data: params,
      method: 'post'
    })
  },
  getCasesInfo: (params) => {
    // console.log("发送的数据", params)
    return axios.request({
      url: `tcase/info?id=${params.id}`,
      // data: params,
      method: 'get'
    })
  },
  // getInfoByTypeId: (params) => {
  //   // console.log("发送的数据", params,"111", val)
  //   return axios.request({
  //     url: `tcase/getInfoByTypeId?typeId=${params.id}`,
  //     // data: params,
  //     method: 'get'
  //   })
  // }
}

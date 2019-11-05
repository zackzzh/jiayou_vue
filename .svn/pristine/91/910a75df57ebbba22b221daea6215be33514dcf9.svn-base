import axios from '../api.request'
export const trendsApi = {
  newsList: (params) => {
    return axios.request({
      url: 'tnews/list',
      data: params,
      method: 'post'
    })
  },
  
  getNewsInfo: (params) => {
    return axios.request({
      url: `tnews/info?id=${params.id}`,
      // data: params,
      method: 'get'
    })
  }
}

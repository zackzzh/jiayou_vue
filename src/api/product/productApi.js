import axios from '../api.request'
export const productApi = {
  getProduct: (params) => {
    return axios.request({
      url: 'tservice/list',
      data: params,
      method: 'get'
    })
  },
  addCustDemand: (params) => {
    return axios.request({
      url: 'tsolution/addCustDemand',
      data: params,
      method: 'POST'
    })
  }
}
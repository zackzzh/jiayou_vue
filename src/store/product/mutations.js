import * as types from './mutation-types'

export const mutations = {
  [types.PRODUCTDATA] (state, o) {
    // console.log("GETNEWS",o)
    state.productData = o
  }
}

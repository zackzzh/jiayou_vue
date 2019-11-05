import * as types from './mutation-types'

export const mutations = {
  [types.TEST] (state, o) {
    console.log("TEST",o)
    state.testDemo = o
  }
}

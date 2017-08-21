import * as types from './mutation-types.js'

const matutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_LOGO](state, logo) {
    state.logo = logo
  }
}

export default matutations

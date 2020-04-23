const state = {
  dxNum: 0,
  duoxNum: 0,
  tkNum: 0,
  jdNum: 0,
  dxNumSum: 0,
  duoxNumSum: 0,
  tkNumSum: 0,
  jdNumSum: 0
}

const mutations = {
  increment (state) {
    state.dxNum++
  }
  // increment: state => state.count++
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

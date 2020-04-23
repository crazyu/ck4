const state = {
  courseId: '',
  currentQuestionScore: '', // 当前题目的评分
  currentQuestionMark: '' // 当前题目的备注
}

const mutations = {
  setCourseId (state, id) {
    state.courseId = id
  },
  setScore (state, score) {
    state.currentQuestionScore = score
  },
  setMark (state, mark) {
    state.currentQuestionMark = mark
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

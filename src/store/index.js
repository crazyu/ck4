import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import setting from './modules/setting'
import homework from './modules/homework'
// import class from './modules/class'
// import modal from './modules/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account,
    setting,
    homework
    // ,
    // class
    // modal
  }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/lazy'
import 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue'
import Viser from 'viser-vue'
import CKEditor from 'ckeditor4-vue'
import axios from 'axios'
import '@/mock'
import store from './store'
import PouchDB from 'pouchdb'
import request from '../src/utils/request'
import './assets/common.less'

Vue.prototype.$axios = axios
Vue.prototype.$request = request
Vue.config.productionTip = false
Vue.use(Viser)
Vue.use(Antd)
Vue.use(CKEditor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
    var db = new PouchDB('admindb')
    db.get('currUser').then(doc => {
      this.$store.commit('account/setuser', doc.user)
    })
  }
})

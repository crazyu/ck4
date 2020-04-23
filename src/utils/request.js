import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { baseUrl } from './util'
import message from 'ant-design-vue/es/message'
// import { getToken } from '@/utils/auth'

// create an axios instance
const request = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? '' : '/api',
  baseURL: baseUrl
})

// request interceptor
request.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['X-Token'] = getToken()
    }
    if (config.url.indexOf('/login') > -1) {
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      config.transformRequest = [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
      ]
    }
    if (sessionStorage.getItem('token')) {
      config.headers.Authentication = sessionStorage.getItem('token')
    }
    config.headers.ClientId = 'osca.web'
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 200) {

    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
    return Promise.resolve(res)
  },
  error => {
    console.log('err' + error) // for debug
    const { status, data } = error.response
    if (status === 500) {
      message.info((data && data.meta && data.meta.message) || '服务器错误,请重试')
    }
    return Promise.reject(error)
  }
)

export default request

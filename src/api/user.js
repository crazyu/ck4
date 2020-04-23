import request from '@/utils/request'

// export function login (data) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data
//   })
// }

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

// 登出
export function logout (id) {
  return request({
    url: 'osca/api/member/logout/' + id,
    method: 'get'
  })
}

// 用户注册
export function login (params) {
  return request.post('/osca/api/member/login', params)
}

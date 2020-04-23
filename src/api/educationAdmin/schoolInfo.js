import request from '@/utils/request'

// 查询院校详情
export function getSchoolInfo (params) {
  return request.get('osca/api/college/faculty/detail', { params })
}
// 查询课程名称
export function getCourseInfo (params) {
  return request.get('osca/api/college/faculty/course/list', { params })
}

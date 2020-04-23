import request from '@/utils/request'

// 获取班级树
export function getClassTree (params) {
  return request.get('/osca/api/edu/base/getClassTree', { params })
}
// 获取班级列表
export function getClassList (params) {
  return request.get('/osca/api/college/faculty/class', { params })
}
// 保存新增班级
export function saveAddClass (params) {
  return request.post('/osca/api/class', params)
}
// 保存修改班级
export function saveEditClass (params) {
  return request.put('/osca/api/class', params)
}
// 删除班级
export function deleteClass (params) {
  return request.delete('/osca/api/class', { params })
}
// 获取全部学生列表
export function getStudentList (params) {
  return request.get('/osca/api/college/faculty/student', { params })
}
// 查询班级的关联学生
export function getClassStudent (params) {
  return request.get('/osca/api/class/class/student/page', { params })
}
// 保存在班级里面添加的学生  关联班级与学生
export function saveClassStudent (params) {
  return request.post('/osca/api/class/class/student', params)
}
// 查询教师信息列表（用于控件选人）
export function getClassTeacherList (params) {
  return request.get('/osca/api/member/list', { params })
}
// 保存教师、助教、审核员  关联班级与教师
export function saveClassTeacher (params) {
  return request.post('/osca/api/college/faculty/class/teacher', params)
}
// 查询课程列表
// export function getCourseList (params) {
//   return request.get('/osca/api/college/faculty/course/list', { params })
// }
// 查询新增班级时课程列表
export function getListCourseList (params) {
  return request.get('/osca/api/course/member/admin/course/' + params)
}
// 查询新增班级时课程列表
export function getAddCourseList (params) {
  return request.get('/osca/api/course/member/admin/course/valid/' + params)
}

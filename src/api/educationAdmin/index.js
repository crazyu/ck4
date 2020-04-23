import request from '@/utils/request'
/*
 *备注： 教师、助教、学生的新增修改删除接口共用的一个
 *
 */

// 获取班级树
export function getClassTree (params) {
  return request.get('/osca/api/edu/base/getClassTree', { params })
}
// 获取教师列表
export function getTeacherList (params) {
  return request.get('/osca/api/college/faculty/teacher', { params })
}
// 获取学生列表
export function getStudentList (params) {
  return request.get('/osca/api/college/faculty/student', { params })
}
// 获取助理列表
export function getAssistantList (params) {
  return request.get('/osca/api/college/faculty/assistant', { params })
}

// 添加会员
export function addNewMember (params) {
  return request.post('/osca/api/college/faculty/member', params)
}

// 修改会员
export function editMember (params) {
  return request.put('/osca/api/college/faculty/member', params)
}

// 删除会员
// export function deleteMember (params) {
//   return request.delete('/osca/api/college/faculty/member', { params })
// }

// 删除学生
export function deleteStudent (params) {
  return request.delete('/osca/api/college/faculty/student', { params })
}

// 删除教师
export function deleteTeacher (params) {
  return request.delete('/osca/api/college/faculty/teacher', { params })
}

// 删除助教
export function deleteTeacherAssistant (params) {
  return request.delete('/osca/api/college/faculty/assistant', { params })
}

// 获取会员关联课程
export function getMemberCourse (params) {
  return request.get('/osca/api/course/member/course/{userId}', { params })
}

// 查看教师详情
export function getTeacherDetail (params) {
  return request.get('/osca/api/college/faculty/teacher/detail', { params })
}

// 查看助教详情
export function getAssistantDetail (params) {
  return request.get('/osca/api/college/faculty/assistant/detail', { params })
}

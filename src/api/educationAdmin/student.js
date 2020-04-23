import request from '@/utils/request'

// 获取班级树
export function getClassTree (params) {
  return request.get('/osca/api/edu/base/getClassTree', { params })
}
// 获取全部学生列表
export function getStudentList (params) {
  return request.get('/osca/api/student/page', { params })
}

// 保存添加的新学生
export function addNewStudent (params) {
  return request.post('/osca/api/student', params)
}

// 修改学生信息
export function editStudent (params) {
  return request.put('/osca/api/student', params)
}

// 删除学生
export function deleteStudent (params) {
  return request.delete('/osca/api/student', { params })
}

// 查看单个学生的详细信息
export function getStudentDetail (params) {
  return request.get('/osca/api/student/details', { params })
}

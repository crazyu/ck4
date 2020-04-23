import request from '@/utils/request'
// 后台管理用到的接口都写在这一个文件里面了（院校， 课程， 学科三个模块）

// 获取学院列表
export function getschoolList (params) {
  return request.get('/osca/api/collegeAdmin/page', {params})
}

// 获取课程管理员
export function getChooseuser (params) {
  return request.get('/osca/api/class/chooseUser', {params})
}

// 获取课程List
export function getBaseCourseList (params) {
  return request.get('/osca/api/edu/base/course', {params})
}

// course-admin-controller课程管理--课程列表
export function getCourseList (params) {
  return request.get('/osca/api/courseAdmin/page', {params})
}

// 获取新增或者编辑需要的系统管理员
export function getManageList (params) {
  return request.get('/osca/api/college/faculty/detail', {params})
}

/**
 * 从这块是 学院管理的接口
 */

// course-admin-controller课程管理--课程详情 osca/api/courseAdmin/details
export function getCourseDetails (params) {
  return request.get('/osca/api/courseAdmin/details', {params})
}

// /api/collegeAdmin/details 学院管理 学院详情
export function getCollegeDetails (params) {
  // return request.get('/osca/api/collegeAdmin/details', {params})
  return request.get('/osca/api/college/faculty/detail', {params})
}

// /osca/api/collegeAdmin 学院管理--新增学院
export function addCollege (params) {
  return request.post('/osca/api/college/faculty', params)
}

// /osca/api/collegeAdmin 学院管理--保存修改学院, 接口参数需要调整
export function saveEditCollege (params) {
  return request.put('/osca/api/college/faculty', params)
}

// osca/api/collegeAdmin 学院管理--删除学院
export function deleteCollege (params) {
  // return request.delete('/osca/api/collegeAdmin', {params})
  return request.delete('/osca/api/college/faculty/' + params.collegeIds)
}

// 学院列表请求 新的用的是post请求
export function getCollegeList (params) {
  // return request.get('/osca/api/collegeAdmin/page', {params})
  return request.post('/osca/api/college/faculty/list', {params})
}

// 旧的学院列表请求 用的是get请求  是为了上面的模糊查询条件用的
export function searchCollegeList (params) {
  // return request.get('/osca/api/collegeAdmin/page', {params})
  return request.get('/osca/api/collegeAdmin/page', {params})
}

// 20200213 bugID1000680 换成新的接口
export function newSearchCollegeList (params) {
  return request.get('/osca/api/college/faculty/list', {params})
}

/**
 * 这块是 学科管理的接口
 */

//  osca/api/subject/page学科管理--学科列表
export function getSubjectList (params) {
  return request.get('/osca/api/subject/page', {params})
}

// 学科管理--编辑修改学科
export function editSubject (params) {
  return request.put('/osca/api/subject', params)
}

// /osca/api/subject 学科管理--新增学科
export function addSubject (params) {
  return request.post('/osca/api/subject', params)
}

// /osca/api/subject 学科管理--删除学科
export function deleteSubject (params) {
  // return request.delete('/osca/api/subject', {params})
  return request.delete('/osca/api/subject/' + params.subjectIds)
}

/**
 * 这块是 院校课程管理 的接口  上边已经有了
 */
// 保存 课程的编辑
export function editCourse (params) {
  return request.put('/osca/api/courseAdmin', params)
}
// 保存新增的课程
export function addCourse (params) {
  return request.post('/osca/api/courseAdmin', params)
}
// 课程删除, 现在使用批量删除试试
export function deleteCourse (params) {
  return request.delete('/osca/api/courseAdmin/' + params.courseIds)
}
// 课程配置 上传封面
export function fileUpload (params) {
  return request.post('/osca/api/file/upload', params)
}

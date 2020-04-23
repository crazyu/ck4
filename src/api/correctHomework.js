/**
 * author: chenpengfei
 * description： 批改作业用到的接口单独拉出来，方便管理
 * date: 20200313
 */
import request from '@/utils/request'

// 获取会员关联班级
export function getMemberClass (params) {
  return request.get('/osca/api/course/member/class', {params})
}

// 设置批改作业方式
export function setCorrectWay (params) {
  return request.put('osca/api/college/course/class/homework', params)
}

// 按人获取答题详情列表
export function getAnswerListInfoByPeople (params) {
  return request.get('/osca/api/college/course/homework/student/answer', {params})
}

// 批改作业给某份作业 写评语
export function putComment (params) {
  return request.put('/osca/api/college/course/student/homework', params)
}

// 批改作业 获取部分批改，名单
export function getCorrectStudentList (params) {
  return request.get('osca/api/college/course/homework/student', {params})
}

// 批改作业 获取班级作业列表
export function getClassHomeworkList (params) {
  return request.get('/osca/api/college/course/class/homework', {params})
}

// 批改作业， 按人批改作业列表
export function getCorrectListByPeople (params) {
  return request.get('/osca/api/college/course/student/homework', {params})
}

// 批改作业，按题批改列表
export function getCorrectListByQuestion (params) {
  return request.get('/osca/api/college/course/question/homework', {params})
}

// 批改作业-点击查看作业-作业列表
export function getStudentHwList (params) {
  return request.get('/osca/api/college/course/class/student/homework', {params})
}

// 批改作业， 查看作业页面 获取班级作业完成情况
export function getHomeworkCompleteInfo (params) {
  return request.get('/osca/api/college/course/class/homework/completeInfo', {params})
}

// 批改作业 查看某人的具体的作业 查看作业
export function getHomeworkDetail (params) {
  return request.get('/osca/api/college/course/homework/detail', {params})
}

// 批改作业 部分批改 获取部分批改学生名单
export function getPartCorrect (params) {
  return request.get('/osca/api/college/course/homework/student', {params})
}

// 批改作业, 发布成绩
export function postPublishScore (params) {
  return request.post('/osca/api/college/course/homework/publishScore', params)
}

// 批改作业,提交批改名单, post 不要外面这层大括号
export function postCorrectStudentList (params) {
  return request.post('/osca/api/college/course/homework/student', params)
}

// 批改作业,批改题目,按题目批改
export function saveCorrectQuestion (params) {
  return request.put('/osca/api/college/course/homework/question/answer', params)
}

//  批改作业 按题批改判断批改完成情况
export function isCorrectEndByQuestion (params) {
  return request.post('/osca/api/college/course/homework/question/correct', params)
}

//  批改作业 按人批改判断批改完成情况
export function isCorrectEndByPeople (params) {
  return request.post('/osca/api/college/course/homework/student/correct', params)
}

// 按题目获取答题详情列表
export function getAnswerListInfoByQuestion (params) {
  return request.get('/osca/api/college/course/homework/question/answer', {params})
}

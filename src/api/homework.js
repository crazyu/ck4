import request from '@/utils/request'
/**
 *
 * @param {题目接口} query
 */
export function homeworkList (query) {
  return request({
    url: 'question/list',
    method: 'get',
    params: query
  })
}

export function homeworkInfo (questionId) {
  return request({
    url: 'question/get',
    method: 'get',
    params: { questionId }
  })
}

export function homeworkAdd (data) {
  return request({
    url: 'question/add',
    method: 'post',
    data
  })
}

export function homeworkEdit (data) {
  return request({
    url: 'question/update',
    method: 'put',
    data
  })
}

// 获取作业列表
export function getHomeworkList (params) {
  console.log('作业列表', params)
  return request.get('/osca/api/college/course/homeworkConfig/list', {params})
}

// 获取作业列表删除
export function deleteHomework (params) {
  return request.delete('/osca/api/college/course/homeworkConfig', {params})
}

// 根据学科获取章节
export function getChapter (params) {
  return request.get(`/osca/api/college/chapter/homework/arrangeInfo?teacherId=${params.teacherId}&courseId=${params.courseId}`, {})
}

// 教师关联班级列表
export function getTeacherClass (params) {
  return request.get('/osca/api/college/course/teacher/class', {params})
}

// 获取课程配置题型
export function getCourseQuestionType (params) {
  return request.get('/osca/api/course/question/type', {params})
}

// 保存作业基本设置
export function saveHomeWorkBaseSetting (params) {
  return request.post('/osca/api/college/course/homeworkConfig', params)
}

// 根据chapterId获取节信息
export function getChapterInfo (params) {
  return request.get('/osca/api/course/question/choice', {params})
}

// 保存题目选择
export function saveQuestionType (params) {
  return request.post('/osca/api/college/course/homeworkConfig/questionType', params)
}

// 生成样题
export function generateTemplateHomeWork (params) {
  return request.post('/osca/api/college/course/homework/sample', params)
}

// 获取教师关联课程
// export function getTeacherCourse (params) {
//   return request.get('/osca/api/course/teacher/course', {params})
// }
// 获取教师关联课程 20200305 新接口，原来的404了
export function getTeacherCourse (params) {
  return request.get(`/osca/api/course/member/teacher/course/${params.userId}`, {})
}

// 20200305设置批改作业方式, 在班级列表页用
export function setCorrectWay (params) {
  return request.put('/osca/api/college/course/class/homework', params)
}

// 获取生成作业列表
export function getGenterateWorkExample (params) {
  return request.get('/osca/api/college/course/class/student/homework', {params})
}

// 获取题目详情
export function getQuestionInfo (params) {
  return request.get('osca/api/course/source/question/check', {params})
}

// 布置作业 样题调整  问题反馈
export function submitProblems (params) {
  return request.post('osca/api/college/problem', params)
}

// 布置作业 样题调整 点击返回
export function saveSampleInfo (params) {
  return request.put('osca/api/college/course/homework/sample', params)
}

// 布置作业 发布作业
export function publicwork (params) {
  return request.post('osca/api/college/course/config/homework', params)
}

// 布置作业 学生作业列表
export function getStudentWork (params) {
  return request.get('osca/api/college/course/class/student/homework', {params})
}

// 布置作业 学生作业列表
export function fetchKnowledges (params) {
  return request.get('osca/api/course/knowledge/catalog', {params})
}

// 获取班级列表
export function fetchClassList (params) {
  return request.get('osca/api/course/member/class', {params})
}

// 返回上一步  删除当前已配置的作业
export function deleteCurrentHomework (params) {
  return request.get('osca/api/college/course/homeworkConfig/previousStep', {params})
}

// 发布作业 发布成绩
export function pulickScore (params) {
  return request.post('osca/api/college/course/homework/publishScore', params)
}

// 发布作业
export function pulickHomework (params) {
  return request.post('osca/api/college/course/config/homework', params)
}

// 获取作业配置
export function fetchWorkConfig (params) {
  return request.get('osca/api/college/course/homework/config/detail', {params})
}

// 文件上传
export function fileUpload (params) {
  return request.post('osca/api/file/upload', params)
}

// 获取作业状态
export function getHomeworkStatus (params) {
  return request.get('osca/api/college/course/class/student/homework/count', {params})
}

// 获取教师课程状态
export function validateCourseIdIsValid (params) {
  return request.get(`osca/api/course/member/teacher/course/authorize`, {params})
}

export function fetchHomeDetail (params) {
  return request.get('osca/api/college/course/homework/detail', {params})
}
// --------------------------------------------以下是批改作业接口------------------------------------------------------------------------

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
// 上传文件
export function upLoadFile (params) {
  return request.post('osca/api/file/upload', params)
}

// 布置作业 修改、更换确定使用接口
export function updateQuestion (params) {
  return request.post('osca/api/course/derivation/homework/question', params)
}

// 布置作业 修改题目 暂存
export function preSaveQuestion (params) {
  return request.post('osca/api/course/derivation/question/temporary', params)
}

// 布置作业 修改题目 暂存详情
export function getPreSaveDetail (params) {
  return request.get('osca/api/course/derivation/question/change/temporary', {params})
}

// 布置作业 更换题目 list
export function getSourceList (params) {
  const param = {
    ...params
  }
  if (param.knowledgeIds) delete param.knowledgeIds
  let str = '&'
  const keys = Object.keys(param)
  keys.map(item => {
    str += (`${item}=${param[item]}&`)
    return null
  })
  return request.get(`osca/api/course/source/question?knowledgeIds=${params.knowledgeIds}${str}`, {})
}

// 布置作业 样题调整生成作业
export function createHomeWork (params) {
  return request.post('osca/api/college/course/homework', params)
}

// 布置作业 样题调整生成作业
export function updateHomeWork (params) {
  return request.put('osca/api/college/course/homework/sample', params)
}

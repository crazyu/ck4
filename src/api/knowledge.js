import request from '@/utils/request'

// 出题点目录树接口
export function getKnowledgeTree (params) {
  return request.get('osca/api/course/knowledge/catalog/tree', { params })
}
// 出题点目录列表接口
export function getKnowledgeList (params) {
  return request.get('osca/api/course/knowledge/catalog', { params })
}
// course-admin-controller课程管理--课程列表
export function getCourseList (params) {
  return request.get('/osca/api/courseAdmin/page', { params })
}

export function knowledgeAdd (data) {
  return request({
    url: '/osca/api/course/knowledge/catalog',
    method: 'post',
    data
  })
}

export function knowledgeEdit (data) {
  return request({
    url: '/osca/api/course/knowledge/catalog',
    method: 'put',
    data
  })
}

export function deleteKnowledge (catalogIds) {
  return request.delete('/osca/api/course/knowledge/catalog/' + catalogIds)
}

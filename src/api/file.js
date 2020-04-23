import request from '@/utils/request'

// 下载文件
export function downLoad (params) {
  return request.get('/osca/api/file/download/' + params.filename)
}

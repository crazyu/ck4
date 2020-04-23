export const baseUrl = process.env.NODE_ENV === 'production' ? 'http://xxxx:9527' : 'http://xxx:9527'
export const errorMessage = '服务器错误,请重试!'
/**
 * params test 入参是 获取到的富文本的内容
 * 检测富文本是否只输入空格
 * str 入参为富文本内容
 * return Boolean true  说明只有空格, 反之则包含其他的内容
 */
export function checkTextAreaIsOnlyWhitespace (test) {
  let flag = true
  if (test && test.length && test.indexOf('<') === 0) {
    let str = test.replace(/\s*/g, '')
    let scriptLength = str.split('>')[0].length + 1 // 设置标签长度 <p> <div> 等标签
    let lastIndex = str.lastIndexOf('<')
    let content = str.substring(scriptLength, lastIndex)
    let result = content.replace(/&nbsp;/g, '').replace(/\s*/g, '').replace(/\s+/g, '')
    if (result.length) return false
  }
  return flag
}

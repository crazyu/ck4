<template>
  <div>
    <textarea :id="`editor_${id}`" :value="value" class="textWrapper" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
import CKEDITOR from 'CKEDITOR'
import $ from 'jquery'
import {checkTextAreaIsOnlyWhitespace} from '@/utils/util'
const letter = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
export default {
  data () {
    return {
      editor: null,
      insertBlankCount: 0,
      letter,
      id: (new Date()).valueOf() + (Math.random() * 1000).toFixed(0)
    }
  },
  props: {
    value: { // 当前值
      type: String,
      default: ''
    },
    height: { // 高度
      type: String,
      default: '260'
    },
    placeholder: { // 默认占位符
      type: String,
      default: '请输入'
    },
    questionId: {
      type: Number,
      default: 1 // 4：填空题 反之非填空题
    }
  },
  watch: {
    questionId: function (val, oldVal) {
      console.log('watch监听是否变化', val, oldVal)
    }
  },
  mounted () {
    this.initCkeditor() // 初始化
    this.resetVideoStyle()
    // this.setButtonText()
    CKEDITOR.instances[`editor_${this.id}`].on('load', e => {
      console.log('load')
    })
  },
  beforeDestroy () {
    this[`editor_${this.id}`] = null
  },
  methods: {
    test () { // 因为直接修改公式后无法监听到value的变化，所以直接在确认编辑时重新获取编辑器里的数据
      const self = this
      console.log(self, self[`editor_${this.id}`])
    },
    // 初始化ckeditor插件
    initCkeditor () {
      CKEDITOR.replace(`editor_${this.id}`, {
        height: `${this.height || 260}px`,
        width: '100%',
        toolbar: 'standard'
      })
      this[`editor_${this.id}`] = CKEDITOR.instances[`editor_${this.id}`]
      if (this.questionId === 4) { // 只有在填空题目类型的时候,在出现插入填空
        this[`editor_${this.id}`].ui.addButton('Timestamp', {
          label: '插入填空',
          icon: './icon_fill.svg',
          withText: true,
          command: 'insertBlank',
          toolbar: 'insert'
        })
        this[`editor_${this.id}`].addCommand('insertBlank', {
          // console.log(this)
          exec: function (editor) {
            const underLine = '<input class="customer_add_blank" style="background:white;border-bottom: 1px solid black;width: 80px;border-top:0;border-left: 0;border-right: 0;text-align: center" disabled />'
            editor.insertHtml(underLine)
          }
        })
      }
      CKEDITOR.plugins.addExternal('ckeditor_wiris', 'https://www.wiris.net/demo/plugins/ckeditor/', 'plugin.js')
      CKEDITOR.instances[`editor_${this.id}`].on('change', e => {
        e.listenerData = function (event) {
          console.log(event)
        }
      })
      // CKEDITOR.instances[`editor_${this.id}`].on('focus', e => {
      //   $(`#cke_editor_${this.id} .cke_inner .cke_top`).css('visibility', 'visible')
      // })
      // CKEDITOR.instances[`editor_${this.id}`].on('blur', e => {
      //   $(`#cke_editor_${this.id} .cke_inner .cke_top`).css('visibility', 'hidden')
      // })
    },
    getContent () {
      const content = this[`editor_${this.id}`].getData()
      if ((content && (checkTextAreaIsOnlyWhitespace(content))) || !content) {
        return ''
      } else {
        return content.substring(0, content.length - 1)
      }
    },
    setContent (str) {
      console.log(this[`editor_${this.id}`].setData(str))
    },
    insertContent (content) {
      console.log('content', content)
      console.log(CKEDITOR.instances[`editor_${this.id}`].insertHtml(content))
      this.insertBlankCount += 1
      // CKEDITOR.instances[`editor_${this.id}`].on('insert', e => {
      //   console.log('e', e)
      //   CKEDITOR.instances[`editor_${this.id}`].append(content)
      // })
    },
    // 重置iframe里面的样式
    resetVideoStyle () {
      // window.document.getElementsByClassName(`editor_${this.id}`).contentWindow.window.document.getElementsByClassName('ckeditor-html5-video').css('display', 'inline-block')
    },
    setButtonText () {
      $(`editor_${this.id} .cke_button__timestamp`).text('插入填空')
    }
  }
}
</script>

<style lang="less" scoped>
.textWrapper{
  /deep/ .cke_inner{
    .cke_1_top{
      display: none;
    }
  }
  /deep/ .ckeditor-html5-video{
    display: inline-block;
  }
  .cke_wysiwyg_frame{
  /deep/ .ckeditor-html5-video{
    display: inline-block;
  }
}
}
.cke_wysiwyg_frame{
  /deep/ .ckeditor-html5-video{
    display: inline-block;
  }
}
</style>

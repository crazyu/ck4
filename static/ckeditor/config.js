/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
  // Define changes to default configuration here.
  // For complete reference see:
  // https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

  // The toolbar groups arrangement, optimized for two toolbar rows.
  config.toolbarGroups = [
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
    { name: 'links' },
    { name: 'insert' },
    { name: 'forms' },
    { name: 'tools' },
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'others' },
    '/',
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
    { name: 'styles' },
    { name: 'colors' },
    { name: 'about' }
    // { name: 'wiris', items: ['ckeditor_wiris_formulaEditor', 'ckeditor_wiris_formulaEditorChemistry'] }
  ]

  // Remove some buttons provided by the standard plugins, which are
  // not needed in the Standard(s) toolbar.
  config.removeButtons = 'Underline,Subscript,Superscript'

  // Set the most common block elements.
  config.format_tags = 'p;h1;h2;h3;pre'

  // Simplify the dialog windows.
  config.removeDialogTabs = 'image:advanced;link:advanced'

  // // Add[MT]to the integration list
  config.extraPlugins += (config.extraPlugins.length == 0 ? '' : ',') + 'ckeditor_wiris'
  config.allowedContent = true
  config.extraPlugins += (config.extraPlugins.length == 0 ? '' : ',') + 'mathjax,image2,html5video,confighelper'
  // config.extraPlugins = 'mathjax'
  config.mathJaxLib = '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML'
  // 文件上传
  // config.filebrowserUploadUrl = '/osca/api/file/test'
  // config.uploadUrl = '/osca/api/file/test'
  config.filebrowserUploadUrl = 'http://localhost:3000/testPost'
  config.uploadUrl = 'http://localhost:3000/testPost'
  config.filebrowserUploadUrl = 'http://localhost:3000/testPost' // 配置上传
  config.removePlugins = 'image,elementspath' // elementspath 移除底部body 需要配合resize_enabled一起使用
  config.resize_enabled = false
  // 此处是设置头信息的地方
  config.fileTools_requestHeaders = {
    token: sessionStorage.getItem('token'),
    ClientId: 'osca.web'
  }

  // 开启设置不显示确认离开
  config.dialog_startupFocusTab = true
  // config.
  // config.mathTypeParameters : {
  // serviceProviderProperties : {
  // URI : '/pluginwiris_engine/app/configurationjs',
  // server : 'java'
  // }
  // }
}

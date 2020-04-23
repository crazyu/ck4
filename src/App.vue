<template>
  <a-locale-provider :locale="locale" >
  <!--@mousemove="moveEvent" @click="moveEvent"-->
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>
// import enquireScreen from './utils/device'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'App',
  data () {
    return {
      locale: zhCN,
      timmer: null
    }
  },
  created () {
    // let _this = this
    // enquireScreen(isMobile => {
    //   _this.$store.commit('setting/setDevice', isMobile)
    // })
    // this.moveEvent()
  },
  methods: {
    // moveEvent () {
    //   let path = ['/login']
    //   if (!path.includes(this.$route.path)) {
    //     clearTimeout(this.timmer)
    //     this.init()
    //   }
    // },
    // init () {
    //   this.timmer = setTimeout(() => {
    //     // 清除session
    //     sessionStorage.removeItem('sessionData')
    //     sessionStorage.clear()
    //     // 清除缓存
    //     this.$cache.reset()
    //     // 跳往登录页面
    //     this.$router.push({
    //       path: '/login'
    //     })
    //   }, 1 * 60 * 1000)
    // }
    //
  }
}
</script>

<style lang="less">
body {
  font-family: PingFangSC-Medium;
}
//Modal头部样式
.ant-modal-root .ant-modal-content .ant-modal-header {
  height: 40px;
  padding: 9px 14px;
  background: rgba(15, 177, 181, 0.7);
  .ant-modal-title {
    color: #fff;
  }
}
.ant-modal-root .ant-modal-content .ant-modal-close-x {
  line-height: 40px;
  color: #fff;
}
.ant-modal-root .ant-modal-footer {
  text-align: center;
  border: none;
}
//分页
.ant-pagination {
  text-align: center;
}
ul li {
  list-style: none;
}
:global {
  //拖拽控件全局样式
  .dragable-ghost {
    border: 1px dashed #aaaaaa;
    opacity: 0.65;
  }
  .dragable-chose {
    border: 1px dashed #aaaaaa;
    opacity: 0.65;
  }
  .dragable-drag {
    border: 1px dashed #aaaaaa;
    opacity: 0.65;
  }
  //页面切换动画
  .page-toggle-enter-active {
    transition: all 0.2s ease-in 0.25s;
  }
  .page-toggle-leave-active {
    transition: all 0.2s ease-out 0s;
  }
  .page-toggle-enter,
  .page-toggle-leave-to {
    opacity: 0;
    padding: 0px;
  }
  table .ant-table-thead > tr > th {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>

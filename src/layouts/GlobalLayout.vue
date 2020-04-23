<template>
  <a-layout>
    <sider-menu
      :menuData="menuData"
      :collapsed="collapsed"
      :collapsible="true"
      class="sider-menu"
    />
    <a-layout class="wrapper">
      <global-header
        :menuData="menuData"
        :collapsed="collapsed"
        class="global-header"
      />
      <a-layout-content
        class="Alayout-content"
        :style="{ minHeight: minHeight, margin: '130px 30px 30px 290px;' }"
      >
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import GlobalHeader from './GlobalHeader'
import SiderMenu from '../components/menu/SiderMenu'

const minHeight = window.innerHeight - 64 - 24 - 122

let menuData = []

export default {
  name: 'GlobalLayout',
  components: { SiderMenu, GlobalHeader },
  data () {
    return {
      minHeight: minHeight + 'px',
      collapsed: false,
      menuData: menuData,
      showSetting: false
    }
  },
  computed: {
  },
  methods: {
  },
  beforeCreate () {
    menuData = this.$router.options.routes.find((item) => item.path === '/').children
  }
}
</script>

<style lang="less" scoped>
.sider-menu {
  color: black;
  height: 100%;
  background-color: white;
  margin-top: 100px;
  position: fixed;
}
.global-header {
  width: 100%;
}
.Alayout-content {
  background-color: white;
  margin: 100px 0px 0 192px;
  overflow-x: initial !important;
}
/deep/ .ant-layout.ant-layout-has-sider > .ant-layout, .ant-layout.ant-layout-has-sider > .ant-layout-content{
   overflow-x: initial !important;
}
.wrapper{
  overflow-x: initial !important;
}
</style>

<template>
  <a-layout-sider
    class="siderMenuStyle"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null"
  >
    <i-menu :collapsed="collapsed" :menuData="menuData" />
  </a-layout-sider>
</template>

<script>
import IMenu from './menu'
export default {
  name: 'SiderMenu',
  components: { IMenu },
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menuData: {
      type: Array,
      required: true
    }
  },
  computed: {
  },
  methods: {
    // onSelect (obj) {
    //   this.$emit('menuSelect', obj)
    // }
  }
}
</script>

<style lang="less" scoped>
.siderMenuStyle{
    flex: 0 0 192px;
    max-width: 192px;
    min-width: 192px;
    width: 192px;
}
.sider {
  z-index: 10;
  &.light {
    color: #0fb1b5;
  }
  &.dark {
    background-color: #001529;
  }
  .logo {
    height: 64px;
    position: relative;
    line-height: 64px;
    padding-left: 24px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    overflow: hidden;
    &.light {
      color: #0fb1b5;
      h1 {
        color: #0fb1b5;
      }
    }
    &.dark {
      // background-color: #002140;
      h1 {
        color: #fff;
      }
    }
    h1 {
      color: #fff;
      font-size: 20px;
      margin: 0 0 0 12px;
      font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
      font-weight: 600;
      display: inline-block;
      height: 32px;
      line-height: 32px;
      vertical-align: middle;
    }
    img {
      width: 32px;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>

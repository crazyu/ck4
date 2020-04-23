<template>
  <a-layout-header :class="['global-header']" style="">
    <div :class="['global-header-wide', layout]">
      <div class="logo">
        <img width="32" src="static/img/vue-antd-logo.png" />
        <span class="logo-text">后台</span>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import HeaderNotice from './HeaderNotice'
import HeaderAvatar from './HeaderlAvatar'
import { getTeacherCourse } from '@/api/homework'
import { setCourseId, getCourseId } from '@/utils/auth'
export default {
  name: 'GlobalHeader',
  components: { HeaderAvatar, HeaderNotice },
  data () {
    return {
      current: ['mail'],
      courseList: [], // 课程数组
      selectItem: ''
    }
  },
  props: ['collapsed', 'menuData'],
  computed: {
    layout () {
      return this.$store.state.setting.layout
    },
    systemName () {
      return this.$store.state.setting.systemName
    },
    currentSchoolName () {
      const userInfo = (sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo'))) || {}
      return (userInfo && userInfo.collegeName) || ''
    }
  },
  mounted () {
    const userInfo = (sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo'))) || {}
    if (userInfo && userInfo.userId) {
      const params = {
        userId: userInfo.userId
      }
      if (Array.isArray(this.courseList) && this.courseList.length === 0) {
        getTeacherCourse(params).then((res) => {
          const { meta, data } = res
          if (meta && meta.stateCode === '0000') {
            this.courseList = data || []
            if (data && data[0] && data[0].courseId) {
              this.$store.commit('homework/setCourseId', data[0].courseId)
              setCourseId(data[0].courseId)
              this.selectItem = (data && data[0] && data[0].courseName) || ''
            }
          }
        })
      }
    }
  },
  methods: {
    onSelect (obj) {
      this.$emit('menuSelect', obj)
    },
    setCourseIdValue (item) {
      const courseId = getCourseId()
      this.selectItem = (item && item[0] && item[0].courseName) || ''
      if (item && item.courseId !== courseId) {
        setCourseId((item && item.courseId) || '')
        this.$router.push('/homework/assignHomework')
      }
    }
  }
}
</script>
<style lang="less" scoped>
// .ant-menu-horizontal > .ant-menu-submenu-selected {
//   color: #0fb1b5;
//   border-bottom: 2px solid #0fb1b5;
// }
/deep/ .ant-menu-submenu-title{
  margin: 0 10px;
}
.fontbold{
  font-weight: bold;
  margin: 0 20px;
}
.trigger {
  font-size: 20px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #0fb1b5;
  }
}
.header-item {
  padding: 0 12px;
  display: inline-block;
  height: 100%;
  cursor: pointer;
  vertical-align: middle;
  i {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
  }
}
.notice {
  margin-right: 88px;
}
.global-header {
  position: fixed;
  height: 80px;
  background: white;
  height: 98px;
  padding: 0 12px 0 0;
  // -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  // box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 999;
  border-bottom: 16px solid rgba(245, 245, 245, 1);
  &.light {
    background: #fff;
  }
  .global-header-wide {
    &.head {
      max-width: 1400px;
      margin: auto;
    }
    &.side {
    }
    .logo {
      line-height: 80px;
      vertical-align: top;
      display: inline-block;
      padding: 0 12px 0 24px;
      cursor: pointer;
      font-size: 20px;
      font-weight: 500;
      .logo-text {
        font-family: FZY3K--GBK1-0;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.9);
        text-align: center;
        width: 90px;
        height: 21px;
      }
      img {
        width: 30px;
        height: 25px;
      }
    }
    .global-header-menu {
      display: inline-block;
    }
    .global-header-right {
      float: right;
      margin-top: 10px;
      span {
        margin-right: 71px;
        font-size: 16px;
        opacity: 0.65;
        color: #000000;
        text-align: left;
      }
    }
  }
}
.ant-menu {
  font-size: 16px;
}
</style>

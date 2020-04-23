<template>
  <a-dropdown
    style="display: inline-block; height: 100%; vertical-align: initial"
  >
    <span style="cursor: pointer">
      <a-avatar
        class="avatar"
        size="small"
        shape="circle"
        :src="currUser.avatar"
      />
      <span class="headerAvatar-user">{{ currUser }}</span>
    </span>
    <a-menu style="width: 150px" slot="overlay">
      <a-menu-item>
        <a-icon type="user" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <!-- <router-link to="/login"> -->
        <a-icon type="poweroff" />
        <span @click="logOut">退出登录</span>
        <!-- </router-link> -->
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
// 登出接口
import { logout } from '@/api/user'
// 获取用户信息
import { getUserInfo } from '@/utils/auth'
// 错误信息提示
import { errorMessage } from '@/utils/util'
export default {
  name: 'HeaderAvatar',
  computed: {
    currUser () {
      const userInfo = (sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo'))) || {}
      return (userInfo && userInfo.userName) || ''
    }
  },
  methods: {
    logOut () {
      const id = getUserInfo().id
      logout(id).then((res) => {
        const { meta } = res
        if (meta && meta.stateCode === '0000') {
          // 清除session存储的数据
          sessionStorage.clear()
          // 跳转到登录页
          this.$router.push({ path: '/login' })
        } else {
          this.$message.error(meta.message || errorMessage)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.avatar {
  margin: 20px 4px 20px 0;
  color: #0fb1b5;
  background: hsla(0, 0%, 100%, 0.85);
  vertical-align: middle;
}
.headerAvatar-user {
  margin-right: 48px;
}
</style>

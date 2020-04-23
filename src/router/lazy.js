import Vue from 'vue'
import Router from 'vue-router'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'
import list from '@/pages/homework/assignHomework/list'

// // ========出题点 start======
// import directory from '@/pages/questions/directory/list'
// import resources from '@/pages/questions/resources/list'
// ========出题点 end======

Vue.use(Router)

export default new Router({
  base: 'osca/web', // 发布到nginx此配置需要打开 非nginx服务器不需要打开此配置
  routes: [
    {
      path: '/',
      name: '首页',
      component: MenuView,
      // redirect: '/homework',
      // icon: 'none',
      invisible: true,
      children: [
        {
          path: '/homework',
          name: '作业',
          component: RouteView,
          // icon: 'none',
          icon: 'dashboard',
          children: [
            {
              path: '/homework/assignHomework',
              name: '富文本展示',
              component: list,
              icon: 'none'
            }
          ]
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/example',
    name: '工程模版2',
    hidden: true
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/codeProject',
    name: '工程模版',
    meta: { title: '工程模版', icon: 'example' },
    children: [
//    {
//      path: 'setEnv',
//      name: '配置环境',
//      component: () => import('@/views/setEnv/index'),
//      meta: { title: '配置环境' }
//    },
      {
        path: 'factoryProject',
        name: '配置组件地址',
        component: () => import('@/views/factoryProject/index'),
        meta: { title: '配置组件地址' }
      },
      {
        path: 'codeProject',
        name: '代码工程',
        component: () => import('@/views/codeProject/index'),
        meta: { title: '代码工程' }
      },
      {
        path: 'createdProject',
        name: '创建代码工程',
        component: () => import('@/views/createdProject/index'),
        hidden: true,
        meta: { 
        	  title: '创建代码工程',
        	  path: '/example/codeProject',
        	  parent: '代码工程'
        }
      },
      {
        path: 'successProject',
        name: '代码工程创建成功',
        component: () => import('@/views/successProject/index'),
        hidden: true,
        meta: { 
        	  title: '代码工程创建成功',
        	  path: '/example/codeProject',
        	  parent: '代码工程'
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})


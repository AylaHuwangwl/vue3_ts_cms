import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constances'
import { firstMenu } from '@/utils/map-router'
const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系: path => component
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/not-found.vue')
    }
  ]
})
const localroute = [
  {
    path: '/main/analysis/dashboard',
    component: () => import('../views/main/analysis/dashboard/dashboard.vue')
  },
  {
    path: '/main/analysis/overview',
    component: () => import('../views/main/analysis/overview/overview.vue')
  },
  {
    path: '/main/system/role',
    component: () => import('../views/main/system/role/role.vue')
  },
  {
    path: '/main/system/user',
    component: () => import('../views/main/system/user/user.vue')
  }
]
// router.addRoute('main', localroute[0])
// router.addRoute('main', localroute[1])
// 导航首位，当跳转到main页面没有登陆时要先跳转到登陆页面
router.beforeEach((to, from) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  const user_menu = localCache.getCache('usermenu')
  const user_info = localCache.getCache('userinfo')
  if (to.path.startsWith('/main') && !token) {
    to.path = '/login'
    // return '/login'
  }
  // 登陆后进入'/main'页面或者手动输入/main路径，此时path是/main,定向到动态路由的第一个
  if (to.path == '/main' && token) {
    return firstMenu[0].url
  }
  //
})
export default router
